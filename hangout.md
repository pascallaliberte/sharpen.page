---
permalink: hangout/
layout: page
title: Let's build and talk for an hour
class: offerings
show_breadcrumb: true
open: false
---

{% if page.open %}
I currently have my chat open. Come and hang out, talk about what we're building. Today I'm practicing Hotwire some more.

<a href="https://sharpen-page-office-hours.herokuapp.com/" class="cta-btn" target="_blank">Join the chat</a>

{% else %}
**The chat is closed right now,** but you can [find me on Twitter][twitter] to reach out. I'll probably just announce hangouts there next time.

Or maybe you'd like to [join the next Landing Page Review Meetup][review-meetup-signup]?

[review-meetup-signup]: https://buttondown.email/sharpen.page

{% endif %}

{% include avatar.html %} Pascal Laliberté  
[pascal@hey.com](mailto:pascal@hey.com)  
Ottawa, Ontario, Canada

[twitter]: https://twitter.com/pascallaliberte

<script>
setInterval(function() {
  window.location.reload()
}, 1000 * 60) // every minute
</script>
