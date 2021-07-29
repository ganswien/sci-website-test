"use strict";

document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    var href = this.getAttribute('href');
    if (href == "#") return;
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

function showImprint() {
  document.getElementById("imprint-overlay").style.height = "100vh";
  return false;
}

function closeOverlay(cancelIfSelection) {
  if (!cancelIfSelection || window.getSelection().toString().length == 0) document.getElementById("imprint-overlay").style.height = 0;
  return false;
}