---
title: Todos without time zones in Apple Reminders
permalink: tweaking-reminders.html
extra-css:
 - /css/videoPlayer.css
---

(If you just want to know how to make items in Reminders keep the same clock time between time zones, feel free to skip to [the fix](#the-fix).)

I’m on a trip with my Dad. On the first night away from home, I noticed that some recurring reminders on my phone weren’t pinging me at the right times. The time when the notifications appeared matched *New York* time, and we were somewhere else. The times displayed in the Reminders app were also shifted to show the local equivalents of the times I set back home.

Honestly, it’s fun to pop open Reminders alongside Date & Time Preferences on your computer, repeatedly click around the map, and watch all of the times in the Reminders app change to keep up.

{% include video.html file="2016/tweaking-reminders/switcharoo" width=390 params="loop playsinline" %}

For most of my reminders, though, I want “10 P.M.” to mean “10 P.M. local time, wherever I am”.

The Calendar app on macOS and iOS lets you associate a time zone with an event. On macOS, you're allowed to choose *floating* instead of a time zone, which means “this clock time, regardless of my current time zone”. The Reminders app doesn’t have time zone settings, but it understands time zones (and floating times) perfectly.

## Technical background

The Calendar and Reminders apps’ time zone support (and the term “floating”) comes from a specification called iCalendar, which defines a set of capabilities and a file format (`.ics`) which calendaring programs should use if they want to work with existing calendaring programs.

The basic structure of a `.ics` file is a series of nested sections bordered by lines that start with `BEGIN:` and `END:`. One from Reminders will probably contain these sections:

1. `VCALENDAR`: The whole file.
2. `VTIMEZONE`: A description of each time zone referenced in the file, in case the recipient’s device doesn't know about it.
3. `VTODO`: The reminder, including when it was created and whether it's been checked off.
4. `VALARM`: How you want to be notified about the reminder. Nested inside `VTODO`.

I’ll jump ahead to the fix now — if you want to discover other `.ics` file tweaks you can read [RFC-5545](https://tools.ietf.org/html/rfc5545) which describes it completely.

## The fix

First, on a computer (I haven’t found a way to perform this change on iOS, but it will sync to iOS devices), drag the reminders which you want to make time zone-free out of Reminders and into a Finder window (or your Desktop). You can select more than one, if you like.

{% include video.html file="2016/tweaking-reminders/step_1" width=508 params="loop playsinline" %}

**Important:** make a copy of this file. If anything goes wrong, you can drag the copy to Reminders in the Dock to get your original reminders back.

Open the file in TextEdit (or another plain text editor — for non-programmers, TextEdit is probably best).

{% include video.html file="2016/tweaking-reminders/step_2" width=662 params="loop playsinline" %}

You’ll need to change three lines in the file. If you exported multiple todos, change them for each todo (there will be a separate `VTODO` section for each).

Find the line that begins with `DTSTART` and looks like your reminder’s time. There may be other `DTSTART` lines near the top of the file — if they're between `BEGIN:VTIMEZONE` and `END:VTIMEZONE`, then they're part of a description of the existing time zone, and they'll generally be dates in the past — you can ignore them. The line to change should look somewhat like this:

    DTSTART;TZID=Europe/Rome:20160519T100000

Erase everything from the semicolon up to (but not including) the colon to make the line looks like this:

    DTSTART:20160519T100000

Repeat the same change for the line beginning with `DUE`. For example, you’d change this:

    DUE;TZID=Europe/Rome:20160519T100000

To this:

    DUE:20160519T100000

Finally, find the line beginning with `TRIGGER`:

    TRIGGER;VALUE=DATE-TIME:20160519T080000Z

This represents the time that you'll actually receive a notification about the item. This line has its own rules — it’s required by the spec to either be an absolute time in UTC (indicated by the `Z` at the end of the time — “zulu” is slang for UTC) or relative to `DTSTART` in a format you’ll see below.

Change the `TRIGGER` line to this:

    TRIGGER:PT0M

If you're in an adventurous mood, you can play with this value to set when you’ll be reminded. For example, a value of `PT-1H` will remind you one hour before the time on the reminder, and `PT10S` will remind you ten seconds after.

Make these three changes per reminder and **save the file**.

{% include video.html file="2016/tweaking-reminders/step_3" width=364 params="loop playsinline" %}

Back in Reminders app, delete all of the items you just modified. **This is critical:** on my machine, if I don't delete them, they keep their old time zones.

Open the modified `.ics` file with Reminders, either by dragging the file onto its Dock icon or by right clicking and using Open With…).

{% include video.html file="2016/tweaking-reminders/step_4" width=672 params="loop playsinline" %}

Finally (whew!), when Reminders asks, select the list you want the modified todo(s) to live in (normally the same list you exported them from), and click OK.

{% include video.html file="2016/tweaking-reminders/step_5" width=516 params="loop playsinline" %}

If everything went well, your modified reminders should look the same! If you use iCloud or another hosted calendar, they’ll sync to your other devices. An easy way to test is to change your computer or phone’s time zone: if the reminder’s time stays the same, it worked! You can make a fresh, un-tweaked reminder in the same list and compare how they behave when you switch time zones.

I wrote this all down while traveling and a little tired, so feel free to [email me](mailto:sidney@s4y.us) if you run into any trouble.
