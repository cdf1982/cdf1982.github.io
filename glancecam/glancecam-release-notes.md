---
layout: post
title: GlanceCam Release Notes
description:
image:
tags: [glancecam]
---
### GlanceCam is already compatible with macOS Tahoe
#### September 12, 2025

<i>Cesare from GlanceCam here with a quick positive note about macOS 26, which Apple will officially release on Monday, September 15. Not strictly a release note, but I thought of adding this message here in case you checked before updating...</i><br><br>
<i>Throughout the summer, a good number of testers and I have run all Tahoe betas and I'm happy to report that GlanceCam is already fully compatible with the new macOS.</i><br><br>
<i>Usually, I release an update of GlanceCam on the day a new macOS ships, but this year is different for 2 reasons:</i><br><br>
<i>1. For the last couple of years, the last summer version of Xcode (the tool used to develop apps on Apple platforms) snuck in bugs at the very last minute; since GlanceCam is already working well on Tahoe, I don't feel that taking such a risk is worth it, and I prefer to wait for Xcode 26.1 to release the next update.</i><br><br>
<i>2. GlanceCam is installed on Macs running recent and less-recent operating systems, so adopting Liquid Glass is not an option for a long while; it's also not something needed in an app designed to stay out of your way and let you see your cameras.</i><br><br>
<i>I felt it was important to let you know that – as far as I can tell after this very extensive testing by me and others – GlanceCam will work well on Tahoe, whenever you decide to update (personally, I'll wait at least 26.2).</i><br><br>
<i>Obviously, I [remain available](mailto:support@cdf1982.com) if you experience any issues, or as always if you need anything else.</i><br><br>
<i>Thank you for your time and continued support! –Cesare</i>

<a name="4_5"></a>
### GlanceCam 4.5
#### March 29, 2025

<b>7 years ago today, an IP camera viewer _you might know_ debuted in the Mac App Store</b>.<br><br>
Back then, I would have never imagined many were looking for a native, privacy-focused app like the one I had built, and I want to take a moment today to <b>thank you all for your support</b>: your initial purchase, nice App Store reviews, upgrades to GlanceCam Pro, tips and great suggestions made it possible for me to keep working on GlanceCam and make it better, update after update <i>(this is the 42nd, and it brings a much-requested feature, as you'll see below)</i>.<br><br>
Rest assured that, with your support, <b>my plan is to keep GlanceCam as the best IP camera viewer for Mac for many years to come</b>: I have so many ideas, the limit is just time!<br><br>
And what better day for an official announcement?<br><br>
Many of you asked for it, so in the last year I started building from scratch a <b>new GlanceCam for iPhone, iPad and Apple Watch</b> (and possibly Apple TV, we'll see ;).<br><br>
This new project doesn't share a single line of code with GlanceCam for Mac: much like the GlanceCam you know is made to be an unobtrusive presence on your Desktop throughout the day, the mobile versions are designed to take advantage of their platforms, which mostly means getting in and out of them as quickly as possible.<br><br>
I'm very proud of the work done so far, but the new app is not ready to ship yet: GlanceCam for iPhone, iPad and Apple Watch will be <b>available later this year as a single separate subscription</b>, distinct from the Mac version of GlanceCam given the independent code-bases and very different feature sets, and I think you'll love it.<br><br>
I also don't want to leave a trace of doubt: <b>GlanceCam for Mac is not going anywhere and is still my main focus</b>, being the app I personally use all day, every day, to look at my cameras; there's a lot of improvements planned for the coming months, starting today with version 4.5:<br><br>
1 - <b>Glances can now have a designated "Alternate".</b><br>
A frequent feature request is to have a way to toggle between the SD and HD streams of the same camera.
I think what ships today is more versatile: each camera can have an optional "Alternate" - another Glance with a different configuration (like stream quality or type of network access) for the same camera. And Alternates are none other than other Glances already in your list.<br>
You can quickly switch between a Glance and its Alternate by pressing the A key, or the button that appears next to the list of cameras inside the window when an Alternate has been set.<br>
As mentioned, a common use case is having two Glances for the same camera: one configured for SD streaming and another for HD; by setting the HD Glance as the Alternate of the SD one, you can easily toggle between quality levels. But you get to keep two separate entries, allowing quick switching with keyboard shortcuts, use in GlanceGrids, Applescript automations, and so on.<br>
This feature is also useful when you need both LAN and Internet access configurations for a camera, allowing quick switching between connection types depending on where you are.<br>
Alternates are completely optional and work only in single-camera windows (they're not available in GlanceGrids).<br>
If you think they can fit your workflow, you can configure them in Settings, by clicking the Set Alternate button next to the camera name and following the simple instructions on screen.<br>
When you set an Alternate relationship, it works both ways automatically - if Glance 2 is set as the Alternate for Glance 1, you can toggle between them in either direction.<br>
You even have the option to switch to the Alternate automatically when entering full screen, which is kind of neat if you want to keep the low-resolution stream when the window is small, and get the maximum resolution when you double-click the window to send that camera full-screen. And I know what you're going to ask, what about Insta-zoom? I tried, and the result wasn't good enough: when switching to an Alternate, the camera must reload, and that takes time, so this feature doesn't really fit that use case well.<br><br>
2 - GlanceCam's 1…9 single-key shortcuts are the quickest way to switch between your Glances, but are inherently limited to the first nine cameras. Now you can quickly switch to the cameras between 10 and 19 with the Shift key + the Glance number MINUS 10 (Shift-0 for camera 10, Shift-1 for camera 11, and so on); and why stop there? Control+Shift lets you access cameras 20 (Control-Shift-0) through 29 (Control-Shift-9). Hat tip to John, one of the first GlanceCam Users, for asking for a way to quickly access a large number of cameras!<br><br>
3 - Roll-up, the niche feature of GlanceCam that resembles WindowShade on classic Mac OS, letting you, ahem, "roll-up" a window with the R key, leaving only the title bar visible until the mouse pointer enters its area, had a couple bugs in Sequoia that have now been evicted.<br><br>
<b>If you want to celebrate GlanceCam's birthday, a 5-star review, the upgrade to GlanceCam Pro if you haven’t yet unlocked the most advanced features or a generous tip would mean the world to me and help keep development going</b>... and as always, if you have any suggestions or need assistance, I'm [here](mailto:support@cdf1982.com) for you!<br><br>
My best, <i>Cesare</i>

<a name="4_4"></a>
### GlanceCam 4.4
#### October 25, 2024

This update makes **GlanceGrids more reliable when loading cameras and switching presents**, especially when dealing with a large number of concurrent streams; I want to thank Rodney for really pushing the limits with 90 cameras playing at the same time, and for helping me test this solution.<br>
There's also a new "Advanced tweak" option that allows to force Multicast for streams; it's extremely unlikely that you'll need to enable this option, since the video engine already evaluates if the camera is streaming in Unicast or Multicast mode, but this option proved useful to reduce latency for a Reolink doorbell camera (thank you Micheal, for your patience and all the help testing this!).<br><br>
As mentioned in the release notes for GlanceCam 4.3.2 in September, **GlanceCam has been ready on day one for Sequoia**. I want to provide a **quick note to those who are going to update to macOS 15** in the coming months: after updating, a very small number of Users experienced an issue _(streams not loading)_ caused by the new _Local Network_ security prompt introduced by the new operating system; it's important that, after macOS updates, you'll **remember to allow local network connections for GlanceCam when prompted by macOS** (obviously, GlanceCam _needs_ to be able to communicate with your cameras to display their streams, and Sequoia will ask your permission the first time a connection attempt is established, but let's just say the macOS process isn't rock solid yet). I remain available (_Support_ menu > _Contact support via email_) if you need some clarifications about this before installing macOS 15, or if you need assistance afterwards.<br><br>
And speaking of Sequoia, a second tip: with the new operating system (and future versions), macOS will not not execute global keyboard shortcuts that only include ⌥ Option or ⌥ ⇧ Option Shift as modifiers, so if in GlanceCam's Settings > Behavior you have configured global keyboard shortcuts to bring all your windows to front or to Insta-zoom a specific window, you might need to check and possibly include an additional key like ⌘ Command or ⌃ Control to your shortcuts of choice to keep them working.<br><br>
I am constantly grateful for people choosing GlanceCam and using it every day, and I hope you'll appreciate my continued commitment to make it the best Mac app possible; if you do, **please leave a 5-star review** and **consider upgrading to GlanceCam Pro** or, if you already did _(you're awesome!)_, to **leave a tip**! Below you can find buttons to do all those nice things 😉.<br><br>
Happy Halloween! _Cesare_

<a name="4_3_2"></a>
### GlanceCam 4.3.2
#### September 16, 2024

GlanceCam is **ready on day one for the new operating system**.<br><br>
This update, the 40th since GlanceCam launched 6 years ago, fixes a bug that would occur when 3 specific things were concurrently true: a. A vertical camera (i.e. showing a portrait image) in use, b. GlanceCam's custom aspect ratio set to _Delayed_ (as it is often required with portrait cameras), and c. The user interface of the app set to _Standard_, not _Minimalistic_.<br><br>
In that very rare scenario, the portrait camera's window size did shrink slightly every time the app launched or the stream reloaded, but now – thanks to exceptional help from Volkmar, who first reported the issue and then had exceptional patience in the research for a cause – that behavior is fixed.<br><br>
**If GlanceCam is useful to you, 5-star reviews, GlanceCam Pro upgrades or coffee tips are deeply appreciated and keep development going**... and if you have any suggestion or need assistance, I'd love to hear from you (_Support_ menu > _Contact support via email_)!<br>
My best, _Cesare_

<a name="4_3_1"></a>
### GlanceCam 4.3.1
#### August 12, 2024

This minor release fixes a very rare bug, nothing worthy of long release notes.<br><br>
What's worth spending a few words on is the tremendous love you showed for GlanceCam after my plea for reviews a few days ago, to counterbalance some unfair ratings. I cannot find appropriate words to thank you enough! (but please, keep those 5 stars coming :)<br><br>
Wish you the best August possible! _–Cesare_

<a name="4_3"></a>
### GlanceCam 4.3
#### August 2, 2024

GlanceCam 4.3 brings performance improvements, squashes a few bugs and implements some changes based on Users' feedback:
- Following the major update to the latest version video engine in the previous 4.2.1 release, this version includes another small update to VLCKit, improving the AV1 decoder (though I believe basically no camera uses that codec, one can never tell...).
- A GlanceGrid bug that caused some cameras to remain temporarily black after exiting full-screen when the app was configured to focus the full-screen mode on a single Glance has been fixed; thanks to Eric for reporting the issue!
- Speaking of GlanceGrids, a few Users requested to disable the manually set maximum number of columns when entering full-screen; before, if you had set a grid to be limited to 1 column max and chose to show the full grid (not just one camera) while in full-screen, GlanceCam would have still shown column, hence only one camera, full-screen, and to see the others you did need to scroll down. With the new implementation, when the window enters full-screen, the maximum number of columns is temporarily disabled, and the app takes advantage of the additional screen real estate to show multiple cameras at the same time; of course, when exiting full-screen, the previous number of columns you did choose to have is restored. This is a design decision that might be controversial, depending on your preferences; since I only heard feedback asking to go in this direction, and considering that it makes sense to use full-screen to see as many cameras as possible at the same time, I made the change, but if you don't like it, let me know (Support menu > Contact support via email) and, depending on the number of requests, I'll provide both options in a future release.
- The label and tooltip of the audio toggle in Settings clarifies that it only applies to standard windows, not GlanceGrids; this was a design decision I am very comfortable with: I think it's unlikely one would want audio playing from 9 cameras in a grid at the same time, so enabling audio in GlanceGrids is possible, but requires to toggle audio on manually on a specific "tile" "(by clicking on the camera image with the left mouse button while holding down the CMD key, and then selecting "Toggle audio for this camera" from the menu). Thanks to Max for making me realise this needed to be clarified in the interface.
- Since we're talking about the contextual menu that appears when clicking with the CMD key down, a bug that caused occasional reordering issues with GlanceGrids has been resolved.
- There was a very unlikely scenario that could lead to a window not having the accessory buttons in the upper right corner (those used to toggle audio, open Settings, save a snapshot, etc.); no User ever reported it, and it took a lot of work to figure it out, but I think the issue is gone.

I usually close all release notes with a humble request for reviews, and this time I'll do with more emphasis: if you like GlanceCam, please consider finding the time to leave a 5-star review... I need your help!<br>
There have been a couple 1-star reviews in the US App Store that I believe are unfair (in one case, I could have helped the User configure their camera if they contacted me, something I specify both in the description and in the app itself, because I know setting up cameras is hard and I make a point of pride to provide timely support, something that some of you might have experienced and hopefully were happy with; in the other review, I don't think that person did really read the description or look at the screenshots, and said quite hurtful things), but sadly such harsh comments do really affect sales, because give the wrong impression of an app I think most of you like, and that I've spent countless hours working on in the last 6 years.<br><br>

And as always, if you have any suggestion or need assistance, please get in touch via the Support menu > Contact support via email.<br><br>

Have a great summer! _-Cesare_

<a name="4_2_1"></a>
### GlanceCam 4.2.1
#### July 16, 2024

GlanceCam 4.2.1 focuses on performance: with a tight integration with the latest version of the VLCKit video engine, GlanceCam is more reliable and snappier, especially when switching cameras.<br><br>
If you find GlanceCam useful, please leave a 5-star review: they really do make a difference for indie apps like mine!<br>
GlanceCam Pro upgrades and tips are also very appreciated and keep development going...<br><br>
And as always, if you have any suggestion or need assistance, please get in touch via the Support menu > Contact support via email.<br><br>
Ciao, _Cesare_

<a name="4_2"></a>
### GlanceCam 4.2
#### December 13, 2023

TLDR: This version addresses a **major change in the way that macOS 15 Sonoma handles special characters in URLs**; if your cameras' usernames and passwords include symbols such as @ / ? # and you have updated (or are planning to update) to the new operating system, please continue reading, as you might need to modify those credentials and remove all unallowed characters.<br><br>
_Some context..._<br><br>
Since Sonoma launched in late September, a very small number of Users experienced a crash on launch with GlanceCam 4.1.1, but reverting to the previous 4.0 release solved the problem.<br><br>
The cause of this issue proved to be extremely elusive to debug: for 99.9% of Users the Sonoma upgrade went smoothly, and there were no apparent causes for the problem those unlucky few were experiencing; things were made mode complicated by the fact that, for weeks, I was not able to reproduce the crash on any of my Macs, so I had to build beta version after beta version searching for a clue... I really can't thank those Users – _David, Dino, Eli, Fred, Joachim, JP and Michel_ – enough for the help they provided and the exceptional patience they have shown!<br><br>
Finally, in the last few days and thanks to the aforementioned precious help from Users and insights from friends in the Swift development community _(Alexander, Jeff, John and Matt, I owe each one of you a drink if you happen to visit Italy!)_, I was able to narrow down what was going on; the problem occurred because of a peculiar combination of factors:
- Starting with macOS Sonoma, Apple changed significantly how credentials (usernames and passwords) in URLs are stored and handled; the new standard Apple enforces is more secure, but it really, really does not like some special characters inside usernames and passwords.
- All apps built with previous versions of Xcode still handle all URLs "the old way" even on the Sonoma, but apps and updates compiled with the new Xcode 15 are forced to adopt the new URL behavior as soon as they run on the new macOS. 
- If a URL does not contain special characters (@ / ? #) in the username and/or password, there is no appreciable difference between the old URL standard and the new one adopted by Apple in Sonoma.

_What do those things mean for GlanceCam?_
- Almost no GlanceCam User – including myself – uses special characters inside their camera credentials, and this explains why almost everybody upgraded without any issue and why, despite running Sonoma betas all summer, I did not catch this problem earlier nor I was able to immediately reproduce it when I was contacted by Users experiencing it.
- GlanceCam 4.0 was built with Xcode 14, so even the few Users who have special characters in their credentials have no issue running that version on Sonoma.
- GlanceCam 4.1.1 is compiled with Xcode 15; so, for the very small percentage of Users with special characters inside their credentials, installing GlanceCam 4.1.1 (or subsequent builds compiled with Xcode 15) triggered the automatic and unavoidable adoption of the new URL standard, which lead to a crash due to the presence of said unallowed symbols.

_What do I need to do as a GlanceCam User?_
- **If your usernames and passwords do not contain the offending symbols, you're good**. I'd just avoid adding them to credentials in the future.
- If you're one of those Users with special characters inside some of your credentials and GlanceCam 4.1.1 crashed for you, the good news is that this new version replaces those unallowed characters with their corresponding percent-encoded values _(technical speaking that means a @ symbol is written out as %40, so that it does not cause problems, but the machine still reads it as @)_, so **the crashes are gone**.<br>
  What **I cannot promise you is that this change will work with all camera models out there**: you might be able to successfully stream your camera even with the special characters automatically percent-encoded, or it might not work and you might now see a grey screen with a spinner, while with version 4.0 the stream loaded successfully with the same URL.<br>
  If the stream does not load, considering that the new URL standard is here to stay and there's nothing that GlanceCam (or any other app) can do to avoid it, the only solution I can recommend is to **change the device credentials to remove all occurrences of the unallowed symbols** (@ / ? #); after you have changed your username or password in the device configuration page/app, please update the string inside GlanceCam Settings with the same credentials.<br>
  Having to ask you to change your device credentials is the _last_ thing I want to do as a developer, but after trying everything, I'm afraid we need to accept that a change that the operating system enforces is not something we can really avoid; please know that I am sorry for the inconvenience this causes you and that I tried my best to fix this obscure and complicated problem as quickly as possible.

One last bit... this version also includes a few of additional improvements born out of this unfortunate experience:
- When an invalid character is detected in some credentials, GlanceCam doesn't just percent-encode it, but also shows a warning symbol inside Settings, which you can click to know more details about what's been described above.
- When you contact me for assistance via the _Support menu_ > _Contact support via email_, a privacy-focus report is generated and included in the message to help with troubleshooting, but on a couple of occasions that report was truncated on Sonoma; this version includes a fix to that issue.
- Users who don't have Apple Mail set as their default email client (for instance, Gmail Users) can now copy the auto-generated report and then manually paste it into their application of choice before contacting me for assistance; to do so, please click the _Support menu_ > _Copy support report for other email clients_.<br><br>

As always, I remain available at [support@cdf1982.com](support@cdf1982.com) if you need assistance with anything.<br><br>
**I want to take this opportunity to wish you a joyful holiday season and a wonderful start to 2024!**<br><br>
Ciao, _Cesare_

<a name="4_1_1"></a>
### GlanceCam 4.1.1
#### September 26, 2023

GlanceCam is **ready on day one for macOS Sonoma** and includes **multiple improvements**. I recommend to **review the release notes for GlanceCam 4.1 below** (the previous version from today) to find out about everything that's new this September.<br><br>
This version 4.1.1 reverts the video engine to the one previously used in the app: earlier today a crash on launch on Intel Macs running Big Sur has been reported, and then I was able to reproduce the issue on Mojave; to be safe and as fast as possible in addressing a potential issue, I decided to immediately return to the established, rock-solid engine that's been in use for years, up to GlanceCam 4.0.<br><br>
First of all, **I would like to personally apologise to everyone who might have been affected by that crash**: making GlanceCam as reliable as possible is my first and most important goal, and actually the reason I was launching an update for Sonoma on the day the new macOS ships.<br><br>
I also want to thank Luca for immediately reporting this to me, and assure all Users that I immediately dropped everything to provide this update as soon as possible.<br><br>
As for the newer version of the open-source video engine I use in GlanceCam, I still plan to re-introduce it in a future release (it had the potential to be slightly faster), as soon as any issue on older operating systems – which I'll report to the open-source community later today – will be completely resolved.<br><br>
Finally, I've been able to snuck in a small feature update in this release: **in GlanceGrids, when clicking while holding down the Command key, you now have the option to move the selected Camera to the previous or next spot**.<br><br>
**Please consider leaving a 5-star review, upgrading to GlanceCam Pro or leaver a (very much appreciated!) tip support the app and keep development going**... and if you have any suggestion or need assistance, I'd love to hear from you (_Support_ menu > _Contact support via email_)!<br><br>
Ciao, _Cesare_

<a name="4_1"></a>
### GlanceCam 4.1
#### September 26, 2023

Welcome to GlanceCam 4.1! This release is **ready for the new operating system** and includes **multiple improvements**:
- **It's now possible to customise the double-click behavior for GlanceGrids**: by default, double-clicking a GlanceGrid window will maximise the whole grid full-screen, but from the GlanceGrid settings panel you can now change it to send full-screen the single camera below the mouse pointer, or spun up a separate window for the camera you're double-clicking. I want to thank Tim and Mike for suggesting this feature.
- **Opening Settings from the gear icon in the upper right corner of a camera window now pre-selects that Glance in the Settings panel**, instead of always defaulting to the first one in the list; special thanks to Dirk for recommending this feature, and also the next one!
- **GlanceCam Pro can now optionally rotate a video stream by 90°, 180° or 270°**; to learn more about this capability and enable it, please click on _Rotate stream_ in the _Advanced stream tweaks_ of a camera in Settings.
- Thanks to Timo-Pekka's' suggestion, there are **3 new AppleScript commands that extend the automation capabilities** of GlanceCam: **reload** will, ahem, reload the stream in all windows, while **stop playback** and **resume playback** will allow to manually control playback for all the cameras that are currently streaming; please be advised that stopping/resuming a large number of cameras can occasionally cause issues. To learn more about GlanceCam's AppleScript support and for syntax examples, please refer to the FAQs available in the _Support_ menu > _Frequently Asked Questions_.
- Connected to the previous feature, there's now a **Stop / Resume** Glance menu item to manually toggle on and off playback of the streaming of a single camera; this function can also be triggered by pressing the P key without modifiers while a window is active and might be useful if you don't need to look at a camera for a while, but don't want to close the window.
- A bug when switching cameras while in full-screen, kindly reported by Cody, has been fixed.
- The app now uses a new, future-proof approach for the _Launch automatically at login_ feature; if you already had GlanceCam configured to open automatically when your Mac starts, that setting should migrate and work without the need for you to perform any action.
- Starting with this release, GlanceCam adopts the latest version of the VLCKit video engine, with many improvements in performance and reliability.<br>

**If GlanceCam is useful to you, 5-star reviews, GlanceCam Pro upgrades or tips are very appreciated and keep development going**... and if you have any suggestion or need assistance, I'd love to hear from you (_Support_ menu > _Contact support via email_)!<br><br>
My best, _Cesare_

<a name="4_0"></a>
### GlanceCam 4.0
#### June 2, 2023

**GlanceCam 4 is here! This major new version introduces GlanceGrids and lots of improvements.**<br><br>
Let's start with **what GlanceGrids are and why I think you'll love them**.<br><br>
Having multiple cameras in a single grid is one of the most requested features by GlanceCam Pro Users.<br><br>
Personally, I've often found regular grid implementations pretty limiting, because you have to decide in advance if you want a 2x2 or a 4x3 layout and then you're stuck with it; so, I spent the last 18 months building something different and, I'm confident you'll agree, better...<br><br>
**A GlanceGrid is a preset of multiple cameras displayed in a single window with a flexible layout that automatically adjusts from a grid (2x2, 3x3, etc.) to a single row (i.e. 8x1) or column (1x8) based on the window's resizing.**<br><br>
Let's say you have a Home preset with 4 cameras and an Office preset with 3; you can open the Home 2x2 grid and, only while working, spun up the Office preset in a different window, resizing it into a column layout (all 3 cameras one above the other); when you're done working and you can finally catch up on Husky videos on YouTube, just close the Office window with a single click and stretch the Home one into a single 4x1 row at the bottom of your screen to get more space available for furry cuteness.<br><br>
There is **no set limit to the number of concurrently playing cameras** (except for network bandwidth and CPU power, of course, but I'm proud to report that GlanceCam 4 is even more efficient, especially on Apple Silicon) and just like with multi-windows, you can open separate GlanceGrids, each with a different preset and layout; is also **possible to mix single-camera windows, GlanceGrids and USB-cameras**.<br><br>
Beloved features like Always on Top, keyboard shortcuts, action buttons, and Insta-zoom are still available with GlanceGrids; you can even customize Insta-zoom's behavior to temporarily maximize just one "tile" of your grid, or make the whole grid as big as possible while you hold down your mouse's right button. And what you can customize for GlanceGrids doesn't stop there: you can tweak the inter-camera black space, set a maximum number of columns, and have a GlanceGrid window "auto-snap" when resizing it to avoid black space below the last row of cameras.<br><br>
**When you're ready to try GlanceGrids, which are included in GlanceCam Pro, just click on File > Add GlanceGrid window (or use the CMD + G keyboard shortcut).** And don't forget that, just like with any other feature, each interface element has a _tooltip_ that appears when you leave your mouse pointer still on it for a moment, and that will explain everything you need to know to take maximum advantage of every powerful feature.<br><br>
A couple of implementation notes about GlanceGrids: they do not currently support the Minimalistic interface; cameras included in grids default to 16:9 (custom aspect ratios forced in Settings remain applied when a camera is displayed in a single window); the keyboard shortcuts for quickly resizing a window have been tweaked just for GlanceGrids, so their behavior differs slightly from what you're used to with single-camera windows but is more appropriate for this use case; finally, you may notice some flickering occur occasionally while resizing a grid window, and then going away as soon as you're done resizing.<br><br>
While GlanceGrids are a unique and cool feature, we're not done with what's new in GlanceCam 4... there are **lots of improvements to the standard version as well**:
- **Roll Up** is a new way to keep a camera you only occasionally look at active, but without taking up too much screen space: when this cool trick is enabled, you see that camera only when your mouse pointer enters the window area and, as soon as you move your mouse away, the camera "rolls up" leaving only the title bar visible; moving the mouse on the title bar again makes the camera re-appear. If you were around for WindowShade, you'll love this. You can activate/deactivate Roll Up by pressing the R key without modifiers.
- GlanceCam is now **more secure**: by enabling _Require authentication to open Settings_ (in _Settings_ > _Behavior_), you can make sure that your camera URLs and the included credentials cannot be seen by other people with access to your Mac. This optional security safeguard doesn't make it less convenient to tweak your settings either, because you can use Touch ID, your Apple Watch, or your Mac password to authenticate.
- Exporting your cameras for backup, or importing previously exported files, always requires authentication for improved security.
- You can now **customize how many times GlanceCam will try to restore a connection in case a video stream is disrupted** (_Settings_ > _Behavior_ > _Number of reconnection attempts_).
- There's a **new contextual menu** for quick access to frequently used features of single camera windows and GlanceGrids; usually, these menus on macOS are activated with a right-click, but Insta-zoom has been bound to that mouse button for years and is too important a feature for Users to be replaced, so the way to make the context menu appear is instead by clicking on a camera with the left mouse button while holding down the Command key.
- The diagnostic report that GlanceCam auto-generates when you contact me for assistance (_Support menu_ > _Contact support via email_) now **automatically removes your credentials** from URLs.
- Whenever a new version of GlanceCam is installed, a window will automatically appear showing you what's new. I know, my release notes are long, but there's always something new that's cool and useful to try, and I wanted to provide an additional chance for you to know and take advantage of the last update.
- **Bugs have been squashed!** Special thanks to Graziano for noticing an issue with Cycle mode, to Mel for reporting that switching cameras via the URL scheme wasn't working as expected, and to Michael for pointing out an unexpected overlapping behavior with Insta-zoom. This version also improves how Insta-zoom handles multiple screens: with previous versions, when the zoomed window was on the right half of the screen it "escaped" on the other screen with a completely wrong size; now it remains, maximized, only in the active screen.
- While for 99% of Users GlanceCam displays the expected aspect ratio of the video stream "out of the box", some cameras require special tweaks; in addition to the existing GlanceCam Pro custom aspect ratios (4:3, 16:9, etc.), there are two new special (and rarely needed!) options, **Freeform and Delayed mode**; you can learn more about them in Settings.<br>

A final note, GlanceCam now requires macOS 10.14 Mojave.<br><br>
So many hours of design, development, and testing went into version 4, **I really wish with all my heart you'll love it**.<br><br>
I am constantly grateful for people using GlanceCam, and I hope you'll appreciate the continued commitment _(this is the 32nd update since 2018)_ to make it the best Mac app possible; if you do, **please leave a 5-star review** _(it makes so much difference!)_ and **consider upgrading to GlanceCam Pro** or, if you already did _(thank you SO MUCH!)_, to **leave a tip**! There are buttons to do these things below 😉.<br><br>
And, as always, **all feedback is very welcome, as well as any request for help you might have**; please reach out via the _Support_ menu > _Contact support via email_ and I'll get back to you as soon as possible!<br><br>
Ciao e grazie! _–Cesare_

<a name="3_8_2"></a>
### GlanceCam 3.8.2
#### November 17, 2022

This update fixes a couple bugs and layout issues reported by Diggory over the week-end (thank you so much for helping me improve GlanceCam!) and also restores the CMD+3 keyboard shortcut to maximize a window within the screen bounds, which I accidentally broke in the last update (sorry!). –Cesare

<a name="3_8_1"></a>
### GlanceCam 3.8.1
#### November 11, 2022

Quick update with a couple of small bug fixes to GlanceCam 3.8, which improved 'Out of my way', introduced 'Stay out of my way' and included an updated video engine.
<br><br>
Out of my way is the cool and beloved GlanceCam feature that allows you to grab a file or access another app below a camera window, even when Always on top is enabled.<br>
You can trigger Out of my way by holding down the Shift key while moving your mouse pointer into the window area; when you do so, the window bounces to the opposite side of the screen for an certain time interval and then, after that delay, it returns automatically to the original position.<br>
Until today, Out of my way duration was fixed to 3 seconds, but you can now pick your desired delay between that minimum and 15 seconds by adjusting a slider in Settings > Behavior.
<br><br>
And if you've come to rely on Out of my way, you'll love Stay out of my way: if you hold down Command and Shift while moving your mouse pointer into a GlanceCam window, you'll send it to the opposite side of the screen permanently, until you manually move it to another position.
<br><br>
I want to thank Dirk for recommending both features!
<br><br>
Finally, GlanceCam video engine has been updated to the latest and most reliable version, with minor bug fixes and improvements to make things work even better.
<br><br>
As always, 5-star reviews, GlanceCam Pro upgrades or tips are very appreciated, and keep GlanceCam development going... and if you have any suggestion, I'd love to hear from you at [support@cdf1982.com](support@cdf1982.com). –Cesare

<a name="3_8"></a>
### GlanceCam 3.8
#### November 10, 2022

Ciao! This new version improves 'Out of my way', introduces 'Stay out of my way' and includes an updated video engine.
<br><br>
Out of my way is the cool and beloved GlanceCam feature that allows you grab a file or access another app below a camera window, even when Always on top is enabled.<br>
You can trigger Out of my way by holding down the Shift key while moving your mouse pointer into the window area; when you do so, the window bounces to the opposite side of the screen for an certain time interval and then, after that delay, it returns automatically to the original position.<br>
Until today, Out of my way duration was fixed to 3 seconds, but you can now pick your desired delay between that minimum and 15 seconds by adjusting a slider in Settings > Behavior.
<br><br>
And if you've come to rely on Out of my way, you'll love Stay out of my way: if you hold down Command and Shift while moving your mouse pointer into a GlanceCam window, you'll send it to the opposite side of the screen permanently, until you manually move it to another position.
<br><br>
I want to thank Dirk for recommending both features!
<br><br>
Finally, GlanceCam video engine has been updated to the latest and most reliable version, with minor bug fixes and improvements to make things work even better.
<br><br>
As always, 5-star reviews, GlanceCam Pro upgrades or tips are very appreciated, and keep GlanceCam development going... and if you have any suggestion, I'd love to hear from you at [support@cdf1982.com](support@cdf1982.com). –Cesare

<a name="3_7_1"></a>
### GlanceCam 3.7.1
#### November 4, 2022

A quick update with a few small fixes:
- By default, Cycle mode now pauses when your screen locks (i.e. the screen saver starts) and resumes automatically when it unlocks. If you have "Never pause playback" enabled in Settings, though, the cycle will continue even when the screen is locked. When your Mac goes to sleep, Cycle mode will always pause itself and automatically resume when the computer awakes.
- On recent version of macOS and with many Glances configured, the Settings window might have opened with the list of cameras "scrolled down", hiding the first entry; now, when you open Settings, the first Glance is always the one you'll see at the top of the list.
- The tooltips for Cycle mode now include this clarification on the behavior of this feature: "Finally, a note about Cycle mode and cameras with different aspect ratios: usually, GlanceCam detects the aspect ratio of a video stream and resizes the window to avoid "black bars"; this is intentionally disabled in Cycle mode because having cameras with different aspect ratios cycle would cause a periodic resizing "dance" which would be distracting to see."
Thank you so much for letting me know you love Cycle mode as much as I do! –Cesare

<a name="3_7"></a>
### GlanceCam 3.7
#### November 1, 2022

Let's kick off November with a cool update meant specifically for GlanceCam Pro Users: Cycle mode!<br>
Before I detail what Cycle mode is, rest assured lots more is coming to all GlanceCam Users soon (this is the 5th update in less than a month... releasing the Apple silicon version unlocked lots of mental energy for yours truly!), but it's been a while since the last "Pro-only" advanced feature was added, and this is a good one.
<br><br>
First of all, thank you to James, Steve and Shawn, who have asked for a way to cycle through different cameras in a single window.
<br><br>
Cycle mode makes that possible: choose one of your windows and have it rotate some or all of your Glances (cameras) according to a time interval you define. This is especially useful with a large window or while the app is full screen.<br>
While only one window can be put in Cycle mode, you can still keep as many others "single camera" windows open while this rotation is enabled.
<br><br>
By default, all cameras are included in Cycle mode with a 30 seconds time interval dedicated to each one, but you are free to decide which Glances you want to include and for how long they should remain on screen.<br>
Intervals can be configured in the 10 to 60 seconds range, in steps of 10 seconds, and can be different between cameras included in the cycle. Please note that longer intervals are preferable, especially for remote cameras, as the timer starts when loading the stream begins, not when the image appears; so, if a camera takes 5 seconds to show the image and the cycle is set to 10 seconds, you'd only see the image for 5 seconds before switching to the next one.
<br><br>
You can enable Cycle mode by selecting the Glance menu > Enable Cycle mode, or by pressing the C key without modifiers while the window you want to enable it for is active; the same menu item or keyboard shortcut disables it, as it does saving any change to Settings or quitting GlanceCam (Cycle mode is not persisted between launches of the app).
<br><br>
Here's an example of how Cycle mode can be configured: let's say you have 3 Glances configured; you might include camera 1 in Cycle mode and keep it visible for 30 seconds, exclude camera 2 and include camera 3 for 10 seconds. When you turn on Cycle mode, camera 1 and 3 will alternate, with Glance 1 remaining visible for 30 seconds and Glance 3 only for 10, with a total duration for the cycle of 40 seconds before it starts again.
<br><br>
I hope you'll love this new feature... it's already one of my favorites!
<br><br>
As always, your feedback at [support@cdf1982.com](support@cdf1982.com) is what keeps development going (while your Pro upgrades and tips keep the lights on ;)
<br><br>
Ciao from Italy, Cesare

<a name="3_6_1"></a>
### GlanceCam 3.6.1
#### October 29, 2022

This minor update restores the Out of my Way functionality on Ventura, after a regression that's been reported by a few Users (thank you!).<br>
Out of my Way is the cool GlanceCam feature that allows you grab a file or access another app below a camera window, even when Always on top is enabled.<br>
You can trigger Out of my Way by holding down the Shift key while moving your mouse pointer into the window area; when you do so, the window bounces to the opposite side of the screen for 3 seconds and then, after that delay, it returns automatically to the original position.<br>
If you've never tried it, it's a quite useful "dance". GlanceCam has lots of cool tricks and shortcuts like this one, please check the [FAQs](https://cdf1982.com/glancecam/faqs#shortcuts) to discover them all!<br>
As always, please don't hesitate to reach out at [support@cdf1982.com](support@cdf1982.com) if you have suggestions or problems you think I can help with, and thank you for your support of GlanceCam! –Cesare

<a name="3_6"></a>
### GlanceCam 3.6
#### October 23, 2022

GlanceCam 3.6 for Ventura is here, fully compatible with the new release of macOS and Stage Manager.
<br><br>
This version also introduces an optional Zoom feature that's been requested by some Users a while back (thank you both for the suggestion and patience, Gretar and Olof!).
<br><br>
GlanceCam works great on macOS 13 Ventura and is amazing in combination with Stage Manager, behaving exactly as you'd expect: with Always on Top enabled, your cameras remain visible in all Stages, just like they did (and do) with Spaces; if you don't use Always on Top in combination with Stage Manager, GlanceCam behaves like all other apps, moving to the side when you switch applications... but your camera preview remains live on the left sidebar even when it's not on the main stage!
<br><br>
Zoom mode is available to all GlanceCam Users and might be useful for occasionally taking a closer look to a section of the stream. Here's how it works:
- You can enable Zoom mode for the active window either by clicking the Window menu and then Toggle Zoom, or by pressing the Z key (no modifiers required).
- The same Toggle Zoom menu item or Z key disables Zoom mode, when you're done.
- When Zoom mode is active, the upper left area of the window displays a miniature of the whole camera, while the main area shows the zoomed-in image.
- The white rectangle you see in the miniature area corresponds to the currently zoomed-in section of the stream, and you can click within that rectangle and drag it around to move the magnified area.
- Below the miniature in the upper left corner, there's a small funnel shape that's only partially filled in white; if you click and drag up and down in the funnel-shaped area, you zoom in and out (as you zoom in, the funnel fills up, and vice versa).
<br><br>
A couple of additional notes on some implementation details of this feature:
- A window that has Zoom mode enabled cannot be moved around the screen by dragging its background, as you usually can do with all GlanceCam windows; this is because the drag interaction of moving the window conflicts with the drag interaction required to move the zoomed-in area. You can obviously move the window around by dragging its title bar.
- Each time you enable or disable Zoom mode, the video stream reloads; this is required because Zoom mode is implemented with the Magnify plugin of the amazing video engine GlanceCam uses under the hood, VLCKit, but it wouldn't make sense to always load (and therefore show) the plugin for a feature that's only needed occasionally by a small number of Users.
- Zoom mode is not persisted between sessions: it's always turned off when you launch the app or open a new window, but when you enable it, it remains active until you disable it again or close the window / quit the app; so, if you change camera in a window that had Zoom mode already on, the Zoom will be enabled for the stream you're switching to.
- If you're a GlanceCam Pro User (thank you!), you can put as many windows as you want in Zoom mode.
- Zooming capabilities are not available for built-in / USB cameras.
- If you save a Snapshot while Zoom mode is enabled, the image saved to disk will be the same you're looking at, with the miniature area and the zoomed-in view.
- The miniature area and the funnel are fixed in size in the plugin, and might appear quite small on Postcard or Regular size windows; Zoom mode works best with large windows or full screen.
<br><br>
If you've ever need to take a closer look to sections of your cameras or specific details, this convenience feature might be useful to you, and I hope you'll like it!
<br><br>
As always, reviews, Pro upgrades and tips are very much appreciated, and keep GlanceCam development going... and if you have any suggestion, I'd love to hear from you at support@cdf1982.com.

---
<a name="3_5_1"></a>
### GlanceCam 3.5.1
#### October 18, 2022

Thank you so much for all your loving words about GlanceCam for Apple Silicon! Here's what's new today:

- If you have multiple displays, new windows are now created at the center of the active screen (the one with the mouse pointer), instead of always on the main one;

- Keyboard shortcuts for resizing a window to 'Postcard' (⌘ 0), 'Regular' (⌘ 1), 'Large' (⌘ 2) and 'As big as possible' (⌘ 3) are now disabled if such window is currently full-screen.

Finally, I have an apology to make: in the release notes for GlanceCam 3.5 I asked Users running High Sierra to contact me (and I still need to hear from you, please read at the bottom of version 3.5 release notes); one of you did with a kind and useful email that I read in the middle of the night on my phone, but wasn't able to find the next morning, as I probably deleted it by accident (yeah, reading emails without glasses at night, not a great idea). I feel bad for not responding, so if you're reading this, would you please forward your email to this clumsy developer? I'm very sorry, and thank you!

---
<a name="3_5"></a>
### GlanceCam 3.5
#### October 12, 2022

After SO. MUCH. WORK. GlanceCam for Apple silicon is here!<br>
The performance difference you'll notice on new Macs proves the effort was worth it: CPU and RAM usage decrease significantly, while everything else works as reliably as you're used to!<br>
My goal was to make the transition less noticeable as possible – except for performances, of course – while building the foundations for the next 10 years of GlanceCam. I'm happy with the results and hope you'll be too!

Please know it wasn't for lack of trying that this major update didn't ship earlier: while Rosetta2 granted excellent performances, I've been at work on native support since Apple's announcement.<br>
After many challenges, and thanks to the kind Beta Testers who helped me make this work great, the future of GlanceCam is brighter than ever.

I won't lie, what would make this launch perfect now would be for you to take a moment and leave a 5-star review ;) or maybe even consider going Pro if you aren't already, or leave a tip if you are.

As for new features, please know that with this major step forward finally in your hands, plenty is coming!

One last thing... I need to hear from Users who are running GlanceCam on macOS 10.13 High Sierra: in the last year, I've received 3 reports of issues on that operating system, but the way GlanceCam is built with privacy in mind means that I have no idea how many of you are still are running 10.13; and actually, you could be on High Sierra and have zero issues, especially if you don't have multiple windows open (the problem was a freeze when streaming multiple cameras concurrently). I've thoroughly investigated the issue and had to come to the conclusion that it's outside my control (it's an OpenGL bug in the OS fixed starting in macOS 10.14), therefore I need to at least consider the possibility to drop support for High Sierra in a future release. But if you're still using GlanceCam on 10.13 and have a good experience and no problems, I'd hate to leave you behind. Please, get in touch at support@cdf1982.com and let me know how's your experience running GlanceCam (and GlanceCam Pro) on High Sierra!

---

<a name="3_3"></a>
### GlanceCam 3.3
#### May 5, 2021

This was planned as a small update devoted to fixing obscure and rare bugs, but grew into a major release with two convenient new features:

1. "Out of my way" is a trick you'll love and is available to all GlanceCam Users!
You know how sometimes you want to grab a file below a GlanceCam window or access something behind it, even if Always on top is enabled?
You can now hold the Shift ⇧ key while you move your mouse into the window area and make it bounce to the opposite side of the screen for 3 seconds; after that delay, your window will return to the original position.
Since the Shift key is not used by the operating system as a modifier while dragging files, you can begin to move an icon, realize a GlanceCam window is the same spot where you wanted to drop it, and only at that point hold ⇧ to get GlanceCam out of your way for a moment; the only requirement is that you start pressing Shift before your mouse enters the window area, and then you can release it immediately after the window starts bouncing to the opposite side of the screen.
If you hold the Shift key and move your mouse over multiple windows, they will all bounce; those in the left half of the screen will align to the right edge, while those in the right half will go to the left edge.
You'll need to wait 3 seconds and allow a window to return to its original position before you can invoke Out of my way again.
A big thank you to Dirk for inspiring this feature!

2. You can now display video from a built-in or USB camera directly attached to your Mac; while this is not a key feature of the app, it has been requested in the past and might be convenient, so now all GlanceCam Users can do so by clicking 'Add Window for built-in / USB camera' in the File menu (or with the ⌘ B keyboard shortcut). A few details about this niche feature:
- GlanceCam Users can open one built-in / USB camera window in addition to the standard GlanceCam window; GlanceCam Pro allows to open as many windows of this type as you need.
- This "transforms" GlanceCam into a realtime viewer for such attached cameras, but does not mean that you can use this app to send cameras' video to apps like Zoom... it's just for glancing at a different kind of camera.
- While it might seem similar to a regular GlanceCam camera, this special window is quite different, as it uses a specific video engine and required to tweak almost everything. Not everything possible in a standard GlanceCam window is available for built-in and USB cameras: there is no audio support, Always on top can only be toggled on and off for all windows, HTTP GET actions are not available, as aren't snapshots...
- The basic functionality you might need is there, though: the special window can go full-screen, supports Always on top, can be resized with shortcuts (you need to prepend the Shift key to usual combinations), and remembers its size and which device was last selected; it  has the usual dropdown button for selecting different sources (if, for instance, you have both the built-in MacBook Pro camera and a USB device), which again is also possible with keyboard shortcuts.
- If you quit GlanceCam with one built-in / USB window open, it will reopen the next time you launch the app; but only one built-in / USB camera window will reopen, so in the rare case that you have two or three, you'll need to manually reopen the additional devices.
- You might even decide to "bend" GlanceCam use case to only display built-in and USB devices and no IP camera, even if it's not what the app has been designed for.
- This feature has been tested with a wide range of built-in cameras and USB devices, including the app Camo, and works well, but it's not perfect, nor compatible with every device out there, so your success using this feature will depend on your hardware.

As always, please don't hesitate to contact me at support@cdf1982.com and, if you find GlanceCam useful, please consider leaving a 5 star review. Thank you! –Cesare

---

<a name="3_2_1"></a>
### GlanceCam 3.2.1
#### March 19, 2021

Minor fix to the just released GlanceCam 3.2, but you might need to adjust one setting after this update: please select again your default InstaZoom camera for the global keyboard shortcut, if you already chose one... and if you don't know what I am talking about, below you can find the release notes for GlanceCam 3.2, explaining a cool new feature.

If you like details: there was a bug, now fixed, that caused cameras with the same name not to be added twice to the InstaZoom list for default destinations; in theory this could have prevented to temporarily reopen Preferences after importing duplicate Glances. Quite an unlikely scenario, but I'm glad I caught this in my testing before it caused any issue to Users.

This minor release also allows me to point out that you can have global shortcuts associated with Function keys (for instance, Fn + F12), as I forgot to mention it in the previous release notes and tooltips (thanks Shawn!).

Have a great day!

---

<a name="3_2"></a>
### GlanceCam 3.2
#### March 18, 2021

GlanceCam 3.2 adds a cool new feature for all GlanceCam Users: global keyboard shortcuts. Inside Preferences, in the Behavior tab, you can now record your favorite key combinations to trigger two convenient workflow improvements:

-  Bring all GlanceCam windows to front;
- Insta-zoom the last window or one specific Glance.

Both shortcuts work when you are actively using GlanceCam and also while the app is open, but you are currently interacting with a different application (hence the "global shortcuts" name).

This means that you can record any combination, for instance ⌘⌥G, and use it bring all your cameras to front when you're in Safari, and set another shortcut, let's say ⌘⌥Z, to Insta-zoom a window while you are going through your emails.

This is even cooler because GlanceCam does not steal focus from the app you were in, so you can use these shortcuts without switching context.

'Bring windows to front' is pretty straightforward: you press the key combination and GlanceCam's window, or windows if you use GlanceCam Pro and have multiple cameras open, all come to front, even if you don't have Always on top enabled.

'Insta-zoom' is possibly even cooler, but can use a little introduction.<br>
It's an expansion of a beloved feature that long existed in GlanceCam, but only worked with the mouse / trackpad until today: the traditional Insta-zoom allowed (and continues to allow) to right-click and hold your mouse button on a window to maximise it temporarily, so that you can take a good look, and then when you stopped pressing the the mouse button the window returned to its original size.<br>
Now you can do the same thing with your keyboard, even when GlanceCam is running in background, and there's a neat superpower: you can Insta-zoom a camera that's not even open at the moment!<br>
Just like with the right mouse button, Insta-zoom is executed only while you keep the selected keys down, and the camera returns to its previous size when you stop pressing them.<br>
By default, Insta-zoom works on the last window you interacted with, but you can select a different Glance to always be activated and Insta-zoomed when you press the shortcut; if that camera is not currently streaming, it will be selected in the current window or, if you have GlanceCam Pro, it will be displayed in a new window.<br>
If GlanceCam has to select a camera not currently open for Insta-zoom, you'll need to keep the shortcut keys pressed while the stream is loading.
When you stop pressing the shortcut keys, the Glance you Insta-zoomed will return to the normal size and remain open.<br>
There's only one small caveat: to avoid the window you zoomed temporarily to become active, the only alternative was to send it behind all other windows when you're done (unless you have Always on top turned on... in that case the window obviously remains visible).<br>

When you record these shortcuts, you need to use one or more of the following modifiers plus a letter or number:

> ⌘ Command<br>
> ⌃ Control<br>
> ⌥ Option<br>
> ⇧ Shift<br>

The system checks if the shortcut is not currently registered by another application, so the perfect combination you had in mind might not be available.

This was a fun feature to build, and one I believe can bring great convenience in day by day use of GlanceCam. A special thanks to Eli for suggesting a keyboard shortcut for Insta-zoom a while back!

As always, I will be incredibly grateful if you’d take the time to leave a 5-stars review of GlanceCam, if it's useful to you! –Cesare

---

### GlanceCam 3.1
#### March 15, 2021

Thank you so much for welcoming GlanceCam 3 with enthusiasm and for loving GlanceCam Pro with multi-windows! A few improvements are already here:

- I've heard your feedback! Some of you did find how to add new camera windows a bit confusing at first; now there's a button in the upper right corner of each window that does just that... convenient for everybody!<br>Obviously you can continue using the File menu > Add window, the ⌘ N (CMD + N) keyboard shortcut or, if you want to open a specific camera in a separate window, holding the ⌥ (Option) key down while clicking on a name in the dropdown button (which appears when you have multiple cameras and hover your mouse inside the current window).

- The Dock menu improves in small but convenient ways: right-clicking on the GlanceCam icon now gives you not only the list of current windows and the ability to go to the next or previous camera, but also to reload it, to perform the optional HTTP GET actions and to toggle Always on Top and Audio for all windows.

- Fixed a small bug caused the first window to slide down a few pixels at launch when using Minimalistic UI.

- One User reported a visual glitch (a small artifact in the lower right corner) caused by an old workaround to support both the + key and spacebar for skipping to the next camera; the glitch is gone while both shortcuts are still here.

- I might have fixed the longest standing bug: there was a rare and hard to reproduce scenario that could cause GlanceCam to crash immediately after saving Preferences, if the camera in the current window was not yet streaming when Preferences was opened.

Last week's launch went beyond any expectation, including happy emails from many Users and nice reviews in the Tech Press (thank you iMore!); possibly, the last thing missing is a few more 5-star reviews, since they really make a huge difference in App Store ranking... would you help me with those?

Thank you! –Cesare

---

### GlanceCam 3.0
#### March 11, 2021
GlanceCam 3 is here and it's the biggest update yet! Let me just say "multiple cameras at the same time" and I'll probably have your attention... :)
After 2 years of development, there are many new features, improvements and a gorgeous new icon, so let's unpack them all, starting with GlanceCam Pro.
GlanceCam Pro is now available as an optional purchase for Users with advanced requirements: multi-windows, a Minimalistic user interface, custom aspect ratios for the cameras, priority support and 14 fun icons... Here's how each Pro feature works:

- GlanceCam's most requested feature, the ability to open multiple cameras at the same time, is finally ready! You can now open as many windows as you need, select which camera to view in each one, resize them independently and arrange everything "just right" around your screen.<br>GlanceCam remembers size and position of all windows and restores them after you relaunch the app, whenever technically possible.

- If you ever wanted to only see your camera stream, and nothing else, the optional Minimalistic user interface is for you!

- You can force a specific aspect ratio for cameras (not in full-screen), even specifying custom proportions. How well this works depends on your camera.

- GlanceCam 3 rocks a new, beautiful default icon designed by Becky Hansmeyer, but there's more: Pro Users can select a custom icon among 14 fun designs (most by me, but you'll probably like Becky's or Rob Poulter's more). The OS only allows icon changes while the app is running.

- I always try to provide the best support possible and with GlanceCam Pro I'm taking a step further: priority assistance via email, Monday through Friday, in less than 24 hours.<br>To have your support requests prioritised, please reach out from the Support menu > Contact support via email.

You might think that all the good stuff is reserved to GlanceCam Pro, but the regular version has a lot new to offer to all Users (and will continue to do so with new features and improvements at each release):

- A new Preferences window makes configuring GlanceCam simpler. Preferences are now easier to navigate, discover and customise, with tooltips everywhere and additional help to new Users setting up their camera. And now you can also reorder and duplicate cameras!

- GlanceCam 3 works great on Big Sur, and now requires at least macOS 10.13 High Sierra. M1 native support is in development.

- GlanceCam had supported Dark mode before Dark mode was cool... actually, it only ever supported it! Until now, that is. While Dark remains the default, you can now select Light mode or allow automatic switching.

- Stream format auto-detection: after playback starts, GlanceCam checks if the stream is not 16:9 and adapts the window accordingly.

- Resizing got better: the Postcard (CMD+0), Regular (CMD+1), Large (CMD+2) and As big as possible (CMD+3) shortcuts always behave consistently, no matter the resolution.

- Insta-zoom and full-screen mode got better too: they're both faster and more reliable on ultra-wide monitors.

- New in the Support menu:
	- Frequently Asked Questions.
	- Contact support by email now has one option to provide feedback and another to request assistance.
	- If you want to know more about GlanceCam Pro or check the status of a current subscription, please use the menu item with a heart emoji. You know, a heart, because GlanceCam Pro Users show their love for the app... ;)
	- You can also access the updated Privacy Policy and new Terms of Service in this menu and you should read them both.

- A weird one: you know GlanceCam has Always on top, to keep its window float above any other. Now it has Behind everything too, not nearly as useful, but some asked... Hover your mouse on the Eye icon for details.

- Minor bug fixes.

I am very grateful for you using GlanceCam, and my hope is you'll love this update I've poured so much work in. If you do, please leave a 5-star review (it helps a lot!) and consider GlanceCam Pro! 

Ciao e grazie! –Cesare

---

### GlanceCam 2.10
#### June 7, 2020
I hope you are safe and well! This new version 2.10 brings you a few helpful things for reliability and compatibility:

- GlanceCam now tries to detect if the connection to a camera is disrupted and, instead of leaving a deceitful frozen image on-screen, it tries to reload the video stream 3 times over the next 90-ish seconds; if the connection cannot automatically be re-established, you'll know because the window will remain grey, with a small red warning, until you manually reload it. I think this is much better than believing a camera il working when it is not, and in the tests that myself and a few Users have done since January, it has worked very well, so the feature is on by default. Please, let me know if you like this improvement or if you experience any issues!
- For each camera, there are now "expert tweaks" available in the app's Preferences. These are not settings most Users will need to adjust, but can be very helpful for special setups:
	1. If you have a mirror image, you can flip the stream vertically or horizontally (or both).
	2. By default, GlanceCam uses the RTSP over UDP protocol, which is perfect for most cameras and Users. If you regularly experience some significant delay when initiating the connection to the camera, or if you cannot establish a connection over a VPN (working from home, anybody?) or through a particularly aggressive firewall, you now have the option to enable RTSP over TCP, which in tests that myself and some Users have conducted in the last few months, in many cases could make a remarkable difference for both issues.
	3. If you own a 4K camera and notice some frames dropped while being on a good reliable connection (LAN or fast WiFi, as dropped frames at 4K via Internet could be caused by the line speed), then it's possible that increasing the video buffer could help keep your frame rate smooth. Now this option is available, though it won't be necessary (and it is not recommended, because it necessarily increases the memory used by the app, even though GlanceCam remains super-efficient) for Users with 1080p or lower-resolution cameras, and also for 4K cameras with already smooth playback.

These "expert tweaks" apply per-camera and, if you know what you are doing and have a complex setup, I think you'll love them.

I know this is not the multi-windows upgrade most were waiting for, but GlanceCam 3.0 is not 100% ready yet, and I didn't want to hold back on these helpful features.

As always, don't hesitate to contact me at support@cdf1982.com and, if you find GlanceCam useful, please consider leaving a 5 star review or, maybe, sending a tip (you can do so – and make my day – from the app's Preferences). Thank you! –Cesare

---

### GlanceCam 2.9
#### October 27, 2019
Version 2.9 adds the ability to export your list of cameras and actions (Glances, in GlanceCam's parlance) for backup and also for deploying the same set of cameras on multiple machines quickly and easily.

Obviously, since you can export, you can also import those files later or on different machines running GlanceCam; please, store your backups files safely, as they will include your devices IP addresses and credentials in human-readable format.

You can find Import Glances and Export Glances in the File menu and inside the app Preferences.

Under the hood this version also adopts a newer version of Swift, to future proof things even more.

A lot of work is going into GlanceCam's development: this is the 16th free update in around a year and a half! If GlanceCam provides you value, please consider leaving a 5 star review and, maybe, sending a tip (you can do so from the app Preferences). Thanks!

---

### GlanceCam 2.8
#### October 23, 2019
GlanceCam 2.8 is here and, while the app was already fully compatible with macOS 10.15 Catalina and I am currently hard at work on multi-windows support, I took a bit of time off today to improve its automation capabilities:

- The already existent URL scheme (glancecam://?camera=01, where 01 is the camera number as ordered in the app Preferences) now also works when the app is not running: it launches GlanceCam and *then* selects the camera you specified in the URL scheme.
- There's also a new action available via URL scheme, as requested by Hassan: glancecam://?fullscreen=true (or false) sets the fullscreen mode of GlanceCam on and off; please be advised that this is not a toggle: if GlanceCam is already fullscreen and you ask it to enter it again, by design nothing will happen.
- You can also combine multiple URL scheme actions in a single string: glancecam://?camera=02&fullscreen=true selects the second camera AND enters fullscreen... how convenient!
- GlanceCam now supports AppleScript too, both for switching cameras and setting the fullscreen mode:
```applescript
tell application "GlanceCam"
	select camera 2
	set fullscreen true
end tell
```

I always appreciate Users' feedback, and I think the features suggested recently and implemented with this update really helped improve GlanceCam in everyday use. If you agree and the app is useful to you too, please consider leaving a 5 star review and, maybe, sending a tip (you can do so from the app Preferences). Thanks!


---

### GlanceCam 2.7
#### March 28, 2019
Thank you for supporting GlanceCam with reviews, word of mouth and the occasional tip! Here's what is new in version 2.7:

- The toolbar in the upper-right corner now includes a couple of additional buttons for your convenience: the first to toggle audio on and off (if your camera supports it) and the other to reload the video stream if, for any reason like a lost network connection, the playback would freeze.
- Are you the lucky owner of a MacBook with TouchBar? Now you can change cameras and control the app directly from there.
- GlanceCam now has an URL scheme that allows to switch camera from outside the app! Your custom application or AppleScript can call the glancecam://?camera=17 URL and switch to that video stream; just replace "17" in the example URL with the camera number you want to switch to (as listed, counting from 1, in the app Preferences). A couple of additional informations for nerds: if the camera number is out of range or the URL string is incorrect, the switch operation fails "silently" to avoid interrupting the video stream and, for now and pending additional improvements, you can only switch to a different camera if GlanceCam was already running.

---

### GlanceCam 2.6.1
#### March 5, 2019
GlanceCam 2.6.1 automatically stops playback just before your Mac goes to sleep, and resumes it immediately after the system wakes up.

This helps stabilize the behavior of some camera models with the new continuous playback (an option to never pause the stream when the app is minimized or the screen is locked) introduced in GlanceCam 2.6: sometimes there was an issue when the Mac did wake from sleep and the video stream was frozen for a few seconds (or, in rare cases, did not resume at all).

Now the system's sleep/wake cycle determines the stream to be properly stopped and resumed.
For any support request, please get in touch at support@cdf1982.com.

As always, I will be incredibly grateful if you'd take the time to leave a review.

---

### GlanceCam 2.6
#### February 28, 2019
This update introduces a couple of features requested by GlanceCam's Users; being niche features, both are off by default and can be manually enabled in the app Preferences.

- Swipe left/right (with 2 fingers on trackpads or 1 finger on a Magic Mouse) to switch to the previous / next camera.
- By default, GlanceCam pauses playback when the screen is locked (i.e. the screensaver is running) or the app is minimized, but you can now enable continuous playback and never pause video/audio playback; if you enable this feature, on some camera models it might take a while before playback resumes when you wake your Mac from sleep (if you experience delays longer than 15 seconds after waking up your computer, would you please let me know?).

If you need help with anything, please get in touch at support@cdf1982.com and, if you have time, I would be incredibly grateful if you'd leave a review.
-Cesare

---

### GlanceCam 2.4.4
#### January 12, 2019
Thanks for supporting GlanceCam with reviews, word of mouth and the occasional tip! Here's what's new in this update:

- Insta-zoom (the feature introduced in version 2.4 that allows you to clic and hold the right mouse button to temporarily zoom the view) works better with high-resolution streams because now the zoomed window can never resize more than the actual screen size.
- When GlanceCam was not active, the "Save snapshot" floppy and the always on top "Eye" icons were a bit pale; now they are more defined and look better.

---

### GlanceCam 2.4.2
#### January 6, 2019
A minor bug has been fixed and the privacy policy is now accessible from the Support menu. Happy new year!

---

### GlanceCam 2.4.1
#### December 10, 2018
Fixed a bug that prevented GlanceCam to enter fullscreen mode and to appear in Exposé only when the app was set to be visible in all Spaces.

---

### GlanceCam 2.4
#### November 30, 2018
Just one new feature in this update, but it's a pretty useful one if you usually keep a small GlanceCam window in a corner of your screen.

You can now right-click and hold down the mouse button anywhere inside the window to temporarily zoom the camera at 2x of the natural size; when you release the mouse key, the window will return to its original size and position.

No animations, no manual resizing or keyboard shortcuts necessary: just an additional, quick way to get the most out of your cameras directly from your mouse and without interrupting your workflow.

As usual, a request for your support: please consider leaving a 5 star review and, maybe, sending a tip (you can do so from the app Preferences). Thank you!

---

### GlanceCam 2.3
#### October 2, 2018
This update introduces a few features requested by GlanceCam Users:

- GlanceCam now supports full screen mode (including side-by-side full screen with other apps); you can enter this mode by double clicking anywhere inside the app window, or with the usual green button in the upper left corner of the title bar. If you just want to maximize GlanceCam without going full screen (the previous behavior), press the ALT key while clicking the green button.
- The Next and Previous camera actions introduced in the last update are now available also by right-clicking GlanceCam's icon in the Dock.
- GlanceCam pop-up list of cameras (present only when multiple webcams are configured) can now be moved to the upper left corner or at the top center of the window; that's useful if your camera places informations like time or its name in the upper right corner, where the pop-up list used to be (and, by default, still is). You can choose your favorite position from the app Preferences.

I always appreciate Users' feedback, and I think the features suggested recently and implemented with this update really helped improve GlanceCam in everyday use. If you agree and the app is useful to you too, please consider leaving a 5 star review and, maybe, sending a tip (you can do so from the app Preferences). Thanks!

---

### GlanceCam 2.2
#### September 29, 2018
Mojave is here and GlanceCam (which has always had a cool dark look) works perfectly with this new release of macOS, especially now that a couple of minor visual glitches have been fixed.

This release also introduces useful keyboard shortcuts to switch between cameras: just press + or the spacebar to show the next camera and, shocker, the - key to return to a previous one.

Multi-camera support is still baking, and will probably take a little longer... sorry to keep you waiting! In the meantime, and as usual, reviews are highly appreciated, if you have the time!

---

### GlanceCam 2.1
#### May 16, 2018
GlanceCam just introduced multi-cameras and multi-actions support in version 2.0, but there's already something new and improved for you in this 2.1 release:

- Tooltips everywhere! If you're not sure about a button or a field, just hover your mouse and a helpful suggestion will appear.
- When you resize the window with a keyboard shortcut (CMD + 0, CMD +1 or CMD + 2) and the new size extends outside the screen, the resized window will bounce back to be fully visible.
- Sometimes, GlanceCam took the "always on top" preference a little too literally, and stayed actually on top of *everything*, including the screensaver; now that bug has been fixed.
- Another bug fix: in Preferences, when you added a new camera, the tabulation between textfields didn't behave properly; now everything works as expected.

I'm trying to make GlanceCam the best IP camera viewer possible, and Users' support helps a lot; if you can, please show your love with a review on the App Store or by leaving a nice tip inside GlanceCam's Preferences. Thank you!

---

### GlanceCam 2.0
#### May 8, 2018
This is a big update for GlanceCam: version 2.0 introduces multi-cameras and multi-actions support!

- You can now add as many webcams as you like (Settings > Add camera).
- The amount of actions you can perform for every camera is doubled: you can add up to 2 buttons with separate custom actions to every webcam.
- You can view one webcam at a time and switch between them by pressing the number keys (1, 2, etc...), or by selecting the camera name from the Dock icon or the Glance menu.
- From the menu bar and the Dock icon, you are also able to invoke actions for a camera that's currently not displayed.
- On top of that, a few bugs have been squashed.

I'm trying to make GlanceCam the best IP camera viewer possible, and Users' support helps a lot; if you can, please show your love with a review on the App Store or by leaving a nice tip inside GlanceCam's Settings (also new in version 2.0 :). Thank you!

---

### GlanceCam 1.3
#### April 6, 2018
Thank you for the warm welcome of GlanceCam! Here's what is new in version 1.3:

- Some IP cameras offer both audio and video in their stream; you can now enable/disable the audio from Preferences.
- Improved reliability of window resizing.
- Minor user interface tweaks.

If you find GlanceCam useful, please help other discover it with a review! You can leave one from the Support menu inside the app.

Thank you for using GlanceCam! Please, don't hesitate to contact us at support@cdf1982.com.

---

### GlanceCam 1.2
#### April 3, 2018
New in GlanceCam 1.2:

- You can now save a PNG snapshot of the video to your Pictures folder by hitting CMD+S, clicking the Save icon, or selecting "Save snapshot" in the File menu.
- GlanceCam didn't restore the window size and position between sessions; now that bug has been fixed, and it will stay just where you want it on your screen every time you launch the app.

Thank you for using GlanceCam! Please, don't hesitate to contact us at support@cdf1982.com.

---

### GlanceCam 1.1
#### April 1, 2018
This update introduces:

- New keyboard shortcuts for resizing the window to 50% (CMD+0), 100% (CMD+1) or 200% (CMD+2) of the original stream video size.
- A bug fix: GlanceCam 1.0 prevented the screensaver from starting; now the screensaver works as expected, and the video stream is paused not only when the app is minimized in the Dock, but also whenever the screen is locked.

Thank you for using GlanceCam! Please, don't hesitate to contact us at support@cdf1982.com.

---

### GlanceCam 1.0
#### March 2, 2018
Initial release.