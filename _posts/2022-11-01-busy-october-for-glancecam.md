---
layout: post
title: A busy October for GlanceCam
description:
image:
tags: glancecam
---
Per the title, October has been a busy month for [GlanceCam]({{ site.baseurl }}/glancecam):
- [GlanceCam 3.5]({{ site.baseurl }}/2022/10/12/glancecam_3_5_apple_silicon.html) took performance to the next level with Apple silicon support;
- [GlanceCam 3.5.1]({{ site.baseurl }}/glancecam/glancecam-release-notes#3_5_1) fixed a couple small things, making possible to create new windows at the center of the active display;
- [GlanceCam 3.6]({{ site.baseurl }}/glancecam/glancecam-release-notes#3_6) perfected the app behavior on Ventura, right on the new macOS launch day and added an amazing Zoom feature you can learn more about in the [FAQs]({{ site.baseurl }}/glancecam/faqs#zoom):
- [GlanceCam 3.6.1]({{ site.baseurl }}/glancecam/glancecam-release-notes#3_6_1) restored the beloved [Out of my Way]({{ site.baseurl }}/glancecam/glancecam-release-notes#3_3) magic trick on Ventura after a regression in macOS 13 caused it to stop working (_FB11723708_, if you happen to know someone in the AppKit team at Apple ;)

So, **time to rest? Not at all 💪!**

Let’s kick off 🎃 November 🎃 with a cool update meant specifically for GlanceCam Pro Users: **_Cycle mode_ is now available in GlanceCam 3.7, which you can already [download from the Mac App Store](https://itunes.apple.com/us/app/glancecam-ip-webcam-viewer/id1360797896?l=it&ls=1&mt=12)!**

Before I detail what Cycle mode is, rest assured lots more is coming to all GlanceCam Users soon, but it’s been a while since the last “Pro-only” advanced feature was added, and this is a good one. 

First of all, thank you to James, Steve and Shawn, who have asked for a way to cycle through different cameras in a single window. 

Cycle mode makes that possible: **choose one of your windows and have it rotate some or all of your Glances (cameras) according to a time interval you define**. This is especially useful with a large window or while the app is full screen.
While only one window can be put in Cycle mode, you can still keep as many others “single camera” windows open while this rotation is enabled. 

By default, all cameras are included in Cycle mode with a 30 seconds time interval dedicated to each one, but you are free to **decide which Glances you want to include and for how long they should remain on screen**.
Intervals can be configured in the 10 to 60 seconds range, in steps of 10 seconds, and can be different between cameras included in the cycle. Please note that longer intervals are preferable, especially for remote cameras, as the timer starts when loading the stream begins, not when the image appears; so, if a camera takes 5 seconds to show the image and the cycle is set to 10 seconds, you’d only see the image for 5 seconds before switching to the next one. 

You can enable Cycle mode by selecting the Glance menu > Enable Cycle mode, or by pressing the C key without modifiers while the window you want to enable it for is active; the same menu item or keyboard shortcut disables it, as it does saving any change to Settings or quitting GlanceCam (Cycle mode is not persisted between launches of the app). 

Here’s an example of how Cycle mode can be used:
> Let’s say you have 3 Glances configured; you might include camera 1 in Cycle mode and keep it visible for 30 seconds, exclude camera 2 and include camera 3 for 10 seconds. When you turn on Cycle mode, camera 1 and 3 will alternate, with Glance 1 remaining visible for 30 seconds and Glance 3 only for 10, with a total duration for the cycle of 40 seconds before it starts again. 

I hope you’ll love this new feature… it’s already one of my favorites! Again, you can [download GlanceCam 3.7](https://itunes.apple.com/us/app/glancecam-ip-webcam-viewer/id1360797896?l=it&ls=1&mt=12) right now.

As always, your feedback at [support@cdf1982.com](mailto:support@cdf1982.com) is what keeps development going _(while your Pro upgrades and tips keep the lights on 😉)_ 