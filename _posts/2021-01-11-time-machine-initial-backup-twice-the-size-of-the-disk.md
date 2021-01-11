---
layout: post
title: Solution for initial Time Machine backup way larger than source
description:
image:
tags: macos
---
For a few months, my Time Machine backup disk filled up way too fast: I know how incremental backups work, and it [made no sense](https://twitter.com/cdf1982/status/1316105869868838919?s=20) that, starting immediately after the initial backup, the Time Machine volume consistently had almost twice the space of the originating one occupied: with an internal drive of 1 TB capacity, 90% full, my 2 TB Time Machine drive immediately filled up over 80% 🤔.

Googling the issue showed other people complaining of similar problems in recent months, but no solutions were provided.

I repaired both disks, deleted Time Machine local snapshots before erasing the Time Machine drive (oh so many times), but nothing seemed to work.

I should mention I am still running the last version of Catalina, 10.15.7, and that my main drive is a M2 formatted with APFS, while the backup drive is a spinner formatted in HFS+ (as APFS for Time Machine drives is only supported starting with Big Sur).

Curiously, the exaggerated size of the backup was known to Time Machine even before starting the first backup: if I went into TM Preferences' pane before doing the initial backup and removed a folder, the estimate size stayed consistently well above my internal drive occupied space. 

This morning I figured out what was causing the problem for me, and I'm posting this so that it can maybe help somebody else from Google in the future.

I have a second hard disk in my computer which I use as a clone of the main drive; obviously I keep the clone disk unmounted at all times, and certainly when running Time Machine initial backup.
Nevertheless, **Time Machine was producing a backup way larger than the internal drive because, while the Clone volume was unmounted, Clone - Data wasn't, and therefore TM backed up not only the files on my main drive, but for some unexplicable reasons also all the files on Clone - Data, a different hard disk!**
Please be advised that Clone - Data was not visible on my Desktop, but showed as mounted in Disk Utility, and that's the reason I didn't notice it being mounted before (also, I did expect that ejecting Clone from the Finder also would have ejected the Data APFS volume, but clearly that's consistently not happening for me... so both Clone and Clone - Data are now excluded from auto-mounting in fstab).

Possibly, you are thinking **this makes no sense**. I agree.
Something must have changed in the last few months, because I never noticed this issue before last summer (so, already on Catalina) while I've been using this setup for years, but **here I am now, with a fully-unmounted Clone hard disk and a Time Machine initial backup roughly the same size of my internal drive**.