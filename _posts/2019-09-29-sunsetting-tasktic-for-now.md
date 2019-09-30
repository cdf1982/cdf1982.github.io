---
layout: post
title: Sunsetting Tasktic (for now)
description:
image:
tags: [tasktic]
---
A little [less than four years ago]({{ site.baseurl }}/2015/11/10/tasktic_is_available_in_the_app_store.html), my second app [Tasktic]({{ site.baseurl }}/tasktic) debuted in the App Store. Sadly, I'm here to report that **today I have removed it from sale**.

Before explaining the reasoning behind my decision, let me pay my respect:
<p align="center">
<iframe src="https://player.vimeo.com/video/143538641" width="320" height="569" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</p>

In many ways, I could say that Tasktic was actually my first *true* app, and certainly it was my first Swift (version 1.0!) project...
It's actually a quite complex piece of software for a beginner (and certainly I was a beginner - *if I'm not still today* - in 2014 when I started working on it...), being a Universal app with support for iPhone, iPad and Apple Watch that had reliable sync from day one (after multiple rewrites during development... a *full month of my life* I'll never get back 🙃) and offered a lot of capabilities that at the time rarely appeared in free task managers, especially when made by a solo developer: a reasonable and customizable GTD approach, optional notifications, both projects *and* multiple tags, recurring tasks, Siri support (when it was *hard & hacky* to achieve it), in-app statistics for motivation, a widget and a share extension; the app has always been free, with multiple levels of in-app purchases, and was 100% respectful of users privacy.

To be honest, Tasktic was never a commercial success *(in hindsight, maybe refusing on principle to include banner ads in the free version was a bad call)*, but it was loved by some and noticed in ways I would have never imagined during my many months of hard work developing it: the app **received very nice [reviews from Users and press]({{ site.baseurl }}/2016/04/24/tasktic_reviews_roundup_2.html)**, it even showed up in a PRINTED NEWSPAPER (!), Sydney's The Daily Telegraph ([proof]({{ site.baseurl }}/downloads/daily_telegraph_sidney_tasktic_review.jpg)), and it was - and I am still shocked, shocked by it - **[featured among the top 10 products of Product Hunt's Tech page on Christmas day 2015]({{ site.baseurl }}/2015/12/28/the_product_hunt_effect.html)**:

![tasktic_on_producthunt_homepage.png]({{ site.baseurl }}/assets/images/blog/2015-12-28-the_product_hunt_effect/tasktic_on_producthunt_homepage.png)

What a journey!

Tasktic is also somehow *a victim* of my other apps and of the continuous evolution of Swift in its first years: the last major update shipped [over 3 years ago]({{ site.baseurl }}/2016/07/25/laying_the_foundations_for_the_future_tasktic_1_5.html) and the big 2.0 I've poured *so many hours* into (my guess: over 200... it had themes, habits tracking, a more modern UI and much more) sits 80% completed on my hard drive and never launched in the App Store, again slowed down to a halt by my newest apps (after Tasktic I launched [Always There]({{ site.baseurl }}/always-there), [Walk More]({{ site.baseurl }}/walk-more), [ContactsAMI]({{ site.baseurl }}/contactsami), [GlanceCam]({{ site.baseurl }}/glancecam) and [PhotosUpload]({{ site.baseurl }}/photosupload)) and, not insignificantly, by the huge cost of migrating to a new Swift version apparently every time I opened Xcode, something that either you diligently did every time, or became a really big burden if you accumulated technical debt.

Having said all this, **it's very sad - incredibly sad - for me to pull the plug on Tasktic, and I truly hope I'll be able to resuscitate the project some day in the future**. 

**Most of what I know as a programmer, I have to thank Tasktic for**.

But it makes sense to remove it from sale for the time being: the app is out of date, doesn't fit modern devices right, in a few cases (as far as I know, only for myself and one user) is also crashing on iOS 13 (when in-app statistics are enabled); on top of that, the market has evolved, more modern apps are available and it would be difficult to justify the work necessary to ship version 2. I have a lot on my plate right now, with GlanceCam and the upcoming TameTime, and sooo little time... so, dear Tasktic, goodbye *for now* 😥.

<p align="center">
	<img src="{{ site.baseurl }}/assets/images/blog/2019 -09-26-sunsetting_tasktic_for_now/tasktic-removed-from-sale.png" alt="" data-position="center center" />
</p>