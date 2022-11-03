---
layout: post
title: GlanceCam Release Notes
description:
image:
tags: [glancecam]
---
<a name="3_7_1"></a>
### GlanceCam 3.7.1
#### November 3, 2022

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