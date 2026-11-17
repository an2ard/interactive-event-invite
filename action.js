
// Gets the RSVP form and confirmation message area
var rsvpForm = document.getElementById("rsvpForm");
var confirmationMessage = document.getElementById("confirmationMessage");

// Runs when the form is submitted
rsvpForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Gets the attendee's email and attendance choice
    var email = document.getElementById("email").value;
    var attendance = document.getElementById("attendance").value;

    // Displays a confirmation message
    if (attendance === "yes") {
        confirmationMessage.textContent =
            "You're on the guest list! A confirmation will be sent to " +
            email + ". See you at the GIF Gala!";
    } else {
        confirmationMessage.textContent =
            "Thanks for letting us know! We hope to see you at another event.";
    }

    // Clears the form
    rsvpForm.reset();
});
