---
layout: post
title: Goodbye Google Analytics, you won't be missed
description:
image:
tags:
---
In November 2018 I added Google Analytics to gain some aggregated insights about the traffic on this website; I did disable everything intrusive I could (no gender, age, etc. reports for me), but never actually loved the idea of having Google cookies associated with something I do.

While I've always been pretty straighforward with the cookie-consent message (*This website uses Google Analytics. I'm only interested in aggregated traffic informations and on my side nothing creepy will derive from that knowledge. If you don't consent to cookies, please leave this website and, possibly, the whole Internet, or Google (ironic, uh?) a way to block cookies.*) and sarcastic with the *Got it, thanks EU!* button to dismiss it, **I'm very happy to announce that this site is now Google, cookie, and cookie-consent free**.

Following the lead of my friend [Chris](https://twitter.com/chrishannah/status/1336722601016700929), I've just switched to [CloudFlare Analytics](https://blog.cloudflare.com/privacy-first-web-analytics/), which only provides aggregated, user-first and privacy focused anonymous informations; I always only cared about page views, which is basically most of what CloudFlare is providing and now it's all I got from a company that actually has a good track record and no involvement in advertising (they also give you device groups and countries of origin, but I find that of no interest).

Bonus points, Safari's "shield" is now happy because my website did not contact any tracker.

If you have a website, I encourage you to look into this.