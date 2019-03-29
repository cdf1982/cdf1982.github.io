---
layout: post
title: GlanceCam is one year old
description:
image: assets/images/blog/2019-03-29-glancecam_is_one_year_old/glancecam_birthday.png
tags: [glancecam]
---
One year ago today [GlanceCam]({{ site.baseurl }}/glancecam.html) debuted in the Mac App Store, after just 3 weeks of very intense development at the most improbable hours (I have a day job, so most of my coding has to happen *very, very* early in the morning).

As I [wrote back then]({{ site.baseurl }}/2018/03/29/glancecam_is_here.html), my second Mac app saw the light out of laziness:

> *one day I found myself alone at the office and I had to get up from my chair a bazillion times, like an animal, to open the front gate. So, the most “straightforward” thing to do was to get ourselves a nice IP camera and an ethernet relay, and make them work together in a well made macOS app, so that we can keep a small window showing the gate video stream on our desktops, and open to visitors with just one clic.*

I honestly did not expect many people to be interested in such a niche app, and by all means GlanceCam's audience has not been large, but surprisingly (at least *to me*), there are Users out there who are looking for a well made, native Mac camera viewer: since the beginning and with no marketing on my part (*I know, I know...* more on this later), a few people have been buying the app almost every day and, from the feedback I receive via email, the occasional in-app tip and the reviews, they are very happy to have found an app that really solves a problem they had:

> *"The perfect app for keeping an eye on a webcam"*

> *"Very nice app, works flawlessly and exelent and very quick support if needed!!"*

> *"Finally, A Cam Viewer that Works!"*

> *"no more stupid web interface"*

> *"Great app and great support!"*

That enthusiasm translates into a 4.0 stars overall average from 45 ratings in the App Store, and 4.2 stars in the US store. Not bad 😜 for an app that, in order to be useful, requires you to know the specific custom string and credentials to access the video stream of your camera!

I think Users particurarly appreciate that, with 16 updates so far, GlanceCam has steadily became more capable: soon after launch it got extended support for keyboard shortcuts and for audio playback, added the ability to save snapshot images and introduced multi-cameras and multi-actions [in version 2.0]({{ site.baseurl }}/2018/05/08/glancecam_2_0.html); it then gained support for full screen, including side-by-side with other apps, and insta-zoom. Recently I added compatibility to RTMP in addition to the original HTTP(s) and RTSP protocols and implemented touch gestures to navigate between cameras. Just a couple of days ago [version 2.7]({{ site.baseurl }}/2019/03/27/glancecam_2_7.html) added TouchBar support and an URL scheme, and in the meantime I have also implemented native Apple Script support, which will come soon in the next release.

All this while improving stability and performances... the usual "bug fixes and improvements" you read in every release note. My favourite is from version 2.1 🙃:

> GlanceCam took the "always on top" preference a little too literally, and stayed actually on top of *everything*, including the screensaver...

One year later, **I am more excited than ever to be working on GlanceCam** and I have an extensive list of features I want to add.
The main priority going forward, both for my direct use of the app and from Users' requests, is *my personal Moby Dick* 🐳: concurrent multi-camera support (either in a single window with grid/list or with multiple windows... currently you can view one camera at a time, which is fine but not what I envisioned when I started developing the app); I think I spent at least 150 hours on multi-cameras so far, and still haven't found a way to keep the app perfectly stable because of an OpenGL bug that seems to be outside of my control (in Mojave Apple deprecated OpenGL) and that causes a lock when more than one video stream is overlayed with buttons. Nevertheless, this will be the **landmark feature of GlanceCam 3.0** and I will get it to work, I simply can't announce a launch date yet...
After that, there are other nice things I'd like to add: if possible, Onvif support for camera discovery, maybe PTZ control, certainly the ability to loop through cameras, and someday the option to coalesce the HTTP GET commands from different computers (so that, when 2 people on the same network clic to open a gate, only the first command is sent).

For this to happen, the development needs to become a bit more sustainable (i.e. more Users, or a price higher that $ 2.99 before the Apple cut... I think the app would really deserve a more *"niche, pro app with personalized human support"* price, but I am afraid to kill growth and then become disenchanted by a lower number of downloads), and some marketing will be needed.
I know I should have done something on that front already, but unlike iOS, there aren't that many Mac software review sites I can contact for an app that serves an oddly specific need.

I guess we will see what the future holds for [GlanceCam](https://itunes.apple.com/us/app/glancecam-ip-webcam-viewer/id1360797896?l=it&ls=1&mt=12), in the meantime *happy birthday* 🎂 little app always in a corner of my screen!