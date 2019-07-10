---
layout: post
title: "How Can I Prove That My Version B Will Be Better?"
categories: optimize
author: Pascal Laliberté
image: 2019-07-12-ab-testing-how-to-prove-version-b-better.jpg
---

You've got [enough visits to start an A/B testing experiment][previous], but now you're wondering how that calculation works exactly. How do I know if my Version B will end up being better than my Version A, _with numbers_.

## The Three Factors

Let's break A/B Testing apart into its three factors.

1. **Number of visits (sample size)**: The more visitors you have, the easier it is to see if there's a difference, with confidence (see _significance_ below).
2. **How well your version A is doing (baseline conversion rate)**: Right now, if you don't change anything about your site, how well is the thing you're tracking doing? That newsletter sign-up button, how often is it pressed compared to the total unique visits to that page? Is it 3%? Lower?
3. **How well you think you can improve it (percentage improvement)**: Do you think you can improve your baseline conversion rate (factor #2) by 20%? 30%? 50%?

There's a useful relationship between factors #1 and #3. The more you think you can improve your page's conversion, the [**fewer visitors you need to _prove_ it**][previous].

But how do you _prove_ your version B will be _better_?

## A _Significant_ Difference

Although **you _can't prove_ version B will be better,** you can be pretty sure there is a _significant difference_ between the two versions.

That significance is measured by something called the [p-value][pvalue]. A value of 0.05 for a p-value  is what we're normally looking for, and it means the following:

[pvalue]: https://en.wikipedia.org/wiki/P-value

<div class="primer" markdown="1">

### p-value

A p-value of 0.05 means that there's only a 5% likelihood that the difference between version A and version B was caused by something _other_ than the difference you introduced.
</div>

_Measuring_ significance is about _ruling out_ other factors much more than it is about _proving_ a factor. To get a more precise version of that explanation, [here's a link to the Wikipedia article on the p-value to dig further][p-value-wiki].

[p-value-wiki]: https://en.wikipedia.org/wiki/P-value

To get a p-value of 0.05 (or lower, of course, the lower the better), you need to run the math. And that math takes into account the three factors in this way:

1. Increases in the **number of visits (sample size)** reduces the p-value (gives you more confidence there's a significant difference);
2. A lower percentage for **how well your version A is doing (baselines conversion rate)** increases the p-value (adding uncertainty, because there are too few conversions to make our calculations from);
3. Increases in **how well you think you can improve it (percentage improvement)** reduces the p-value (your improvement will be easier to demonstrate).

## Calculating Whether Version B Will Bring A Significant Difference

Given those three factors, how do you calculate whether the percentage improvement will be significant?

For the details on how that calculation is done, [here's a link to an interactive notepad you can modify and see the calculations in action][calculator]. Here's how it looks after you follow that link:

[calculator]: https://observablehq.com/@pascallaliberte/significance-calculator

[![Screenshot of the interactive notepad](/assets/images/posts/2019-07-12-ab-testing-how-to-prove-version-b-better-01.jpg)][calculator]
{: .img-zoom }

_Note: The calculations used here will be a little different than the ones used in the [previous article][previous], namely because the previous article's tool (Optimizely) derives its p-value calculations from data from their own service._

[previous]: {% post_url 2019-07-05-how-much-traffic-needed-to-start-ab-testing %}

Next week, we'll be answering the question: "How Do I Increase Conversion Rates Without Being a Jerk?"

Stay Sharp!
