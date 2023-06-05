"use strict";

function wordCount() {
  let txt = document.getElementById('txt').value;
  let words = txt.trim().split(/\s+/);
  let count = words.length;

  if (count > 3) {
    document.getElementById("wcount").innerHTML = "Limit exceeded";
  } else {
    document.getElementById("wcount").innerHTML = count;
  }
}
