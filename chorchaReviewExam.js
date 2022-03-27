// ==UserScript==
// @name         Review Chorcha
// @namespace    https://github.com/tushariar/userscripts
// @version      0.1
// @description  Review past exam result - chorcha.net
// @author       Tahsin Ahmed Tushar
// @match        https://chorcha.net/exams
// @icon         https://www.google.com/s2/favicons?domain=mozilla.org
// @grant        none
// ==/UserScript==

(function () {
    "use strict";

    const table = document.querySelector(".min-w-full");
    const rows = table.querySelectorAll("tr");

    rows.forEach((row) => {
        row.addEventListener("click", () => {
            const id = row.getAttribute("id").toString();
            if (id && id.length > 0) {
                window.open(`https://chorcha.net/exam/${id}`, "_blank");
            }
        });
    });
})();
