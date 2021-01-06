---
layout: post
title: GlanceCam compatibility issues with beta 8 of Catalina
description:
image:
tags: glancecam
---
**Update 3 - Tuesday, September 24**<br>
Great news! **macOS 10.15 Catalina beta 9**, launched yesterday, **completely fixed the compatibility issue that affected GlanceCam and other apps relying on OpenGL since with the previous beta 8**.

Everything is fine as **the currently shipping version of GlanceCam, 2.7, is already 100% compatible with macOS 10.15 Catalina**; I'm so happy that the post below is now obsolete... 🥳

The past two weeks were a bit of a rollecoaster 🎢, but thanks to Apple fixing that scary beta 8 bug in no time, and also the help of friends old and new (a special thanks to Steve 🙏, he knows why), not only my app is now back to the usual reliability and compatibility *(and I am proud that GlanceCam is compatible not only with the latest - even future - OSes, but that it also keeps support back to OS X 10.11)*, but it is in a much better position to leave behind OpenGL in a future release.

Just this morning, before knowing that beta 9 resolved the crash at its root, I had a breakthrough in the implementation of an alternative, Metal-based, engine for GlanceCam. I will keep working on this major migration, thankfully without the pressure of an upcoming crisis, but keeping it at high priority: I still see great value in leaving OpenGL behind before Apple decides that it really is time to let it go.

The fact that my app is 100% ready for Catalina is what I am here to write about, but there are a couple more thoughts I'd like to share:

- Friends, **file ~~radars~~ Bug Reports!** I wasn't very hopeful that a 🐛 appeared in beta 8 was going to be resolved before the official launch of Catalina, and obviously the fact that Apple applications were crashing helped *a lot*, but I'm sure that my report, together with the many others I've seen filed in the last ten days or so, helped significantly in escalating the priority of this crash.

- Since in my previous update I mentioned an emergency app update I submitted to Apple to warn users before the launch of Catalina, I think it's only fair to let you know that it did *not* pass App Review, as I honestly expected even before submitting it: you can't mention a future release of macOS, no exceptions; you also can't wait for the new OS to ship, because an app would not be approved if it crashes with the shipping version of macOS. Quite a catch 22, uh? But the App Review person I interacted with was very kind *(dare I say he or she felt my pain? I dare, because they clearly did!)* during the whole process, and it sparked an extended and helpful conversation 💯.

I'm leaving the original post and update 1 and 2 "for archive purposes", but **below this line, everything is now obsolete**.

---

**Update 2 - Wednesday, September 18**<br>
I have updates on multiple fronts about the crash described in the original post below:<br><br>
First, I am aware of multiple Bug Reports filed to Apple in addition of mine (FB7276584): FB7253859, FB7283002, FB7265136, FB7281945. One of these reports yesterday received the following, somewhat encouraging, comment in Feedback Assistant:
>Recent Similar Reports:More than 10<br>
>Resolution:Potential fix identified - For a future OS update

From that feedback we can think that Apple is aware of the issue and it is possible that a fix is coming, though it is unclear when *(next beta? later?)*. It's an encouraging development, but I still need to figure out something myself (VLCKit team, on their forum, also seemed "in stand-by" for a solution from Apple) in case the "future OS update" is too much in the future for my Users.<br><br>
So, tonight I submitted GlanceCam 2.7.1 to App Review, which contains an explicit alert to users in the app description, the release notes and, most important, inside an in-app warning that will appear the first time users will launch GlanceCam after updating:
<p align="center">
	<img src="{{ site.baseurl }}/assets/images/blog/2019-09-14-glancecam_compatibility_issues_with_beta_8_of_macos_catalina/catalina-inapp-warning.png" alt="" data-position="center center" />
</p>
I am not sure App Review will approve an app that a) acknowledges the existence a future version of macOS and b) mentions the fact that it is currently incompatible with it. But I had to try, at least to start the conversation with the always kind and open to communication, in my experience, App Review Team and will let you know how it goes.<br><br>
Third, I'm moving my first, timid steps with [SGPlayer](https://github.com/libobjc/SGPlayer), the ffmpeg and Metal library that was recommended to me and seems very promising; a couple of days ago I did build a small prototype working with local videos, but not with RTSP yet, so there's still a lot of work to do before I can know if this is a viable replacement of VLC, and honestly I wanted to get 2.7.1 out of the door first.<br><br>
Last thing, I'm extracting the FAQs at the bottom of the original post below and move them, updated accordingly to the new informations that became available in the last few days, to a [specific FAQs page]({{ site.baseurl }}/glancecam/faq.html), which is now also explicitly mentioned inside [GlanceCam's product page]({{ site.baseurl }}/glancecam), so that prospective customers are informed in advance of the pending issue, before making a purchase.<br><br>
The next update to this post will probably be published after Apple reviews version 2.7.1. As always, please don't hesitate getting in touch at [support@cdf1982.com](mailto:support@cdf1982.com).

---

**Update 1 - Sunday, September 15**<br>
A slightly better day, thanks first and foremost to the warm support of nice people on Twitter! [Steve Troughton-Smith](https://twitter.com/stroughtonsmith) in particular brought me hope with something actionable to try, pointing me to [SGPlayer](https://github.com/libobjc/SGPlayer), a ffmpeg and Metal library that on paper seems a good candidate for replacing VLCKit.<br>
Also important, given how soon Catalina will be in the hands of end-users, I've filed ~~radar~~ **Feedback FB7276584** to Apple, with attached crash reports and a sample project that "reliably" crashes on Catalina beta 8, but is stable on previous versions of macOS. I really, really hope someone at Apple has time to look at it.

---

*TLDR: Yesterday I found out that, **in the latest beta 8 of macOS 10.15, my app GlanceCam crashes when switching camera stream**. My tests show that this is **caused by Catalina's OpenGL support**; I read online that the same crash is happening to other apps using OpenGL.<br>Below I try to describe all details of this complex situation in the most transparent way I'm capable of, and **at the bottom of the post there's a [FAQ]({{ site.baseurl }}/glancecam/faq.html) that every GlanceCam user or prospective customer should read**.<br>This post and the FAQ will be updated whenever new details are available.<br>**Hopefully I'll be able to find a solution soon**. In the meantime, **I deeply apologize to all GlanceCam users**. Please know that **I am trying my best to resolve the issue, but it's not clear to me how and when (days? weeks? worse?) I'll be able to** if Apple did actually intentionally disrupt OpenGL support and won't fix it in the next release.<br>For any questions you might still have after reading this post, please get in touch at [support@cdf1982.com](mailto:support@cdf1982.com).*

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

More important, I ~~started drafting a Radar for Apple that will also include the sample project mentioned above~~ sent Bug Report **FB7276584** to Apple with attached crash reports and the sample project mentioned above: if the first betas did not present this crash, maybe they're not planning to actually kill OpenGL off so soon; on the other hand, we're so close to Catalina's launch that I feel like a fix ready for the next beta or even day one is a bit unlikely.

A personal note: **it is possible that I am overreacting** – I've only been aware of this issue for less than 48 hours and I am now quite tired, so maybe I'll figure something out soon and we'll laught at this post – but at the time of this writing the problem appears to be quite complex: it touches the basic architecture of the operating system, not only of my app, and it seems caused by technical decisions / bugs mostly out of my control, so **I feel the right thing to do is to publish this post right away, and maybe have soon good news to follow up with**.

---
Having taken stock of the situation without sugarcoating things, the very last thing I'm doing today is to write an exhaustive **disclaimer / FAQs document** ~~(that I am now posting only here on the blog, but in a few days will go on the GlanceCam product page as well if the situation does not improve)~~ that is available and kept updated [here]({{ site.baseurl }}/glancecam/faq.html).

---

Again, **I am deeply sorry** for any disruption this might cause to your workflow, if you were planning to install Catalina at launch or you are already using the betas. I'll do anything I can to restore GlanceCam functionality for all users and to keep you posted.