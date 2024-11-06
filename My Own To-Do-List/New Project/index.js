// Function to update the clock and date
function updateClock() {
  const clockElement = document.getElementById('clock');
  const dateElement = document.getElementById('date');
  const now = new Date();

  // Get hours, minutes, and seconds
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Get day and date
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayName = days[now.getDay()]; // Get the day name
  const day = now.getDate();
  const month = now.getMonth() + 1; // Months are zero-based in JS
  const year = now.getFullYear();

  // Add leading zero if needed
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  // Update clock display
  clockElement.textContent = `${hours}:${minutes}:${seconds}`;

  // Update date display
  dateElement.textContent = `${dayName}, ${day}/${month}/${year}`;
}

// Initial call to display clock and date right away
updateClock();

// Update clock and date every second
setInterval(updateClock, 1000);
