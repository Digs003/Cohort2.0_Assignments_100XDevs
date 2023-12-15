function updateClock() {
    const now = new Date();

    // Format: HH:MM:SS
    const formattedTime24 = new Intl.DateTimeFormat('en', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    }).format(now);

    // Format: HH:MM:SS AM/PM
    const formattedTime12 = new Intl.DateTimeFormat('en', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    }).format(now);

    console.log(`24-Hour Format: ${formattedTime24}`);
    console.log(`12-Hour Format: ${formattedTime12}`);
}

// Update the clock every second (1000 milliseconds)
setInterval(updateClock, 1000);

// Initial call to set the initial time
updateClock();
