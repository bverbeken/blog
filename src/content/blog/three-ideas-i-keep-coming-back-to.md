---
title: 'Three ideas I keep coming back to'
description: "A keynote told a room full of developers to stay positive about AI. Will we be fine? I honestly don't know, but here are three reasons why I think we will."
pubDate: 2026-10-28
writtenBy: assisted
---

Stephan Janssen ended his [opening keynote](https://www.youtube.com/watch?v=aup9tNzQu7c) at Devoxx Belgium this year with a half-filled glass, and this message: "If you're not jumping on the train, you're going to be left behind. [...] let's all be positive. It's a glass half full situation."

For some reason, I found that very depressing. The room was full of people who'd been doing their job for 10 to 20 years, and over the last year or so, that job has changed, radically and very suddenly. And you tell them to "be positive"?

So, will we be fine? I honestly don't know.

But in my mind, software has never been *just* about typing code. If you define software as a solution to an automation problem, and a software developer as someone who builds these solutions, then yes, I think we'll be fine. For three reasons.

## Programming won't go away

The programmer of the future builds agents that build software, rather than building the software itself.

Yes, human languages (English, for instance) have become programming languages. It's one more level of abstraction, just like when we went from assembly to Java. And yes, this means all humans are now *technically* able to write programs, where before this was reserved for the happy few who knew the secret magic language.

However, being *technically* able to do something doesn't mean you're *actually* able to do it. Just because I know Dutch doesn't mean I can write a Dutch book. Let alone a good one.

The difference is *skill*: programmers have skills that non-programmers don't have.

A few examples:
* non-programmers think in terms of happy paths. The user clicks "Pay". What if they click twice? What if the network drops after the payment, but before the confirmation?
* non-programmers don't think about security. One of our endpoints answers "wrong login/password combination", and nothing else, on purpose. Anything more, like "this user doesn't exist", could be very helpful to an attacker.
* non-programmers don't think about scale either. An agent once wanted to add a new database index, so a query could cover 30 days of data. I asked it to limit the query to 7 days instead: users don't need to be able to see the whole month at once. No new index needed.

And then there's one that may be controversial: building in small steps. Cut the thing into pieces, take them one by one. The smaller, the better. I'm not sure *all* programmers are on the same page here, but imho it's the only way to build a good product. And building a product *in steps* is essentially a builder skill.

Perhaps I shouldn't say programmers, but software product builders. It takes a builder to build a builder.

## The old practices matter more, not less

Agents behave just like people. Much faster, that's all. So the Good Practices™ we came up with to catch people's mistakes (verifying, a tight scope, TDD, red-green-refactor, measuring, incremental development) catch theirs too.

Here's what that looked like for me over the last few weeks:

* An agent told me, with full confidence, how a customer used a certain feature. When I asked whether they really did, it admitted: "I inferred that and did not verify it." That's a guess, the kind a junior makes, and the fix is the same as with a junior: verify, don't assume.
* Another time, an agent and I were planning how to switch off an old endpoint that was still being actively used by a few customers. The plan kept growing, just like in a meeting: at some point it included a log sink to BigQuery. I told it: "I think we have been growing a plan, which is no good plan." In the end, the answer was a feature flag we already had.
* In a review, an agent claimed that a cache prevented a race condition. It wrote a test to prove it, and the test proved exactly the opposite (!).
* And my favorite: an agent merged two loops "for readability", the kind of refactor people do too. The result was about 40% slower. I only found out because I asked it to *prove* the new code wasn't significantly slower.

Agents make the same mistakes we do. And on top of that, the faster you produce code, the faster you produce mistakes. So the old practices matter more now, not less.

## We've always automated ourselves away

By nature, a developer's job has always been to make himself redundant. We don't do things three times: we do them once by hand, maybe a second time, then we automate them. (Martin Fowler's *Refactoring* has a version of this, the Rule of Three, which he credits to Don Roberts.)

A lot of other jobs don't work that way. A dentist keeps seeing patients, they keep coming. A real estate agent sells one house at a time. A teacher gets a class of same-age kids every year. I'm wary of drawing conclusions based on examples alone, but at the moment, I can't think of an example profession that is similar to programming in this respect. We programmers automate ourselves away: if something is hard to do, we make it easy, and that makes us redundant. In theory, at least. 

This self-destructing side of programming is very clear when you look at the evolution of programming languages. Ever since [the invention](https://www.charlespetzold.com/AnnotatedTuring/) of the distinction between hard- and software, we've been on a quest to let *muggles* program themselves: 4GLs, DSLs, WordPress. 

Now, with LLMs, we (well, someone) seems to finally have achieved that goal. 

Except, I'm not convinced. Even with LLMs, someone has to decide what to automate, and how, and that takes an automation specialist.

Which means automating is still, and will be, our job. 

## So, will we be fine?

I think so. At least, I hope so. I, for one, have already started automating myself away, by building a builder.

If I'm wrong about these three ideas, we're all screwed by Christmas anyway.
