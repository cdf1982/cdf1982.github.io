---
layout: post
title: GlanceCam 2.10 with auto-reconnection & other neat tricks
description:
image:
tags: [automation]
---
I really need to start writing my announcement posts as soon as I hit submit in App Store Connect, because App Review [did it again]({{ site.baseurl }}/2020/06/06/tametime_1_1.html): [GlanceCam 2.10]({{ site.baseurl }}/glancecam), which I finished working on Saturday night, is [already available for download](https://itunes.apple.com/us/app/glancecam-ip-webcam-viewer/id1360797896?l=it&ls=1&mt=12) as a free update.

I know this is not the multi-windows upgrade many Users are waiting for (I am very sorry, GlanceCam 3.0 is not 100% ready yet), but I didn't want to hold back on some helpful features:

- **GlanceCam now tries to detect if the connection to a camera is disrupted and, instead of leaving a deceitful frozen image on-screen, it tries to reload the video stream 3 times over the next 90-ish seconds**; if the connection cannot automatically be re-established, the User will know because the window will remain grey, with a small red warning, until it is manually reloaded. I think this is much better than believing a camera il working when it is not, and in the tests that myself and a few Users have done since January, it has worked very well, so the feature is on by default.

- There are now "expert tweaks", all coming from Users' feedback and requests in the past few months (as Frasier would say, _"I'm listening"_), available in the app's Preferences. These are not settings most Users will need to adjust, but can be very helpful for special setups and are especially neat because they don't affect the entire app behaviour, but only specific cameras:

1. For mirrored images, it is now possible to **flip the stream vertically or horizontally (or both)**.

2. By default, GlanceCam uses the RTSP over UDP protocol, which is perfect for most cameras and Users. For few Users who regularly experience some significant delay when initiating the connection to the camera, or for those who cannot establish a connection over a VPN (working from home, anybody?) or through a particularly aggressive firewall, I have added the option to enable **RTSP over TCP**, which in tests that myself and some Users have conducted in the last few months, could make a remarkable difference for both issues.

3. For 4K camera Users who notice some frames dropped while being on a good reliable connection (LAN or fast WiFi, as dropped frames at 4K via Internet could be caused by the line speed), then **it's possible that increasing the video buffer could help keep the frame rate smooth at 4K. Now this option is available**, though it won't be necessary (and it is not recommended, because it necessarily increases the memory used by the app, even though GlanceCam remains super-efficient) for Users with 1080p or lower-resolution cameras, and also for 4K cameras with already smooth playback.

As always, feedback is more than welcome at [support@cdf1982.com](mailto:support@cdf1982.com). Oh, 5 star reviews are great too 😃, if you are so inclined!