console.log("Portfolio Loaded");

const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

hiddenElements.forEach((el) => observer.observe(el));

emailjs.init("xtkzD5I87GA3UE2oQ");

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    console.log("Submitting form...");

    emailjs.sendForm(
        "service_mofgmie",
        "template_odqvmdd",
        this
    )
    .then(function(response) {

        console.log("SUCCESS", response);

        document.getElementById("status").innerText =
            "Message sent successfully!";

        form.reset();

    })
    .catch(function(error) {

        console.error("FAILED", error);

        document.getElementById("status").innerText =
            "Failed to send message.";

    });

});