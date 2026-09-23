// MOBILE MENU
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("nav");

if (menuButton) {
    menuButton.addEventListener("click", function () {
        navigation.classList.toggle("active");
    });
}


// CLOSE MOBILE MENU WHEN A LINK IS CLICKED
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        if (navigation) {
            navigation.classList.remove("active");
        }
    });
});


// CONTACT FORM
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        alert(
            "Thank you for contacting Reflexology Practitioner PNG. " +
            "Your enquiry has been received."
        );

        contactForm.reset();
    });
}
