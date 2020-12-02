---
layout: post
title: Core Data + CloudKit app using NSPersistentCloudKitContainer only syncing at launch and not during execution
description:
image:
tags: [dev,sync]
---
Hello visitor from Google, I hope you are well, but most likely you are not, because you are fighting with syncing issues.

I posted this on [Stack Overflow](https://stackoverflow.com/a/62501390/3765705) earlier today, but it actually also makes sense to have it here on my blog.

In a new app I'm working on, I had **syncing issues (not upon launch, when it synced fine, but only during the app being active but idle)** in a project that uses Core Data + CloudKit with `NSPersistentCloudKitContainer`.

My app was built using Xcode's 11 Master-Detail template with Core Data + CloudKit from the start, so I had to do very little to have syncing work initially:
1. Enable Remote Notifications Background Mode in Signing & Capabilities for my target;
2. Add the iCloud capability for CloudKit;
3. Select the container *iCloud.com.domain.AppName*
4. Add `viewContext.automaticallyMergesChangesFromParent = true`

Basically, I followed [Getting Started With NSPersistentCloudKitContainer by Andrew Bancroft](https://www.andrewcbancroft.com/blog/ios-development/data-persistence/getting-started-with-nspersistentcloudkitcontainer/) and this was enough to have the MVP **sync between devices (Catalina, iOS 13, iPadOS 13) not only upon launch, but also when the app was running and active** (thanks to step 4 above) and another device edited/added/deleted an object.<br>Being the Xcode template, it did not have the additional customisations / advanced behaviours of WWDC 2019's sample project, but it actually accomplished the goal pretty well and I was satisfied, so I moved on to other parts of this app's development and stopped thinking about sync.

A few days ago, I noticed that the iOS/iPadOS app was **now only syncing upon launch, and not while the app was active and idle on screen**; on macOS the behaviour was slightly different, because a simple command-tab triggered sync when reactivating the app, but again, if the Mac app was frontmost, no syncing for changes coming from other devices.

I initially blamed a couple of modifications I did in the meantime:
- In order to have the sqlite accessible in a Share Extension, I moved the container in an app group by subclassing NSPersistentCloudKitContainer;
- I changed the capitalisation in the name of the app and, since I could not delete the CloudKit database, I created a new container named *iCloud.com.domain.AppnameApp* *(CloudKit is case insensitive, apparently, and yes, I should really start to care less about such things)*.

While I was pretty sure that I saw syncing work as well as before after each one of these changes, having sync (apparently) suddenly break convinced me, for at least a few hours, that either one of those modification from the default path caused the notifications to stop being received while the app was active, and that then the merge would only happen upon launch as I was seeing because the running app was not made aware of changes.

I should mention, because this could help others in my situation, that I was sure notifications were triggered upon Core Data context saves because CloudKit Dashboard was showing the notifications being sent:

![]({{ site.baseurl }}/assets/images/blog/2020-06-21-CoreData_CloudKit_app_with_NSPersistentCloudKitContainer_only_syncing_upon_launch_not_when_is_active/cloudkit-dashboard-showing-push-notifications.png)

So, I tried a few times clearing Derived Data *(one never knows)*, deleting the apps on all devices and resetting the Development Environment in CloudKit's Dashboard (something I already did periodically during development), but I still had the issue of the notifications not being received.

Finally, I realised that resetting the CloudKit environment and deleting the apps was indeed useful (and I actually rebooted everything *just to be safe* ;) but **I also needed to delete the app data from iCloud** (from iCloud's Settings screen on the last iOS device where the app was still installed, after deleting from the others) if I really wanted a clean slate; otherwise, my somewhat messed up database would sync back to the newly installed app. 

And indeed, a **truly clean slate with a fresh Development Environment, newly installed apps and rebooted devices resumed the notifications being detected from the devices also when the apps are frontmost**.<br>So, if you feel your setup is correct and have already read enough times that `viewContext.automaticallyMergesChangesFromParent = true` is the only thing you need, but still can't see changes come from other devices, don't exclude that something could have been messed up beyond your control *(don't get me wrong: I'm 100% sure that it must have been something that I did!)* and try to have a fresh start... it might seem obscure, but *what isn't* with the syncing method we are choosing for our app?

---
*2020.12.02 - Update for Users who set `NSPersistentStoreDescription` to interact with public databases and are noticing delays in the updates.*
A few days ago, [Ben Radler](https://twitter.com/benradler) brought to my attention a behavior that those who use public databases with CloudKit (I was using the private database in the original post) need to take into account when testing:
> If you are setting the `NSPersistentStoreDescription` to interact with the public database rather than the private database (previous default before iOS 14 I believe) via `description.cloudKitContainerOptions?.databaseScope = .public`, it will only poll for changes from cloudkit every 30 minutes by design (see 10:30 into the [WWDC 2020 session video on this topic](http://developer.apple.com/videos/play/wwdc2020/10650)).
I want to **thank Ben for pointing this out**, since it might also be a cause for head-scratching when testing CloudKit sync!