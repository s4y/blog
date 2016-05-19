'use strict';

(navigator.platform != 'iPhone') && (function (videoEl) {
	var el = document.createElement('div');
	var overlay = document.createElement('div');
	videoEl.parentNode.replaceChild(el, videoEl);
	el.appendChild(videoEl);
	el.appendChild(overlay);

	el.className = 'videoPlayer';
	overlay.className = 'overlay';
	videoEl.removeAttribute('controls');

	// Prevent text selection in Safari on double-click.
	el.addEventListener('mousedown', function(e) {
		e.preventDefault();
	});

	el.addEventListener('click', function() {
		if (videoEl.paused) {
			videoEl.play();
		} else {
			videoEl.pause();
		}
	});

	videoEl.addEventListener('play', function(){
		el.classList.add('playing');
	});

	videoEl.addEventListener('pause', function(){
		el.classList.remove('playing');
	});

	// Could be useful behind a data- flag
	// videoEl.addEventListener('ended', function(){
	// 	videoEl.currentTime = 0;
	// });
})(document.currentScript.previousElementSibling);
