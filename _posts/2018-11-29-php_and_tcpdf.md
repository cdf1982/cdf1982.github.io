---
layout: post
title: Getting started with PHP and TCPDF
description:
image:
tags: automation php
---
For years I wondered how PHP scripts actually worked and yesterday I found out that it's not too hard to start playing with them, as often is the case in this lucky age we live in... most answers are just a Google search away and things are only hard until we actually look at them with purpose.

First, my use case: generate PDF files in code with [TCPDF](https://tcpdf.org/).
TCPDF is a well established library, with no dependencies, but it's actually been discontinued in favor of a new version; for my needs, this mature product is fine and it's with it that I made the experiments I describe here.

A quick way to get something running in just a few minutes is to [download TCPDF from Github](https://github.com/tecnickcom/TCPDF), extract it to a folder and open Terminal in that location; then we launch the local PHP server with just a command:
> php -S localhost:8000

Now, before we  can actually generate a PDF, we need to pick one of the samples from the library 'examples' sub folder, open it with a text editor and change the import statement to:
> require_once('../tcpdf.php');

Last, we load that script in Safari, pointing at a URL structured like the following:
> http://localhost:8000/examples/the_example_you_chose_and_edited.php

Boom, if everything went smoothly (this post is not a *real* tutorial, so you might need to figure out some things yourself), that local server running in Terminal is serving you a PDF document generated from the script.

From this starting point, a lot of experimenting can follow; for instance, changing the output statement in the script to the following will save the PDF file directly to disk (you probably need to change the permissions of the folder to r/w for everyone in order to make this test work):
> $pdf->Output("test.pdf", "F");

If you're interested and got this far, both the documentation and StackOverflow will help you achieve anything you desire with this library; myself, I'm happy to finally be able to look at a PHP script with at least an idea about how to run it.

One last note: obviously, you won't usually run something like this from the php local server in Terminal... I instead use the Apache webserver that ships with macOS, also a pretty easy thing to start to play with, provided that you need to manually launch it after enabling PHP in its *httpd* configuration file, but that's a post for another day.