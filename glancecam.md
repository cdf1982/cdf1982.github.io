---
title: GlanceCam
layout: landing
description: 'A modern IP camera viewer loved by Mac Users: "Finally, A Cam Viewer that Works!" - "I use GlanceCam pretty much all day" - "This app makes viewing all of my cameras possible from one interface and I LOVE THAT" - "Remarkable and instant support"'
image: assets/images/glancecam/glancecam.jpg
nav-menu: true
---

<!-- Main -->
<div id="main">

<!-- One -->
<section id="one">
	<div class="inner">
		<p>GlanceCam is a well rated and modern Mac app, <b>100% compatible with macOS 10.15 Catalina</b>, that lets you <b>keep an eye on one or more IP cameras</b>:
		<ul>
			<li>Install cameras from different manufacturers and avoid their cumbersome web interfaces or proprietary apps.</li>
			<li>Mount webcams in your living room, kitchen and garden to check on your cat when you're away, maybe turning on a light at night or taking a snapshot when kitty does something funny.</li>
			<li>Point a camera at your front gate and let visitors in by activating a network relay.</li>
		</ul>
		</p>
		<p style="text-align:center">
			<a href="https://itunes.apple.com/us/app/glancecam-ip-webcam-viewer/id1360797896?l=it&ls=1&mt=12" class="image" target="new">
				<img src="assets/images/download_mac_app_store_white_bg.svg" alt="Download on the Mac App Store" data-position="center center" />
			</a>
		</p>
	</div>
</section>

<!-- Two -->
<section id="two" class="spotlights">
	<section>
		<div class="content">
			<a href="assets/images/glancecam/glancecam_03.jpg" class="image" target="new">
				<img src="assets/images/glancecam/glancecam_03.jpg" alt="" data-position="center center" />
			</a>
		</div>
		<div class="content">
			<div class="inner">
				<p>Here's a short list of what GlanceCam can do:
					<ul>
						<li>With most IP webcams, you can receive the video stream via RTSP, HTTP or RTMP, without opening a browser; GlanceCam shows you those feeds in a resizable window you can keep always visible on your Desktop.</li>
						<li>You can add as many cameras as you like.</li>
						<li>The app shows one camera at a time in a single window, and you can switch between cameras inside that window; an upgrade to GlanceCam Pro will be available in the coming months as a one-time in app purchase (no subscriptions!) and will allow to open as many windows and cameras as you want, forever.</li>
						<li>For every camera, you can also configure up to 2 optional buttons, visible when you hover your mouse on the app window, to perform actions via customizable HTTP GET action URLs (PUT is not supported).</li>
						<li>GlanceCam's window can be configured to be always on top and visible in every Space; the app can optionally auto-launch at login.</li>
						<li>If your camera streams audio, you can easily enable or mute it.</li>
						<li>GlanceCam offers many keyboard shortcuts and is great for automation: it has a URL scheme and supports Apple Script for switching cameras and toggling full-screen mode; you can even control it from your MacBook's TouchBar</li>
					</ul>
				</p>
			</div>
		</div>
	</section>
	<section>
		<div class="content">
			<a href="assets/images/glancecam/glancecam_02.jpg" class="image" target="new">
				<img src="assets/images/glancecam/glancecam_02.jpg" alt="" data-position="center center" />
			</a>
		</div>
		<div class="content">
			<div class="inner">
				<p>GlanceCam is a bit nerdy, but very useful if you want to take full advantage of cheap webcams and maybe combine them to the automation capabilities of the Internet of Things (IoT); it works on your LAN or via Internet (please see the requirements below) and, while it's not the most "works out-of-the-box" home or business automation solution to configure, it's very flexible and brand-agnostic.<br><br>In order to take advantage of GlanceCam you'll need third party hardware (one or more webcams, optionally IoT enabled devices) and a little knowledge about your network and cameras; please, check the requirements below, or <a href="mailto:support@cdf1982.com">get in touch</a> before purchasing.<br><br><b>Please be advised that GlanceCam in designed for realtime playback and does not support DVRs/NVRs, proprietary cloud services, recording (nor playing back previous recordings), motion detection/notifications and PTZ control</b>.<br><br>Finally, with many sketchy camera apps out there, <b>it is important that you know that GlanceCam is 100% respectful of your data</b>; you can find more about it in its <a href="{{ site.baseurl }}/privacy/glancecam_privacy_policy.html">Privacy Policy</a>.
				</p>
			</div>
		</div>
	</section>
	<section>
		<div class="content">
			<a href="assets/images/glancecam/glancecam_04.jpg" class="image" target="new">
				<img src="assets/images/glancecam/glancecam_04.jpg" alt="" data-position="center center" />
			</a>
		</div>
		<div class="content">
			<div class="inner">
				<header class="major">
					<h3>Requirements:</h3>
				</header>
				<p>
					<ul>
						<li>A Mac running macOS Catalina, Mojave or a previous version of OS X (compatibility goes back to 10.11).</li>
						<li>One or more IP cameras capable of broadcasting its stream via RTSP, HTTP or RTMP; <b>you'll need to know the webcam IP address, the protocol of its video stream, the login credentials and port for the connection</b>. For example, the following is the URL format you'll have to enter into GlanceCam preferences to view a Foscam webcam stream: rtsp://username:password@192.168.0.7:88/videoSub. You can check if your camera provides a RTSP, HTTP or RTMP stream by searching the web, usually on the manufacturer website; since there is no standard for the stream URL format, you'll need to retrieve the proper string on your camera's manual or website. If you can't find it, <b>don't hesitate getting in touch at <a href="mailto:support@cdf1982.com">support@cdf1982.com</a>: I always try to help, and often succeed</b>, but can't promise to be able to figure out the right URL for every model out there.</li>
						<li>For triggering actions by pressing the customizable buttons, you'll need devices or appliances that can react to HTTP GET calls. For example, the following is the URL format you'll have to enter into GlanceCam preferences in order to activate a Robot Electronics Ethernet relay: http://username:password@192.168.0.7:17494/io.cgi?DOA1=10 </li>
						<li>To work over the Internet, you'll need a static public IP address (or a dynamic DNS service) and to configure port forwarding for each webcam stream and, optionally, for the action button; I recommend to start testing the video stream in LAN to check the compatibility before digging into remote connections.</li>
					</ul>
				</p>
			</div>
		</div>
	</section>
</section>
</div>