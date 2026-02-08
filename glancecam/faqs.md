---
layout: post
title: GlanceCam Frequently Asked Questions
description:
image:
tags: [glancecam]
---

- [What is GlanceCam and how does it work?](#what)
- [Is GlanceCam compatible with my camera?](#compatibility)
- [How do I configure my cameras?](#setup)
- [I need support!](#support)
- [Can I use GlanceCam with my DVR / NVR?](#dvr)
- [How many cameras can I add?](#howmany)
- [How do I open more than one camera at a time?](#newwindow)
- [What do I need to know about GlanceGrids in GlanceCam Pro?](#glancegrid)
- [Can I view a remote camera inside GlanceCam, or only LAN cameras are supported?](#remote)
- [Inside the app, I see the the words Glance and GlanceGrid used quite often. What is that?](#glance)
- [Does GlanceCam support H264 and H265? What about 4K cameras?](#formats)
- [Does GlanceCam play audio?](#audio)
- [What are GlanceCam's system requirements?](#requirements)
- [Does GlanceCam run natively on Apple silicon?](#applesilicon)
- [How much does GlanceCam costs? Are there recurring costs?](#price)
- [What is GlanceCam Pro? How much does it cost?](#glancecampro)
- [Is my personal data, video stream and / or credentials shared with anyone?](#privacy)
- [Can I sync my list of cameras between different Macs I own?](#sync)
- [Can I save a screenshot? Can I record video?](#recording)
- [I'd love to be able to zoom in on a specific section of a camera, can I?](#zoom)
- [What's an _Alternate_ and how can I use it to toggle between Glances?](#alternate)
- [Can I cycle (rotate) through some cameras in one window?](#cyclemode)
- [Is it possible to trigger notifications with motion detection?](#motion)
- [Does GlanceCam support pan and tilt (PTZ)?](#ptz)
- [Can I use GlanceCam to view webcams that are embedded inside websites, like zoo cameras?](#embeddedwebcams)
- [It would be great if you could add such and such features!](#requests)
- [What are the optional actions I can add to a camera as buttons?](#actions)
- [Are there tricks that can speed up my workflow with GlanceCam? What about keyboard shortcuts?](#shortcuts)
- [Is it possible to automate GlanceCam in some ways?](#automation)
- [Does GlanceCam work on my iPhone / iPad / Apple TV / PC / Android phone?](#otherplatforms)
- [I have a question that is not listed here. Can I contact you](#otherquestions)
<a name="what"></a>

---


#### What is GlanceCam and how does it work?
> GlanceCam is an **IP camera viewer great for realtime streaming on macOS**.<br>
> More people every day buy inexpensive IP cameras and GlanceCam makes the experience of streaming one, or 50, so much nicer!<br>
> As a native Mac client with support for standard streaming protocols, it allows **to keep an eye on cameras from different brands in a secure way** and without dealing with multiple clunky web apps or obsolete applications.
<a name="compatibility"></a>

---


#### Is GlanceCam compatible with my camera?
> GlanceCam is **compatible with most IP cameras**; the only requirement is for the camera to support **standard streaming protocols** such as RTSP, HTTP(s) or RTMP. Most do.<br>
> You can check if the camera is compatible with those protocols on the manufacturer's website or in the manual.
> Please be advised that RTSPs is not supported, but most systems (like Ubiquiti Unifi) can fall back to RTSP with the proper configuration, please [get in touch](#support) so I can help you get started!
<a name="setup"></a>

---

#### How do I configure my cameras?
> This is by far the longest answer in these FAQs; I apologise for that, but I need to cover a lot of scenarios and build a sort of tutorial for every level of experience... hopefully this is helpful, and if it's not, please [get in touch](#support)!
>  
> Before we start, it's important that you try configuring GlanceCam on a computer that is connected to the same network (LAN / WiFi) of your camera, because streaming via Internet, while [possible](#remote), inevitably introduces a series of additional things to figure out (port forwarding, static IP or dynamic DNS, etc.), and it's best if you confirm the proper string format first and deal with such networking aspects when you already know the camera is compatible and works.
>  
> **Configuring an IP camera to stream with GlanceCam requires two things:**
> 1. **Knowing the camera IP address, username and password**;
> 2. **Figuring out what string format the camera requires** to stream with a third party application like GlanceCam. Such strings begin with the protocol used for streaming (in most cases RTSP), continue with the credentials (username and password), then the camera IP address in the local network, the port (usually 554 for RTSP) and finally a path that is defined by the camera manufacturer and completely depends on the model and we need to only retrieve and use "as is".
> 
> **Customising that string format (#2 above) with yout personal informations (#1) gives you the string that you'll need to paste inside GlanceCam's Settings, in the 'IP camera video stream' field (which you can see in the following screenshot), to successfully stream your camera**.
> 
> ![](preferences.png)
> 
> **Let's see an example**, and then how to figure out the informations you don't yet have, or how to receive support if you're having issues configuring your cameras:<br>
> You own a Hikvision camera and want to stream it with GlanceCam.<br>
> First, you need the camera IP address, username and password (per point 1 above). Only you can retrieve these strictly personal informations, and that's a good thing for security reasons. If you don't have them, you might search in the camera manual, on a label below the camera itself or in the camera configuration page / app.<br>
> In this example, the username is 'mickey', the password is 'rodent' and the camera IP address is 192.100.020.008.<br>
> Then, you need the string format (per point 2 above). Luckily, your camera manufacturer is a good one and printed it out clearly in the manual: rtsp://USERNAME:PASSWORD@CAMERA-IP:554/Streaming/Channels/101/<br>
> Not all manufacturers do a great job on this, but below we'll see how in most cases we can still find this essential information.<br>
> Now let's combine our personal informations with the string format Hikvision told us to use in the manual: rtsp://mickey:rodent@192.100.020.008:554/Streaming/Channels/101/<br>
> This is the string we need to paste inside the 'IP camera video stream' field of GlanceCam's Settings, and then save; if the credentials and IP are correct and the string format and port are also what the camera requires, in a few seconds we'll be able to see our realtime stream. Success 🎉!
> 
> Now, let's say **you have done just as described in the example above and saved the string, but the stream does not start**:<br>
> 
> 1. You should double-check every component of the string: for it to work, it must be exactly in the format on the camera manual, without typos or spaces; username, password and IP obviously need to be exact; username and password must be separated by colon (:); between the password and IP address you need a @ symbol; between the IP and port we again have colon (:); finally, after the port there's often an odd path that the manufacturer decided its camera would use.
> 2. If the string begins with rtsp:// then you're using the RTSP protocol and the port should be the standard 554, and for HTTP it should be 80, but nothing prevented the manufacturer (or past you) to change the default port for something else; if you believe everything else is correct and you still can't stream, please check the protocol and port in your camera configuration page and / or manual.
> 3. Check if your username or password contain special characters such as @ / : % &; nothing prevents those characters to be used in the credentials, but if they're there, you're in for quite some trouble. If you have special characters in your password you can either change the password to a really long and secure one that is only letters and numbers (recommended: a multi-word 30 characters password is safer than 'ironm@n', and way less painful to deal with that transforming it into 'ironm%40n' in a URL), or reach out for support to see how we can "escape" those characters to make them work in the string.
> 
> If everything checks out on paper and you made multiple attempts without GlanceCam starting streaming, then it's certainly time to contact me for [support](#support)!
> 
> But **what if you're stuck because you can't even find the string format in the manual?**<br>
> Not all manufacturers do a great job with their manuals, and we don't always keep manuals around. In most cases, Google comes to the rescue: if you search for your camera model (and you need the exact model for this) plus "RTSP", it's often possible to find the proper string format among the first search results, for instance on the camera manufacturer's website, on websites that collect string formats for most cameras or forums.<br>
> Let's see how to do that with **another example**:<br>
> We own a TP-Link Tapo C200 and we lost the manual.<br>
> If I Google "Tapo C200 RTSP" I get [this official page](https://www.tp-link.com/us/support/faq/2680/) as first result, and [this extensive list](https://www.ispyconnect.com/man.aspx?n=tp-link) of TP-Link strings as third. The manufacturer page is really good because it provides the full string format, but the page with the long list is also enough in most cases: if you land on a page that only gives you the protocol (rtsp:// in our example) and the final path (/stream1) and nothing else, you're probably in a good place already, because what's really missing is only your personal informations... let's build the string step by step and you'll see way that's true:
> 
| Component | What it does                                                                         |
|-----------|--------------------------------------------------------------------------------------|
| rtsp://   | We found in our search results that the protocol is RTSP, as is often the case       |
| username  | Personal information only you can know (we'll go with 'mickey', often is 'admin')    |
| :         | Colon always separates username and password                                         |
| password  | The most personal information that only you can and should have ('rodent' here)      |
| @         | Between the password and the IP address there's always a @                           |
| CAMERA-IP | Your local camera address, again personal information ('192.100.020.009' here)       |
| :         | Colon always separates IP and port                                                   |
| 554       | The default port for RTSP is 554, and most likely your system uses it too            |
| /stream1  | The path required by the camera, found in our search results... just use it "as is"  |
> 
> Everything goes together like this: rtsp://mickey:rodent@192.100.020.009:554/stream1<br>
> And done, this is our string and indeed it would work just fine for streaming a Tapo C200! 🎉<br>
> Just be careful to use exactly the proper structure, avoid typos and spaces (they sometimes appear when pasting) and have the right credentials (preferably without special characters in them, as explained in the first example above, the one about configuring an Hikvision camera).<br>
>  If you tried this and didn't come up with useful results, don't really know how to use these informations or this explanation is not clear and too technical, don't despair: please [contact me](#support)!
>  
> There is a final scenario, though: **what if you can't find the camera model anywhere**?<br>
> It's not impossible, especially with inexpensive cameras that are often manufactured in China and then packaged and resold by other companies around the world (nothing wrong with either of those things!) that your camera manufacturer is called 'GenericAnonymous' and the model is simply described as '1080p'.<br>
> As you can imagine, and possibly verified by trying to do the research process I described above, this is terrible for googling the string format, and if you don't have the manual around or it does not explain the proper URL required for streaming, we have a steep road ahead, and it's even possible we won't get anywhere...<br>
> If you're in this situation, you can start by trying common formats such as:
> - rtsp://USERNAME:PASSWORD@CAMERA-IP:554/
> - rtsp://USERNAME:PASSWORD@CAMERA-IP:554/onvif
> - rtsp://USERNAME:PASSWORD@CAMERA-IP:554/h264
> - rtsp://USERNAME:PASSWORD@CAMERA-IP:554/mpeg4
> - rtsp://USERNAME:PASSWORD@CAMERA-IP:554/1
> 
> To be clear, these are random attempts – albeit successful in a reasonable number of cases – and your mileage may vary greatly with them.<br>
> If you don't have a camera model and those common formats do not work, you can still try [getting in touch](#support), but please know in advance that is sadly likely I won't be able to help you, because without a model number there's not much research I can do for you.
> 
> Finally, let me reassure you that if we try to find a string for your camera and don't succeed (and the only success here is for you to be able to stream your feed in realtime), or if you get frustrated with the process – which may require a bit and trial and error, because there are so many manufacturers and models out there, each one doing things their special way – I'll be able to help you get a refund for your purchase from Apple (developers can't issue refunds directly, because transactions are handled by the App Store).
<a name="support"></a>

---

#### I need support!
> Configuring IP cameras, especially the first time, can be very frustrating! **Please, don't hesitate to contact me, Cesare,  for support if you're having problems getting started, that's what I am here for.**<br>
> The best and most effective way to get support is to initiate the request inside GlanceCam, by selecting the 'Support' menu and then 'Contact support via email'; please follow the instructions on screen and don't forget to **specify your camera manufacturer and model in your message**, so that I can start researching your camera right away and provide quicker support.
> 
> Please, allow a couple of business days for a reply: it's only one person here, doing all the coding in his spare time (I have a day job in a different field, and GlanceCam is my passion project) and providing support, which for every email requires quite some research and time.<br>
> GlanceCam Pro Users will receive a reply in less than 24 hours, Monday through Friday.
>  
>  You can also contact me directly via email at [support@cdf1982.com](mailto:support@cdf1982.com), but again support requests started from inside the app are more effective and get results faster, due to the already mentioned auto-generated report that provides useful informations. If you decide to still contact me without initiating the request in the app, for instance because you don't have purchased GlanceCam yet and you really can't do that, please don't forget to remove your passwords (I don't need them to help you, and more important: I really, really don't want to deal with such confidential informations!) and to write me the camera manufacturer and model.
>  
> Finally, rest assured that if I won't be able to help you and make my app work well for your needs, I will promptly explain how to get a refund from Apple for your purchase (developers can't issue refunds directly, because all transactions happen via the App Store).
<a name="dvr"></a>

---

#### Can I use GlanceCam with my DVR / NVR?
> GlanceCam only officially supports realtime streaming directly from IP cameras, so **most likely the answer is no**.<br>
> There have been success stories with some DVRs and NVRs over the years, mostly Hikvision systems, but you should not expect GlanceCam to work out of the box – or ever – with DVRs and NVRs.<br>
> If you own a Hikvision DVR / NVR and are not against a bit of fiddling with technology, please [get in touch](mailto:support@cdf1982.com) and I will send you instructions that worked for a good number of Users, but again no guarantee: it will depend on your system and configuration.<br>
> If you have a DVR / NVR from a different brand, [let's also talk](mailto:support@cdf1982.com), but please keep your hopes low; we would need the DVR/NVR to provide access to the different cameras from its main IP address with a public string format (like the Hikvision systems that worked do), instead of using the IPs of each camera, and possibly there will be other settings to tweak. If you're feeling adventurous, please send me your DVR/NVR manufacturer and model: I will explore the possibility for it to work with my app "on paper", and then we'll work together to test if it will actually do so.<br>
> In all cases, if we won't succeed, I'll help you get a refund of your purchase from Apple, so the only thing you're risking is time.<br>
> But please, no 1 star reviews if your DVR / NVR does not work: it says so on the App Store and here... ;)
<a name="howmany"></a>

---

#### How many cameras can I add?
> There is **no limit to the number of cameras you can add**.<br>
> The **standard version of GlanceCam displays one camera at a time**, in a single window.<br>
> With GlanceCam Pro – available as a lifetime in-app purchase or yearly subscription – you'll be able to open **as many windows and GlanceGrids (flexible grids with presets) as you need** and, resize and organise them around your Desktop and have their size and position remembered between sessions.
<a name="newwindow"></a>

---

#### How do I open more than one camera at a time??
> GlanceCam shows one camera at a time in a single window, and you can switch between cameras inside that window; **upgrading to [GlanceCam Pro](#glancecampro) will allow to open as many windows and GlanceGrids (flexible grids with presets) as you need**.<br>
> With GlanceCam Pro you have 3 alternative ways to open new windows and display multiple cameras at the same time:
>
> 1. From the **File menu, select Add Window** for a single-camera window or **Add GlanceGrid window** for a flexible grid;
>
> 2. With the **⌘ N (CMD + N) keyboard shortcut** for a new single-camera window or **⌘ G (CMD + G)** for a new GlanceGrid;
> 
> 3. Finally, in the dropdown button containing the camera list that appears when your mouse enters a GlanceCam window, you can click on a name while holding the ⌥ (Option, also known as Alt) key down on your keyboard, and instead of opening a different camera in the same window, a new window will be opened with the selection instead.
>
> New windows always open at the center of your screen with the default size; when you add windows with methods 1 and 2 above, GlanceCam automatically display the next camera in your list that is not currently already open.
<a name="glancegrid"></a>

---

#### What do I need to know about GlanceGrids in GlanceCam Pro?
> **A GlanceGrid is a preset of multiple cameras displayed in a single window with a flexible layout that automatically adjusts from a grid (2x2, 3x3, etc.) to a single row (i.e. 8x1) or column (1x8) based on the window's resizing.**<br>
>There is **no set limit to the number of concurrently playing cameras** (except for network bandwidth and CPU power, of course, but I'm proud to report that GlanceCam 4 is even more efficient, especially on Apple Silicon) and just like with multi-windows, you can open separate GlanceGrids, each with a different preset and layout; is also **possible to mix single-camera windows, GlanceGrids and USB-cameras**.<br>
> Beloved features like Always on Top, keyboard shortcuts, action buttons, and Insta-zoom are still available with GlanceGrids; you can even customize Insta-zoom's behavior to temporarily maximize just one "tile" of your grid, or make the whole grid as big as possible while you hold down your mouse's right button. And what you can customize for GlanceGrids doesn't stop there: you can tweak the inter-camera black space, set a maximum number of columns, and have a GlanceGrid window "auto-snap" when resizing it to avoid black space below the last row of cameras.<br>
> **When you're ready to try GlanceGrids, which are included in GlanceCam Pro, just click on File > Add GlanceGrid window (or use the CMD + G keyboard shortcut).** And don't forget that, just like with any other feature, each interface element has a _tooltip_ that appears when you leave your mouse pointer still on it for a moment, and that will explain everything you need to know to take maximum advantage of every powerful feature.
> A couple of implementation notes about GlanceGrids: starting with version 4.6, GlanceGrids fully support the Minimalistic user interface style — the titlebar and window controls hide when your mouse is outside the grid and reappear when you move in (note: while Roll-Up is enabled, the window temporarily uses Standard UI to ensure the titlebar is always available for roll-up functionality). Each grid tile also has a dedicated audio button in the bottom right corner for quick access. Cameras included in grids default to 16:9 (custom aspect ratios forced in Settings remain applied when a camera is displayed in a single window); the keyboard shortcuts for quickly resizing a window have been tweaked just for GlanceGrids, so their behavior differs slightly from what you're used to with single-camera windows but is more appropriate for this use case; finally, you may notice some flickering occur occasionally while resizing a grid window, and then going away as soon as you're done resizing.
<a name="remote"></a>

---

#### Can I view a remote camera inside GlanceCam, or only LAN cameras are supported?
> Yes, you can: **streaming is possible both locally and via Internet**, but streaming via Internet require some additional fiddling with networking stuff (port forwarding, static external IP address or dynamic DNS, etc...).<br>
> I strongly recommend you to initially configure GlanceCam with your computer and camera connected to the same network, to verify compatibility, before attempting remote connections.<br>
> When you're there and ready to try streaming via Internet, please [get in touch](mailto:support@cdf1982.com) and I will send you some instructions to get you started (but you will still need to be able to deal with your modem's port-forwarding almost completely on your own, because I can and will give you the gist of what you need to configure there, but I have no idea of your modem's user interface or can know about particular characteristics of your network).<br>
<a name="glance"></a>

---

#### Inside the app, I see the words Glance and GlanceGrid used quite often. What is that?
> A Glance, in GlanceCam's parlance, is a camera URL and name, its customisations and tweaks, and also the optional custom actions you associated to it. All these things together are a Glance, and you can add as many Glances as you like.<b>
> With GlanceGrid, the app refers to a multi-camera single window that display different streams in a flexible grid that adapts the layout depending on how you resize it (for instance, by stretching a 3x3 grid into a single row of 9 cameras just by dragging the corner of the window); GlanceGrids are part of GlanceCam Pro, and are a good reason to upgrade if you're interested in having different presets (groups of cameras) open in separate GlanceGrid windows.
<a name="formats"></a>

---

#### Does GlanceCam support H264 and H265? What about 4K cameras?
> **GlanceCam can ingest almost any video format and resolution**, because under the hood it relies on VLCKit, the reliable and ultra-compatible video engine of the popular VLC Media Player.
<a name="audio"></a>

---

#### Does GlanceCam play audio?
> GlanceCam **supports audio streams**, which can easily be muted when needed. If your camera has a microphone and streams video and audio together via standard protocols (RTSP, HTTP(s) or RTMP), you're good to go.
<a name="requirements"></a>

---

#### What are GlanceCam's system requirements?
> To work with GlanceCam, **your IP cameras must support standard streaming protocols**: RTSP, HTTP(s) or RTMP.<br>
> GlanceCam requires **a Mac** running at least **macOS 10.15 Catalina, or a newer version of macOS** (and obviously the app is fully at home and **works great on Tahoe**, including with Stage Manager!).<br>
> Any computer capable of running these operating systems should have plenty of power to stream IP cameras with GlanceCam, but obviously multiple 4K streams or 30 cameras open at the same time, while rendering videos in background, might require reasonably fast machines. It's almost impossible for me to give you an estimate of how many cameras you'll be able to stream at the same time on your hardware: on a 2017 iMac I can easily have more than 20 and everything stays super-snappy, but on very old Macs running High Sierra I prefer to limit myself to 4 or 5; the resolution of the streams and what else is your computer doing while streaming are also factors.<br>
> Finally, **a solid connection between the computer and the cameras, be it LAN or WiFi, is recommended** both for performances and stability (slow or intermittent connections might cause frames to be dropped and even the stream to freeze).
<a name="applesilicon"></a>

---

#### Does GlanceCam run natively on Apple silicon?
> Yes, and it's amazing!
> Honestly, getting GlanceCam to work natively on M1 and newer Apple SoCs involved years (yes, years) of work and frustrations, but starting with [version 3.5](https://cdf1982.com/glancecam/glancecam-release-notes#3_5), GlanceCam is perfectly at home both on Apple silicon – where CPU and RAM usage are significantly reduced – and Intel.
<a name="price"></a>

---

#### How much does GlanceCam costs? Are there recurring costs?
> **GlanceCam is available in the Mac App Store for $ 3.99 US as a single, non-recurring purchase**: you buy it once and will be able to keep using it forever on all your personal computers logged into the same Apple ID.<br>
> An advanced version of the app, called **GlanceCam Pro, can be unlocked from within GlanceCam if needed**, and that version has additional features and costs described [here](#glancecampro).<br>
> GlanceCam for Mac and the GlanceCam Pro upgrade are _native and exclusive for macOS_: possible future versions of the app developed from the ground up for different platforms (iOS, iPadOS, etc.) will require separate purchases / subscriptions that are not included with the Mac version.	
<a name="glancecampro"></a>

---

#### What is GlanceCam Pro? How much does it cost?
> **GlanceCam Pro is available for macOS Users with advanced requirements and who want to provide ongoing support for future development**.<br>
> In addition to everything included in the standard version, GlanceCam Pro offers:
> - **Multi-windows** open as many cameras as you need in independent windows you can resize and arrange around your screen, having them restored whenever you re-launch the app;
> - **GlanceGrids**: presets of multiple cameras displayed in a single window with a flexible layout that automatically adjusts from a grid _(2x2, 3x3, etc.)_ to a single row _(i.e. 8x1)_ or column _(1x8)_ based on the window's resizing; GlanceGrids are part of GlanceCam Pro;
> - **Custom aspect ratios** for cameras, including the ability to force manual proportions;
> - An **optional Minimalistic user interface** that hides everything but your video stream when you are not interacting with the app;
> - 14 alternative app icons in the Dock while the app is running;
> - **Priority assistance via email** in less than 24 hours, Monday through Friday;
> - Everything else that will be added to GlanceCam Pro on macOS in the future!
> 
> GlanceCam Pro is offered as an **additional, and completely optional, yearly subscription** ($ 8.99 US) or **lifetime in-app purchase** (buy it once for $ 22.99 and keep it forever, instead of paying annually). **Both purchasing methods unlock the same features on macOS**, so you can choose the model you prefer for your software with absolute freedom.
<a name="privacy"></a>

---

#### Is my personal data, video stream and / or credentials shared with anyone?
> God, no.<br>
> **GlanceCam Users are my only Customers**, and their personal and confidential data are not products I want to profit from, or even have to deal with.<br>
> Please learn more about GlanceCam approach to this very important thing to think about when choosing a camera viewer in the app's human-readable, plain English **[Privacy Policy](https://cdf1982.com/privacy/glancecam_privacy_policy.html)**.
<a name="sync"></a>

---

#### Can I sync my list of cameras between different Macs I own?
> There is no automatic sync because there are no cloud services or servers involved: your credentials and informations are only stored locally on your computer. Again, a look at the [Privacy Policy](https://cdf1982.com/privacy/glancecam_privacy_policy.html) is well worth your time.<br>
> Then, there is also the fact that it's possible, and likely, that you'd want different cameras, or a different order in the list, on your home computer and at work, so syncing everything would not be ideal anyway.<br>
> Not having automatic sync does not mean that you'll need to manually type everything again on every new computer, though: **you can export your cameras in a JSON file and import that file on any computer you want** (be mindful of where you keep that file and with whom you share it, though, as it includes all your credentials including passwords and IP addresses, in a readable format).
> For your security, importing and exporting your cameras require authentication.
<a name="recording"></a>

---

#### Can I save a screenshot? Can I record video?
> Yes to the first, no to the second: whenever you need, you can save a still image (snapshot) of you camera to your Pictures folder by pressing the small floppy disk (yes, old people like this developer used such archaic things to store files) in GlanceCam's window title bar, but recording video is not supported nor planned for the future.
<a name="zoom"></a>

---

#### I'd love to be able to zoom in on a specific section of a camera, can I?
> [GlanceCam 3.6](https://cdf1982.com/glancecam/glancecam-release-notes#3_6) introduced Zoom mode to all GlanceCam Users; this convenience feature might be useful for occasionally taking a closer look to a section of the stream. Here's how it works:
> - You can enable Zoom mode for the active window either by clicking the Window menu and then Toggle Zoom, or by pressing the Z key (no modifiers required).
> - The same Toggle Zoom menu item or Z key disables Zoom mode, when you're done.
> - When Zoom mode is active, the upper left area of the window displays a miniature of the whole camera, while the main area shows the zoomed-in image.
> - The white rectangle you see in the miniature area corresponds to the currently zoomed-in section of the stream, and you can click within that rectangle and drag it around to move the magnified area.
> - Below the miniature in the upper left corner, there's a small funnel shape that's only partially filled in white; if you click and drag up and down in the funnel-shaped area, you zoom in and out (as you zoom in, the funnel fills up, and vice versa).
> 
> A couple of additional notes on some implementation details of this feature:
> - A window that has Zoom mode enabled cannot be moved around the screen by dragging its background, as you usually can do with all GlanceCam windows; this is because the drag interaction of moving the window conflicts with the drag interaction required to move the zoomed-in area. You can obviously move the window around by dragging its title bar.
> - Each time you enable or disable Zoom mode, the video stream reloads; this is required because Zoom mode is implemented with the Magnify plugin of the amazing video engine GlanceCam uses under the hood, VLCKit, but it wouldn't make sense to always load (and therefore show) the plugin for a feature that's only needed occasionally by a small number of Users.
> - Zoom mode is not persisted between sessions: it's always turned off when you launch the app or open a new window, but when you enable it, it remains active until you disable it again or close the window / quit the app; so, if you change camera in a window that had Zoom mode already on, the Zoom will be enabled for the stream you're switching to.
> - If you're a GlanceCam Pro User (thank you!), you can put as many windows as you want in Zoom mode.
> - Zooming capabilities are not available for built-in / USB cameras.
> - If you save a Snapshot while Zoom mode is enabled, the image saved to disk will be the same you're looking at, with the miniature area and the zoomed-in view.
> - The miniature area and the funnel are fixed in size in the plugin, and might appear quite small on Postcard or Regular size windows; Zoom mode works best with large windows or full screen.
<a name="alternate"></a>

---

#### What's an _Alternate_ and how can I use it to toggle between Glances?
> [GlanceCam 4.5](https://cdf1982.com/glancecam/glancecam-release-notes#4_5) introduced one of the most requested features: the ability to quickly toggle between stream qualities (HD-SD). But GlanceCam being GlanceCam, the implementation is much more advanced and flexible than that!
>
> Each camera can have an optional "Alternate" - another Glance with a different configuration (like stream quality or type of network access, i.e. local network connection and via Internet) for the same camera. And Alternates are none other than other Glances already in your list.
>
> You can quickly switch between a Glance and its Alternate by pressing the A key, or the button that appears next to the list of cameras when an Alternate has been set.
>
> Alternates are optional and work only in single-camera windows (they're not available in GlanceGrids); while they're quite powerful, Alternates are available to all GlanceCam Users!
>
> You can configure them in Settings, by clicking the Set Alternate button next to the camera name.
>When you set an Alternate relationship, it works both ways automatically - if Glance 2 is set as the Alternate for Glance 1, you can toggle between them in either direction.
>
> You even have the option to switch to the Alternate automatically when entering full screen. And before you ask: I tried adding the same behavior to Insta-zoom, and the result wasn't good enough: when switching to an Alternate, the camera must reload, and that takes time, so this feature doesn't really fit that use case well.
<a name="cyclemode"></a>

---

#### Can I cycle (rotate) through some cameras in one window?
> [GlanceCam 3.7](https://cdf1982.com/glancecam/glancecam-release-notes#3_7) added a new and powerful feature for [GlanceCam Pro](#glancecampro) Users, Cycle mode.
> You now have the option to choose one of your windows and have it rotate some or all of your Glances (cameras) according to a time interval you define. This is especially useful with a large window or while the app is full screen.
> While only one window can be put in Cycle mode, you can still keep as many others "single camera" windows open while this rotation is enabled.
> 
> By default, all cameras are included in Cycle mode with a 30 seconds time interval dedicated to each one, but you are free to decide which Glances you want to include and for how long they should remain on screen.
> Intervals can be configured in the 5 to 60 seconds range, in steps of 5 seconds, and can be different between cameras included in the cycle. Such short intervals are recommended only for cameras on the local network. Please note that longer intervals are preferable, especially for remote cameras, as the timer starts when loading the stream begins, not when the image appears; so, if a camera takes 5 seconds to show the image and the cycle is set to 10 seconds, you'd only see the image for 5 seconds before switching to the next one.
> 
> You can enable Cycle mode by selecting the Glance menu > Enable Cycle mode, or by pressing the C key without modifiers while the window you want to enable it for is active; the same menu item or keyboard shortcut disables it, as it does saving any change to Settings or quitting GlanceCam (Cycle mode is not persisted between launches of the app).
> 
> Here's an example of how Cycle mode can be configured: let's say you have 3 Glances configured; you might include camera 1 in Cycle mode and keep it visible for 30 seconds, exclude camera 2 and include camera 3 for 10 seconds. When you turn on Cycle mode, camera 1 and 3 will alternate, with Glance 1 remaining visible for 30 seconds and Glance 3 only for 10, with a total duration for the cycle of 40 seconds before it starts again.
>
> Finally, a note about Cycle mode and cameras with different aspect ratios: usually, GlanceCam detects the aspect ratio of a video stream and resizes the window to avoid "black bars"; this is intentionally disabled in Cycle mode because having cameras with different aspect ratios cycle would cause a periodic resizing "dance" which would be distracting to see.
<a name="motion"></a>

---

#### Is it possible to trigger notifications with motion detection?
> No, GlanceCam does not offer motion detection in any form and this is not a feature planned for the future.
<a name="ptz"></a>

---

#### Does GlanceCam support pan and tilt (PTZ)?
> No, GlanceCam does not support pan and tilt, and it's not likely it will in the future, because motion is handled differently by each manufacturer.
<a name="embeddedwebcams"></a>

---

#### Can I use GlanceCam to view webcams that are embedded inside websites, like zoo cameras?
> Maybe. This is not something the app is designed for, nor it is officially supported, but I have been able to help Users do so in the past.<br>
> Success on this completely depends on how the embedded webcam is sending its' stream: if the website refreshes still JPEGs every X seconds, that webcam will never work with GlanceCam (I've thoroughly investigated this, it would require a completely different engine for the app, as it's not video, and simply the demand isn't there); if we're dealing with "real video" and the website does not try too hard to obscure it, I can possibly help you figure this out by sending instructions (it will involve your browser's development tools, but I have a video I can send you that should make it not too hard to accomplish).
> No promises, but if this is something you're interested in, please [get in touch](mailto:support@cdf1982.com)!
<a name="requests"></a>

---

#### It would be great if you could add such and such features!
> **[Let's talk!](mailto:support@cdf1982.com)** Let me know what capabilities you would like to be added in the future.<br>
> Most of the features that GlanceCam provides come from Users' suggestions, and I love receiving feedback from people who use my app.<br>
> Obviously this won't mean that I will be able to satisfy every feature request, but I keep a list and during development I try to prioritise the most frequently requested and impactful capabilities.<br>
> To be completely transparent and avoid wasting your time, there are some things that I already know I will never include in the app, because they would change its nature: GlanceCam will never become a NVR, adding support for recording and playing back videos, and features like motion detection or pan and tilt support are highly unlikely to ever happen; an iOS or tvOS version? Maybe someday, when the Mac version will have everything I plan for it (but if and when that will happen, they'll be separate apps, programmed from the ground up to take advantage of those platforms, and separate purchases/subscriptions will therefore be required to cover huge development time and costs)... a Windows or Android version? Not happening, because those are not platforms that I personally use.
<a name="actions"></a>

---

#### What are the optional actions I can add to a camera as buttons?
> Actions are one of the nerdiest features of GlanceCam; they are not required to stream an IP camera - actually, they are not really part of streaming cameras at all - and most likely are useful only to a small percentage of Users.<br>
> Basically, an action is an optional button that performs a HTTP GET request when pressed. The purpose of a button is therefore completely customizable and can be anything that can be activated by a GET request; a common scenario (and actually the one that triggered the initial development of GlanceCam in 2018) is to install an Ethernet relay connected to a gate, so that it can be used to let guests in directly from GlanceCam. Just to provide an example, the following URL activates a Robot Electronics Ethernet relay: *http://username:password@192.168.0.7:17494/io.cgi?DOA1=10*<br>
> Action buttons appear as an overlay on a camera when the mouse cursor enters its window only when a HTTP GET URL is specified inside GlanceCam's Settings for that camera.<br>
> GlanceCam only supports GET (not PUT, POST or any other HTTP method) because it is the most commonly used and certainly the more likely to be useful in the context of the app.
<a name="shortcuts"></a>

---

#### Are there tricks that can speed up my workflow with GlanceCam? What about keyboard shortcuts?
> Let's start from the most convenient thing to know about: **Insta-zoom**. When you right-click and hold down the mouse button on a GlanceCam window, it resizes temporarily to be as big as possible and let you take a good look at the stream; when you release the mouse, the window returns to the previous size.
>
> Then, there's **Out of my way**: you know how sometimes you want to grab a file below a GlanceCam window or access something behind it even if Always on top is enabled? You can hold the Shift ⇧ key while you move your mouse into the window area and make it bounce to the opposite side of the screen for a custom interval (3-15 seconds, customizable il Settings > Behavior); after that delay, your window will return to the original position. You can find more details about Out of my way in [GlanceCam 3.3 release notes](https://cdf1982.com/glancecam/glancecam-release-notes#3_3). And if you've come to rely on this feature, don't miss **Stay out of my way**, a similar magic trick that makes the window move away, but remain in the new position; find out more on this super-power in [GlanceCam 3.8 release notes](https://cdf1982.com/glancecam/glancecam-release-notes#3_8).
>
> Also very convenient are the **6 buttons in the upper right corner of the window's title bar**:
>
| Icon      | What it does                                                                         |
|-----------|--------------------------------------------------------------------------------------|
| Window+   | Open an additional window to stream a different camera (requires GlanceCam Pro)      |
| Floppy    | Save a snapshot to your Pictures folder                                              |
| Eye       | Toggle 'Always on top' for all windows                                               |
| Speaker   | Toggle audio for all windows (if their stream includes audio)                        |
| Reload    | Restart the current stream                                                           |
| Gear      | Open GlanceCam's Settings pre-selecting the camera that's streaming in the window    |
>
> If you right click the Eye and Speaker icons, you'll toggle that behaviour only for that specific window, and only until the app quits.<br>
> If you hold ⌘ ⇧ and click on the Eye, you can send that window 'Behind everything'; please read the tooltip to decide if you have a use for this, and how to later resurrect that window from this odd mode.<br>
> 
> GlanceCam also has a good number of **keyboard shortcuts**:
>
| Key(s)    | What the shortcut does                                                               |
|-----------|--------------------------------------------------------------------------------------|
| +         | Next Glance                                                                          |
| Spacebar  | Next Glance (yes, there are two shortcuts... pick yours!)                            |
| 1...9     | Numbers 1 through 9 select the corresponding Glance as ordered in the list           |
| ⇧+0...9   | Select cameras between 10 and 19 by subtracting "10" and pressing Shift (⇧+3 for 13) |
| ⌃⇧+0...9  | Select cameras between 20 and 29 by subtracting "20" and pressing Control+Shift+num  |
| ⌘ ,       | Open Settings                                                                        |
| ⌘ .       | Only in GlanceGrid windows, CMD + . shows the grid customisations                    |
| ⌘ N       | Add a new window (requires GlanceCam Pro; see here for [other methods](#newwindow))  |
| ⌘ G       | Add a new GlanceGrid (requires GlanceCam Pro; see [other methods](#newwindow))       |
| ⌘ W       | Close current window (the app quits when you close the last one)                     |
| ⌘ R       | Reload stream                                                                        |
| ⌘ Y       | Toggle Always on top                                                                 |
| A         | Switch to the [Alternate](#alternate) Glance, if one has been set (single-camera windows only) |
| C         | Toggle [Cycle mode](#cyclemode)                                                      |
| R         | Toggle Roll Up (only show a camera title bar until the mouse enters its' area)       |
| Z         | Toggle [Zoom mode](#zoom)                                                            |
| P         | Toggle between Play and Stop for the camera in che currently active window           |
| ⌘ 0       | Resize current window to the 'Postcard' size                                         |
| ⌘ 1       | Resize current window to the 'Regular' size                                          |
| ⌘ 2       | Resize current window to the 'Large' size                                            |
| ⌘ 3       | Resize current window to the 'As big as possible' size                               |
| ⌘ 4       | Apply your saved Custom size to the current window                                   |
> 
> When you're inside the Settings window, there are additional shortcuts:
>
| Key(s)    | What the shortcut does inside Settings                                               |
|-----------|--------------------------------------------------------------------------------------|
| ⌘ N       | Add a new Glance to the list                                                         |
| ⌘ ⌫       | Delete the currently selected Glance (⌘ ⌫ again to confirm)                          |
| ⌘ D       | Duplicate the currently selected Glance.                                             |
| ⌘ ↑       | Move the currently selected Glance up in the list                                    |
| ⌘ ↓       | Move the currently selected Glance down in the list                                  |
| Return    | Save Settings                                                                        |
>
> In _Settings_ > _Behavior_, you can also prevent the screensaver from starting and the display from sleeping while GlanceCam is running; this option is disabled by default and should only be enabled if you understand and accept the associated security and hardware risks described in the in-app alert.<br>
> In the Behavior tab, inside Settings, you can configure 2 _global keyboard shortcuts_ (combinations of keys of your choice that are then available both when GlanceCam is active and when it is open in background and you're working in a different app) that can provide fast access to 2 convenient features:
- Bring all GlanceCam windows to front;
- Insta-zoom the last window or one specific Glance.
> Additional details about how these global shortcuts work are available in [GlanceCam 3.2 release notes](https://cdf1982.com/glancecam/glancecam-release-notes#3_2).
> An important note: starting with Sequoia, macOS will not not execute global keyboard shortcuts that only include Option or Option Shift as modifiers, so if in GlanceCam's Settings > Behavior you have configured global keyboard shortcuts to bring all your windows to front or to Insta-zoom a specific window, you might need to check and possibly include an additional key like Command or Control to your shortcuts of choice to keep them working.
>
> Most dialogs can be dismissed with Escape and confirmed with Return.
>   
> In Settings you can also manually enable **gestures to switch between cameras** by swiping left or right on your Trackpad or Magic Mouse.
> 
> Finally, please know that **almost every user interface element in GlanceCam has a tooltip explaining the functionality**, please leave your mouse pointer still on buttons and fields for a moment to learn other cool things you can do within the app!
<a name="automation"></a>

---

#### Is it possible to automate GlanceCam in some ways?
> GlanceCam supports **Apple Script**, as all good Mac apps should do. You can have scripts that switch cameras and set the fullscreen mode, for instance:
> 
> 
> ```applescript
> tell application "GlanceCam"
    select camera 2
    set fullscreen true
> end tell
> ```
> 
> Apple Script changes camera in the last active window of the app and also works if GlanceCam was not running, launching the app and executing the required actions.
>
> Additional Apple Script commands are **reload**, **stop playback** and **resume playback** and they allow to control all the streams currently playing, in all windows; please be advised that stopping/resuming a large number of cameras can occasionally cause issues. The following example will stop all streams, while to achieve resuming after that, or reloading, is sufficient to change the corrisponding keywords in the script:
> 
> 
> ```applescript
> tell application "GlanceCam"
    stop playback
> end tell
> ```
> 
> GlanceCam also has an **URL scheme** that allows to switch camera from outside the app.<br>
> Your custom application or AppleScript can call the `glancecam://?camera=17` URL and switch to that video stream; just replace “17” in the example URL with the camera number you want to switch to (as listed, counting from 1, in the app Settings).<br>
> There’s also a new action available via URL scheme: `glancecam://?fullscreen=true` (or false) sets the fullscreen mode of GlanceCam on and off; please be advised that this is not a toggle: if GlanceCam is already fullscreen and you ask it to enter it again, by design nothing will happen.<br>
> You can also combine multiple URL scheme actions in a single string: `glancecam://?camera=02&fullscreen=true` selects the second camera AND enters fullscreen… how convenient!<br>
> A couple of additional informations for nerds: if the camera number is out of range or the URL string is incorrect, the switch operation fails “silently” to avoid interrupting the video stream.<br>
> The URL scheme command changes camera in the last active window of the app, and only launches the app it if it is nor running.
<a name="otherplatforms"></a>

---

#### Does GlanceCam work on my iPhone / iPad / Apple TV / PC / Android phone?
> Currently GlanceCam is available on macOS and I am trying to make it the best Mac camera viewer possible.<br>
> It is possible, but this is not a promise, that in the distant future, when the Mac app will have everything I have in mind for it and more, I'll start working on bringing GlanceCam to iOS, iPadOS, watchOS and tvOS.<br>
> There's one thing it's important I make clear in advance: GlanceCam for Mac and the GlanceCam Pro upgrade are <i>native and exclusive for macOS</i>: future versions of the app developed from the ground up for different platforms (iOS, iPadOS, etc.) will require separate purchases / subscriptions that are not included with the Mac version.<br>
> One thing I can certainly affirm is that I only develop software on and for Apple platforms, so it's impossible that GlanceCam for Windows or GlanceCam for Android will ever be a thing.
<a name="otherquestions"></a>

---

#### I have a question that is not listed here. Can I contact you?
> Please do! **You can send me an email at [support@cdf1982.com](mailto:support@cdf1982.com)**; I read and reply to all messages.