---
layout: post
title: "How To Quickly Tweak Text On Your Landing Page Directly In The Browser"
categories: copywriting
author: Pascal Laliberté
image: 2019-05-30-how-to-quickly-tweak-landing-page-text-in-browser.jpg
---

**You've been sweating over** the wording of a headline on your landing page and it's been frustrating to go into your WordPress thingy, make a change, click Preview and see how it looks.

Well there's a way to test that tweak right on the page, directly in the browser, super quick.

<div class="drag-to-bookmarks-container">
  <div>
    <a class="drag-to-bookmarks-link" href="javascript:document.querySelector('body').setAttribute('contenteditable', true);">Make Page Editable</a> 
  </div>
  <div>
    <strong>Just drag this link</strong> to your browser's bookmark bar.
  </div>
</div>

And then visit a page and edit like this:

![Clicking the bookmark makes the page editable](/assets/images/posts/2019-05-30-how-to-quickly-tweak-landing-page-text-in-browser-01.gif)
{: .img-zoom }

_**Note: this will only temporarily change the text.** Hit Refresh, and the changes are gone. Copy/paste your new marvel somewhere else, take a screenshot, email it with <key>Command-I</key> or print it out before you hit Refresh!_

## Two More Ways

Here are two other ways to do the same.

**Option 2:** If you're [on Firefox, there's an extension called ContentEditable][firefox-extension] and it adds a cute edit icon to the address bar to edit the page.

[firefox-extension]: https://addons.mozilla.org/en-US/firefox/addon/contenteditable/

**Option 3:** Or here's some JavaScript you can execute from your browser's console (right-click, then select _Inspect Element_). In fact the bookmark button above uses this line of code in the `href`:

```js
document.querySelector('body')
.setAttribute('contenteditable', true);
```

Stay Sharp!

_P.S. Be on the lookout for an upcoming article where we'll be tweaking some headings using this quick technique!_

_P.P.S. **This week's post marks half a year** blogging about all the ways you can sharpen a product or service using a good knowledge of [what goes on in the mind of your buyer][four-forces], applying the [Jobs-To-Be-Done theory][jtbd-intro] to understanding your buyer, [tips on copywriting][copywriting] and more. I'll have plenty more material to cover, and so be sure to sign up below to be the first to know (before Twitter, before LinkedIn) when an article comes out each Friday._

[jtbd-intro]: {% post_url 2018-11-29-intro-to-jobs-to-be-done-through-examples %}
[four-forces]: {% post_url 2018-12-06-forces-of-progress-in-purchase-decision %}
[copywriting]: {% post_url 2019-05-17-how-long-landing-pages-make-calls-to-action-work %}
