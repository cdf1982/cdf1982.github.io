---
layout: post
title: GlanceCam 4.1 for macOS Sonoma
description:
image:
tags: glancecam
---
The launch of **[GlanceCam 4.0]({{ site.baseurl }}/glancecam)** in June was so busy and intense that I didn't find the time to _properly_ blog about it: I didn't want to just copy and paste the _(very detailed)_ release notes, and I ended up writing nothing instead 😩.<br>
So, if you want to learn more about _[GlanceGrids](https://cdf1982.com/glancecam/faqs#glancegrid)_, _Roll Up_ and the many other features and improvements introduced with that recent major release, I recommend you take a look at GlanceCam's [website](https://www.glancecam.app), read the aforementioned [release notes]({{ site.baseurl }}/glancecam/glancecam-release-notes#4_0) and watch the updated promo video:

<p align="center">
	<iframe src="https://player.vimeo.com/video/517800053" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
</p>

Today,**I'm here to tell you that GlanceCam is 100% ready on day one for macOS 14 Sonoma**, thanks to the free 4.1 update that is already **[available on the Mac App Store](https://itunes.apple.com/us/app/glancecam-ip-webcam-viewer/id1360797896?l=it&ls=1&mt=12)**.

To be honest, I've been running macOS betas all summer on my main machine and GlanceCam 4.0 was already working great without any tweak, but there's always space to make things better, and with version 4.1 I've had the chance to do that and also **add multiple User-requested features and improvements**:

- **It's now possible to customise the double-click behavior for GlanceGrids**: by default, double-clicking a GlanceGrid window will maximise the whole grid full-screen, but from the GlanceGrid settings panel you can now change it to send full-screen the single camera below the mouse pointer, or spun up a separate window for the camera you're double-clicking. I want to thank Tim and Mike for suggesting this feature.

- **Opening Settings from the gear icon in the upper right corner of a camera window now pre-selects that Glance in the Settings panel**, instead of always defaulting to the first one in the list; special thanks to Dirk for recommending this feature, and also the next one!

- **GlanceCam Pro can now optionally rotate a video stream by 90°, 180° or 270°**; to learn more about this capability and enable it, please click on _Rotate stream_ in the _Advanced stream tweaks_ of a camera in Settings.

- Thanks to Timo-Pekka's' suggestion, there are **3 new AppleScript commands that extend the automation capabilities** of GlanceCam: **reload** will, ahem, reload the stream in all windows, while **stop playback** and **resume playback** will allow to manually control playback for all the cameras that are currently streaming; please be advised that stopping/resuming a large number of cameras can occasionally cause issues. To learn more about GlanceCam's AppleScript support and for syntax examples, please refer to the FAQs available in the _Support_ menu > _Frequently Asked Questions_, and specifically to the _"Is it possible to automate GlanceCam in some ways?"_ section.

- Connected to the previous feature, there's now a **Stop / Resume** Glance menu item to manually toggle on and off playback of the streaming of a single camera; this function can also be triggered by pressing the P key without modifiers while a window is active and might be useful if you don't need to look at a camera for a while, but don't want to close the window.

- A bug when switching cameras while in full-screen, kindly reported by Cody, has been fixed.

- The app now uses a new, future-proof approach for the _Launch automatically at login_ feature; if you already had GlanceCam configured to open automatically when your Mac starts, that setting should migrate and work without the need for you to perform any action.

- Starting with this release, GlanceCam adopts the latest version of the VLCKit video engine, with many improvements in performance and reliability.

**As always, [your feedback](mailto:support@cdf1982.com) is what keeps development going (_while your Pro upgrades and very kind tips keep the lights on_ 😉)!**