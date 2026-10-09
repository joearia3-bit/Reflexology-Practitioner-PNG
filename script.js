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
   CURRENT YEAR
===================================================== */

const year = new Date().getFullYear();

const footerYear = document.querySelector(".copyright");

if (footerYear) {

    footerYear.textContent =
        "© " + year + " Joseph Aria Reflexology. All rights reserved.";

}
