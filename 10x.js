// ==UserScript==
// @name         10x Video Speed
// @namespace    https://github.com/tushariar/userscripts
// @version      0.1
// @description  Achieve up to 10x video speed for youtube videos
// @author       Tahsin Ahmed Tushar
// @match        *://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?domain=mozilla.org
// @grant        none
// ==/UserScript==

(function () {
    "use strict";

    //  Store the current page URL
    let currentUrl = location.href;

    //  Function to controll speed
    function controlSpeed() {
        let duration = 0;
        let currentTime = 0;

        //  Get the video
        let vdo = document.getElementsByTagName("video")[0];

        //  Set the video speed
        vdo.playbackRate = 10;

        //  Get the video duration and current time
        duration = Math.floor(vdo.duration);
        currentTime = Math.floor(vdo.currentTime);
    }

    //  Check page transition
    //  Credit: https://stackoverflow.com/questions/65325933/pure-javascript-to-detect-spa-dom-ready-and-page-change
    const checkPageTransition = () => {
        requestAnimationFrame(() => {
            if (currentUrl !== location.href) {
                //  Call the controll speed function if  page url has changed
                controlSpeed();
            }
            currentUrl = location.href;
        }, true);
    };

    //  Call the control function on page load and focus
    window.addEventListener("load", controlSpeed);
    window.addEventListener("focus", controlSpeed);

    //  Check page transition every 10 seconds
    setInterval(checkPageTransition, 10000);
})();
