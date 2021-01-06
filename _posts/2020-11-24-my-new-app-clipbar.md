---
layout: post
title: A small new Mac app, ClipBar&#58; Pasteboard Viewer
description:
image: assets/images/clipbar/clipbar_banner.jpg
tags: clipbar
---
As I [mentioned on Twitter](https://twitter.com/cdf1982/status/1330171075456536580) a few days ago, my brain has found a creative way to sabotage the work on my main app [GlanceCam]({{ site.baseurl }}/glancecam): instead of being plain unproductive, 🧠 screams 🐿 in different directions, knowing that I will eventually start the chase.

So, here I am to introduce you to my latest diversion, **[ClipBar: Pasteboard Viewer]({{ site.baseurl }}/clipbar)**.

**ClipBar is a small macOS utility that allows to quickly check what's in your Mac's pasteboard before actually pasting; if you have ever wondered what was the last thing you copied, this app is for you.**

ClipBar **lives in the Menu Bar** and shows **the last item you copied**: if it's text, the corresponding string is displayed (you can set the maximum length shown and where to clip the text if it's longer: at the beginning, in the middle or at the end); for files, it shows the full path; and, finally, it displays the size of the images you copy. All this, with optional emojis 🎉.

I'm **finding the ability to quickly glance at the content of my pasteboard surprisingly useful**, and I believe it's making me both **faster and more accurate** in my work, from emails to writing and programming.

The app is modern, small and efficient and works natively on Intel Macs and on Apple Silicon, being a good citizen both of Big Sur and of previous versions of macOS (starting with High Sierra); it's not a clipboard manager, but it can complement yours, if you use one (for me, it's [Alfred](https://www.alfredapp.com)).

Since your pasteboard's data might be very sensitive, ClipBar only works locally on your Mac: no sync, to 3rd party libraries or frameworks, no analytics... actually **no Internet connection at all**! The app is fully sandboxed and does not persistently store your pasteboard contents on disk: it only keeps the last item in RAM while the app is running. More details con be found, in plain English, in the [Terms of Service and Privacy Policy]({{ site.baseurl }}/privacy/clipbar_terms_of_service_and_privacy_policy).<br>
Speaking of terms, there is one thing that you should carefully consider before starting to use the app: ClipBar displays on your screen, in plain text, the last thing you copied, and that might include passwords or other privileged informations; **if you work around other people or screenshare a lot, you need to evaluate if this is the right app for you**, or at least remember to quit it before having collegues look at your screen. When you launch the app the first time, you can find more informations about this, to help you make a more informed choice.

I'd love for you to **try ClipBar today**, and maybe tell your techy friends about it! You can **already find it in the [Mac App Store](https://apps.apple.com/us/app/clipbar-pasteboard-viewer/id1541739143)**, where it costs very little money – with no subscriptions or in-app purchases and, again, the peace of mind of knowing that your pasteboard's content will remain securely confined on your device while being easily glanceable!