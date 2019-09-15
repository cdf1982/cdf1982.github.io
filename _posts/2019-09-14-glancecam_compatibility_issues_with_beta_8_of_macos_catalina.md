---
layout: post
title: GlanceCam compatibility issues with beta 8 of Catalina
description:
image:
tags: [glancecam]
---
**Update 1 - Sunday, September 15**<br>
A slightly better day, thanks first and foremost to the warm support of nice people on Twitter! [Steve Troughton-Smith](https://twitter.com/stroughtonsmith) in particular brought me hope with something actionable to try, pointing me to [SGPlayer](https://github.com/libobjc/SGPlayer), a ffmpeg and Metal library that on paper seems a good candidate for replacing VLCKit.<br>
Also important, given how soon Catalina will be in the hands of end-users, I've filed ~~radar~~ **Feedback FB7276584** to Apple, with attached crash reports and a sample project that "reliably" crashes on Catalina beta 8, but is stable on previous versions of macOS. I really, really hope someone at Apple has time to look at it.

---

*TLDR: Yesterday I found out that, **in the latest beta 8 of macOS 10.15, my app GlanceCam crashes when switching camera stream**. My tests show that this is **caused by Catalina's OpenGL support**; I read online that the same crash is happening to other apps using OpenGL.<br>Below I try to describe all details of this complex situation in the most transparent way I'm capable of, and **at the bottom of the post there's a [FAQ](#faq) that every GlanceCam user or prospective customer should read**.<br>This post and the FAQ will be updated whenever new details are available.<br>**Hopefully I'll be able to find a solution soon**. In the meantime, **I deeply apologize to all GlanceCam users**. Please know that **I am trying my best to resolve the issue, but it's not clear to me how and when (days? weeks? worse?) I'll be able to** if Apple did actually intentionally disrupt OpenGL support and won't fix it in the next release.<br>For any questions you might still have after reading this post, please get in touch at [support@cdf1982.com](mailto:support@cdf1982.com).*

---

This is not an easy post to write.

Soon after Apple introduced the first beta of macOS 10.15 Catalina, I installed it and thoroughly tested [GlanceCam]({{ site.baseurl }}/glancecam), my app that makes possible to monitor IP webcams directly from your Mac and works with almost every camera model without using their (often horrible) web interfaces.
With much relief, after those tests I could [confidently report]({{ site.baseurl }}/2019/06/06/glancecam_100_percent_compatible_with_macos_10_15_catalina.html) that GlanceCam was compatible with the next release of macOS.

This remained true at least up to Catalina beta 5, in the early days of August: with each beta release, I kept testing GlanceCam and everything kept working properly.

Why test with every new beta? A new release of macOS was a bit stressful for me because:
1. Just one year ago another app I introduced six months earlier, [ContactsAMI]({{ site.baseurl }}/contactsami), was basically put out of its misery by the fact that macOS 10.14 Mojave removed support for Contacts.app plugins, which were the way the app was providing most of its functionality.
2. With Mojave, Apple announced that OpenGL support was deprecated in favor of their own framework Metal; under the hood, GlanceCam relies on VLCKit for the video playback, which in turn uses OpenGL, so I was on the lookout for possible problems. I was cautious, but wasn't necessarily expecting any issue in this update cycle, since in most cases a deprecation does not mean that some functionality is immediately taken away: usually deprecated code keeps working for many years, and I was confident that in the meantime the amazing team behind VLCKit could figure out a transition to Metal (and I still am).

So, when I saw that 5 betas in a row did not break my beloved app, I relaxed a bit and got back to work on my long-term project for GlanceCam, multi-windows support, that I felt could come in version 3.0 as soon as mid October, after many months of development *(I'm a self-taught programmer with a day job in a completely different field, so most coding for me happens very early in the mornings, in brief stretches)*.<br>Inspired by [ATP's episode 340](https://atp.fm/episodes/340) talk about RSI, a few weeks ago I also started a new project, *TameTime: Mac awareness timer*, that as of yesterday was planned to launch this month; it's a tiny menu bar app that alerts you with multiple configurable visual and acustic clues when you sit at your computer for too long.

And sitting at my computer for a very long time is indeed something I now see in my future, because Friday I got a very kind email from a GlanceCam user reporting that, with macOS Catalina beta 8 introduced on September 10, GlanceCam was launching properly, but crashing as soon as he switched to a different camera.

Friday night I immediately installed Catalina beta 8 and was able to reproduce the crash when switching cameras. Every single time. And always with the same error in the crash report:

> assertion failure: "((void *)0) == tsd->NSCurrentOpenGLContext" -> %lld

Test on Mojave? Everything's fine.

I did not despair, though. I downloaded and compiled the newest release of VLCKit and built GlanceCam with it, using the latest Xcode beta, which is actually the Golden Master, just to be safe.

Same crash.

And it's a bad one, because Xcode's debugger does not point anywhere in my code, it just logs that the app was killed with one of the most generic and obscure error messages: *"terminated due to signal 9"*. Sometimes this error refers to memory leaks, but I'm 100% sure it's not the case here, and actually the error 9 seems to just be a generic feedback that the app was terminated by the OS.

At this point I started feeling really uneasy; first I digged through the console for clues about the crash (something you do with signal 9 errors), finding none, and then I Googled that crash report error message, landing on a unique result for my search: a [4 days old post on Apple forums](https://forums.developer.apple.com/thread/122608) where users complain about the same crash in many other apps, starting with Apple's own Final Cut Pro, and in general confirming my suspicion that the issue is with OpenGL compatibility in the latest beta 8 of Catalina.

I am now at the end of an exhausting Saturday and I have tried what follows:
- Placed breakpoints everywhere in GlanceCam's code to at least narrow down where the issue is; it's now certain that it is triggered by a VLCKit method that handles playback, not by my own code.
- Posted my experience in the same Apple forum mentioned above, asking for suggestions from other developers who also wrote there (no replies so far, everyone is just bummed because the latest beta broke their work tools);
- Asked for help in the VLCKit forum, where I met the usual kindness, but at least for now had only a sad confirmation: since OpenGL is deprecated and they're not sure things will improve without a Metal port that is not currently ready, there's no immediate fix. Since we're on a week-end, I still hope that the conversation on that forum will lead me to a solution or a temporary fix, especially given the fact that I was also able to regurarly crash VLC video player itself getting the same crash report error, so this will be a priority for them too.
- Built the smallest video player app possible, a true VLCKit MVP just to test where the crash occurs without all the overhead that a complex project like GlanceCam obviously has; this actually helped narrow the crash at exactly one VLCKit-related command: when you stop the playback, the app immediately crashes. Thing is, you can't have playback run forever, you need to stop when you switch to a different camera, the screensaver starts or you close the app, so I did indeed narrow down on the issue, but I'm not closer to an actual solution. If you're a programmer, you can download the Xcode 11 MVP project [here](https://www.dropbox.com/s/8wo5uyv6x64uobq/CatalinaVLCTest.zip?dl=0), complete with a sample video and the VLCKit library already compiled and linked, and have it crash on your instance of Catalina beta 8 as soon as you press the stop button after starting the playback; and, fellow programmer, if you have any idea, I can *really* use your help.

More important, I started drafting a Radar for Apple that will also include the sample project mentioned above: if the first betas did not present this crash, maybe they're not planning to actually kill OpenGL off so soon; on the other hand, we're so close to Catalina's launch that I feel like a fix ready for the next beta or even day one is a bit unlikely.

A personal note: **it is possible that I am overreacting** – I've only been aware of this issue for less than 48 hours and I am now quite tired, so maybe I'll figure something out soon and we'll laught at this post – but at the time of this writing the problem appears to be quite complex: it touches the basic architecture of the operating system, not only of my app, and it seems caused by technical decisions / bugs mostly out of my control, so **I feel the right thing to do is to publish this post right away, and maybe have soon good news to follow up with**.

---
### <a name="faq"></a>
Having taken stock of the situation without sugarcoating things, the very last thing I'm doing today is to write an exhaustive **disclaimer / FAQ** (that I am now posting only here on the blog, but in a few days will go at the top of the GlanceCam product page as well if the situation does not improve):


*Q: Is GlanceCam compatible with macOS 10.15 Catalina?*<br>A: **GlanceCam is currently not compatible with the next version of macOS** due to changes introduced in Catalina beta 8 (released on September 10) which seem to have significantly disrupted OpenGL support in macOS, not only for GlanceCam, but for [many apps that rely on this well-established video engine](https://forums.developer.apple.com/thread/122608).


*Q: What is not working on Catalina?*<br>A: GlanceCam worked perfectly on macOS 10.15 beta 1 through 5, but starting with beta 8 the app launches and works fine only if you don't try to switch to a different camera; it crashes as soon as you try to switch stream or to reload the current stream.


*Q: When will GlanceCam be compatible with Catalina?*<br>A: At the moment, I really can't know. I am trying my best to fix this situation, but **it's very hard for me to know how and when the crash will be fixed**. I will update this FAQ every time a significant development occurs, be it positive or negative.


*Q: Why is GlanceCam still for sale on the App Store?*<br>A: I have seriously considered pulling GlanceCam from the App Store, but that would mean that I would have no way to send out new updates to GlanceCam users, when a solution to the crash is found.


*Q: How are you alerting users browsing the App Store that GlanceCam is currently not compatible with the next macOS?*<br>A: This is tricky, and at the moment I'm writing this, still unclear. In the next couple of days tops I will try to submit an update to Apple's app review that will contain an alert when the app launches and I will also try to make the situation clear at the top of the App Store description. But I am not sure that app review will allow an app to contain such alert, or will accept an app description that talks about a beta OS. If they reject such update (and I'm afraid they will), I'll submit it again when Catalina actually ships (if the issue is not solved by then, but I hope it will be).


*Q: I have updated to macOS 10.15 already / plan to install Catalina as soon as it launches and I can't use your app on it. I paid for GlanceCam and it's not fair.*<br>A: I feel you. This is the worst situation that could happen not only to a customer, but also to an app developer. I really hope to be able to fix this crash, but I can't be sure I will be able to do that in a timely fashion. So, **whenever you don't feel like waiting or are (rightfully so) annoyed by this situation, please accept my sincere apologies and don't hesitate to request a refund from Apple** (developers can't issue refunds for App Store transactions directly, but you can find a pretty clear description of the procedure [here](https://blog.supereasyapps.com/mac-app-store-refund-in-6-steps-how-to-get-a-refund-for-any-macos-app/)).


*Q: What are you doing to fix this?*<br>A: Everything I can think of. Basically, I'm running a lot of tests, trying to tweak my code, talking to the developers of the video framework used by GlanceCam - VLCKit - and thinking about other possible solutions; I've only learned about this problem a few hours ago. I ~~am working on a Radar (bug report) for Apple~~ sent Bug Report **FB7276584** to Apple, and I hope they'll get back to me. If nothing works, I'll need to think of a different approach to stream video, but it would be very, very complicated and time-consuming (we might be talking months of work... and I don't want my mind to go there before having exhausted the other options).


*Q: How can I be updated on how the situation evolves?*<br>A: I will update this FAQ regularly, as well as this post. And you can contact me for any clarification you need, any time, at [support@cdf1982.com](mailto:support@cdf1982.com) or on Twitter, [@cdf1982](https://twitter.com/cdf1982). A good way to get my updates about GlanceCam would also be to subscribe to my RSS feed, [cdf1982.com/feed.xml](https://cdf1982.com/feed.xml).


*Q: Is publishing this rather-alarming post so soon after discovering the crash and with so many things still unclear a wise business decision?*<br>A: Maybe not, especially if I find a solution in a few days: most people would not have noticed the crash. But GlanceCam has a pretty good reputation in its niche, with reviews averaging 4.0 stars (much higher than the competition in such technical, nerdy section of the App Store), and I think trasparency is the right choice here, especially if it takes a while to find a workaround to this crash. At the end of the day, I think that *if you enjoy using GlanceCam, you deserve to know that updating to Catalina will currently prevent you from using it, even if this costs me a few sales or refunds*.


---

Again, **I am deeply sorry** for any disruption this might cause to your workflow, if you were planning to install Catalina at launch or you are already using the betas. I'll do anything I can to restore GlanceCam functionality for all users and to keep you posted.