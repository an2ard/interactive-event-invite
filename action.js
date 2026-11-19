
// Gets the RSVP form and confirmation message area
var rsvpForm = document.getElementById("rsvpForm");
var confirmationMessage = document.getElementById("confirmationMessage");

// Checks that the HTML elements were found
if (rsvpForm && confirmationMessage) {

    // Runs when the user submits the form
    rsvpForm.addEventListener("submit", function(event) {

        // Prevents the page from refreshing
        event.preventDefault();

        // Gets the selected attendance option
        var attendance = document.getElementById("attendance").value;

        // Checks if the user is attending
        if (attendance === "yes") {

            // Displays a positive message
            confirmationMessage.innerHTML =
                "🎉 Party on! We look forward to seeing you at the GIF Gala!";

        } else if (attendance === "no") {

            // Displays the GIF if the user is not attending
            confirmationMessage.innerHTML =
                '<img src="https://media.giphy.com/media/JER2en0ZRiGUE/giphy.gif" alt="GIF reaction" class="confirmation-gif">';

        }

        // Makes the confirmation message visible
        confirmationMessage.style.display = "block";

        // Clears the form after submission
        rsvpForm.reset();

    });

} else {

    // Displays an error if an HTML element cannot be found
    console.error("The RSVP form or confirmation message was not found. Check your HTML IDs.");

}
