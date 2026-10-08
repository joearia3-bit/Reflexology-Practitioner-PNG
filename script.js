/* =====================================================
   JOSEPH ARIA REFLEXOLOGY
   WEBSITE JAVASCRIPT
===================================================== */


/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("nav");

if (menuButton && navigation) {

    menuButton.addEventListener("click", function () {

        navigation.classList.toggle("active");

    });

}


/* =====================================================
   CLOSE MOBILE MENU AFTER CLICKING A LINK
===================================================== */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navigation) {

            navigation.classList.remove("active");

        }

    });

});


/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        if (formMessage) {

            formMessage.textContent =
                "Thank you for your enquiry. " +
                "Joseph Aria will respond to you as soon as possible.";

        }

        contactForm.reset();

    });

}


/* =====================================================
   CURRENT YEAR
===================================================== */

const year = new Date().getFullYear();

const footerYear = document.querySelector(".copyright");

if (footerYear) {

    footerYear.textContent =
        "© " + year + " Joseph Aria Reflexology. All rights reserved.";

}
