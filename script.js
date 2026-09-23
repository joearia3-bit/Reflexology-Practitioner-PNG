/* =====================================================
   REFLEXOLOGY PRACTITIONER PNG
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


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            alert(
                "Thank you for contacting " +
                "Reflexology Practitioner PNG. " +
                "Your enquiry has been received. " +
                "You can also contact Joseph Aria directly " +
                "through WhatsApp."
            );


            contactForm.reset();

        }
    );

}



/* =====================================================
   CURRENT YEAR
===================================================== */

const year = new Date().getFullYear();

const footerYear = document.querySelector(
    "footer p
