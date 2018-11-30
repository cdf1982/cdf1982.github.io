---
title: GlanceCam
layout: landing
description: 'IP camera viewer for Mac'
image: assets/images/glancecam/glancecam.jpg
nav-menu: true
---

<!-- Main -->
<div id="main">

<!-- One -->
<section id="one">
	<div class="inner">
		<p>GlanceCam is a highly configurable app that lets you <b>keep an eye on IP cameras (webcams) and optionally perform some actions via HTTP(s) requests.</b><br>GlanceCam is a bit nerdy, but very useful if you want to take full advantage of cheap webcams and maybe combine them to the automation capabilities of the Internet of Things (IoT); it works on your LAN or via Internet (please see the requirements below) and, while it's not the most <i>"works out-of-the-box"</i> home or business automation solution to configure (you'll need to type in a few network parameters, as detailed in the following description), it's completely flexible.</p>
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
			<a href="assets/images/glancecam/glancecam_02.jpg" class="image" target="new">
				<img src="assets/images/glancecam/glancecam_02.jpg" alt="" data-position="center center" />
			</a>
		</div>
		<div class="content">
			<div class="inner">
				<p>There's no limit on how you can configure GlanceCam; here are a couple of use cases:
					<ul>
						<li>You want to install webcams in your living room, your kitchen and your garden to check on your cat when you're away, maybe turning on a light at night or taking a snapshot when kitty does something funny.</li>
						<li>You mounted a webcam pointed at your front gate and would like to open it to visitors directly from your Mac, by activating an Ethernet connected relay.</li>
					</ul>
						In order to take advantage of GlanceCam you'll need third party hardware (one or more webcams, optionally IoT enabled devices) and a little knowledge about your network; please, check the requirements below, or <a href="mailto:support@cdf1982.com">get in touch</a> before purchasing.</p>
						GlanceCam is very respectful of your data. Please read its <a href="{{ site.baseurl }}/privacy/glancecam_privacy_policy.html">Privacy Policy</a> to know more about it.</p>
			</div>
		</div>
	</section>
	<section>
		<div class="content">
			<a href="assets/images/glancecam/glancecam_03.jpg" class="image" target="new">
				<img src="assets/images/glancecam/glancecam_03.jpg" alt="" data-position="center center" />
			</a>
		</div>
		<div class="content">
			<div class="inner">
				<p>Here's how GlanceCam works:
					<ul>
						<li>With most IP webcams, you can receive the video stream via RTSP or HTTP, without opening a browser; GlanceCam shows you that feed in a resizable window that you can keep always visible on your Desktop, without opening a browser.</li>
						<li>You can add as many webcams as you like to GlanceCam and switch between them (currently, you can see only one camera at a time).</li>
						<li>For every camera, you can also configure up to 2 optional buttons, visible when you hover your mouse on GlanceCam window, to perform some actions via a customizable HTTP GET action URLs.</li>
						<li>GlanceCam window can be configured to be always on top and visible in every Space, or to behave like a normal window; it can also be configured to auto-launch at login.</li>
					</ul>
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
						<li>A Mac running OS X 10.11 or a newer version of macOS</li>
						<li>One or more IP cameras capable of broadcasting its stream via RTSP or HTTP; you'll need to know the webcam IP address, the protocol of its video stream, the login credentials and port for the connection. For example, the following is the URL format you'll have to enter into GlanceCam preferences to view a Foscam webcam stream: rtsp://username:password@192.168.0.7:88/videoSub. You can check if your camera provides an RTSP or HTTP stream by searching the web, usually on the manufacturer website.</li>
						<li>Optionally, for triggering an action by pressing the customizable button, you'll need a device or appliance that can react to an HTTP GET call. For example, the following is the URL format you'll have to enter into GlanceCam preferences in order to activate a Robot Electronics Ethernet relay: http://username:password@192.168.0.7:17494/io.cgi?DOA1=10</li>
						<li>To work over the Internet, you'll need a static public IP address (or a dynamic DNS service) and to configure port forwarding for the webcam stream and, optionally, for the action button.</li>
					</ul>
				</p>
			</div>
		</div>
	</section>
</section>

</div>
