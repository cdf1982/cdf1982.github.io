---
layout: post
title: Printing HTML pages to PDF with wkhtmltopdf
description:
image:
tags: [automation]
---
Today I discovered a pretty cool command line tool, [wkhtmltopdf](https://wkhtmltopdf.org/index.html) that allows to print a website (or a local HTML document) to PDF preserving the original page style (CSS, images, tables, etc.) in a much truer to the original way than a regular browser would do:

1. Install wkhtmltopdf, either downloading a [compiled binary](https://wkhtmltopdf.org/downloads.html) or compiling the [source code](https://github.com/wkhtmltopdf/wkhtmltopdf) yourself; I went with the ready-to-install package.

2. Run the commandline following command with two parameters (or [more](https://wkhtmltopdf.org/usage/wkhtmltopdf.txt), if you need to tweak the result): the source URL and the destination file:

> wkhtmltopdf www.apple.com ~/Desktop/test.pdf

3. Enjoy your PDF.

For comparison, here's apple.com homepage "printed" with this tool versus the same page printed from Safari:

![wkhtmltopdf_vs_safari.png]({{ site.baseurl }}/assets/images/blog/2019-09-11-printing_html_pages_to_pdf_with_wkhtmltopdf/wkhtmltopdf_vs_safari.png)

Pretty neat, uh?