---
layout: post
title: Your in-app purchase has been returned
description: How I resolved an app review rejection for Sussurro Whisper speech to text AI transcription
image:
tags: dev sussurro
---
I'm re-posting here a reply I sent to a Stack Overflow [question](https://stackoverflow.com/questions/47908871/unable-to-resubmit-in-app-purchase-for-review/) from 2017, recounting my journey after receiving _the most confusing_ email from App Review:

> Your in-app purchase has been returned. Fix the marked items and submit it again. For more information, see the Notes from App Review.

The confusing part was the bold, wrong part below:

> We have returned your in-app purchase products to you **as the required binary was not submitted**. When you are ready to submit the binary, please resubmit the in-app purchase products with the binary.

This ordeal happened during the submission process of the 1.0 version of my new app **[Sussurro - Speech to Yext AI](https://cdf1982.com/sussurro-whisper-ai-transcription.html)**.
I've yet to blog about it, but for now just know that it is useful if you want to use **Whisper text transcription in the most private way possible on iPhone, iPad and Mac**, and that you can already **[get it](https://apps.apple.com/us/app/sussurro-speech-to-text-ai/id6742109110) for free** _(with a very inexpensive one-time unlock in the sea of weekly subscriptions that is this category)_ from the App Store!

Here's how to resolve this rejection, copied-and-pasted from my [SO reply](https://stackoverflow.com/a/79471937/3765705):

---

This question from 2017 was **very much still relevant for me in 2025** and I thought I'd recap what happened to my app and how I finally got to approval.


**TLDR**: 7 years old @l-l suggestion to **leave a note to the app reviewer** still does the trick.


**Long version** with every step taken, including those that are very specific to my SwiftUI multiplatform app _(for which, much like Catalyst, you have to send two separate submissions)_ that will hardly be relevant to most, but can be ignored:

- 1.0 app submitted for review, both for iOS and macOS;
- New _(duh, can't submit the first IAP without a new app version)_ one-time purchase also submitted at the same time, **specifically toggling its submission together with Mac app's binary in App Store Connect** _(on the page where you add all the metadata, screenshots, select the binary)_.
- Mac app enters review and is rejected _(dumb metadata mistake on my part, shocker)_; iOS not in review yet.
- At this point, I had the rejected app, so I took a chance to fix a bug and submit a new binary together with the metadata fix.
- Interestingly, **in the same Connect page where previously I could select to _embed_ the IAP with the app submission, that section was now _(and will be for the rest of this journey)_ missing**; I assumed the in-app purchase would be still in the reviewer's queue and I submit the new build.
- The Mac app is rejected because the reviewer cannot load the IAP.
- I check my IAP code long and hard _(detour: test with both the .storekit file and, essential, in what they call "sandbox" production, i.e. a specific sandbox account you can add in App Store Connect and specify in the Developer settings of the device)_ and all seems good.
- I change the IAP metadata _(you'll find suggested online to edit the localisation and revert to re-enable the submission button for the IAP; that seems to work)_ and reply to the app reviewer with a message, so the review can resume.
- The Mac app is rejected for a valid technical reason _(forgot a menu item to reopen the main window when closed)_, and I am not told if the IAP was there or not.
- I try to ask about that, but I don't get a reply in the following hours and this is taking too long.
- I fix the bug and submit the third build; again, no way to specify anything about the IAP.
- Mac app enters review again.
- A couple hours later I get the same "helpful" email @gerbil got (_"Your in-app purchase has been returned"_).
- I check Connect and the Mac app is still in review, while the IAP section shows the most confusing error message of my life: _"We have returned your in-app purchase products to you as the required binary was not submitted. When you are ready to submit the binary, please resubmit the in-app purchase products with the binary."_
[My confusion obviously comes from the fact that, without submitting an app binary (which indeed was in review), with a 1.0 app you cannot submit an IAP without attaching it to a new app submission, so what I was supposed to do?]
- Most importantly, at this stage I cannot communicate with the app reviewer because, while the app is in review, the "messages" section is not available.
- I looked online and found little help, apart from this SO post.
- So, after a few hours with the Mac app still in review, I decided to reject it myself.
- To avoid confusion, I also removed from review the separate iOS submission, which still had to start the review process; this _won't be relevant to most people_, but in hindsight dealing with one app review at a time seems wise, though inefficient in terms of time.
- Then, I submitted the same build again, again without the ability to add the IAP from where I originally could.
- Most importantly, in the app review notes I wrote this: **Thank you for reviewing my app and the com.xxx.xxx.ProForever in-app purchase that is ALSO currently waiting for review.**
- A few hours pass and the app enters review; minutes later, Mac app is approved, along the IAP.
- At this point, I re-submit the iOS app with a note for the reviewer saying the Mac app was just approved with the (shared) IAP.
- iOS app enters and passes review.
- Success.


To be clear, **there were mistakes on my part** that lead to two appropriate rejections from app review (the metadata and menu item one).

Nevertheless, **communication from app review is still barebones to say the least**, some automated messages are downright wrong on top of confusing (I'm thinking about the one which started this SO post 8 years ago), the fact that there are moments in which you need to ask them something and can't because the app is not rejected is downright frustrating, and the App Store Connect UI for attaching IAPs to builds is a ghost you only get to see once.


So, **if you find yourself in a similar scenario, reject your app yourself, put the IAP back in the yellow state, and resubmit with a love letter to the app reviewer asking to also look at the IAP that is sitting in their queue**.

Hope that knowing this is still relevant in 2025 saves a few hours to others. _[hence this repost on my blog]_