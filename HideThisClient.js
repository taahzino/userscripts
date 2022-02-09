// ==UserScript==
// @name         Hide This Client
// @namespace    https://github.com/tushariar/userscripts
// @version      0.1
// @description  Hide not rated freelancer dot com clients
// @author       Tahsin Ahmed Tushar
// @match        https://www.freelancer.com/search/projects
// @icon         https://www.google.com/s2/favicons?domain=mozilla.org
// @grant        none
// ==/UserScript==

(function () {
    "use strict";

    function removeUnwantedClients() {
        const items = document.querySelectorAll('[role="listitem"]');

        const unwanted = [];

        items.forEach((item) => {
            if (item.querySelector('.RatingContainer [data-rating="0"]')) {
                unwanted.push(item);
            }
        });

        unwanted.forEach((item) => {
            item.remove();
        });
    }

    removeUnwantedClients();

    window.addEventListener("DOMContentLoaded", (event) => {
        removeUnwantedClients();
    });

    window.addEventListener("load", removeUnwantedClients);
    window.addEventListener("focus", removeUnwantedClients);
    window.addEventListener("click", removeUnwantedClients);
})();
