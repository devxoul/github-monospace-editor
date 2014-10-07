// ==UserScript==
// @name       GitHub Monospace Editor
// @namespace  http://xoul.kr/github-monospace-editor
// @version    0.1.0
// @description  Monospace GitHub Editor
// @match      github.com/*/*/*
// @copyright  2014, devxoul
// ==/UserScript==

$(document.head).append($('<style>#pull_request_body { font-family: monospace; }</style>'));

