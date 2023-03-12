---
layout: post
title: Reducing friction to hopefully blog more
description:
image:
tags: web-dev
---
In a [Mastodon conversation](https://iosdev.space/@cdf1982/110008868604331332) with [Lucas](https://lucas.love) I mentioned that the workflow to publish to this Jekyll blog is one of the reasons I almost never publish on my blog. It's either that, or an excuse, and since I'm being honest, the more I think about it, the more I believe it's more of the latter...

But still:
1. Open a text editor;
2. Add Jekyll's front matter;
3. Actually write the blog post;
4. Save the file with the expected file name structure;
5. `bundle exec jekyll serve` locally to see if it renders okay;
6. Catch a few typos;
7. Repeat 5;
8. Commit and push;
9. Load the published post to double-check.

Is not an insignificant number of steps, and I'm lucky that I did place my blog folder on Dropbox from the beginning, so I at least don't need to move files around if I'm on my phone or iPad.

[Blot.in](https://blot.im), mentioned by Lucas, immediately tempted me: save a file or an image into a Dropbox folder and have it immediately, automatically posted on a blog.
A 2-steps process! At 4$ per month, not expensive either.
But I know myself and I'd soon be fighting with the theme or discover some limitations, and I'd certainly want to migrate the current 118 posts, which would lead to building some automations... things would spiral a bit out of control, just like when people instead of completing tasks test 8 different task managers. I really don't have the time and mental energy for that.

So I wondered if I could automate some of the steps of the current workflow, not really for long form posts, but to reduce friction for micro-blogging with the existing infrastructure of my website.
If it's a couple sentences on the go, maybe on my phone, I could certainly skip the local preview, but the commit and push step would remain annoying, even with [Working Copy](https://apps.apple.com/us/app/working-copy-git-client/id896694807).

Enter [gitwatch](https://github.com/gitwatch/gitwatch) and a couple Drafts actions, and less than an hour later I feel I took away a decent part of the friction (excuse) to short form frequent blogging:

1. A simple [Drafts](https://getdrafts.com) action inserts Jekyll's front matter at the beginning of a draft _(I'll probably set a Keyboard Maestro text expansion as well, but I started with Drafts because this action will be available on every device)_;

2. When I'm done writing a Post to blog Drafts action prompts for the slugified draft name, prepends the date in the format I use and saves it into the _posts folder on Dropbox, archiving the draft with the proper tags;

3. gitwatch on my M1 Air monitors my _posts folder and automatically commits and push.

Perfect? No. Faster? Yup! Possible Improvements going forward:

- Move gitwatch on my Mac VM running on Proxmox, instead of my Air, so it really runs _all the time_;
- If I can find a way to pipe [aicommits](https://github.com/Nutlope/aicommits) commit messages to gitwatch, I'd very much prefer those to the current _"Scripted auto-commit on change (%DATE%) by gitwatch.sh"_ format... but I can live with it if achieving that turns this into "a project"M
- Find a way to quickly post photos, no text, because the Blot.in way to publish images to a blog just by dragging a file into a folder really looked glorious.

This has been a fun, self-contained Sunday morning project. Now we'll see if I'll really blog more...

P.S. _ça va sans dire_, this blog post has been posted directly from Drafts on my iPad and has been auto-committed and published! 🤓