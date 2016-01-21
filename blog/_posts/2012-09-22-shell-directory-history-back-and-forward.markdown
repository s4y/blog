---
layout: post
title: Directory history for your shell
---
[Bash&rsquo;s directory stack](http://www.gnu.org/software/bash/manual/bashref.html#Directory-Stack-Builtins) is great but incomplete:

<p style="margin: 2em 0"><img style="margin: -1em auto -2.5em;" src="/assets/2012/09/browser-window.png" alt="What if your browser didn&rsquo;t have a forward button, only a back button?" width="514" ></p>

Your browser lets you go back after you navigate somewhere, and forward again if you change your mind. Bash doesn&rsquo;t do either. The `pushd` and `popd` builtins give you a back button but no forward button. I fixed all that:

<pre><code>$ cd foo
$ cd ../bar
$ b
~/foo
$ f
~/bar</code></pre>

It&rsquo;s a set of Bash functions. You can find them on GitHub [right here](https://github.com/Sidnicious/dotfiles/blob/master/sh.d/directory-history.bash). Let me know if it&rsquo;s useful or if you have any suggestions on how to make it even awesomer.
