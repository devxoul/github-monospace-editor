// ==UserScript==
// @name       GitHub Monospace Editor
// @namespace  http://xoul.kr/github-monospace-editor
// @version    0.1.2
// @description  GitHub Monospace Editor
// @match      github.com/*/*/*
// @require http://code.jquery.com/jquery-1.11.0.min.js
// @copyright  2014, devxoul
// ==/UserScript==

(function() {
  $(document).on('pjax:success', monospace);
  function monospace() {
    var css = '<style>.comment-form-textarea{font-family: monospace;}</style>'
    $(document.head).append($(css));
  }
  monospace();
})();
