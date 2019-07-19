## Contents

1. Introduction
2. Provocations
2. Tools
3. Set-up
3. Appendix
3. Impressum

<span class="page-break"></span>

## Introduction

This workshop was originally designed as a way for designers to explore the possibilities of web programming languages as tools for design and self-publishing. It could also be of interest to anyone interested in: learning or experimenting with the finer points of web typography, web-based archival or publishing tools, alternative models for presenting content on the web.

There are probably many differences we can point to between a book and a website (or between analog/digital, old/new, etc.), and most of them have been discussed exhaustively in other places. For the purposes of this workshop, we are interested less in the difference in these media but in how to apply the unique features of each to the other.

<span class="page-break"></span>

## Provocations

We think of a book as a static object. Once it’s been printed, that’s it (until perhaps a new edition is released). The content cannot change, the form will always remain as originally intended, and it is, by definition, scarce. And by its nature, the process of making a book must follow a certain procedure: we create the content that will go inside it, format this content into the design of the book, print the pages, and bind it all together. The book is a finished state.

The internet (by way of its artifacts, websites) works very differently: we start with the form and let the contents flow into it. The design may adapt or even break to match a growing or at least changing set of inputs. There is no finished state.

This workshop explores what happens when you combine finished and unfinished states to create a snapshot in time.

Books are a wonderful format because their form (the best ones, anyway) respond to their subject. The book can be crafted around the story and become another layer in telling that story. In addition, they travel well, don’t run out of batteries, and by their very design tell you how much there is to read and how much you’ve got left.

A website has a harder time doing this because often the rules are written before the story is told. Rules-based design has its own benefits though: once properly set up, we have to do very little.

What would a book be like if:

- No ‘author’, ‘editor’, or ‘designer’ is involved in its making
- It never goes out of date
- It can by customized by the person reading it
- My copy is different than your copy
- It is different today than it will be tomorrow

## Tools

You’ll  need a few important pieces that work together to make this all function:

- A service like [Zapier](https://zapier.com/) or [IFTTT](https://ifttt.com/discover)—Connects various web services to automatically run a process when certain conditions are met
- [Small Victories](https://www.smallvictori.es/)—Automatically publishes files on your computer to a website/URL
- [Bindery.js](https://evanbrooks.info/bindery/)—Formats a website/web code into a printable book

No specialized coding knowledge is required for this course. We will cover basic HTML and CSS, mostly as they pertain to typography, and a tiny bit of JavaScript. You will need some basic tools for this part:

- A code editor like [Atom](https://atom.io)
- A [Dropbox](https://www.dropbox.com) account. You can do this via the Dropbox web interface but it’s much easier to use the Dropbox desktop app so that you have access to all your files through the finder
- Chrome [developer tools](https://developers.google.com/web/tools/chrome-devtools/)
- There are other materials on the [class resources Github](https://github.com/jheftmann/class-resources) that will be useful
- In addition, you’ll need whatever design software you want to use to sketch out your book

Finally, you’ll need to download the project template. I’ve gotten the basic set-up working for you so just follow the instructions for installing it in your own project.

<a href="https://www.dropbox.com/s/xy186ad9hgqaji4/template.zip?dl=0" class="button">Download</a>

<img class="spread" src="_assets/spread.jpg" alt="round the world">

## Set-up

After your concept and design is ready, you’ll need to get set up to write some code. We’ll cover some best practices together in class. Once you’re ready to go:

### 1—Create a website

You will receive an invitation to a shared Dropbox folder. This folder is connected to Small Victories. Any files you put into this folder will sync to Dropbox and appear on your website (demo). The URL of your website will follow this structure: `jacobheftmann.com/automatic-book-workshop/projects/course/firstname` (I’ll post this in class).*

*if you’re doing this on your own (not in a workshop) you can just make your own new Small Victories website (Feed) and use that instead. (And of course that’s the URL you’ll use.)

### 2–Update settings

In your project folder, there is a file called `_sv_settings.txt`. Update this with the name of your project and description. You’ll need at least the following:

```
title:
theme: feed
description:
```

### 3—Install Bindery.js

[Download the template files](https://www.dropbox.com/s/xy186ad9hgqaji4/template.zip?dl=0) and unzip them. Put the contents of this folder into your project folder. When you refresh your website, it should look something [like this](https://sv-custom-themes.smvi.co/sv-bindery). You may also want to add some of your own content (or at least remove the deafult content). Other than Bindery, this works just like a normal SV site ([check the docs](https://docs.smallvictori.es/) if you have questions).

### 4—Connect content

Depending on your individual project, you’ll need to connect IFTTT or Zapier with your Dropbox project folder. You’ll use one of these services to automate the creation of the content that fills your book based on your own specific parameters. Test the integration to make sure that content is appearing in your project folder (and on your website) as expected.

### 5—Configure Bindery

In your `_sv_custom.js` file, there is a function that runs `bindery.js`. You can customize this function to set specific margins, page sizes, etc. based on your individual design ([refer to the Bindery docs](https://evanbrooks.info/bindery/docs/#printsetup)).

### 6—Design book

After your content and book are working to your satisfaction, open up your `_sv_custom.css` file to start designing your book.

<span class="page-break"></span>

## Appendix

### Related reading

- John Caserta [website](http://johncaserta.com/) and [book](http://johncaserta.com/bindery.html)
- [for / with / in](http://htmloutput.risd.gd/book/)
- [Library of the Printed Web](https://printedweb.org/)
- [Every Photo](https://bindery-demo.smvi.co/)

### Projects

HBKSaar 2019

- [Jacob Heftmann](projects/hbk19/heftmann)
- [Simon Feltes](projects/hbk19/simon)
- [Matchima Toebkaya](projects/hbk19/matchi)
- [Sophie Hauck](projects/hbk19/sophie)
- [Besnik Spahijaj ?](projects/hbk19/besnik)
- [Celine Felber](projects/hbk19/celine)
- [Mirko Michelacci](projects/hbk19/mirko)
- [Angelina Müller](projects/hbk19/angelina)
- [Fiona Arenz](projects/hbk19/fiona)
- [Emma Zerial](projects/hbk19/emma)
- [Francesca Simonetti](projects/hbk19/francesca)
- [Christian Dietz](projects/hbk19/christian)
- [Hannah Dietel](projects/hbk19/hannah)
- [Felix Bronko Noll](projects/hbk19/bronko)

<span class="page-break"></span>

## Impressum

The source code for this website is available [on Github](https://github.com/jheftmann/automatic-book-workshop).

The files and documentation for the SV + Bindery theme are on the [SV Developers Github repo](https://github.com/smallvictories/developers/tree/master/03-custom-templates/sv-bindery). You can also [check out the basic demo](https://sv-custom-themes.smvi.co/sv-bindery).

Thanks to [Evan Brooks](https://evanbrooks.info/) for creating Bindery.js and his assistance in getting it set up, and to [John Caserta](http://johncaserta.com/) for introducing me to Bindery and general inspiration.

[Small Victories](https://www.smallvictori.es) takes the files on your computer and turns them into websites. No coding, serves, or CMS required, and it’s free. This book/website is set in [Freizeit](https://polytype.co.uk/) and [GT Alpina](https://www.grillitype.com/).
