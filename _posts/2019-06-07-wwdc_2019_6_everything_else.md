---
layout: post
title: "#wwdc2019: Everything else"
description:
image:
tags: [wwdc]
---
I'd like to close the week with a quick(ish) mention of many intersting things, including major ones, I didn't have the chance to talk about in my [previous posts]({{ site.baseurl }}/2019/06/04/wwdc_2019_0.html):

- **macOS 10.15 Catalina & Project Catalyst**: with much less friction than I expected, given the fact that the OS is now moved in a read-only APFS volume (already causing [issues for other apps](https://mjtsai.com/blog/2019/06/06/backing-up-macos-10-15-beta/) and [really odd side-effects](https://twitter.com/Mantia/status/1136060903797825537)), the installation of Beta 1 on my *special Mac* went smoothly and I had the chance to play around in the new operating system for a bit. Obviously, support for 32 bit apps is gone - and that means I won't be able to install Catalina at work in September, which is a bummer - but OpenGL is still there with [much relief for the compatibility of my own app]({{ site.baseurl }}/2019/06/06/glancecam_100_percent_compatible_with_macos_10_15_catalina.html) and in general I found the system really snappy, most likely because it was a clean install. The Catalyst apps look less alien than before, but I need more time to judge and **I am still afraid that a side effect of Catalyst will be that we will see a lot of blown-up iPhone apps that were already turned into bad iPad citizens now being converted into terrible Mac applications by only clicking a checkbox, while in the meantime driving down discoverability in the App Store and reducing average prices for quality products**; doomed-predictions aside (we'll see in time), I appreciate that Catalyst apps will be distributable outside the App Store and I'm perfectly fine with the Notarization requirement. Finally, Catalina brings some lovely additions: Sidecar, Accessibility Improvements and Screen Time; about the latter, I'm under the impression that every window open currently counts towards the global time, even if it's not actively interacted with; I'll look more into it, and if that's the case, there I'll have my first Radar for the year.

- Since I mentioned **Radar**, [this tweet](https://twitter.com/kylesethgray/status/1135778423907934208) brought me sheer joy:
> Apple now tells you how and why a radar was closed. Duplicates are now referred to as similar issues, and it will actually tell you if a fix has been shipped

- **Apple Sign In**, a.k.a. 🖕 Google and FB, is Apple at its best; meanwhile, some press is focusing solely on the requirement of Apple Sign In whenever other third-party login methods are present in an app. That's as smart as it was for the DoJ to sue Apple for anti-competitive behavior in distributing books while Amazon had 95% of the market.

- **ARKit**: boooring. Please, never mention it again until 🍎Glasses actually ship.

- **SF Symbol** will make app development so much more convenient for me: hunting for glyphs or - worse - drawing some myself was always very time consuming.

- **tvOS**' main news is probably the addition of multi-user support: nice, but [I'd rather have it on iPads]({{ site.baseurl }}/2018/12/04/wePads.html). Oh, and real console gamepads are now a thing.

- Speaking of iPad: iOS on tablets is now **iPadOS**, a clear sign that Apple is willing to accept for the OSes to actually diverge where needed. It's a great sign, first and foremost, because the dedicated name forces them to deliver some new iPad feature every year; for 2019, we have significant - overdue - Files improvements, USB drives support and - for lack of a better term - multiple windows. I'm curious to try the new gestures, and especially to understand how quickly I'll be able to ingrain them in my muscle memory (about gestures and the language of iPad, I recommend [Dieter Bohn's video for The Verge](https://www.youtube.com/watch?v=XB4_O8FwiTM)). Overall, I count this as a great year for iPad (as does everyone else out there 😜).

- Deeply connected to iPad future is **Shortcuts** (don't get me wrong, Workflow's successor is also very useful on iPhone, but making new automations from scratch is an iPad-only activity for me), an app that keeps getting better at an amazing speed. Automatic triggers for Shortcuts was one of [my only 3 wishes](https://twitter.com/cdf1982/status/1131489803659292677) for WWDC 2019 *- the others were to not screw up macOS, which we'll see in 3 to 5 years, and to finally bring Xcode to iPad, something that got closer with SwiftUI -* but even after [I posted about them the other day]({{ site.baseurl }}/2019/06/04/wwdc_2019_4_siri_shortcuts_awakes.html) I kept thinking about how important is also the conversational expansion of Siri: parameters and follow up questions are what really is missing from a truly useful personal assistant. Future looks bright ☀️ on the road to SiriOS.

- **iOS 13**. As an early adopter of Dark Mode on Mojave, I don't care much for dark background on phones: I prefer apps to be distinguishable one from the other, and white backgrounds work better in sunlight, but it was probably inevitable to come, and to each their own! The new iPhoneOS (jk, next year not so much?) should also bring faster launch times for apps, smaller downloads, general refinements to apps like Find My (what a deeply *creative* name) and the overhaul of Reminders; no improvements to Mail, sadly (third year in a row hoping for them to add a snooze function so that I can leave nosy 3rd party clients behind... 2020 will be my year, I hope). Overall, I count 2019 as a well-deserved and completely reasonable break from the absolute focus on iPhone that Apple had for years.

- And finally, the funniest bit of the Keynote: **Stealth mesh Bluetooth L.E. antitheft system** (not the actual name) is the coolest combination of cryptography and sheer volume of devices out there I've ever seen, so very [Person of Interest's mesh network](https://personofinterest.fandom.com/wiki/Panopticon).

And that's all for WWDC 2019.

No, not really, it's not all: even though I tried to post more here on the blog ([here's a list of my 6 posts this week]({{ site.baseurl }}/2019/06/04/wwdc_2019_0.html)), there's still so much that we still have to discover and analyze, and most important, there's a lot of things to learn and so much work to do...
*(sneak peak that could lead to nothing: there's an old, unfinished project of mine that would be perfect for Catalyst... but I also want to ship GlanceCam 3 and PhotosUpload in the next couple of months, so I really need to make a plan and stick to it)*

It will be a good summer 😎