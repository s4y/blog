---
layout: post
status: draft
title: Why doesn&rsquo;t Wikipedia use redirects?
author:
  display_name: sidney
  login: sidney
  email: sidney@s4y.us
  url: ''
author_login: sidney
author_email: sidney@s4y.us
wordpress_id: 167
wordpress_url: http://sidnicious.com/?p=167
date: '2011-11-29 10:37:03 -0500'
categories:
- Uncategorized
tags: []
comments: []
---
<p>Last night, I searched Wikipedia for "foam core". The search sent me here:</p>
<pre>http:&#47;&#47;en.wikipedia.org&#47;wiki&#47;Foam_core<&#47;pre></p>
<p>The article&rsquo;s heading looked like this:</p>
<p>Every Wikipedia user, no doubt, runs into redirected pages like this a good chunk of the time. They&rsquo;re all over the place, making it easy to find things even if you call them different things from the Wikipedia hive mind:</p>
<div style="border: 1px solid #AAA; font-family: Helvetica; font-size: 12px; padding: 0.5em; margin: 1em 2em;">
<h1 style="margin: 0; font-weight: normal; border-bottom: 1px solid #aaa; margin-bottom: 0.1em; line-height: 1.2em; font-size: 2.1em;">Crunkcore<&#47;h1></p>
<p style="margin: 0; line-height: 1.5em">From Wikipedia, the free encyclopedia<&#47;p></p>
<div style="font-size: 90%; margin: 0 0 0 1em; color: #7d7d7d;">(Redirected from <span style="color: #0645ad; text-decoration: underline">Crunk core<&#47;span>)<&#47;div><br />
<&#47;div></p>
<div style="border: 1px solid #AAA; font-family: Helvetica; font-size: 12px; padding: 0.5em; margin: 1em 2em;">
<h1 style="margin: 0; font-weight: normal; border-bottom: 1px solid #aaa; margin-bottom: 0.1em; line-height: 1.2em; font-size: 2.1em;">Metal umlaut<&#47;h1></p>
<p style="margin: 0; line-height: 1.5em">From Wikipedia, the free encyclopedia<&#47;p></p>
<div style="font-size: 90%; margin: 0 0 0 1em; color: #7d7d7d;">(Redirected from <span style="color: #0645ad; text-decoration: underline">R&ouml;ck d&ouml;ts<&#47;span>)<&#47;div><br />
<&#47;div></p>
<div style="border: 1px solid #AAA; font-family: Helvetica; font-size: 12px; padding: 0.5em; margin: 1em 2em;">
<h1 style="margin: 0; font-weight: normal; border-bottom: 1px solid #aaa; margin-bottom: 0.1em; line-height: 1.2em; font-size: 2.1em;">Mathematics<&#47;h1></p>
<p style="margin: 0; line-height: 1.5em">From Wikipedia, the free encyclopedia<&#47;p></p>
<div style="font-size: 90%; margin: 0 0 0 1em; color: #7d7d7d;">(Redirected from <span style="color: #0645ad; text-decoration: underline">Maths<&#47;span>)<&#47;div><br />
<&#47;div></p>
<p>You can also get to the &ldquo;Foamcore&rdquo; article at its canonical address:</p>
<pre>http:&#47;&#47;en.wikipedia.org&#47;wiki&#47;Foamcore<&#47;pre></p>
<div style="border: 1px solid #AAA; font-family: Helvetica; font-size: 12px; padding: 0.5em; margin: 1em 2em;">
<h1 style="margin: 0; font-weight: normal; border-bottom: 1px solid #aaa; margin-bottom: 0.1em; line-height: 1.2em; font-size: 2.1em;">Foamcore<&#47;h1></p>
<p style="margin: 0; line-height: 1.5em">From Wikipedia, the free encyclopedia<&#47;p><br />
<&#47;div></p>
<p>The two pages are identical except for the little redirect notice, and the URL. That latter part bugs me.</p>
<p><a href="http:&#47;&#47;toolserver.org&#47;~mwbot&#47;logs&#47;%23mediawiki&#47;20111128.txt">Conversation<&#47;a></p>
<dl class="conversation">
<dt class="me">Me<&#47;dt></p>
<dd>
<p>Does Mediawiki ever 301 redirected articles?<&#47;p></p>
<p>I actually started with this question over at #wikipedia, because I'm pretty good at searching for things with the wrong spacing or capitalization, and ending up at a redirected page (e.g. http:&#47;&#47;en.wikipedia.org&#47;wiki&#47;Foam_core)<&#47;p><br />
	<&#47;dd></p>
<dt>TimStarling<&#47;dt></p>
<dd>
<p>you're using 301 as a verb?<&#47;p><br />
	<&#47;dd></p>
<dt class="me">Me<&#47;dt></p>
<dd>
<p>Sorry, yes :)<&#47;p><br />
	<&#47;dd></p>
<dt>TimStarling<&#47;dt></p>
<dd>
<p>and it means something different to redirected?<&#47;p><br />
	<&#47;dd></p>
<dt class="me">Me<&#47;dt></p>
<dd>
<p>If I copy the address of the page for email or something, I always find myself looking for the little redirect notice first.<&#47;p></p>
<p>Yeah, I just mean to ask the browser to go to the new URL.<&#47;p><br />
	<&#47;dd></p>
<dt>Joan<&#47;dt></p>
<dd>
<p><a href="https:&#47;&#47;bugzilla.wikimedia.org&#47;show_bug.cgi?id=18883">https:&#47;&#47;bugzilla.wikimedia.org&#47;show_bug.cgi?id=18883<&#47;a><&#47;p></p>
<p>It's the subject of that bug.<&#47;p><br />
	<&#47;dd></p>
<dt class="me">Me<&#47;dt></p>
<dd>
<p>Oh, awesome, thanks. I should have checked the bug tracker first.<&#47;p></p>
<dd>
<p>Interesting. It looks like the main argument is that an HTTP redirect would break the "Redirected from&hellip;" notice. I don't think I would notice if I never saw one of those messages again.<&#47;p><br />
	<&#47;dd></p>
<dt>TimStarling<&#47;dt></p>
<dd>
<p>yes, well the interface is not designed for you<&#47;p></p>
<p>MediaWiki is designed for writers, not readers<&#47;p><br />
	<&#47;dd></p>
<dt class="me">Me<&#47;dt></p>
<dd>
<p>I guess I didn't think of it that way (though, I've both written and read content on wikis). When would a writer prefer to not be redirected when they visit a page? As it is now, all the page-related links (edit, history, etc.) are for the destination page ("Foamcore"), I don't think any of them let you work with the source page ("Foam core").<&#47;p><br />
	<&#47;dd></p>
<dt>Joan<&#47;dt></p>
<dd>
<p>99% of MW users are readers, not writers.<&#47;p></p>
<p>So perhaps the software is being targetted incorrectly.<&#47;p></p>
<p>Targeted?<&#47;p><br />
	<&#47;dd></p>
<dt>TimStarling<&#47;dt></p>
<dd>
<p>we wouldn't have any readers if we didn't have any writers<&#47;p></p>
<p>so writers come first in more ways than one<&#47;p><br />
	<&#47;dd></p>
<dt>Joan<&#47;dt></p>
<dd>
<p>That's fair. Divergent interfaces might be best.<&#47;p><br />
	<&#47;dd></p>
<dt>TimStarling<&#47;dt></p>
<dd>
<p>but if you have divergent interfaces, then that makes anonymous editing more difficult, raising the entry barrier<&#47;p><br />
	<&#47;dd></p>
<dt class="me">Me<&#47;dt></p>
<dd>
<p>I probably just haven't run into this case since I'm a casual writer (and it sounds like both of you know this domain much better than myself). When, as a writer, is it helpful to stay at the original URL?<&#47;p><br />
	<&#47;dd></p>
<dt>liangent<&#47;dt></p>
<dd>
<p>Sidnicious: you can right click on the "read" tab and choose "copy link location" and send the link to others<&#47;p><br />
	<&#47;dd></p>
<dt>Joan<&#47;dt></p>
<dd>
<p>TimStarling: There was a post on Jimmy's talk page claiming that editor drop-out rates have stopped&#47;stagnated and there are now 34,000 active editors in each month.<&#47;p></p>
<p><a href="https:&#47;&#47;en.wikipedia.org&#47;wiki&#47;User_talk:Jimbo_Wales#Editor_base_stabilized_at_34.2C000_active_editors">https:&#47;&#47;en.wikipedia.org&#47;wiki&#47;User_talk:Jimbo_Wales#Editor_base_stabilized_at_34.2C000_active_editors<&#47;a><&#47;p><br />
	<&#47;dd></p>
<dt>TimStarling<&#47;dt></p>
<dd>
<p><Sidnicious> I probably just haven't run into this case since I'm a casual writer (and it sounds like both of you know this domain much better than myself). When, as a writer, is it helpful to stay at the original URL?<&#47;p></p>
<p>when you want to edit the redirect<&#47;p></p>
<p>you know anyone can create redirects<&#47;p></p>
<p>if you make it difficult to edit redirects, you make it difficult to revert vandalism involving redirecting existing pages to incorrect locations<&#47;p><br />
	<&#47;dd></p>
<dt>Joan<&#47;dt></p>
<dd>
<p>You could make the "redirected from" text dismissable.<&#47;p></p>
<p>I'm not sure enough people would utilize the feature to make it worthwhile, though.<&#47;p></p>
<p>People don't seem to care what the URL says, they just get bothered by the "redirected from" text, I think.<&#47;p><br />
	<&#47;dd></p>
<dt class="me">Me<&#47;dt></p>
<dd>
<p>liangent: Assuming I think about it. My browser has a keyboard shortcut to copy the current URL to the clipboard (which I use most of the time), and another to compose an email with that link. There's also a button in my address bar to bookmark the current page. I don't use twitter too much, but I've seen people use browser extensions and bookmarklets to tweet links (which automatically use the current page).<&#47;p></p>
<p>TimStarling: Ah, good point. I forgot that you could click the text after "Redirected from" to work with the redirect itself.<&#47;p><br />
	<&#47;dd></p>
<dt>TimStarling<&#47;dt></p>
<dd>
<p>Joan: if someone wanted such a feature, I'm sure they would file a feature request in bugzilla<&#47;p><br />
	<&#47;dd></p>
<dt>Joan<&#47;dt></p>
<dd>
<p>Yes, users love to file bugs in Bugzilla.<&#47;p><br />
	<&#47;dd><br />
<&#47;dl></p>
<p>After Joan linked to that bug, I took a look at it. Tried to register to comment.</p>
<dl class="conversation">
<dt class="me">Me<&#47;dt></p>
<dd>
<p>Which reminds me: how do new users register on bugzilla? The registration page says that account creation has been disabled.<&#47;p><br />
	<&#47;dd></p>
<dt>TimStarling<&#47;dt></p>
<dd>
<p>Sidnicious: ask nicely I guess<&#47;p><br />
	<&#47;dd></p>
<dt>Joan<&#47;dt></p>
<dd>
<p>Was account creation intentionally disabled?<&#47;p></p>
<p>I saw some chatter on the mailing list.<&#47;p><br />
	<&#47;dd></p>
<dt>p858snake|l<&#47;dt></p>
<dd>
<p>TimStarling: That doesn't really work, since you need to disable the block so they can register, then redisable<&#47;p><br />
	<&#47;dd></p>
<dt>TimStarling<&#47;dt></p>
<dd>
<p>yes<&#47;p><br />
	<&#47;dd><br />
<&#47;dl></p>
<p>Aaah, fuck it. I'm out.</p>
