---
layout: post
title: GlanceCam Privacy Policy (iOS, iPadOS, watchOS, tvOS)
description:
image:
nav-menu: false
---
By using GlanceCam for iOS, iPadOS, watchOS and tvOS, you consent to this Privacy Policy and to the [Terms of Service](https://cdf1982.com/privacy/glancecamfusion_terms_of_service.html); please take a moment to review both documents before using the app.

GlanceCam's approach to privacy is simple: your data belongs to you.

All your camera settings (IPs, usernames, passwords, etc.) and all preferences are stored locally on your device. When iCloud is enabled on your device and you are signed in with an Apple ID, your camera and preset configurations are also synced across your devices via Apple's CloudKit service; this sync happens exclusively through Apple's infrastructure and does not involve any server operated by the developer. If you prefer not to use iCloud sync, you can disable it in your device's Settings.

Using those locally stored settings, GlanceCam directly accesses your video streams without involving any additional server, cloud service or third party; only you can view what your cameras are streaming.

For HomeKit cameras, GlanceCam accesses your HomeKit home configuration in order to identify and connect to your cameras. This access requires your permission and is governed by Apple's HomeKit privacy framework. The name of each HomeKit camera accessory is stored locally on your device and, if iCloud is enabled, synced across your devices via CloudKit, in the same way as other camera settings. The video feed from HomeKit cameras is delivered through Apple's HomeKit infrastructure; GlanceCam does not independently transmit or store this video data.

To connect to IP cameras on your local network, GlanceCam requests the Local Network permission introduced by Apple in iOS 14. This permission allows the app to discover and communicate with devices on your Wi-Fi network. No data about your local network or the devices on it is collected or transmitted by the app.

To display camera snapshots on Apple Watch and in iOS/iPadOS widgets, GlanceCam temporarily writes JPEG image files to a private storage area on your device (an App Group container shared exclusively between GlanceCam and its own extensions). These files are used solely to deliver snapshots to the Watch companion app and widget extensions, are never transmitted to any server, and remain inaccessible to any third-party app.

GlanceCam includes an optional App Lock feature that uses Face ID or Touch ID to restrict access to the app at launch, to the camera configuration, or both. Biometric authentication is handled entirely by Apple's LocalAuthentication framework; GlanceCam never has access to your biometric data and does not transmit it anywhere.

This means that GlanceCam's developer — me, Cesare Forelli, hi! — cannot collect or monitor any personal data (absolutely nothing) stored, accessed and viewed inside the app, and actually by default does not know your identity, because all transactions are processed by Apple's App Store, which does not share customer information with developers.

The only exception to the absolute anonymity and absence of personal information leaving your device can occur when you manually initiate a support request from inside the app, because in that case GlanceCam auto-generates a configuration report and inserts it in an email draft for you to review, redact where needed, approve and send.
This means that with support requests, which again are only ever explicitly started by you if you need assistance, your email address, possibly your name (or other information that you include in your signature or anywhere else in your message) and by default configuration parameters pertaining to GlanceCam setup on your device and previous in-app purchases are collected and pasted inside an email draft to help the developer provide better support. In this scenario you can, are invited to (multiple disclaimers ask you to carefully evaluate what to send and what to redact) and indeed should remove personal information such as public IPs and passwords before sending your message; effective support requires some information to be shared, but you have complete control of the details you provide in your support request.

Support requests that are received and contain enough information to possibly establish a remote connection (username + password + public IP address + external port), despite the disclaimers provided inside the app and in the body of the draft, might be deleted immediately, even without actually providing support, and in all cases will be purged within 1 month from the moment the support request is completed either with a positive or negative outcome. So, really, don't send me those personal details: I will never accept to try connecting to one of your cameras for troubleshooting — the privacy implications are simply unacceptable to me — and it's very likely that I will be able to help you without knowing your password.

To improve the experience with in-app purchases and subscriptions, GlanceCam uses a service named RevenueCat. RevenueCat provides GlanceCam's developer with data on when a user first uses the app, when they last used the app, and how much money they spent, and when, on in-app purchases in the app. This information does not contain your name, email address, GlanceCam configuration (camera strings, credentials, etc.) or any other personal information: it is not intended to "track you" and univocally identify you "as you", but is meant to provide anonymous usage and sales analytics.
Only if you manually initiate a support or feedback request from inside the app, among the information that GlanceCam includes in the auto-generated draft is a ticket identifier that, when actually sent in the email, can allow the developer to view the analytics mentioned above inside RevenueCat's dashboard, if necessary to provide support (for instance for billing issues); to reiterate, it's nothing personal — no credentials, no cameras, no IPs or other geographical or personal information — but for full transparency it is important that you are aware of this possibility. You can also review RevenueCat's privacy policy [here](https://www.revenuecat.com/privacy).

GlanceCam includes an optional Apple Watch mini-game called GlanceGame. When GlanceGame is enabled, your cumulative score is sent from your Apple Watch to your iPhone via Apple's WatchConnectivity framework, and from your iPhone it may be submitted to Apple's Game Center service if you have opted in to leaderboard participation. No personal information beyond the score itself is involved in this process. GlanceGame and Game Center submission can each be independently disabled at any time from the GlanceGame settings on your iPhone; GlanceGame can also be disabled directly from the Apple Watch.

GlanceCam supports Apple's Siri and Shortcuts through App Intents, allowing you to open cameras or switch presets with your voice or via automation. When you invoke a voice command, Apple processes the audio input independently; GlanceCam receives only the resolved intent parameters (such as a camera name or preset name) and never has access to raw audio data.

GlanceCam does not currently perform any network requests to servers operated by the development team beyond those described in this document. However, the developer reserves the right to implement in the future a minimal mechanism to deliver urgent notifications (for instance, about compatibility issues with upcoming operating system versions) without adopting third-party invasive notification libraries; if such a mechanism is introduced, it will be designed to transmit no information about the app, your cameras, or any identifying data, and this Privacy Policy will be updated accordingly.

Apart from the services and frameworks described in this document (Apple's CloudKit, Apple's Game Center, Apple's WatchConnectivity, and RevenueCat), GlanceCam does not communicate with any server run by the development team or other third parties, with the only further exception of Apple servers if you have enabled the option to share your diagnostics and usage information with Apple.

---

If you have any questions regarding this document, please contact me via email at [support@cdf1982.com](mailto:support@cdf1982.com).

I reserve the right to modify this document; when I do, I will publish those changes on this page, updating the following modification date.

*Last revision: April 19, 2026*
