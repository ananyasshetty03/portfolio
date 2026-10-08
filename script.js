$(document).ready(function () {

    // Contact form
    $("#contactForm").submit(function (event) {

        event.preventDefault();

        let name = $("#name").val();
        let email = $("#email").val();
        let message = $("#message").val();

        if (name === "" || email === "" || message === "") {

            alert("Please fill in all the fields.");

        } else {

            alert(
                "Thank you, " +
                name +
                "! Your message has been submitted."
            );

            $("#contactForm")[0].reset();
        }

    });


    // Navigation click effect
    $("nav a").click(function () {

        console.log(
            "Opening " + $(this).text()
        );

    });

});