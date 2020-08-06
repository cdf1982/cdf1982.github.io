---
layout: post
title: Link HUB NFC Frequently Asked Questions
description:
image:
tags: [link-hub]
---
*What's a NFC tag?*<br>
Near Field Communication tags are **inexpensive wireless gadgets that allow the transfer of data (text, website URLs, numbers, etc.) between two NFC enabled devices such as the tag itself and a phone**.<br>
Often in the format of stickers, they contain a small microchip with little antennas and no battery (they're powered by the other device they're interacting with, such as the phone... sorcery!); they can store a very small amount of data, but still enough to be useful.
<br>

*Why should I use a NFC tag?*<br>
You might find a NFC tag useful for triggering some kind of automation.<br>
For instance, you might place a sticker on the dashboard of your car and have your phone automatically perform some actions (start navigation, play some music, message someone, etc.) when you move your phone over it.
<br>

*How does that work?*<br>
**NFC tags can be written (encoded) by you with some kind of data that many phones are able to read and react to when they're placed pretty close (few centimetres)**.
Writing requires 3 things:
1. A tag that can be written (read only tags exist, and writable tags can be locked and become read only... you need a writable one to encode data on it); you can find some suggestions on purchase strategy, but no endorsements, below.
2. Something you want to encode on it, such as an URL or some text; you can add multiple "chunks" of data, so writing both a website URL and some text is possible, but how much you can write depends on the size of the tag (many tags can store 130 characters, more than enough for URLs, short texts, phone numbers, etc.).
3. A phone that support NFC writing and a specific app that does the "encoding" (writing) work.
<br>

*Which iPhones and iPads do support NFC tag reading and writing?*<br>
**iPhone 7, 8 and X running iOS 11 or later can read and write NFC tags, but require an app to do so and can't read tags in background**, when that app is not running.<br>
**iPhone XS, XS Max, XR, 11, 11 Pro and SE (the new, big one) can read tags even without an app, in background**; they obviously can write tags too, but that requires an app.<br>
Currently, **no iPad model supports NFC tag reading and writing**.
<br>

*What's the role of Link HUB in all this?*<br>
Starting with version 1.4, **Link HUB can read and write NFC tags to trigger the launch of links you saved inside the app just by moving your phone close to a NFC tag that has previously been properly encoded by the app**.<br>
For iPhones that support background NFC reading such as the iPhone 11, Link HUB does not need to be running: a notification appears and when you tap it, your link is launched.<br>
For older models such as an iPhone 8, you need to manually open Link HUB and tap the "scan" button in the upper right corner to initiate NFC reading; as soon as the phone reads the tag, the link is opened.<br>
Please know that **NFC reading and writing requires a Link HUB Pro subscription, which by the way is really inexpensive at only $ 3.99 per year, and supports development of cool features like this one**.
<br>

*How do I prepare and use and NFC tag with Link HUB?*<br>
If you already have a writable tag, **the procedure is pretty automatic**, actually:
1. Add any URL to Link HUB, for instance an URL scheme to send a message to a number (i.e. sms:012345678);
2. Long-press the link cell in the app and select "Associate NFC Tag" from the menu;
3. Follow the instructions on screen: move your phone close to the tag and wait for the message confirming you that data has been written (it's really, really fast).
4. Test it by pressing the scan icon in the upper right corner of Link HUB, next to the plus button; follow the instructions on screen, scan the tag and see your link immediately launched. Then, if your phone supports background reading, return to the home screen and move your iPhone close to the tag in the same way you did before: a notification will appear, and when you tap it, the link will be immediately launched.
<br>

*This seems cool. Where do I buy NFC Tags? What if I want to learn more?*<br>
This [post](https://seritag.com/learn/using-nfc/nfc-tags-explained) on Seritag is packed with useful informations.<br>
Myself, I purchased very inexpensive tags with NXP **NTAG213** chips on Amazon and they are working like a charm; I'm actually not an expert of "hardware" NFC, so I can only tell you that chip model is working well for me and costed around $ 15 for a pack of 10. I'm not willing to sponsor any product, nor I am providing any specific affiliate link, as your mileage may vary with this kind of inexpensive products, but again I have had a good experience with these. In all cases, my main recommendation is to check that someone already reviewed the tag you're considering and said they're successfully using them with an iPhone.