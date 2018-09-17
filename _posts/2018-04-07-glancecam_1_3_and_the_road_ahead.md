---
layout: post
title: GlanceCam 1.3 and the road ahead
description:
image:
tags: [glancecam]
---
GlanceCam launch went so much better than I expected, confirming that an app I [built out of lazyness](https://www.cdf1982.com/blog/2018/3/29/glancecam-is-here) is actually proving useful to others (which is simply *the best thing* for an app developer).

So, it's time to take stock and plan for the future.

First and foremost,** I want to thank you for the support and kind words**. Users' [feedback](mailto:support@cdf1982.com), word of mouth and App Store reviews (reviews that, with the new version, you can leave directly from the Support menu inside the app) are essential, and you're helping on all fronts! Please, don't stop...

![review.png]({{ site.baseurl }}/assets/images/blog/2018-04-07-glancecam_1_3_and_the_road_ahead/review.png)

Starting today, **GlanceCam 1.3 is [available in the App Store](https://itunes.apple.com/us/app/glancecam-ip-webcam-viewer/id1360797896?l=it&ls=1&mt=12)** with the following changes:

-   Some IP cameras offer both audio and video in their stream; you can now enable/disable the audio from Preferences.
-   Improved reliability of window resizing.
-   Minor user interface tweaks.

With this update, the basics of a single-camera, single-action app are mostly covered. So **it's time to start thinking, and building, GlanceCam 2.0**.

The next logical step, and I have already heard some feedback confirming this, is to go from one camera to **multiple webcams**.\
Doing so requires some *deep* rewriting, which I started yesterday, but expect this change to take a while before showing up in the App Store app.

Since I'm in the starting phase of the redesign process, there are a few decision to make, and** I'll really appreciate your opinion about 3 possible approaches to multi-camera**:

1.  *Would you like GlanceCam to remain a single-window application, showing one camera at a time, and switch between cameras with buttons / keyboard shortcuts?*
2.  *Do you prefer to be able to open a separate GlanceCam window for each camera, rearranging and resizing them separately?*
3.  *You'd rather have a single window showing multiple cameras (i.e., a 2x2 layout, or 5 cameras stacked one above the other in a tall window)?*

At least initially, I am probably going with #1, unless your feedback points me in a different direction: approach #2 seems nice on paper, but it can get really messy on your desktop if you have 4 cameras open in separate windows, and #3 poses some hard design challenges... a 2 camera layout should be very different from a 5, and some arrangements like the vertical stack are good for taking a glance with relatively small videos, but not great for resizing to a large view.

If you have an opinion on this, even if you're not currently a GlanceCam user, **please let me know on [Twitter](https://twitter.com/cdf1982) or via [email](mailto:support@cdf1982.com)**!

I'll do my best to build a great 2.0, wish me luck!