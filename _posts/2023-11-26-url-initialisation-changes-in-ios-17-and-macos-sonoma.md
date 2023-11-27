---
layout: post
title: Bitten by URL initialisation changes
description: 
image: 
tags: dev
---
In early October I read a [blog post by Toomas Vahter](https://augmentedcode.io/2023/10/02/changes-to-url-string-parsing-in-ios-17/) describing a change introduced in Xcode 15 beta 5 over the summer and that I didn't notice in the release notes at the time _(guilty, I don't read them for every beta)_.

The post detailed the effects of the change, summarised in the following disclaimer Apple added to [URL's documentation](https://developer.apple.com/documentation/foundation/url/3126806-init):

> For apps linked on or after iOS 17 and aligned OS versions, [`URL`](https://developer.apple.com/documentation/foundation/url) parsing has updated from the obsolete RFC 1738/1808 parsing to the same [RFC 3986](https://www.ietf.org/rfc/rfc3986.txt) parsing as [`URL`](https://developer.apple.com/documentation/foundation/urlcomponents). This unifies the parsing behaviors of the `URL` and `URLComponents` APIs. Now, `URL` automatically percent- and IDNA-encodes invalid characters to help create a valid URL.

After reading that post, I reviewed the official documentation, since I make [a Mac app](https://www.glancecam.app) that allows Users to enter their IP camera URLs for streaming purposes; I also ran additional tests on Sonoma, even if I had been using the new macOS and Xcode betas on my main computer all summer, without noticing any issue.
Since everything was fine, I concluded that my initial interpretation of the note – _"For apps **linked on or after** iOS 17 and aligned OS versions"_ – was correct and that I would not need to deal with the change until I would have raised the deployment target of my app from macOS 10.14 to Sonoma or newer.

My assumption was **quite the mistake**: ~~_linked on_ does not mean targeting, turns out™ that Apple means _running on_. Most certainly a native English speaker would have had a better month than I had...~~

> **Next day update #1:** As [Jeff Johnson](https://mastodon.social/@lapcatsoftware/111477120131417551) and [Alexander Blach](https://social.blach.io/@lextar/111478870807601367) kindly and patiently explained, _linked on_ refers to the SDK version: as soon as my app compiled with Xcode 15 (which includes the macOS 14 SDK) runs on macOS 14 Sonoma, the new URL behavior is used. I really appreciate their help in clarifying the meaning and implications of that note!

Here's a quick recap of the long journey that reminded me, again, that words matter *a lot* and, most importantly, **what you might need to know if you deal with URLs in an app running on Apple platforms**.

A bit of context: my app does not have a large user-base, we're talking very few thousands Users; on Sonoma launch day, I had a new version ready and for 99% of the Users who updated macOS, it was smooth sailing; I had a hiccup that required a quick update for Users still on 10.14, because [Xcode 15 made a bit of a mess with linking](https://developer.apple.com/documentation/xcode-release-notes/xcode-15-release-notes#Linking), but everything went well after that, as I did expect after running the app on Sonoma all summer.

Then, over the following weeks, 5 different Users contacted me reporting a **crash at launch**; reinstalling a previous version of my app that I provided patched the problem, allowing them to immediately resume using the app, but any new beta I sent trying to investigate what was going on would crash and burn immediately at launch, and the crash reports they kindly provided pointed me to code that had been left unchanged for years.

There was no common hardware or software denominator among them, only that they ran Sonoma and had previously been using my app for a while.
As for me, I could not reproduce the crash, and taking out every single line changed in last releases did not help: the same source code of the previous version they had installed and were using successfully immediately crashed after recompiling it.
All of these Users have been so patient and supportive, I can't thank them enough for helping me throughout very frustrating weeks.

Finally, I built a beta with logging on file for each single step the app performs at launch, and found this message logged:

```swift
 dataCorrupted(
            Swift.DecodingError.Context(
                codingPath: [_JSONKey(stringValue: "Index 3", intValue: 3), CodingKeys(stringValue: "webcamStreamURL", intValue: nil)],
                debugDescription: "Invalid URL string.",
                underlyingError: nil
            )
        )
```

One by one, all Users' logs showed a similar message, so I immediately thought about that URL change that _would not be relevant for me right now_. But why only for these 5 people, and not hundreds of other Users who were using Sonoma without any issue?

I asked some of the 5 Users about their URLs, and found out they had special characters in their passwords. Uhm, interesting. Never been a problem, but I certainly could try using the new [`URL(string:encodingInvalidCharacters:)`](https://developer.apple.com/documentation/foundation/url/4191020-init) initialised with `false` and see if it helped.

It did not.

What certainly helped was discovering that just adding a @ inside a password would cause the last version of my app to crash, but not the previous ones. Oh, **the joy of finally being able to reproduce a bug**.

Manually escaping those special characters, or changing passwords to alphanumerical ones, also was a relevant discovery.

mmm.

Thanks to a precious suggestion [from a friend who systematically saves my bacon](https://mastodon.social/@mattiem/111459775491506431), I then learned that a URL could be decoded as String; that piece of knowledge snowballed into learning very interesting – and to me unexpected – things.

So, let's jump into what I did find out today, doing experiments with a Playground.

First, let's **review the URL behavior I have serenely enjoyed for over five years**:

![]({{ site.baseurl }}/assets/images/blog/2023-11-26-url-initialisation-changes-in-sonoma-ios17/01_Ventura_Xcode14_NO_special_characters.png)

![]({{ site.baseurl }}/assets/images/blog/2023-11-26-url-initialisation-changes-in-sonoma-ios17/02_Ventura_Xcode14_WITH_special_characters.png)

![]({{ site.baseurl }}/assets/images/blog/2023-11-26-url-initialisation-changes-in-sonoma-ios17/03_Ventura_Xcode15_WITH_special_characters.png)

All three screenshots were taken on **Ventura**, **both with Xcode 14 and 15**.

You can see that **the URL initialises successfully even when a "special character" is included in the password**.

Now, **look at what happens on Sonoma with Xcode 15** _(daily I use 15.0, but the latest version available at this date – 15.1 beta 3 – behaves exactly the same)_:

![]({{ site.baseurl }}/assets/images/blog/2023-11-26-url-initialisation-changes-in-sonoma-ios17/04_Sonoma_Xcode15_NO_special_characters.png)

![]({{ site.baseurl }}/assets/images/blog/2023-11-26-url-initialisation-changes-in-sonoma-ios17/05_Sonoma_Xcode15_WITH_special_characters.png)

Saw that on line 10? **Just throw in a special character into the password and the URL is nil**; fine, circa, at least now I know where my last weeks went _(actually very annoying to have a breaking change like this one poorly documented)_.

But what about the new URL initialiser that has a parameter that enforces the previous behavior?
Yeah, using that one – on line 11 – does not change the result, still nil. ~~This is quite the surprise.~~

> **Next day update #2:** Yeah, not so much of a surprise: the initialiser's new parameter is called `encodingInvalidCharacters:`, and when I think about it, a space is an invalid character in an URL, but an @ is not, so it makes sense that it is not encoding it. This debugging experience feels like a minefield of onions, each one with layers and ready to explode if you make one wrong assumption...

~~Luckily, I (and you, if you found this on Google) can **dance in and out of the problem by manually percent-encoding and decoding the string before using it to initialise the URL**.~~

> **Next day update #3:** Not so fast, kiddo. **Manually adding the percent-encoding results in a non-nil URL, but having a URL that successfully resolves is a completely different story**... in my case, _"the dance"_ results in _valid_ URLs that do not actually connect to the cameras. The solution for me will therefore likely be to manually handle specific special characters (so far, I'm sure about @ and /, but I'll basically have to manually test most non-alphanumeric characters) _strictly_ inside the credential components.

I still need to implement the change into my app _(I will be very, very careful: the last thing I want and need in my life after the last month is to go from 5/X.000 users with a problem to X.000/X.000)_, but I wanted to blog about this because I cannot be the only person that has been bit by this change.

I wonder if there's Feedback for Apple into this. Maybe about the docs?
I now understand that I should have not stored and initialised URLs the way I did, but the fact that they just worked fine for years caught me by complete surprise when this change in URL behavior happened, and certainly this was not easy to debug.

I'll think more about this, after I'll have fixed my app for those extraordinary Users without breaking anything for the others; in the meantime I hope my _fun fun fun_ journey at least helps some fellow developer.
