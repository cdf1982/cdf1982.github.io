---
layout: post
title: MousHero for Safari Documentation and Examples
description:
image:
tags: [moushero]
---
**_What is MousHero?_**<br>
MousHero _(mouse-hero)_ is a **Safari for Mac extension** that adds automation superpowers to your browsing experience: **trigger URL actions by adding up to 3 custom context menu items to Safari's right-click menu**.<br>
Just by right-clicking on a webpage, you'll be able to launch apps, services and automations _(for instance with third party applications such as Shortcuts, Keyboard Maestro, Drafts, etc.)_, optionally passing the currently selected text, page URL and title as parameters.
<br>

**_How do I configure MousHero?_**<br>
MousHero unlocks powerful capabilities, but is very easy to use:<br>
a. Download MousHero from the [Mac App Store](https://apps.apple.com/us/app/moushero-for-safari/id6447680045);<br>
b. Launch MousHero from your Applications folder and follow the on-screen instructions to enable the MousHero Safari extension;<br>
c. Click on MousHero's icon in the Safari toolbar to show the customisation interface;<br>
d. Add a name for the custom menu item and the URL you want to execute when you click it;<br>
e. Now, right-click anywhere in your Safari page, or select some text and then right-click, and your custom actions will appear in the context menu.
<br>

**_Can I pass the selected text as parameter into the action URL? What about the website address and title?_**<br>
Yes, yes and yes! **Just type in SELECTION as placeholder in the action URL to have it dynamically replaced with the selected text when you run the action**.<br>
Additional placeholders are **PAGEURL for the website address** and **PAGETITLE for the, you guessed it, title of the current page**.
And you can combine multiple placeholders in a single action URL, MousHero will take care of replacing them while properly percent-encoding the text. See the examples below for details.
<br>

**_I need some examples of URLs I can use..._**<br>
You can add any kind of URL to a MousHero action, so the only limits are your imagination and the availability of a URL scheme for the third-party applications and services you're using.
Here's a few examples of what you'll be able to achieve with just a right-click inside Safari, to inspire you and show how the SELECTION, PAGEURL and PAGETITLE placeholders can be used to pass informations as parameters in the URL:

| Use case  | URL                                                                                                                |
|-----------|--------------------------------------------------------------------------------------------------------------------|
| Open a specific website in a new panel                | _https://www.instagram.com/millakillapilla/_                           |
| Run your Shortcuts                                    | _shortcuts://run-shortcutname=ShortcutName_                            |
| Run your Shortucts passing the selection as parameter | _shortcuts://run-shortcut?name=ShortcutName&input=text&text=SELECTION_ |
| Run your Shortucts passing the page URL as parameter  | _shortcuts://run-shortcut?name=ShortcutName&input=text&text=PAGEURL_   | 
| Create a new note in Drafts with the selected text    | _drafts://x-callback-url/create?text=SELECTION_                        |
| Run a Drafts action without creating a new note       | _drafts://x-callback-url/runAction?text=SELECTION&action=ActionName_   |
| Open the Inbox project in OmniFocus                   | _omnifocus:///inbox_                                                   |
| Add the selected text as task in OmniFocus            | _omnifocus://x-callback-url/add?name=SELECTION_                        |
| Add page title to OmniFocus with the URL in the note  | _omnifocus://x-callback-url/add?name=PAGETITLE&note=PAGEURL_           |
| Run a Keyboard Maestro macro passing the selection    | _kmtrigger://macro=MacroName&value=SELECTION_                          |
| Search the selected text on Google Maps               | _https://www.google.com/maps/search/SELECTION_                         |
| Search the selected text on StackOverflow             | _https://stackoverflow.com/search?q=SELECTION_                         |
| Search the selected text on Amazon                    | _https://www.amazon.com/s?k=SELECTION_                                 |

**_If I right-click on a link, the link description is passed as parameter in the URL instead of the actual link_**<br>
This is a limitation I'm currently working on, stay tuned for the next update!
<br>

**_Can I open a file or a folder on my Mac?_**<br>
No, MousHero is sandboxed and cannot open files and folders on disk. This is a good thing for security, but also means that the _file://_ URL scheme does not work.

**_I still need help!_**<br>
Please, don't hesitate to contact me, Cesare, at [support@cdf1982.com](support@cdf1982.com) and I'll do my best to assist you!