---
layout: post
title: Isn't Jobs-to-be-Done Just a Subjective Interpretation?
categories: jtbd
tags: research
author: Pascal Laliberté
image: /assets/images/posts/2020-07-31-is-jtbd-subjective-interpretation.jpg
published: true
related_posts:
  - 2020-05-01-learn-more-about-jobs-to-be-done
  - 2020-07-17-evaluating-a-product-opportunity
  - 2020-06-19-when-having-to-find-buyers-for-your-product
  - 2020-05-29-funnels-explain-minority-purchase-scenarios
  - 2020-05-15-mind-reading-deep-research-using-multiple-passes
  - 2020-03-27-when-my-product-is-purchased-for-new-use-cases
  - 2020-04-03-where-to-listen-when-deluge-of-information
  - 2020-03-13-when-your-software-proposes-different-process
  - 2020-01-17-level-3-sharpening-so-you-can-rely-less-on-sales
  - 2019-11-08-pain-dream-fix-and-jtbd
  - 2019-08-23-how-to-know-if-built-too-much-product-overserving
  - 2019-03-29-how-to-select-buyers-for-purchase-story-interviews
excerpt:
  Your data-minded colleague poses that question about Jobs-to-be-Done. How do you answer? Here's how Jobs-to-be-Done changes the territory of discoverable data.
---

Your colleague works with data, and you've been explaining the Jobs-to-be-done theory in broad strokes:

1. People don't just buy a product, **[they _hire_ a product for a _job_ they need done][jtbd-intro]**.
2. **The product competes with an unusual set of alternatives for the same job**, not just the other players in the same space, but all the other "I'll just" alternatives like (e.g. figuring it out themselves), grouped into what's called [non-consumption][non-consumption].
3. **It's not enough to solve a pain point.** What you want to solve is a [hard struggle][struggle], the harder the better. It can be a recurring struggle or an urgent thing that came up. It's the struggling moment that creates the necessary momentum to carry a buyer all the way to making a purchase decision.
4. **There are no new jobs people need to hire a product for**, just a new set of [situations when][try-when] the job arrises and a buyer goes on a trek to find a solution.
5. **People just want to make progress**. No need to [insist on removing all friction][removing-friction]. No need for [slimy marketing tactics][slimy-jerk].
6. **In the mind of the buyer, there are [forces at play when deliberating a purchase decision][four-forces].** Some forces bring them toward a "yes, this, now" and other forces bring toward a "not this, not now". {% include components/badge-struggle.html short=true %}, {% include components/badge-attraction.html short=true %}, {% include components/badge-anxieties.html short=true %}, {% include components/badge-habits.html short=true %}. Make sure the first two are stronger than the last two, and you've got a sale.

[non-consumption]: {% post_url 2018-12-17-universal-competitor %}
[jtbd-intro]: {% post_url 2018-11-29-intro-to-jobs-to-be-done-through-examples %}
[struggle]: {% post_url 2019-09-06-hard-struggle-required %}
[try-when]: {% post_url 2019-02-21-try-when %} 
[removing-friction]: {% post_url 2020-07-24-landing-page-remove-friction-or-help-make-progress %}
[slimy-jerk]: {% post_url 2019-07-19-how-to-improve-conversion-rates-without-being-a-slimy-jerk %}
[four-forces]: {% post_url 2018-12-06-forces-of-progress-in-purchase-decision %}

---

So you and your colleague are working on a marketing analytics project. You started tracking your visitors and your users and you are now considering Jobs-to-be-Done as a lens for understanding the buyer a little better.

And yet, your data-minded colleague pushes back by saying:

> But isn't Jobs-to-be-done just a subjective interpretation?

You _know_ that customer jobs are discovered through empirically digging into purchase stories. You _know_ that [Jobs-to-be-Done interviews][purchase-story] grounds your qualitative efforts into reality through [rigourously asking retroactive questions][interview-questions].

[purchase-story]: {% post_url 2019-02-08-digging-purchase-story-for-gold %}
[interview-questions]: {% post_url 2019-03-08-interview-questions-to-ask %}

But your colleague comes from the world of data. So how do you create that bridge?

## Seeing Where the Data Are Incomplete

There's a good chance your colleague would love to use Jobs-to-be-Done to, say, [map a better funnel][funnel], but there aren't any data sources to hook into.

[funnel]: {% post_url 2020-05-29-funnels-explain-minority-purchase-scenarios %}

On the other hand, your company has access to demographic data, and your colleague speaks in terms like "Personas" and "Typical buyers" using data points from surveys, campaign attribution data and usage analytics.

You know personas don't help understand _causality_. **But personas are the closest thing your company can use to add abstraction to the data.**

So there's a hole in the data to fill. There's a gap between what is currently being measured (demographic and usage data) and what explains the customer behavior (the Jobs-to-be-done lens with struggling moments, forces of progress, aspirations, anxieties, alternatives.)

## Jobs-to-be-Done Expands, Changes the Data Territory

**Before** bringing in the Jobs-to-be-Done lens into a project, the only lenses at your disposal are demographic and usage data. Your understanding is confined to a data territory bound by what you collect. You're left making conjectures about what motivates the user behind abstraction layers like personas.

**After** bringing in the Jobs-to-be-Done lens into a project, and after digging purchase stories for insights on the buyer's motivation, you realize you have new areas for possible measurement.

Specifically, purchase interviews can open up the data territory on **a new set of collectible metrics**:

1. the intensity of the struggling moment,
2. the recurrence of the struggle,
3. the alternatives being considered,
4. the strength of the gravity well of "I'll just statements" pulling back toward non-consumption,
5. more importantly (and more easily measurable) **the places inside the app or the properties of the product post-purchase that create new struggles and their frequencies**.

## Measuring The Market Space Using Jobs Theory

In [Episode 7 of his podcast "Synthesis A Priori", Ryan Singer][synthetic-a-priori] muses with the idea of matching measurements with Jobs-to-be-Done.

[synthetic-a-priori]: https://synthetic.transistor.fm/episodes/product-movement-in-market-space

He talks about a "vector that describes a circumstance", or a "vector in a market space", describing the trajectory between what is hurting or missing or recurring (-1) and what is sought (+1).

The market isn't so much described by product categories, but by those struggling circumstances, alternatives being considered, and options being hired.

A product feature becomes a function, used to modify a state from being displeased to pleased, from being annoyed to being satisfied, from hurting to having something solved.

This contrast can then be measured (e.g. measures of intensity, value for the buyer), the data can be structured (what is it that's being solved e.g. time or access) and the places where the struggles are being felt can be identified (the starting points for solution-finding).

For more on Ryan's background on applying measurements to Jobs theory, check out his work on [longitudinal usage analytics][rjs-longitudinal-analytics].

[rjs-longitudinal-analytics]: https://www.feltpresence.com/analytics.html

---

Jobs-to-be-Done might not be a quantitative tool, but it is about exercising rigor to find evidence of struggling situations, alternatives, forces, and momentum to map out buyer motivations. The new insights can illuminate new areas for measurement, and in turn, can make measurement efforts more effective.

Stay Sharp!

_If you need a hand to conduct purchase interviews, please [give me a shout](mailto:pascal@hey.com?subject=Help+with+Purchase+Interviews)._
