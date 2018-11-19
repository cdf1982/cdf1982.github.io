---
layout: post
title: Another tool in my belt
description:
image: assets/images/blog/2018-11-19-another_tool_in_my_belt/sirishortcutsforaudio.png
tags: [automation, shortcuts]
---
Today I was asked for a way, maybe a small custom iOS app with bonus points if it had a CarPlay extension, to occasionally retrieve an audio file via HTTP and play it in the car.
The path for the file is known and remains the same, but the file name changes every day and it corresponds to the date in yyyyMMdd format.
No need to archive the file for posterity or retrieve previous days, the goal was just a quick way to fetch this MP3 and treat it like a podcast while being on the move.

Since I remembered CarPlay apps being limited by Apple to specific use cases, I immediately gave up the bonus points and focused on the quickest way to achieve the goal. I should also confess I'm also trying to reduce the number of new apps to work on concurrently, so I wasn't excited by the idea of opening Xcode for this...

The next idea involved a cron job, Apple Script and iTunes, plus the existing Apple Music subscription of the person requesting my suggestion: I began imagining to write a script, schedule it for running every day and either add the file as a song to iTunes and have it uploaded to the Music library in the cloud or copy the file to iCloud to play it directly from the Files app when needed.
Maybe Overcast Premium could have been a part for this and resurrect the CarPlay part, but it seemed overly complicated: I was thinking of repeating an operation every day on a different device for just an occasional need.

Then I thought of Shortcuts, and boy it was easy, effective and elegant to achieve a functional solution with it!

I actually made two alternatives, spending less than 10 minutes total: one [saves the file to iCloud](https://www.icloud.com/shortcuts/af826d4b1e034b7897fcf599e6b0b3a6) and the other [opens it directly in VLC](https://www.icloud.com/shortcuts/eb7ea65245444b4d9cd5bf92412f74f4), where playback starts automatically. Both have 3 steps and a variable to format the date, and couldn't be simpler.

Every time I have the chance to use it, Siri Shortcuts stands out as an amazing tool for automation, with great flexibility and an outstanding approachability.
It truly deserves a spot in my tool belt, and you should think of it more often too!

P.S. In the ongoing effort to add tools to my belt, I should point out that this post has been written, committed and published using only an iPad and an iPhone. This includes the screenshots framed in the device fra,es, made using [this Shortcut made by Viticci](https://www.macstories.net/ios/apple-frames-a-shortcut-for-framing-screenshots-from-every-apple-device/) that is pure witchcraft.