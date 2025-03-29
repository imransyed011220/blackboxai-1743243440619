// Function to format time as HH:MM
function formatTime(date) {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

// Function to update current time display
function updateCurrentTime() {
    const now = new Date();
    document.getElementById('current-time').textContent = 
        `Current Time: ${now.toLocaleTimeString()}`;
    return now;
}

// Function to check if current time falls within a period
function isCurrentPeriod(now, period) {
    const currentTime = formatTime(now);
    return currentTime >= period.start && currentTime < period.end;
}

// Function to generate timetable HTML
function generateTimetable(now) {
    const timetableElement = document.getElementById('timetable');
    let html = '';

    // Get current day (Monday-Friday)
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = days[now.getDay()];
    
    // Only show today's timetable if it's a weekday
    if (timetable[today]) {
        html += `<div class="p-6">
            <h2 class="text-xl font-semibold mb-4 text-blue-700">${today}'s Schedule</h2>
            <table class="w-full border-collapse">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="p-3 text-left">Period</th>
                        <th class="p-3 text-left">Time</th>
                        <th class="p-3 text-left">Subject</th>
                        <th class="p-3 text-left">Teacher</th>
                        <th class="p-3 text-left">Room</th>
                    </tr>
                </thead>
                <tbody>`;

        timetable[today].forEach(period => {
            const isCurrent = isCurrentPeriod(now, period);
            html += `<tr class="${isCurrent ? 'current-period bg-blue-50' : 'hover:bg-gray-50'} border-b">
                <td class="p-3">${period.period}</td>
                <td class="p-3">${period.start} - ${period.end}</td>
                <td class="p-3 font-medium">${period.subject}</td>
                <td class="p-3">${period.teacher}</td>
                <td class="p-3">${period.room}</td>
            </tr>`;
        });

        html += `</tbody></table></div>`;
    } else {
        html = `<div class="p-6 text-center text-gray-500">
            <p>No classes scheduled for today (${today})</p>
        </div>`;
    }

    timetableElement.innerHTML = html;
}

// Initialize and update every minute
function init() {
    const now = updateCurrentTime();
    generateTimetable(now);
    
    // Update every minute
    setInterval(() => {
        const now = updateCurrentTime();
        generateTimetable(now);
    }, 60000);
}

// Start the application
document.addEventListener('DOMContentLoaded', init);