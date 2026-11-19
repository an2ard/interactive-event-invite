
// Gets the RSVP form and confirmation message area
var rsvpForm = document.getElementById("rsvpForm");
var confirmationMessage = document.getElementById("confirmationMessage");

// Gets the attendance selection menu
var attendanceSelect = document.getElementById("attendance");

// Checks that all HTML elements exist
if (rsvpForm && confirmationMessage && attendanceSelect) {

    // Runs when the user submits the form
    rsvpForm.addEventListener("submit", function(event) {

        // Prevents the page from refreshing
        event.preventDefault();

        // Gets the selected attendance option
        var attendance = attendanceSelect.value;

        // Checks if the user is attending
        if (attendance === "yes") {

            // Displays the confirmation message
            confirmationMessage.innerHTML =
                "🎉 Party on! We look forward to seeing you at the GIF Gala!";

        }

        // Checks if the user is NOT attending
        else if (attendance === "no") {

            // Displays the reaction GIF
            confirmationMessage.innerHTML =
                '<img src="https://media.giphy.com/media/JER2en0ZRiGUE/giphy.gif" alt="GIF reaction" class="confirmation-gif">';

        }

        // Makes the confirmation area visible
        confirmationMessage.style.display = "block";

        // Clears the form after submission
        rsvpForm.reset();

    });

} else {

    // Shows an error if an HTML element is missing
    console.error("Could not find the RSVP form, attendance menu, or confirmation message.");

}
