/* ============================================================
   Section 01 — "Entering an appearance"

   The only job here is to start the animation once the display
   face has actually loaded. Archivo 900 and the fallback stack
   have very different metrics, so firing on DOMContentLoaded
   makes the solid copy wipe across letterforms that are about to
   reflow. Waiting on document.fonts avoids that.

   The page is fully readable with this script absent: the CSS
   default is the finished state, and only the .js class (set
   inline in <head>) opts into the pre-animation state.
   ============================================================ */
(function () {
  'use strict';

  var root = document.documentElement;

  function begin() {
    // rAF so the pre-animation state is painted at least once —
    // otherwise the browser may collapse it and skip the wipe.
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        root.classList.add('is-ready');
      });
    });
  }

  if (document.fonts && document.fonts.ready) {
    // Never wait indefinitely on a font that fails to arrive.
    var started = false;
    var start = function () {
      if (started) return;
      started = true;
      begin();
    };
    document.fonts.ready.then(start);
    setTimeout(start, 1200);
  } else {
    begin();
  }
})();
