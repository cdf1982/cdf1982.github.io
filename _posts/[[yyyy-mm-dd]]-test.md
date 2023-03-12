---
layout: post
title: Reducing friction to hopefully blog more
description:
image:
tags: web-dev
---
In a [Mastodon conversation](https://post.lurk.org/@lucas/110002373603911557) with [Lucas](https://lucas.love) I mentioned that the workflow to publish to this Jekyll blog is one of the reasons I almost never publish on my blog. It's either that, or an excuse, and since I'm being honest, the more I think about it, the more I believe it's more of the latter...

But still:
1. Open a text editor;
2. Add Jekyll's front matter;
3. Actually write the blog post;
4. Save the file with the expected file name structure;
5. `bundle exec jekyll serve` locally to see if it renders okay;
6. Catch a few typos;
7. Repeat 5;
8. Commit and push
9. Load the published post to double-check

Is not an insignificant number of steps.

[Blot.in](https://blot.im), mentioned by Lucas, immediately tempted me: save a file or an image into a Dropbox folder and have it immediately, automatically posted on a blog is a 2-steps process. At 4$ per month, it's not expensive either. But I know myself and I'd soon be fighting with the theme or discover some limitations, and I'd certainly want to migrate the current 118 posts, which would lead to building some automations... things would spiral a bit out of control, just like when people instead of completing tasks test 8 different task managers. I really don't have the time and mental energy for that.

So I wondered if I could automate some of the steps of the current workflow, not really for long form posts, but to reduce friction for micro-blogging with the existing infrastructure of my website. If it's a couple sentences on the go, maybe on my phone, I could certainly skip the local preview, but the commit and push step would remain annoying, even with [Working Copy](https://apps.apple.com/us/app/working-copy-git-client/id896694807).
