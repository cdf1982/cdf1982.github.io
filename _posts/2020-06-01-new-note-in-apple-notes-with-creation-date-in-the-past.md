---
layout: post
title: New items with creation date in the past in Apple Notes
description:
image:
tags: [automation]
---
I never blogged during this pandemic, not even once, because it felt pointless with all that was (is) going on.
I understand my reaction is the opposite of what many have done with the additional time at hand, being stuck at home, and I am in no way expressing a negative judgement; on the contrary, all those posts kept me sane and entertained, and I am very grateful for them!
Of course the world had to continue spinning, and we were all looking for some normalcy, but still... I did not feel like writing here _(additional proof that this refrain was to rational: I had no issues tweeting [many](https://twitter.com/cdf1982/status/1261059469368332289?s=20) [unimportant](https://twitter.com/cdf1982/status/1260601086320300033?s=20) [things](https://twitter.com/cdf1982/status/1259121000513449984?s=20) in the past weeks)_ and I don't really feel like blogging even now.
Most likely this will be a ramble more than a regular post, but I have the silliest thing to share and I'm going to pretend it's just a day in January.

If I wasn't against very long titles, you would be reading a post titled _"No, you spent two hours figuring out how to create new notes with dates in the past Apple Notes, in order to move your 80ish Day One entries there, only to learn after the fact that Notes.app cannot lock items that have PDF attachments"_. Which is insane. As is it insane that you cannot password-protect an entire folder and have to go note by note instead. And don't even let me start to comment about the fact that Notes.app does not allow to manually edit a date and avoid the whole point of this post...

But this is not (only) a rant about Apple Notes, which probably is still the best free note taking app with reliable sync and inline attachments, these limits notwithstanding. 
No, since I've done this not insignificant amount of research for nothing, because attachments & password-protection are both required for me, let me at least share the acquired knowledge and tell you, dear visitor from Google, **how to create notes in the past in Apple Notes**.

It's a 3 steps process:
1. You need a template Evernote XML file (.enex); [here's my basic one](https://cdf1982.com/downloads/CustomDateInAppleNotesEvernoteTemplate.enex).
2. In this file, with a text editor customise the title and body (both optionals, as you'll be able to edit them later in Notes) and set the creation date (field 'created') in the YYYYMMDDTHHmmssZ format; don't necessarily bother with the last edit date (field 'updated'), because as soon as you'll modify the note inside Notes.app, it will change to the current date.
3. Add this "Evernote note" inside Notes via the _Import in Notes_ in the File menu, which supports ENEX files.
4. Check the new item in the newly created Imported Notes ƒ inside Notes.app; clicking on the date at the top toggles creation date and last edit.

TIL the Z at the end of a date stands for Zulu (see, a long journey but I learned something!), which is the same of UTC 🤯! Since we're talking letters, and not only about the things I did not know, be careful to keep the T for separating the time and the Z at the end, or this time machine won't work.

All this trouble because multi-platform journaling apps with inline images and sync are unicorns if you're not willing to pay big money for subscriptions. Not that I'm against recurring food for developers, but I averaged 1 Day One entry per month in the years I've used the app, and 3 $ to save each one of my inner ramblings is a bit on the expensive side.

Finally, just to explain why it took me two hours for this project, be advised that you could theoretically add attachments to these new notes by embedding them, base64 encoded, inside the XML; you need to also store the MD5 hash for the file in the XML. I found this quite unreliable, but YMMV; if you decide to try creating a finished, rich note, from a XML, I suggest you download Evernote, create a free account, add and export a note with an attachment, so that you can experiment on a complete ENEX file, improving your chances of success.

Finally, if you managed to read so far, _notes note note, notes! Notes?_ Just in case I didn't write "note" enough time in this post.

Stay safe! I'll try to return to a less infrequent posting schedule.