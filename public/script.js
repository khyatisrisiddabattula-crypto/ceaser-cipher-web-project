/* ===== Caesar Cipher Lab — script.js ===== */
(function () {
  "use strict";

  var A = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  /** Normalize any integer shift into 0..25 */
  function normalize(shift) {
    var n = parseInt(shift, 10);
    if (isNaN(n)) n = 0;
    return ((n % 26) + 26) % 26;
  }

  /** Caesar cipher: shift letters, leave everything else untouched */
  function caesar(text, shift) {
    var k = normalize(shift), out = "", i, c, code;
    for (i = 0; i < text.length; i++) {
      c = text.charAt(i);
      code = text.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        out += String.fromCharCode(((code - 65 + k) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        out += String.fromCharCode(((code - 97 + k) % 26) + 97);
      } else {
        out += c;
      }
    }
    return out;
  }
  function encrypt(t, s) { return caesar(t, s); }
  function decrypt(t, s) { return caesar(t, -normalize(s)); }

  // ---- elements ----
  var $ = function (id) { return document.getElementById(id); };
  var input = $("input"), output = $("output"), shift = $("shift");
  var toast = $("toast");

  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(showToast.t);
    showToast.t = setTimeout(function () { toast.classList.remove("show"); }, 1800);
  }

  function currentShift() { return normalize(shift.value); }

  function clampShiftInput() {
    var n = parseInt(shift.value, 10);
    if (isNaN(n)) n = 0;
    if (n < 0) n = 0;
    if (n > 25) n = 25;
    shift.value = n;
  }

  // ---- stats ----
  function updateStats() {
    var t = input.value, letters = 0, numbers = 0, spaces = 0, i, c;
    for (i = 0; i < t.length; i++) {
      c = t.charAt(i);
      if (/[a-z]/i.test(c)) letters++;
      else if (/[0-9]/.test(c)) numbers++;
      if (c === " ") spaces++;
    }
    $("st-chars").textContent = t.length;
    $("st-letters").textContent = letters;
    $("st-numbers").textContent = numbers;
    $("st-spaces").textContent = spaces;
  }

  // ---- alphabet visualization ----
  function buildAlphabet() {
    var k = currentShift(), o = "", s = "", i;
    for (i = 0; i < 26; i++) {
      o += "<span>" + A.charAt(i) + "</span>";
      s += "<span>" + A.charAt((i + k) % 26) + "</span>";
    }
    $("alpha-orig").innerHTML = o;
    $("alpha-shift").innerHTML = s;
    $("shift-echo").textContent = k;
  }

  function reveal(text) {
    output.value = text;
    output.classList.remove("out");
    void output.offsetWidth;
    output.classList.add("out");
  }

  // ---- events ----
  input.addEventListener("input", updateStats);

  shift.addEventListener("input", function () { clampShiftInput(); buildAlphabet(); });
  shift.addEventListener("change", function () { clampShiftInput(); buildAlphabet(); });

  $("inc").addEventListener("click", function () {
    shift.value = (currentShift() + 1) % 26; buildAlphabet();
  });
  $("dec").addEventListener("click", function () {
    shift.value = (currentShift() + 25) % 26; buildAlphabet();
  });

  $("encrypt-btn").addEventListener("click", function () {
    if (!input.value) { showToast("Enter a message first"); output.value = ""; return; }
    reveal(encrypt(input.value, currentShift()));
    showToast("Message encrypted");
  });

  $("decrypt-btn").addEventListener("click", function () {
    if (!input.value) { showToast("Enter a message first"); output.value = ""; return; }
    reveal(decrypt(input.value, currentShift()));
    showToast("Message decrypted");
  });

  $("copy-btn").addEventListener("click", function () {
    if (!output.value) { showToast("Nothing to copy"); return; }
    var done = function () { showToast("Result copied"); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(output.value).then(done, fallback);
    } else { fallback(); }
    function fallback() {
      output.removeAttribute("readonly");
      output.select();
      try { document.execCommand("copy"); done(); } catch (e) { showToast("Copy not supported"); }
      output.setAttribute("readonly", "readonly");
      window.getSelection().removeAllRanges();
    }
  });

  $("clear-btn").addEventListener("click", function () {
    input.value = ""; output.value = "";
    updateStats(); input.focus(); showToast("Cleared");
  });

  // ---- background particles ----
  (function particles() {
    var host = $("bgfx"), i, p;
    for (i = 0; i < 18; i++) {
      p = document.createElement("span");
      p.className = "particle";
      p.style.left = (Math.random() * 100) + "%";
      p.style.animationDuration = (14 + Math.random() * 16) + "s";
      p.style.animationDelay = (-Math.random() * 20) + "s";
      p.style.opacity = (0.2 + Math.random() * 0.4).toFixed(2);
      host.appendChild(p);
    }
  })();

  // ---- fade-in on scroll ----
  (function revealOnScroll() {
    var items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      Array.prototype.forEach.call(items, function (el) { el.classList.add("visible"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    Array.prototype.forEach.call(items, function (el) { io.observe(el); });
  })();

  // ---- init ----
  $("year").textContent = new Date().getFullYear();
  buildAlphabet();
  updateStats();

  // expose for quick console testing
  window.CaesarCipher = { encrypt: encrypt, decrypt: decrypt };
})();
