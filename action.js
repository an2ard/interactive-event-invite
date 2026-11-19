
// Confirms that the JavaScript file is loading
console.log("GIF Gala JavaScript is connected!");

// Waits until the HTML page has loaded
document.addEventListener("DOMContentLoaded", function() {

    // Gets the RSVP form and confirmation message area
    var rsvpForm = document.getElementById("rsvpForm");
    var confirmationMessage = document.getElementById("confirmationMessage");
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

                confirmationMessage.innerHTML =
                    "🎉 Party on! We look forward to seeing you at the GIF Gala!";

            }

            // Checks if the user is not attending
            else if (attendance === "no") {

                confirmationMessage.innerHTML =
                    '<img src="https://media.giphy.com/media/JER2en0ZRiGUE/giphy.gif" alt="GIF reaction" class="confirmation-gif">';

            }

            // Makes the confirmation area visible
            confirmationMessage.style.display = "block";

            // Clears the form
            rsvpForm.reset();

        });

    } else {

        console.error("One or more HTML elements could not be found.");

    }

});
