---
layout: home
---

# Helping software devs like you sharpen your<br><mark>sales pages</mark>.

---

<div class="home-personal-intro" markdown="block">

I'm {% include avatar.html %} Pascal Laliberté, and **I help software devs like you improve copywriting instincts, <mark>improve your understanding of the buyer</mark>** and craft sales pages for your product idea, or your new service offering idea, or your new publication.

[Jump down to Services](#services){: .cta-btn }

</div>

## Something came up for you...

...and now it's time to <mark>get serious and put something up for sale</mark>.

* Maybe you put together **a first draft of a sales page**, and it's not going to land like you hoped it would.
* Maybe you feel everything is up in the air in our careers, **something's not right, and you need to start innovating**. Something _noteworthy_ that people will talk about.
* Maybe you've been trying to make a product work for a long time. **The product isn't fitting the market.** You've considered changing direction completely, but maybe you're thinking there's still a different option.
* Maybe <mark>you thought that the thing would just sell itself</mark>.

<div markdown="1" data-controller="purchasable-services">

## Services I Offer:
{: #services }

I have these three service offerings to help you:

<div markdown="1" class="home-service-offering-summary">

### _Option #1_<br>Ten Articles on Buyer Psychology, Ten Weeks

A free option (currently)&mdash;Over ten weeks, you receive **ten articles, adapted to your situation**, on how to understand buyer motivation, purchase momentum, applying the Jobs-To-Be-Done theory to writing sales copy, and more. Limited availability.

_Start here:_{: .home-service-offering-start-here }<br>
[Apply via email](mailto:pascal@hey.com?subject=Buyer%20Psychology&body=Hi%20Pascal%2C%0A%0AI%27m%20interested%20in%20getting%20articles%20on%20buyer%20psychology%20from%20you%20over%20the%20next%20ten%20weeks.%0A%0ADo%20you%20have%20a%20spot%20to%20start%20this%20week?%0A%0AI%20know%20you%27ll%20be%20tailoring%20the%20articles%20for%20my%20situation%2C%20so%20please%20ask%20me%20follow-up%20questions.%0A%0ALooking%20forward%20to%20it%21){: .cta-btn } or [learn more at /ten](/ten)

</div>

<div markdown="1" class="home-service-offering-summary"
  data-controller="purchasable-service"
  data-action="service-ladder:ready@document->purchasable-service#adjustPurchaseOptions"
  data-purchasable-service-slug="sharpen_page_feedback_two_weeks"
>

### _Option #2_<br>A Sales Page Feedback Service

**Over 2 weeks, over text and async video**, I give you unlimited feedback on your sales page. I help pin down the copy and flow. I help clarify the struggle the solution helps with and the progress your buyer is looking to make. You send me a draft, I send you my feedback.

We'll be using a page on Clarityflow.com to have our back and forth exchange. I'll set the page up after pre-payment.

I can help review one of many sales pages, for a product, or for some service offerings, or for a new publication.

_Start here:_{: .home-service-offering-start-here }

<div markdown="1" data-target="purchasable-service.buttons">
[Inquire about next available 2-week block](mailto:pascal@hey.com?subject%3DA%20Sales%20Page%20Feedback%20Service%26body%3DHi%2C%0A%0AI%27d%20like%20to%20inquire%20about%20your%20next%20availability%20for%20a%202%20week%20Sales%20Page%20Feedback%20Block..){: .cta-btn }

**USD $1,800**
</div>

<template data-target="purchasable-service.buttonTemplate">
  <form action="%endpoint%" method="POST" class="checkout-button-wrapper">
    <input type="hidden" name="checkout[service_uuid]" value="%service_uuid%">
    <input type="hidden" name="checkout[start_date]" value="%start_date%">
    <input type="hidden" name="checkout[end_date]" value="%end_date%">
    <button type="submit" class="cta-btn">
      Book weeks of %date_range_as_string%, USD $%price_in_dollars%
    </button>
  </form>
</template>

After pre-payment, you'll receive an invitation to a page on Clarityflow.com where we'll hold our coaching discussion.
{: .home-service-offering-terms }

<blockquote>
  <p>
    Pascal helped me tremendously to pin down the messaging and site structure of <a href="https://railsreviews.com">railsreviews.com</a>. His systematic method for discovering hidden opportunities and buyer hesitations is one of a kind. With a sharp eye for customers' struggles, his analyses are insightful, actionable, and rewarding. I'm looking forward to collaborating with him again in future projects.
  </p>
  <cite>—<a href="https://twitter.com/julian_rubisch/">Julian Rubisch</a></cite>
</blockquote>

</div>

<div markdown="1" class="home-service-offering-summary">

### _Option #3_<br>A Freelancing Services Page Package

To help you put together a freelancing or consulting page like this one, providing some sharp options to the client you'd like to attract, I offer this **done-for-you service**, from strategy to design to implementing the site.

**The price range is in the 4 to 5 digits**, depending on whether we'll be setting up a revenue sharing arrangement.

_Start here:_{: .home-service-offering-start-here }<br>
[Inquire via email](mailto:pascal@hey.com?subject%3DA%20Freelancing%20Services%20Page%20Package%26body%3DHi%2C%0A%0AI%27d%20like%20to%20inquire%20about%20your%20package%20to%20build%20a%20freelancing%20services%20page%20for%20me.%0A%0AHere%27s%20a%20little%20about%20me%20and%20the%20kind%20of%20services%20I%27d%20like%20to%20offer%3A){: .cta-btn }

</div>

</div>

That new idea of yours... I hope you'll make it happen.

Stay sharp!

{% include avatar.html %} Pascal Laliberté  
[pascal@hey.com](mailto:pascal@hey.com)  
[@pascallaliberte][twitter]  
Ottawa, Ontario, Canada

[twitter]: https://twitter.com/pascallaliberte

{% include email-sign-up-form.html context="home" %}
