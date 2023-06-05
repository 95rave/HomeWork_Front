"use strict";

function wordCount() {
  let txt = document.getElementById('txt').value;
  let words = txt.trim().split(/\s+/);
  let count = words.length;

  if (count >=3) {
    let truncatedText = words.slice(0, 30).join(" ");
    document.getElementById("txt").value = truncatedText;
    document.getElementById("wcount").innerHTML = "Limit is 3 words";
  } else {
    document.getElementById("wcount").innerHTML = count;
  }
}

