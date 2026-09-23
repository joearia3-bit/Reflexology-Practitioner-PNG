// ==========================================
// JOSEPH ARIA REFLEXOLOGY
// Phase 1 - Main JavaScript
// ==========================================


// ==========================================
// 1. WEBSITE SETTINGS
// ==========================================

const CONFIG = {

  // IMPORTANT:
  // Replace this with your real WhatsApp number later.
  // Use international format without spaces or + sign.
  whatsappNumber: "675XXXXXXXX",

  whatsappMessage:
    "Hello Joseph, I would like to enquire about your Reflexology services."
};


// ==========================================
// 2. MOBILE MENU
// ==========================================

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("mainNav");

if (menuButton && nav) {

  menuButton.addEventListener("click", function () {

    nav.classList.toggle("show");

    const menuIsOpen = nav.classList.contains("show");

    menuButton.setAttribute("aria-expanded", menuIsOpen);

    if (menuIsOpen) {
      menuButton.textContent = "✕";
    } else {
      menuButton.textContent = "☰";
    }

  });

}


// ==========================================
// 3. CLOSE MOBILE MENU AFTER CLICKING LINK
// ==========================================

const navLinks = document.querySelectorAll("#mainNav a");

navLinks.forEach(function (link) {

  link.addEventListener("click", function () {

    if (nav) {
      nav.classList.remove("show");
    }

    if (menuButton) {
      menuButton.textContent = "☰";
      menuButton.setAttribute("aria-expanded", "false");
    }

  });

});


// ==========================================
// 4. WHATSAPP BUTTON
// ==========================================

const whatsappButton = document.getElementById("whatsappButton");

if (whatsappButton) {

  whatsappButton.addEventListener("click", function (event) {

    event.preventDefault();

    // Check whether the placeholder number is still being used.
    if (
      CONFIG.whatsappNumber === "675XXXXXXXX" ||
      CONFIG.whatsappNumber.includes("X")
    ) {

      alert(
        "WhatsApp is not connected yet. Please add your real WhatsApp number in script.js."
      );

      return;
    }

    const message = encodeURIComponent(
      CONFIG.whatsappMessage
    );

    const whatsappURL =
      "https://wa.me/" +
      CONFIG.whatsappNumber +
      "?text=" +
      message;

    window.open(whatsappURL, "_blank");

  });

}


// ==========================================
// 5. CURRENT YEAR
// ==========================================

const yearElement = document.getElementById("year");

if (yearElement) {

  yearElement.textContent = new Date().getFullYear();

}


// ==========================================
// 6. SIMPLE PAGE LOAD MESSAGE
// ==========================================

console.log(
  "Joseph Aria Reflexology website loaded successfully."
);
