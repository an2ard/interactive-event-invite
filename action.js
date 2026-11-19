
// Waits until the HTML page has loaded
document.addEventListener("DOMContentLoaded", function() {

    // Gets the RSVP form and confirmation message area
    var rsvpForm = document.getElementById("rsvpForm");
    var confirmationMessage = document.getElementById("confirmationMessage");
    var attendanceSelect = document.getElementById("attendance");

    // Runs when the user submits the form
    rsvpForm.addEventListener("submit", function(event) {

        // Prevents the page from refreshing
        event.preventDefault();

        // Gets the selected attendance option
        var attendance = attendanceSelect.value;

        // Checks if the user is attending
        if (attendance === "yes") {

            // Displays the confirmation message
            confirmationMessage.textContent =
                "🎉 Party on! We look forward to seeing you at the GIF Gala!";

            // Changes the background to the attending GIF
            document.body.classList.remove("not-attending-background");
            document.body.classList.add("attending-background");

        }

        // Checks if the user is not attending
        else if (attendance === "no") {

            // Displays the sad confirmation message
            confirmationMessage.textContent =
                "😔 We will miss you at the GIF Gala!";

            // Changes the background to the original sad GIF
            document.body.classList.remove("attending-background");
            document.body.classList.add("not-attending-background");

        }

        // Makes the confirmation area visible
        confirmationMessage.style.display = "block";

        // Clears the form after submission
        rsvpForm.reset();

    });

});
