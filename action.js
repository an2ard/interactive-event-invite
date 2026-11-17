
// Gets the RSVP form and confirmation message area
var rsvpForm = document.getElementById("rsvpForm");
var confirmationMessage = document.getElementById("confirmationMessage");

// Runs when the user submits the form
rsvpForm.addEventListener("submit", function(event) {

    // Prevents the page from refreshing
    event.preventDefault();

    // Gets the selected attendance option
    var attendance = document.getElementById("attendance").value;

    // Checks if the user is attending
    if (attendance === "yes") {

        // Displays a positive message with a party emoji
        confirmationMessage.innerHTML =
            '🎉 Party on! We look forward to seeing you at the GIF Gala!';

    } else {

        // Displays the GIF if the user is not attending
        confirmationMessage.innerHTML =
            '<img src="https://media.giphy.com/media/JER2en0ZRiGUE/giphy.gif" alt="GIF reaction" class="confirmation-gif">';

    }

    // Makes the confirmation message visible
    confirmationMessage.style.display = "block";

    // Clears the form after submission
    rsvpForm.reset();

});
