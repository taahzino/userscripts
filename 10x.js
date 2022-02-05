// ==UserScript==
// @name         10x Video Speed
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?domain=mozilla.org
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let currentUrl = location.href;

    function controlSpeed () {
        let duration = 0;
        let currentTime = 0;
        
        let vdo = document.getElementsByTagName('video')[0];
        vdo.playbackRate = 10;

        duration = Math.floor(vdo.duration);
        currentTime = Math.floor(vdo.currentTime);

        let control = function speed() {
            vdo.playbackRate = 10;
        };

        setTimeout(control, ((duration + 10) * 1000));
    }

    const checkPageTransition = () => {
        requestAnimationFrame(() => {
            if (currentUrl !== location.href) {
                controlSpeed();
            }
            currentUrl = location.href;
        }, true);
    };

    window.addEventListener('load', controlSpeed);
    window.addEventListener('focus', controlSpeed);

    setInterval(checkPageTransition, 10000);
})();