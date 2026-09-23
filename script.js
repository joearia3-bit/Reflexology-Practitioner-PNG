// =========================
// MOBILE MENU
// =========================

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", function () {

  navMenu.classList.toggle("active");

});


// Close menu after clicking a link

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(function (link) {

  link.addEventListener("click", function () {

    navMenu.classList.remove("active");

  });

});


// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

  event.preventDefault();

  formMessage.textContent =
    "Thank you. Your enquiry has been received. We will contact you soon.";

  contactForm.reset();

});  });

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
