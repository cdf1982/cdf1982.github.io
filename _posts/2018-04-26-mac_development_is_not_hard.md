---
layout: post
title: Mac development is (not) hard
description:
image:
tags: glancecam
---
[Brent Simmons](http://inessential.com/2018/04/25/youre_practically_a_mac_developer) perfectly described a belief I've had since I started Cocoa development:

*"Assuming there's a data model, maybe a database, some networking code, that kind of thing, then you can use that exact same code in your Mac app, quite likely without any changes whatsoever.*

*That leaves the 20% or whatever that's user interface. AppKit is not the same as UIKit, but it's recognizable. Same patterns and concepts, and often similar names (UITableView/NSTableView).*

*Given that you've done the hard thing --- learning UIKit, Xcode, and Swift and/or Objective-C --- taking the next step and learning AppKit seems like a very small thing. You've climbed the mountain already, after all."*\
This has been exactly my experience: **moving from iOS to Mac development has been absolutely painless**, with most of the knowledge I acquired on iOS being useful and relevant, and with the "platform-specific stuff" absolutely learnable in the same way you understand how to use a new mobile framework. I don't know if I've climbed the mountain already, but sure I am having fun climbing.

I expect to find harder topics along the way, but **what I have encountered so far are myths and misconceptions that actually made me delay the transition to Mac development** for reasons that, in hindsight, were simply bad.\
So, here's what I learned in my spare time (while mantaining a day job in a completely unrelated field, an information I provide just to prove that this is not something that will consume all your waking hours) since I started developing for Mac six months ago:

-   You will find tutorials and Stack Overflow answers to your Cocoa questions. Yes, there might be more resources available online for iOS development, but I find plenty of quality help every time I need it.
-   Window controllers and menus are not hard; check out any tutorial out there and, if you've got this far, there's no way you won't learn how to use them; same thing for menus, open at login capabilities, menu bar utilities and so on.
-   UICollectionView/NSCollectionView are not the same, nor are UITableViews/NSTableViews, but I never need to look up the documentation for standard implementations, and when I need something peculiar, Apple provides pretty great docs.
-   Sandboxing is not painful per se, but (big surprise) can be annoying when you're trying to do some things. That's the reason you can disable it: in ContactsAMI, I needed to share *some* files between a Contacts.app plugin and the main app and, since the plugin must be sandboxed, the only solution I found was to disable sandboxing for the app and write into the plugin sandbox. Clean? Probably not. Am I distributing the app via the App Store? Nope. The app is available for download nonetheless? Absolutely, because one of the great things about the Mac is that you can get software wherever you want.
-   I'm convinced that bindings can drastically reduce the amount of lines written, but since they looked hardly debuggable to me, I chose to avoid them completely; I'm probably writing more "iOS style" code for that reason, and I'm confident it's fine and that you can do that too, if you feel so inclined.
-   *UI is hard on every platform*, it's not just a Mac thing. This is certainly the area I'm struggling the most with, but there is a pretty good reason I feel the design of my apps is somewhat inadequate: that's because Mac apps are so well designed, the bar is up there. Your mileage may vary, I will always feel more confident writing code than designing interfaces, but the important thing is that an iOS developer already knows the tools and has familiarity with the platform, so great native UI/UXs can be achieved.

So, if you are an iOS developer who has ever considered developing for the Mac, think about this: *we may never reach the mountaintop, but we already know how to walk, we've trained a little in the woods nearby and already bought good shoes... we might as well continue climbing!*