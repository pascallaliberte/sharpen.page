---
layout: post
title: "Where to Listen More Deeply When There's a Deluge of Information"
categories: jtbd
tags: research
author: Pascal Laliberté
image: /assets/images/posts/2020-04-03-where-to-listen-when-deluge-of-information.jpg
published: true
watering_holes_filters:
  - value: all
    name: All
    selected: true
  - value: free
    name: Free
  - value: paid
    name: Paid
  - value: product
    name: Product Community
  - value: freelancing
    name: Freelancing
  - value: slack
    name: Slack
  - value: forum
    name: Forums
  - value: reddit
    name: Reddit
related_posts:
  - 2020-03-27-when-my-product-is-purchased-for-new-use-cases
  - 2020-03-20-freelancing-in-a-recession-roundup-of-tips
  - 2020-03-13-when-your-software-proposes-different-process
  - 2020-03-06-selling-when-times-are-rough
  - 2020-02-21-freelancing-two-markets-at-once
  - 2020-01-17-level-3-sharpening-so-you-can-rely-less-on-sales
  - 2019-12-27-itch-to-create-getting-clarity-on-why
  - 2020-01-03-itch-to-create-making-your-idea-inevitable
  - 2020-01-10-itch-to-create-incorporating-outside-advice
  - 2019-11-29-product-yes-no-or-not-yet
  - 2019-11-01-sharp-example-applicationemail
  - 2019-09-27-rewriting-mental-models-about-introducing-yourself-as-freelancer
  - 2019-08-30-just-lucky-or-idea-solid
  - 2019-03-29-how-to-select-buyers-for-purchase-story-interviews
  - 2019-03-08-interview-questions-to-ask
  - 2019-03-01-two-ebooks-purchased-together
  - 2019-01-25-industry-standard-pricing-no-such-thing 
  - 2018-11-29-intro-to-jobs-to-be-done-through-examples
excerpt:
  Despite the calamity we're going through, there are going to be changes in how people get to work. If you want to find ways to help them make progress, now's the time to start listening.
---

You've been wanting to create a new product for a while now.

Or maybe you're going to start needing more consulting work, and my gosh, things are changing these days.

Or maybe you're done clinging to the news feed, and you want to roll up your sleeves and get to work, **find out how you can help those that are in need**.

Well, now's a great time to be listening. Listening is a verb, and we're going to verb this listening out. We'll be listening where no one is listening. We'll detect who is zagging when everybody is zigging. We'll do like what [Rand Fishkin proposes us to do][read-the-room]: we'll "Read the room".

[read-the-room]: https://sparktoro.com/blog/read-the-room/

## The Goal: Listening for Specific Evidence of "Struggles", _Frequently_

[Innovation requires struggles][struggle]. The goal will be to pay very specific attention to evidence of struggles, or people pulling for a solution to solve a problem. We're starting with the idea that, despite the current economy stalling and our collective attention is bound to beating this virus, there are still people actively trying to solve specific, **non-generic struggles** for their livelihood.

[struggle]: {% post_url 2019-09-06-hard-struggle-required %}

This article won't go into detail on how to help these people out. Still, consider that it'll probably be a good idea to just help these people out right there in the spot where you find them, especially with information or educational material that will point them the right way. Or maybe it's too early to jump out helping. You be the judge.

The point here is to **start a practice of listening for the next few months to a year _at least_.** Because now's the time to start.

## _Now_ Is the Time to Be Listening

[Bob Moesta had this to say][bob-moesta-podcast] on a recent podcast (emphasis mine):

> What are those underlying things [...] what's holding people back? What is literally holding people from basically doing the things they need to do? And as you those struggles, all of a sudden, to me, that's where the world opens up. [...] **The silver lining to kind of a horrible thing like this is that it's going to force us all to innovate**. In some cases, those who don't innovate will literally lose and take it back to the way it was. [...] We have to start to study and understand where do people struggle and one of the feature sets we need to develop is to **help them make progress, not the things that they like or say they want, because they don't know**.

[bob-moesta-podcast]: https://overcast.fm/+X31DPJQ6g/17:14

[Amy Hoy chimes in with the same advice][amy-hoy-podcast] in another podcast (she runs the 30x500 course I'll be mentioning further down in the article, and also, emphasis mine):

[amy-hoy-podcast]: https://overcast.fm/+JmiMZMjZg/1:06:45

> **Now is the best time to get real about what do people actually pay money for and to actually research your customers.** [...] If you study what people actually do and which companies continue to make money and figure out how you can carve out a little bit of that pie for yourself, that is honestly the safest thing you can do (and it's always good advice) [...] to just understand that when things are good people will spend on a lot of frivolous stuff that couldn't survive during a bad time and you don't want to be one of those. You definitely don't want to start one of those. If you already got one, now is the time to figure out how to **pivot to people who will get measurable value** from it and charge them money instead.

## Where: Find New Voices Just Outside of Your Usual Feed

To start, let's break out of our usual feeds to find some new voices from **people you'd likely want to help anyway**.

### Follow the Followers

On Twitter, for example, **I look for the followers of people I follow**. I look for people who might be in a business that's still paying for solutions, and I follow them **via a private Twitter list**.

One way to list all the followers of a Twitter account is to use [t, a command-line power tool for Twitter][t] for the Mac:

[t]: https://github.com/sferik/t

<code>t followers -l -c @microconf > microconf-followers.csv</code>

Note: Just make sure to use the tool on an account that has fewer than 6k followers, otherwise the tool won't be able to complete the operation.

I then order the resulting spreadsheet by number of followers (descending) and filter for people with a URL, or with a certain keyword in their bio.

The resulting private Twitter list is focused on those people so that I can listen more precisely.

## Where: Find Entirely New Feeds (Online Communities)

The web is vast. There are a ton of communities where people go to find help, voice their problems, stay in the know, and help others.

So here's a list, alphabetized, of some of the online communities that I've found:

<div class="external-links" data-controller="articles-list">
  <div class="articles-filter-links" style="margin-bottom: 1em;" data-controller="menu" data-action="change->articles-list#highlightFilteredArticles change->menu#update update->menu#update">
    {% for tag in page.watering_holes_filters %}
      <a href="#{{ tag.value }}"
       data-target="menu.link" 
       data-value="{{ tag.value }}" 
       data-action="menu#select"
       class="external-link-filter {% if tag.selected %}active{% endif %}"
       >{{ tag.name }}</a>
    {% endfor %}
  </div>
  
  {% for link in site.data.watering-holes %}
    <a href="{{ link.url }}" class="external-link" data-target="articles-list.article" data-categories="{{ link.tags }}">
      {{ link.name }}
      {%- if link.note %} <small class="external-links-note">({{ link.note }})</small>{% endif -%}
    </a>
    {% unless forloop.last %} • {% endunless %}
  {% endfor %}
</div>

_UPDATE May 14, 2020: Added `Freelancing` filter, added r/freelance, removed one that's now closed_

_(Note: Thinking this list is missing something? let me know on Twitter [@pascallaliberte][twitter].)_

[twitter]: https://twitter.com/pascallaliberte

## How: Levels of Listening

On each of these communities, make multiple passes using different lenses, different levels of listening, to better understand people's situations.

1. First: look for **statements that seem to indicate there's a struggle**, so you can see who is seeking help;
2. To go deeper: look for **keywords** that come up frequently, which will help you search elsewhere;
3. To go deeper: look for **untold pain**, the kind that is implied beneath what the person is saying, so you can find unmet needs you can possibly tend to;
4. To go deeper: look for beliefs, **worldviews**, conclusions, biases and mental models that tell you how the person sees the world and his options (there's no use trying to change someone's worldview when helping).

To master these techniques, [consider the excellent 30x500 course][30x500] by Amy Hoy and Alex Hillman of Stacking the Bricks. Highly recommended.

[30x500]: https://30x500.com/academy/

## How: Conduct Purchase Interviews

When people make purchase decisions, they go through a messy internal back-and-forth.

If you've found people who made a purchase after a lot of deliberation, consider interviewing them to get the [purchase story][purchase-story]. This will help you identify the [forces that were at play in the mind of the buyer][four-forces] (what motivated them to start, get attracted to move forward, hesitate, what they defaulted back to) and possibly also discover the [real competitors for the product][non-consumption].

[purchase-story]: {% post_url 2019-02-08-digging-purchase-story-for-gold %}
[non-consumption]: {% post_url 2018-12-17-universal-competitor %}
[four-forces]: {% post_url 2018-12-06-forces-of-progress-in-purchase-decision %}

Conducting purchase interviews is perhaps the most deliberate, intentful listening technique, but gets you to the core of the motivations for people who made an _actual_ purchase, getting you the evidence you're after. And if you've made such a surprising purchase recently, [I'd love to hear your purchase story](/your-purchase-story/).

Stay Sharp!
