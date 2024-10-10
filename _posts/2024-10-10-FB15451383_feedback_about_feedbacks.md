---
layout: post
title: FB15451383 - Feedback about the Feedback system
description: 
image: 
tags: 
---
On September 14, I turned an idea I've cultivated for a while into [this post](https://iosdev.space/@cdf1982/113145956930957925) on Mastodon:

> 📣 Developers in the Apple community, please help me!
>
> I want to file a constructive Feedback to Apple about the developer experience with the Feedback process itself (very meta, I know), and I need yours!
>
> 5 quick & unbiased questions, please 🙏 answer them now: https://it.surveymonkey.com/r/V8FS7KR
> 
> Boosts are *very much* appreciated; the survey will collect answers for 2 weeks, then I’ll write the FB and share it here as well, so you can dupe it if you want.

Thanks to some boosts to that post and mostly to Micheal Tsai [linking to the survey](https://mjtsai.com/blog/2024/09/18/feedback-feedback/) on his invaluable blog, I was able to collect 129 answers over the two weeks it was open for submissions.

Then things went a bit crazy (_[thanks, Sequoia Local Network access](https://iosdev.space/@cdf1982/113164866859627559)_) and it took me longer than I originally expected to actually analyse the data and file the Feedback to Apple... but today I finally did ([screenshot]({{ site.baseurl }}/assets/images/blog/2024-10-10-FB15451383/FB15451383.png)), and below you can find the whole submission and attachments.

I hope to have been able to honor the collective effort it took - **I cannot thank the participants enough** – in the synthesis below, and please, if you agree with the sentiment and intention, **feel free to dupe it**!

---

## FB15451383 – Feedback about the Feedback system

TLDR: Feedbacks are essential for software quality, but developers often express varying levels of dissatisfaction with the process, with some opting out from ever filing reports.
My purpose here is to share with you the perceived experience and suggestions that 129 fellow developers provided by answering a 5-question survey I prepared focusing on the recent beta season. While the number of participants is small compared to the size of the Apple development community, their answers provide valuable insights and suggestions, for your evaluation and hopefully adoption when deemed useful.
Attached you'll find the survey results and at the end I'll include a summary of the most common and actionable recommendations emerged from this crowdsourced effort.

***

Hi and thank you for reading this "Feedback about the Feedback system"; I am submitting it hoping to provide an indie developers' point of view and some actionable improvement suggestions.

In every interaction I have ever had with Apple Engineers online, it's clear they strongly believe in, and actively support, the Feedback system, encouraging developers to submit issues and suggestions.
Indeed, a healthy Feedback flow is a key element to ensure ever-increasing software quality, to the benefit of all parties involved: Users, Apple, and third-party developers like myself.

On the other hand, inside my online developer community is not uncommon to read or hear that filing feedbacks "is not worth the time" anymore; I especially had the impression of this sentiment spreading during this summer's beta cycle (just [one example](https://mastodon.social/@bazscott/112934360869002900)).

With time being the scarcest resource, I think it's reasonable for an indie developer to evaluate if the time invested in filing Feedbacks produces some return, so that kind of sentiment can damage the number of Feedbacks filed, to the detriment of overall software quality.

To try objectively measuring the level of satisfaction with the Feedback process and collect suggestions, I prepared and shared online – initially [on Mastodon](https://iosdev.space/@cdf1982/113145956930957925), then a boost of visibility came from  Micheal Tsai's [blog](https://mjtsai.com/blog/2024/09/18/feedback-feedback/) sharing it – a 5-question survey which focused in particular on the summer beta period, after WWDC 2024.

The survey was hosted on SurveyMonkey, to ensure unique answers, and accepted submissions for two weeks (between September 16 and September 30, 2024); it was completed by 129 people, all anonymous. The questions were the following:

1. Since WWDC began on June 10, how many Feedbacks have you filed to Apple?   _[possible answers: 0; 1...4; 5...9; 10...19; 20+]_
2. What percentage of the Feedbacks you have filed has received some form of acknowledgment* from Apple? (*acknowledgment: follow-up questions, requests for sysdumps, being closed, marked as duplicate, etc; anything besides leaving the Feedback open without any reaction)   _[possible answers: None; Less than 20%; 20÷39%; 40÷59%; 60÷79%; 80÷100%]_
3. How would you rate your experience with Feedbacks filed this Summer?   _[possible answers: 5 to 1 star]_
4. How would you rate your overall experience with the Feedback process in 2023 and 2024?   _[possible answers: 5 to 1 star]_
5. Which of the following things could improve your experience with the Feedback process, based on your experience this summer? Select all that apply, or none if you're satisfied with the process. You can also provide additional suggestions (please do!).   _[possible answers: Apple acknowledging my Feedbacks with follow-up questions; Knowing that my Feedback has been read by a human; If my Feedback is marked as duplicate, how many duplicates are there?; Other (please specify)]_

Attached you can find the screenshots from Survey Monkey displaying the answers to each question; the images named [Question1]({{ site.baseurl }}/assets/images/blog/2024-10-10-FB15451383/Question1.png), [Question2]({{ site.baseurl }}/assets/images/blog/2024-10-10-FB15451383/Question2.png), [Question3]({{ site.baseurl }}/assets/images/blog/2024-10-10-FB15451383/Question3.png) and [Question4]({{ site.baseurl }}/assets/images/blog/2024-10-10-FB15451383/Question4.png) contain the "raw data", while [Question5]({{ site.baseurl }}/assets/images/blog/2024-10-10-FB15451383/Question5.pdf)'s PDF also includes the 36 "open answer" suggestions for improving the Feedback system.

The answers are self-explanatory and it doesn't make sense for me to summarise each question's results: the perception among the participants is "not great".

I will point out that while analysing the data, I found more value in excluding the 22 surveys submitted by people who declared they didn't file a single Feedback during the last beta period: this leaves a sample of 107 developers who actively filed Feedbacks (69 between 1 and 4, 38 at least 5) and among them, 63% said they haven't received any form of acknowledgment from Apple; it didn't then surprise me that, in this subset of 107 "active filers", 69% rated their recent experience 1 star and only 14 people gave it a sufficient rating (3 or 4).
Indeed, the average star rating (1.49 for the recent experience, 1,47 for the last two years) seems to confirm the overall perception of at least a small (but not insignificantly small) part of the developer community is that the process is not working at its best.
The attached files named [Question1_active]({{ site.baseurl }}/assets/images/blog/2024-10-10-FB15451383/Question1_active.png), [Question2_active]({{ site.baseurl }}/assets/images/blog/2024-10-10-FB15451383/Question2_active.png), [Question3_active]({{ site.baseurl }}/assets/images/blog/2024-10-10-FB15451383/Question3_active.png), [Question4_active]({{ site.baseurl }}/assets/images/blog/2024-10-10-FB15451383/Question4_active.png) and [Question5_active]({{ site.baseurl }}/assets/images/blog/2024-10-10-FB15451383/Question5_active.pdf) include the data of the aforementioned segment of 107 Users who filed at least one Feedback this summer.

Finally, I think the most useful thing for me to do is to focus on the answers to question 5, which was a "what can improve the feedback process for me as a developer" question; it offered a few choice answers I thought could make a difference in developers' perception of the process, plus open answers; indeed, the possible answers I provided seemed popular, with "Knowing that my Feedback has been read by a human" being selected by 90% of respondents, "Apple acknowledging my Feedbacks with follow-up questions" by 82% and "If my Feedback is marked as duplicate, how many duplicates are there?" by 77%. These are certainly things the sample would like to see implemented.

In the file named "[open-answers]({{ site.baseurl }}/assets/images/blog/2024-10-10-FB15451383/open-answers.txt)", you'll find all 36 suggestions in text format; I asked ChatGPT to summarise the most common themes among them, and it did a good job:
- Users feel frustrated with the lack of updates or information when their feedback is marked as a duplicate, especially without access to the original report. Respondents want a clear reference to the master feedback and the ability to track it: they dislike being told their feedback is a duplicate without further information and feel it wastes their time if they can’t see the original report or follow up on it.
- Many users expressed frustration about reporting bugs that go unfixed for extended periods, even years. There’s a perception that some serious bugs are ignored and explicit frustration with responses that feel unhelpful, such as requests to retest issues that haven’t been fixed.

I'll close this with a personal consideration: it is not unreasonable for developers who file Feedbacks to desire at least an acknowledgment that what they invested time into has been read by another human being and to have some kind of visibility in the Duplicates queue. Please consider this.

Nothing in the survey results was really surprising to me, and I suspect it won't be to you either, but possibly some changes like adding a "read status" to Feedback assistant and linking duplicates for progress tracking are changes that Apple can adopt with tangible effects in terms of developers satisfaction, which in turn can generate more commitment to bug reporting.

Thanks for reading and considering this, I hope you'll find this somewhat useful!

–Cesare