// ==UserScript==
// @name       GitHub Monospace Editor
// @namespace  http://xoul.kr/github-monospace-editor
// @version    0.1.1
// @description  GitHub Monospace Editor
// @match      github.com/*/*/*
// @copyright  2014, devxoul
// ==/UserScript==

$(document.head).append($('<style>#pull_request_body, #new_comment_field { font-family: monospace; }</style>'));
