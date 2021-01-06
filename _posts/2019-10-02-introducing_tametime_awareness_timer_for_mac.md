---
layout: post
title: Introducing TameTime&#58; Awareness Timer
description:
image: assets/images/tametime/tametime_01.jpg
tags: tametime
---
Last August, while I was on vacation and had some time on my hands, I listened to episode [340 - You Are a Computer Athlete](https://atp.fm/episodes/340) of ATP and found myself nodding along with everything John Siracusa said about RSI; then I continued nodding while creating a new Xcode project, and here we are today.

Context: my back always hurt a little, but since 2013 things got a bit worse and I have to manage my behaviour to avoid pain: if I don't lift heavy weights, I don't stand in the same position for too long or sit still for hours on end I am mostly fine, but a single mistake generally means a few days of annoying pain. Overall I am lucky, lots of people have it much, much worse, but I tend to *try avoiding* any kind of pain, if possible 🙃.<br>
Skipping *heavy-lifting* and *standing still on my feets* is easily accomplished, but the sitting part is a completely different beast: if you work in an office, enjoy programming in your free time and your hobby is reading, it's not rare that you end up spending many hours in the same position, and in my experience a full hour is the longest I can sit without any consequences.<br>
I find the Apple Watch, with its standing reminders, incredibly helpful, and I've been using a specific Mac application for years to track how long I'm using my computer without taking pauses, but the Watch notifications are sometimes easily missed when I'm "in the zone" and that old app is going to die in Catalina *(32 bit winter is coming)* and already hangs on Mojave more often than not, stopping all alerts without letting me know that something went wrong.

So, if you are a hobbyist programmer listening to a podcast discussing RSI, you obviously think: *"I can build a tool to help me take care of my back! How hard can it be?"*.

Honestly hard it was not, even though it took longer than I expected, *because programming* and also because I lost some time following [a bit of a scare]({{ site.baseurl }}/2019/09/14/glancecam_compatibility_issues_with_beta_8_of_macos_catalina.html) I had with my main app [GlanceCam]({{ site.baseurl }}/glancecam)... but today, finally, **I am happy to introduce [TameTime: Awareness Timer]({{ site.baseurl }}/tametime)** to those who feel pain and discomfort because of the many hours spent in front of their monitor.

Honestly I'm not announcing a *unique product*, but what is unique these days? Execution is all that matters anyway, and the app I used before missed features I wanted, crashed and had only an annoying gong for notifications, while TameTime is *exactly* the better, more polished app I would have bought if it existed.

I'll let the [product page]({{ site.baseurl }}/tametime) describe my new app in detail, but here's the gist of what this 1.0 version does (obviously, I have *ideas* for future releases...):
- **TameTime automatically tracks how long you use your Mac**.
- The app **lives only in the menubar** and **shows the active session duration in hours and minutes, with an emoji** that lets you know how you're doing... it starts happy like the all of us, but sit too long and you'll make it cry and maybe even 🤬...
- You can set up **2 thresholds**, let's say for 20 minutes and an hour, that have different levels of alerts: a **sound** (with system defaults and some custom tones that I find appropriate for the task... but yes, there's also a more pleasant gong than the one included in the app I used before), a **notification** and even a **3-seconds overlay of your screen**; you can mix and match these alerts to your heart's content, or disable them and only keep the timer in the menubar (the emoji can be disabled too, if you're a *sad person* 👻).
- **No manual interactions are required**: TameTime detects pauses after a customisable delay and automatically resets its timers.
- Obviously the app can **launch at login**, is compatible with macOS 10.15 Catalina including support for Dark Mode (but also works on older versions of Mac OS X), and doesn't do nasty stuff: no analytics, no network connections, no special permissions... **it's completely sandboxed**; it is also **very light**, using almost no CPU or memory resources.

**TameTime [is available in the Mac App Store](https://apps.apple.com/us/app/tametime-awareness-timer/id1479326723?l=it&ls=1&mt=12) starting today.** It's a one-time purchase for $ 3.99, no IAPs, no subscriptions.

My app is obviously **not a medical device**, and I am not a doctor (just like Siracusa recommended in ATP's episode mentioned above, **please talk to a good doctor if you're having pain or any kind of discomfort!**) but I think **it can help you become more aware of the time you spend at your computer**, which is an important first step for reducing RSI, CVS and other causes of discomfort and pain that are caused or worsened by sitting for too long in front of a screen. It certainly is helping my back, making it the perfect kind of app to build: *one that you need yourself!*

But sales are good too 😁, so **please share [TameTime]({{ site.baseurl }}/tametime) with friends and family** you know can take advantage of a bit more awareness in their lives. Thank you!