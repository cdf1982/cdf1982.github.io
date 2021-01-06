---
layout: post
title: Introducing PhotosUpload. <i>Finally.</i>
description:
image:
tags: photosupload
---
Over a year ago, at my day job I had to look for an iOS app for taking photos and uploading them to the company FTP server; bonus points were awarded if an app was easy and quick to operate because it would be sometimes used by "non-technical" people. Surprisingly, **very few apps could provide that functionality, and even less were kept up to date and polished**.

So, on May 17, 2018, I pushed the first commits of a new app, but any real work on its' core features (*take photos > add tags > upload image files via FTP*) started 5 months later; by mid November - ~ 300 commits and many early mornings later - the app was 95% ready to be published, when I decided that I liked the idea to have it supported by subscriptions, given the very niche market it was addressing.
A slow and painful phase followed, with edge cases to consider and everchanging requirements for the subscription copy, until I almost lost passion for the project: subscriptions code is soporific code and, meanwhile, [GlanceCam](https://itunes.apple.com/us/app/glancecam-ip-webcam-viewer/id1360797896?l=it&ls=1&mt=12) was gaining a little bit of traction.

About a week ago, while thinking about my summer plans after WWDC, [I realized](https://twitter.com/cdf1982/status/1138728648327012353) that I've been sitting on a finished, useful app, and that I only needed to switch business model (to a very reasonable, IMHO, *buy-once-use-forever* $ 4.99 price) and be ready to share a little, but professional, piece of software we use and appreciate at work every day with the rest of the world (or, at least, the subset of the world that still uses FTP).

Enter PhotosUpload, [available right now on the iOS App Store](https://apps.apple.com/us/app/photosupload/id1441656535) and compatible with iPhone and iPads, offering tags, multitasking support, a solid Core Data backend, an introductory tutorial to help users get started and a reliable uploading system that worked with every FTP server I tried it with.

You can find **[more details on its product page]({{ site.baseurl }}/photosupload)**, but in summary, **if your job includes taking photos and uploading them to a FTP server in an organized way, PhotosUpload is the professional app you were looking for**:
1. **Shoot photos** or **select images from your Photo Library**;
2. **Add tags!** They are optional, but very useful to group related photos together (they are included in file names, after the date and time);
3. When you are ready, **upload your photos to a FTP server** you configured.
There's no step 4!

I'm happy to be back in the game of iOS development after a nice period working on Mac apps, and I hope PhotosUpload will prove useful to many users: FTP is not the most modern technology, but if you still need it, I think it's nice to have a polished and modern app in your pocket. [Please, check it out!](https://apps.apple.com/us/app/photosupload/id1441656535)