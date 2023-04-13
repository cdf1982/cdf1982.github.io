---
layout: post
title: MousHero for Safari Documentation and Examples
description:
image:
tags: [moushero]
---
*What is MousHero?*<br>
MousHero is a **Safari extension** that adds automation superpowers to your browsing experience: **trigger URL actions by adding up to 3 custom context menu items to Safari's right-click menu**.<br>
You'll be able to launch apps, services and automations _(for instance with third party applications such as Shortcuts, Keyboard Maestro, Drafts, etc.)_, optionally passing the currently selected text as parameter.
<br>

*How do I configure MousHero?*<br>
1. Launch the app and follow the on-screen instructions to enable the MousHero Safari extension;
2. Click on MousHero's icon inside Safari's toolbar to show the customisation interface;
3. Add a name for the custom menu item and the URL you want to execute when you click it;
4. Now, right click anywhere in your Safari page, or select some text and then right-click, and your custom actions will appear in the context menu.
<br>

*Can I pass the selected text as parameter in the URL?*<br>
Yes! **Just type in SELECTION as placeholder in the URL, and MousHero will take care of replacing it while properly percent-encoding the text.** See the examples below for details.
<br>

*I need some examples of URLs I can use...*<br>
Here's a few URL scheme examples to give you an idea of what you'll be able to achieve with just a right-click inside Safari:
1. Run your Shortcuts, optionally passing the selected text as parameter with shortcuts://run-shortcut?name=ShortcutName&input=text&text=SELECTION
2. Create a new note in Drafts with the selected text with drafts://x-callback-url/create?text=SELECTION or skip the note creation and directly execute a Drafts action on the selection with drafts://x-callback-url/runAction?text=SELECTION&action=ActionName
3. Add the selected text as task in OmniFocus: omnifocus://x-callback-url/add?name=SELECTION
4. Run Keyboard Maestro automations with kmtrigger://macro=MacroName&value=SELECTION
<br>

*I still need help with __________!*<br>
Please, don't hesitate to contact me at [support@cdf1982.com](support@cdf1982.com) and I'll do my best to assist you!
<br>

