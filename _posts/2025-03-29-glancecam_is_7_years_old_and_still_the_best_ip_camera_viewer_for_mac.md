---
layout: post
title: GlanceCam's 7th birthday, a big announcement and version 4.5 with Alternate Glances
description: GlanceCam is still the best IP camera viewer for Mac, and soon will expand to iOS, iPadOS and Apple Watch
image: assets/images/blog/2019-03-29-glancecam_is_one_year_old/glancecam_birthday.png
tags: glancecam
---
<b>7 years ago today, an IP camera viewer _you might know_ debuted in the Mac App Store</b>.

Back then, I would have never imagined many were looking for a native, privacy-focused app like the one I had built, and I want to take a moment today to <b>thank you all for your support</b>: your initial purchase, nice App Store reviews, upgrades to GlanceCam Pro, tips and great suggestions made it possible for me to keep working on GlanceCam and make it better, update after update <i>(this is the 42nd, and it brings a much-requested feature, as you'll see below)</i>.

Rest assured that, with your support, <b>my plan is to keep GlanceCam as the best IP camera viewer for Mac for many years to come</b>: I have so many ideas, the limit is just time!

And what better day for an official announcement?

Many of you asked for it, so in the last year I started building from scratch a <b>new GlanceCam for iPhone, iPad and Apple Watch</b> (and possibly Apple TV, we'll see ;).

This new project doesn't share a single line of code with GlanceCam for Mac: much like the GlanceCam you know is made to be an unobtrusive presence on your Desktop throughout the day, the mobile versions are designed to take advantage of their platforms, which mostly means getting in and out of them as quickly as possible.

I'm very proud of the work done so far, but the new app is not ready to ship yet: GlanceCam for iPhone, iPad and Apple Watch will be <b>available later this year as a single separate subscription</b>, distinct from the Mac version of GlanceCam given the independent code-bases and very different feature sets, and I think you'll love it.

I also don't want to leave a trace of doubt: <b>GlanceCam for Mac is not going anywhere and is still my main focus<b>, being the app I personally use all day, every day, to look at my cameras; there's a lot of improvements planned for the coming months, starting today with version 4.5:

1 - <b>Glances can now have a designated "Alternate".</b>

A frequent feature request is to have a way to toggle between the SD and HD streams of the same camera.
I think what ships today is more versatile: each camera can have an optional "Alternate" - another Glance with a different configuration (like stream quality or type of network access) for the same camera. And Alternates are none other than other Glances already in your list.

You can quickly switch between a Glance and its Alternate by pressing the A key, or the button that appears next to the list of cameras inside the window when an Alternate has been set.

As mentioned, a common use case is having two Glances for the same camera: one configured for SD streaming and another for HD; by setting the HD Glance as the Alternate of the SD one, you can easily toggle between quality levels. But you get to keep two separate entries, allowing quick switching with keyboard shortcuts, use in GlanceGrids, Applescript automations, and so on.

This feature is also useful when you need both LAN and Internet access configurations for a camera, allowing quick switching between connection types depending on where you are.

Alternates are completely optional and work only in single-camera windows (they're not available in GlanceGrids).

If you think they can fit your workflow, you can configure them in Settings, by clicking the Set Alternate button next to the camera name and following the simple instructions on screen.

When you set an Alternate relationship, it works both ways automatically - if Glance 2 is set as the Alternate for Glance 1, you can toggle between them in either direction.

You even have the option to switch to the Alternate automatically when entering full screen, which is kind of neat if you want to keep the low-resolution stream when the window is small, and get the maximum resolution when you double-click the window to send that camera full-screen. And I know what you're going to ask, what about Insta-zoom? I tried, and the result wasn't good enough: when switching to an Alternate, the camera must reload, and that takes time, so this feature doesn't really fit that use case well.

2 - GlanceCam's 1…9 single-key shortcuts are the quickest way to switch between your Glances, but are inherently limited to the first nine cameras. Now you can quickly switch to the cameras between 10 and 19 with the Shift key + the Glance number MINUS 10 (Shift-0 for camera 10, Shift-1 for camera 11, and so on); and why stop there? Control+Shift lets you access cameras 20 (Control-Shift-0) through 29 (Control-Shift-9). Hat tip to John, one of the first GlanceCam Users, for asking for a way to quickly access a large number of cameras!

3 - Roll-up, the niche feature of GlanceCam that resembles WindowShade on classic Mac OS, letting you, ahem, "roll-up" a window with the R key, leaving only the title bar visible until the mouse pointer enters its area, had a couple bugs in Sequoia that have now been evicted.

<b>If you want to celebrate GlanceCam's birthday, a 5-star review, the upgrade to GlanceCam Pro if you haven’t yet unlocked the most advanced features or a generous tip would mean the world to me and help keep development going</b>... and as always, if you have any suggestions or need assistance, I'm [here](mailto:support@cdf1982.com) for you!