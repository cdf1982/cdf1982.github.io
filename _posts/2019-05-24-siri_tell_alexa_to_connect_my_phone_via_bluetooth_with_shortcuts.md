---
layout: post
title: Siri, tell Alexa to connect my phone
description:
image:
tags: automation shortcuts
---
I usually fall asleep listening to podcasts, which means that every night I have to tell the Echo Dot to connect to my phone via Bluetooth and ask Siri to resume playing Overcast while setting a sleep timer.

For a while now I have had the second part automated in Shortcuts, inside a night-time routine that involves other steps too, but a bug with the Echo forced me to ask twice for my phone to connect to the Echo, combining a futuristic automation on the phone with the actual human (me) forced to the following dance 👏every👏single👏night👏:

**Me:** *"Alexa, connect my phone"*

**Alexa:** Your phone is already connected

(it is not)

**Me:** *"Alexa, connect my 🤬 phone!"*

(the phone finally connects)


Yesterday, a miraculous over-the-air update to the Echo fixed this annoyance, and the phone now connects at first try.

The resulting joy motivated me to walk the final line and automate the Bluetooth connection with Shortcuts too... *#thefuture*

It wouldn't make much sense to share the actual shortcut, because it is personalized with my apps and needs, but here are the steps, in case you want to make your ladies in the tubes talk to each other:

1. Record yourself saying "Alexa, connect my phone";
2. Save the audio file into the Shortcuts folder in iCloud Drive;
3. Edit your "Going to bed" shortcut to play the audio file outloud and then proceed with the podcast playback with a preconfigured sleep timer.

I also added the reverse "Alexa, disconnect my phone" recording to the morning routine shortcut for maximum laziness; about that, a warning: when the phone is actually connected, Alexa does not listen to herself speaking, so the shortcut includes a "disconnect Bluetooth -> wait 3 seconds -> reconnect Bluetooth" step before playing the disconnection audio file. Here's a screenshot:

<p align="center">
	<img src="{{ site.baseurl }}/assets/images/blog/2019-05-24-siri_tell_alexa_to_connect_my_phone_via_bluetooth_with_shortcuts/siri-talk-to-alexa.PNG" alt="" data-position="center center" />
</p>