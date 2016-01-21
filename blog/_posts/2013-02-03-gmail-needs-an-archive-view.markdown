---
layout: post
title: I wish Gmail had an archive view
---
<style scoped>
	.mail-view {
		position: relative;
		width: 700px;
		max-width: 100%;
		margin: 2em auto;
	}
	table.mail-label-legend {
		position: absolute;
		right: 1em;
		bottom: 2em;
		color: white;
		background: white;
		padding: 0.8em;
		border-spacing: 0.8em;
		border-radius: 0.3em;
		box-shadow: 0 0.3em 1em rgba(0, 0, 0, 0.8);
		white-space: nowrap;
	}
	table.mail-label-legend td {
		padding: 0.5em 1.5em;
		text-align: center;
		line-height: 1.2em;
		border-radius: 1.1em;
	}
</style>
### The problem
I wish that archiving in Gmail worked better for me. It's an awesome concept and it shows up all over the UI. Only being able to find archived mail in All Mail, though, has become a problem.

My own All Mail view is dominated by public mailing lists, notifications, and my inbox:

<div class="mail-view">
<table class="mail-label-legend">
<tr>
<td style="background-color: #007470;">Mailing lists and notifications</td></tr>
<tr>
<td style="background-color: #6c4500;">Inbox</td></tr>
<tr>
<td style="background-color: #00ff18; color: black">Archived mail</td></tr>
	</table>
	<a href="/assets/2013/02/my-all-mail.png" target="_blank">
		<img src="/assets/2013/02/my-all-mail.png" alt="Most of the messages in view are notifications or from mailing list. A few are messages in my inbox. Only two are archived and not filed under any other label." width="700">
	</a>
</div>

Work is similar:

<div class="mail-view">
<table class="mail-label-legend">
<tr>
<td style="background-color: #00668c;">Feedback</td></tr>
<tr>
<td style="background-color: #670000;">Commits</td></tr>
	</table>
	<a href="/assets/2013/02/okc-all-mail.png" target="_blank">
		<img src="/assets/2013/02/okc-all-mail.png" alt="Almost every message in view is feedback. Two are commits. No archived personal email is visible." width="700">
	</a>
</div>

Finding a recent, relevant email in All Mail is super hard! Writing searches gets tiring fast.

It turns out that there's a big difference between my mail with at least one label (Inbox, Feedback, Alerts, NYC OKWS User Group, etc.) and mail that's archived with no labels at all. Archived mail is personal and has a low enough volume that it's useful for searching and browsing in a way that the firehose of All Mail is not. Unfortunately, Gmail doesn't provide a way to search or see only archived mail.

## I want a view of archived mail

So I made a label called Archive[^1] and stopped archiving messages in the Gmail sense. I move them to the archive when they have nowhere else to be. It makes me feel dirty but in it, baby, I can find things! Both browsing and searching are a pleasure because I never run into mail that skipped my inbox in the first place.[^2]

The system works with a couple of pitfalls: It's possible for a message to be orphaned in All Mail (where I won't look for it), and it makes Google's Gmail clients harder to use since they have more and easier ways to archive conversations than than to move them to a label[^3] (though it plays nicely with the Archive button and keyboard shortcut in newer versions of Apple Mail).

I would love a proper Archive view in Gmail which showed only unlabeled messages. I'd also love it if it were visible to IMAP &mdash; it would be super pleasant to have that view exposed instead of All Mail, which overlaps with everything else.[^4]

If I'm misusing something or you have any thoughts or ideas, [email me](mailto:sidney@s4y.us).

[^1]: Interestingly enough, Gmail doesn't let create a label called "Archive". I made one through IMAP which shows up in Gmail as <code>[Imap]/Archive</code>.

[^2]: This is an oversimplification. At work, important alerts hit my inbox but I move them to an Alerts label after I look at them and rarely need to see them again.

[^3]: That reminds me of one way IMAP is more flexible than the Gmail UI for organization (and Gmail's IMAP implementation supports it). It lets you file messages in a conversation separately. If a thread starts with an alert email or on a mailing list and continues off-list, I can and move the responses around without sucking the originals along behind them. Apple Mail supports this amazingly well: it shows the whole thread but gives a darker background color to the messages that aren't in the current mailbox or search results. When you move a conversation it also only moves the in-view messages, not the parts of the thread that it found in other mailboxes.

[^4]: One potential problem: If you move a message from, say, the inbox to the IMAP archive mailbox but that message also has other labels, what happens? For me the best behavior would be for it to lose the inbox label but keep the others, and to disappear from the archive mailbox right away. That might be unexpected and nasty for other people, or it might be easy to get used to. I'm still thinking about it.
