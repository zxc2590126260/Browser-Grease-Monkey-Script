// ==UserScript==
// @version      1.1.3
// @name         全局显示密码
// @include      *
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    
    function changePasswordInputs() {
        const passwordInputs = document.querySelectorAll('input[type="password"]');
        passwordInputs.forEach(input => {
            input.setAttribute("type", "text");
        });
    }

    document.addEventListener("DOMContentLoaded", changePasswordInputs);

    const observer = new MutationObserver(changePasswordInputs);
    observer.observe(document.body, { childList: true, subtree: true });
})();
