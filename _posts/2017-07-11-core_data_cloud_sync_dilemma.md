---
layout: post
title: Core Data + cloud sync = dilemma
description:
image:
tags: core-data sync dev
---
My friend Becky recently wrote [a post](http://beckyhansmeyer.com/2017/07/08/data-persistence-dilemma/) about the dilemma she's facing with a new, interesting app she's making.

She likes Core Data, and would like to use it for her project; she also wants to add sync capabilities, as that's a requirement for most modern apps. 

Here lies her dilemma. And my dilemma. And many developers' dilemma... **There's no clear path towards a Core Data app with cloud sync.**

![sync_is_hard.jpg]({{ site.baseurl }}/assets/images/blog/2017-07-11-core_data_cloud_sync_dilemma/sync_is_hard.jpg)

Becky doesn't want to use Core Data + iCloud since it's deprecated. I might add, I don't want a friend to use it, because I value her sanity... when I was setting up [Tasktic]({{ site.baseurl }}/tasktic.html)'s sync mechanism, I spent 4 months and 3 complete rewrites before realizing my code wasn't the problem: it was the actual API that was an almost un-debuggable black box that sometimes, very rarely but still too often, lost an object during the sync process with apparently no reason, and no way to get it back.

A few weeks ago, I suggested [Ensembles](http://www.ensembles.io/) to Becky, since it was the solution I adopted for Tasktic and given how well it behaved for me, restoring my sanity after those awful 4 months. But the free version of Ensembles still uses Core Data + iCloud under the hood***, so it's not very future proof given the deprecation mentioned above, and on top of that there's a more modern, faster solution provided by Apple that everybody want to use: CloudKit.

CloudKit is very tempting because everyone has experienced how fast and reliable it is with Notes.app and Photos.app for macOS and iOS; the most important thing for an app that sync is to never, ever lose users' data, and CloudKit passes that test with flying colors.
It is also very modern, with private/public data, web support via CloudKitJS, and most important, it is what Apple has chosen for the future, and following Apple's lead is always a good idea.

The thing is, **in order to get CloudKit to play nice with Core Data, you have to write most of the sync logic yourself**, converting NSManagedObjects to CKRecords, handling updates, reacting to duplication, etc. It can be done, and many developers do it "by hand".

As Becky notes, it can also be done via libraries like [Seam3](https://github.com/bhansmeyer/Seam3), which is currently the best open source implementation I found (and I looked really long and hard) of a Core Data - CloudKit bridge, albeit only if you don't have many-to-many relationships in your schema...

The fact is, **I really don't want a dependency for my sync code anymore**, especially when starting a new project. If I were willing to accept the risk of my sync code being abandoned someday in the future, I might as well look into [Realm](https://realm.io/) (not that such a loved mobile stack is going anywhere, but as we've seen in the past, companies get acquired, or sometimes move on to different projects...).

Where does this leave us? To Apple, of course.

Apple made such an amazing object graph and persistence framework with Core Data, and a fantastic syncing backend with CloudKit. They never connected those dots officially, though.

Becky's post reminded me of something I really wanted (needed) for a really long time: **an Apple sample project showing their idea of the best, most modern and Swifty implementation of Core Data for local persistence + CloudKit for sync implementation**.

This is a step they really should take: while it's great that they provide sample projects for ARKit, data persistence and sync is top priority for a lot of developers, and it would only be appropriate for Apple to show how they think a "great" implementation should look like.

So, if you have a friend who works at the best fruit company in the world, pass along the message: **the indie developer community, and especially us beginners, would love some help in this area!**

** This is true only if you want to stick with native cloud solutions, like I prefer, otherwise you can also pair Ensembles with your own backend or use Dropbox: the great thing about Ensembles is that it's actually backend agnostic, but for CloudKit you need Ensembles 2, which isn't free and so it's not an option for most indie developers like myself.