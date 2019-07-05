---
layout: post
title: "How Much Traffic Do I Need To Start Doing A/B Testing?"
categories: optimize
author: Pascal Laliberté
image: 2019-07-05-how-much-traffic-needed-to-start-ab-testing.jpg
---

> I'd like to start measuring improvements quantitatively, but I don't think I have enough traffic. What's the point when I can start doing real A/B Testing?

Improving a site's effectiveness is a guessing game, that is, _until you have enough traffic_ to demonstrate a difference between two versions. Version A, version B, that's where A/B Testing (or split-testing), comes from.

When do you know you have enough traffic to make that measurement count?

<mark>You need a lot of traffic, but if you think you can make a big difference, you don't need as much.</mark>

## If Version B Makes a Bigger Difference, You Need Fewer Visits

Optimizely, a popular A/B Testing tool, comes up with these numbers in their [online sample size calculator][calculator]. _(Note: Optimizely bases their numbers on data from the A/B tests they run for everyone, and so other online sample size calculators will give you different numbers.)_

[calculator]: https://www.optimizely.com/sample-size-calculator/

**You'll need 26,000 visits**, or 13,000 for each version, if you're currently converting 3% of your visitors and you think you can increase that **by 20%**. [See the calculation on Optimizely with a 20% increase](https://www.optimizely.com/sample-size-calculator/?conversion=3&effect=20&significance=95).

**But you'll only need 10,600 visits**, or 5,300 for each version, if you're currently converting 3% of your visitors and you think you can increase that **by 30%** instead.  [See the calculation on Optimizely with a 30% increase](https://www.optimizely.com/sample-size-calculator/?conversion=3&effect=30&significance=95)

[![Screenshot of the Optimizely Sample Size Calculator](/assets/images/posts/2019-07-05-how-much-traffic-needed-to-start-ab-testing-01.jpg)](https://www.optimizely.com/sample-size-calculator/?conversion=3&effect=30&significance=95)
{: .img-zoom }

That difference comes from the fact that a bigger difference between two versions will take a smaller sample size to measure.

**You might also ask:** "how can I reach a 30% conversion rate (or more) without trying all the nasty tricks that people pull on visitors for them to convert".

Well, it requires that you think deeply about **helping the visitor make some progress**.

_Be on the lookout in the next few weeks for articles on how to do that, and a breakdown of how to to calculate whether a Version B will be better._

Stay Sharp!
