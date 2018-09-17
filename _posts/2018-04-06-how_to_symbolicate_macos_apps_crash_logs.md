---
layout: post
title: How to symbolicate macOS apps crash logs
description:
image:
tags: [development]
---
Alternate title: TIL Xcode does not symbolicate Mac applications .crash files, that only works for iOS apps.

I made a pretty obscure mistake in GlanceCam 1.3 that lead to a crash during its app review.

I'm very sorry for wasting app review some time (they have been amazing, both understanding and allowing an hedge-case for sandboxing and giving GlanceCam lighting fast reviews, usually less than a day!) , but they have been so kind to attach a crash report and I had to symbolicate it ("Symbolication replaces memory addresses with human-readable function names and line numbers").

Having done that a few times in the past directly in Xcode, I went straight there, but as I mentioned above, no luck. There's plenty of resources online on how to do that "by hand", but I want to point out a couple, very useful, solutions for other fellow developers:

Bob Matcuk's gist perfectly describes all the steps to manually symbolicate a crash report, including checking the build number; this involves using the atos command in Terminal, which is not bad at all, but it can get a bit repetitive if you want to check more addresses (lines).
Tomaz's Symbolicator is a Swift Xcode project that compiled right out the box (sometimes, with Swift the language fast-paced evolution makes you work a bit before a project from the Internet actually builds) generating a very easy to use command line application that automatically fetches the DSYM files from the Xcode archives and overwrites the crash report with functions and line numbers that a simple human being like myself can actually understand.