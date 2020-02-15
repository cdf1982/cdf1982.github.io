---
layout: post
title: Always There free at last, but not for long
description:
image: 
tags: [always there]
---
A week ago I received an email from Apple announcing that my third app, [Always There]({{ site.baseurl }}/always-there.html), had "won" the *outdated apps lottery* and would be removed from the App Store in 30 days unless a new update is issued and approved.

While Always There still works perfectly for its small purpose, it never received an updated in almost four years, so I was expecting that someday Apple might knock on my door.

There was no rational reason to spend time on updating a very small utility that never surpassed 100 $ in revenue (*#devlife* 🤑), but I was still willing to try: the app continues to work fine, and is actually more "useful" than ever on iPads now that widgets can be always on screen, so I was considering a small emergency update to officially support the "latest" screen sizes (iPhone X, anyone?) and iOS versions.

![]({{ site.baseurl }}/assets/images/blog/2020-02-15-always_there_free_before_being_discontinued/always_there_on_ipados13.jpg)
*Always There on iPadOS 13, showing the prettiest & smartest wolf ever*

Sadly, tonight my intentions collided with the hard reality of early Swift development: the last commit of Always There is a 3-year old migration to Swift 2, but after that I never ported the codebase to Swift 3; so, today I'd need Xcode 8 to migrate to Swift 3, and then a newer version of Xcode to actually finish the migration to the current release of Swift... thing is, Xcode 8 does not run on macOS Mojave, and it doesn't really make sense to create a VM just for this...

So, Always There will go away in 3 weeks, but it will not leave the App Store with sadness: **the app, which used to cost $ 1.99, is now free for everyone to grab**, just a small gift to anyone who might like to keep a special photo, ahem, always there...

I expect the app to continue to work for quite some time, so it might be a nice addition to your Notification Center or iPadOS home.

Truly for a limited time only (App Review's clock is ticking... 🙃), **download [Always There free on the App Store](https://itunes.apple.com/us/app/always-there-your-most-precious/id1104703747?l=it&ls=1&mt=8)!**