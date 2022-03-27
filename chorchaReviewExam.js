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
        let id = row.getAttribute("id");
        if (id && id.length > 0) {
            row.innerHTML += `
            <td class="td">
                <div class="flex">
                    <a href="https://chorcha.net/exam/${id}" target="_blank"><div class="tag blue  max-w-[150px] overflow-hidden flex-wrap">
                        Review
                    </div></a>
                </div>
            </td>
        `;
        }
    });
})();
