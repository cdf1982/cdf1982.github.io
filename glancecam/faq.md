---
layout: post
title: FAQs regarding GlanceCam compatibility with macOS 10.15 Catalina
description:
image:
tags: [glancecam]
---
*Q: Is GlanceCam compatible with macOS 10.15 Catalina?*<br>A: **GlanceCam is currently not compatible with the next version of macOS** due to changes introduced in Catalina beta 8 (released on September 10) which seem to have significantly disrupted OpenGL support in macOS, not only for GlanceCam, but for [many apps that rely on this well-established video engine](https://forums.developer.apple.com/thread/122608).


*Q: What is not working on Catalina?*<br>A: GlanceCam worked perfectly on macOS 10.15 beta 1 through 5, but starting with beta 8 the app launches and works fine only if you don't try to switch to a different camera; it crashes as soon as you try to switch stream or to reload the current stream.


*Q: When will GlanceCam be compatible with Catalina?*<br>A: At the moment, I really can't know. I am trying my best to fix this situation, but **it's very hard for me to know how and when the crash will be fixed**. I will update this FAQ every time a significant development occurs, be it positive or negative, and I am also [blogging about it in detail]({ site.baseurl }}/2019/09/14/glancecam_compatibility_issues_with_beta_8_of_macos_catalina.html), trying to be as transparent as possible.


*Q: Why is GlanceCam still for sale on the App Store?*<br>A: I have seriously considered pulling GlanceCam from the App Store, but that would mean that I would have no way to send out new updates to GlanceCam users, when a solution to the crash is found.


*Q: How are you alerting users browsing the App Store that GlanceCam is currently not compatible with the next macOS?*<br>A: This is tricky, and at the moment I'm writing this, still unclear. ~~In the next couple of days tops I will try to submit~~ On September 18 I did submit an update to Apple's app review will contain an alert when the app launches and ~~I will also try to make~~ also contains changes in the metadata that make the situation clear at the top of the App Store description and in the release notes. But I am not sure that app review will allow an app to contain such alert, or will accept an app description that talks about a beta OS. If they reject such update (and I'm afraid they will), I'll submit it again when Catalina actually ships (if the issue is not solved by then, but I hope it will be).


*Q: I have updated to macOS 10.15 already / plan to install Catalina as soon as it launches and I can't use your app on it. I paid for GlanceCam and it's not fair.*<br>A: I feel you. This is the worst situation that could happen not only to a customer, but also to an app developer. I really hope to be able to fix this crash, but I can't be sure I will be able to do that in a timely fashion. So, **whenever you don't feel like waiting or are (rightfully so) annoyed by this situation, please accept my sincere apologies and don't hesitate to request a refund from Apple** (developers can't issue refunds for App Store transactions directly, but you can find a pretty clear description of the procedure [here](https://blog.supereasyapps.com/mac-app-store-refund-in-6-steps-how-to-get-a-refund-for-any-macos-app/)).


*Q: What are you doing to fix this?*<br>A: Everything I can think of. Basically, I'm running a lot of tests, trying to tweak my code, talking to the developers of the video framework used by GlanceCam - VLCKit - and thinking about other possible solutions; I've only learned about this problem a few hours ago. I ~~am working on a Radar (bug report) for Apple~~ sent Bug Report **FB7276584** to Apple, and I hope they'll get back to me. If nothing works, I'll need to think of a different approach to stream video, but it would be very, very complicated and time-consuming (we might be talking months of work... and I don't want my mind to go there before having exhausted the other options).


*Q: How can I be updated on how the situation evolves?*<br>A: I will update these FAQs regularly, as well as [this blog post]({ site.baseurl }}/2019/09/14/glancecam_compatibility_issues_with_beta_8_of_macos_catalina.html). And you can contact me for any clarification you need, any time, at [support@cdf1982.com](mailto:support@cdf1982.com) or on Twitter, [@cdf1982](https://twitter.com/cdf1982). A good way to get my updates about GlanceCam would also be to subscribe to my RSS feed, [cdf1982.com/feed.xml](https://cdf1982.com/feed.xml).


*Q: Is publishing this rather-alarming post so soon after discovering the crash and with so many things still unclear a wise business decision?*<br>A: Maybe not, especially if I find a solution in a few days: most people would not have noticed the crash. But GlanceCam has a pretty good reputation in its niche, with reviews averaging 4.0 stars (much higher than the competition in such technical, nerdy section of the App Store), and I think trasparency is the right choice here, especially if it takes a while to find a workaround to this crash. At the end of the day, I think that *if you enjoy using GlanceCam, you deserve to know that updating to Catalina will currently prevent you from using it, even if this costs me a few sales or refunds*.