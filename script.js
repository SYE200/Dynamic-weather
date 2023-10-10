function updateTheme() {
    var currentTime = new Date().getHours();
    var body = document.body;

    if (currentTime >= 6 && currentTime < 18) {
        // Daytime
        body.classList.remove("dark-theme");
        body.classList.add("light-theme");
    } else {
        // Nighttime
        body.classList.remove("light-theme");
        body.classList.add("dark-theme");
    }

    var timeDisplay = document.getElementById("time");
    var currentDate = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' };
    var formattedDate = currentDate.toLocaleDateString('en-US', options);
    timeDisplay.textContent = "Current Date & Time: " + formattedDate;
}

// Call the function initially
updateTheme();

// Update the theme every minute (60000 milliseconds)
setInterval(updateTheme, 60000);



