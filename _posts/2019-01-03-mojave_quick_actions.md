---
layout: post
title: Mojave Quick Actions
description:
image:
tags: [automation]
---
I must admit that, when macOS 10.14 Mojave was announced last June, I quickly dismissed the new Finder’s Quick Actions as a gimmick, and never looked back.
Then this week a couple of things made me revisit my superficial dismissal of this new automation feature and proved me wrong.

I was looking for a way to quickly move files from the Downloads ƒ to other frequent destinations and I was _almost_ ready to try [Power Menu for Finder](https://fiplab.com/apps/power-menu-for-mac), but the lack of a trial was a bit of a bummer.
Then I took advantage of the embedded “Rotate image” action a couple of times and immediately realized that I could try that route to automate some files operations, and I’m here to testify that it is both very effective and incredibly easy to implement.

These “shortcuts” are made in Automator, simply by opening it and selecting to create a new Quick Action:
![mojave_quick_actions_1.png]({{ site.baseurl }}/assets/images/blog/2019-01-03-mojave_quick_actions/mojave_quick_actions_1.png)
_(Sorry for the screenshots in Italian instead of English, but I thought the arrows would be enough to point you in the right direction without having to reboot my Mac to change language...)_

Then you select some conditions for when the action should appear in Finder and build the workflow according to your needs.
Here’s one I made for moving video files to my NAS; the notification is there because the copy operation happens without triggering the usual copy/move window and I wanted some kind of feedback:
![mojave_quick_actions_2.png]({{ site.baseurl }}/assets/images/blog/2019-01-03-mojave_quick_actions/mojave_quick_actions_2.png)
 
After saving the action in Automator, it appears in Finder; the cool thing is that the action is only shown when appropriate (meaning, when the file type matches what you did set in Automator), so you can have specific Quick Actions for different kind of files:
![mojave_quick_actions_3.png]({{ site.baseurl }}/assets/images/blog/2019-01-03-mojave_quick_actions/mojave_quick_actions_3.png)

I already made multiple actions for other operations, like retrieving subtitles for video files, and I’m very happy with this addition to Finder, so if you also didn’t look at it twice in September, maybe take another look at it.

The only thing I hope Apple will improve in future releases is the number of concurrent actions shown in Finder, currently two plus a more button that groups the others. I’d love to be able to see more actions when I enlarge the pane.