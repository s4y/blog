---
layout: post
title: Make some passphrases, already
---
tl;dw: I made a Python script that generates passphrases.

<pre><code>$ pw
child gold myself experiment

$ pw -n 5
rising cat immediately example
dirt alone truth thus
difficult weak minute butter
pan proud shelf join
among shade exercise so

$ pw -l 8
vegetable aside plate development while sport electric chemical

$ pw -s  # For things that don&rsquo;t like spaces
fogdinnerreceivehigh</code></pre>

It uses Python&rsquo;s `random.SystemRandom` (which pulls random data from `/dev/urandom`) and a list of common words from [this website](http://www.paulnoll.com/Books/Clear-English/English-3000-common-words.html), just like [passphra.se](http://passphra.se/).
It&rsquo;s on GitHub: [Sidnicious/pw](https://github.com/Sidnicious/pw).
