
// Gets the RSVP form and confirmation message area
var rsvpForm = document.getElementById("rsvpForm");
var confirmationMessage = document.getElementById("confirmationMessage");

// Runs when the user submits the form
rsvpForm.addEventListener("submit", function(event) {

    // Prevents the page from refreshing
    event.preventDefault();

    // Gets the selected attendance option
    var attendance = document.getElementById("attendance").value;

    // Gets the attendee's email
    var email = document.getElementById("email").value;

    // Checks if the user is attending
    if (attendance === "yes") {

        // Displays a positive message with a party emoji
        confirmationMessage.textContent =
            "🎉 Awesome! You're on the guest list! We can't wait to see you at the GIF Gala! A confirmation will be sent to " + email + ".";

    } else {

        // Displays a message if the user cannot attend
        confirmationMessage.textContent =
            "Thank you for your response! We're sorry you can't make it. Hopefully we'll see you next time!";
    }

    // Makes the confirmation message visible
    confirmationMessage.style.display = "block";

    // Clears the form after submission
    rsvpForm.reset();

});
