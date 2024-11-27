// ==UserScript==
// @version      1.1.6
// @name         强制显示密码
// @include      *
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // 函数：修改所有密码框的显示类型
    function showAllPasswords() {
        const passwordInputs = document.querySelectorAll('input[type="password"]');
        passwordInputs.forEach(input => {
            // 直接修改密码框类型为文本框，确保密码显示
            if (input.type === 'password') {
                input.type = 'text';
            }
        });
    }

    // 函数：监听页面内容的动态变化
    function observeDOMChanges() {
        const observer = new MutationObserver(() => {
            showAllPasswords();
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['type'] // 监控type属性变化
        });
    }

    // 执行：页面加载完成后修改密码框
    window.addEventListener("load", () => {
        showAllPasswords();  // 初始化时立即修改密码框
        observeDOMChanges(); // 开始监听页面变化
    });

    // 页面上元素动态加载后的监控
    setInterval(() => {
        showAllPasswords();  // 不定期地再次执行，确保动态内容被捕捉
    }, 1000);  // 每秒检查一次
})();
