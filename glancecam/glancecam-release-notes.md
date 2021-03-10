---
layout: post
title: GlanceCam Release Notes
description:
image:
tags: [glancecam]
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

### GlanceCam 2.0
#### May 8, 2018

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