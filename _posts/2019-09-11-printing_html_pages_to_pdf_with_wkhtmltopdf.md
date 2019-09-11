---
layout: post
title: Printing HTML pages to PDF with wkhtmltopdf
description:
image:
tags: [automation]
---
Today I discovered a pretty neat command line tool, [wkhtmltopdf](https://wkhtmltopdf.org/index.html), that allows to print a website (or a local HTML document) to PDF preserving the original page style (CSS, images, tables, etc.) in a way that is much truer to the original compared to what a regular browser could do; it also runs headless, so it can be very nice when you need to automate something.

1. Install wkhtmltopdf, either downloading a [compiled binary](https://wkhtmltopdf.org/downloads.html) or compiling the [source code](https://github.com/wkhtmltopdf/wkhtmltopdf) yourself; I went with the ready-to-install package.

2. Run the following command with just two parameters (or [more](https://wkhtmltopdf.org/usage/wkhtmltopdf.txt), if you need to tweak things a little), the source URL or file path and the destination file:

> wkhtmltopdf www.apple.com ~/Desktop/test.pdf

3. Enjoy your PDF, possibly without printing it to paper because this tools by default preserves the original page background, which is possibly not environmentally-friendly.

For comparison, here's apple.com homepage saved with this tool versus the same page printed to PDF from Safari:

![wkhtmltopdf_vs_safari.png]({{ site.baseurl }}/assets/images/blog/2019-09-11-printing_html_pages_to_pdf_with_wkhtmltopdf/wkhtmltopdf_vs_safari.png)

Pretty cool, uh?