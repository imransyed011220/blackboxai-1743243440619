// Sample timetable data (modify according to your actual schedule)
const timetable = {
    "Monday": [
        { period: 1, start: "08:00", end: "09:00", subject: "Mathematics", teacher: "Prof. Smith", room: "B-201" },
        { period: 2, start: "09:00", end: "10:00", subject: "Physics", teacher: "Prof. Johnson", room: "C-102" },
        { period: 3, start: "10:15", end: "11:15", subject: "Chemistry", teacher: "Prof. Williams", room: "A-305" },
        { period: 4, start: "11:15", end: "12:15", subject: "Computer Science", teacher: "Prof. Brown", room: "D-104" },
        { period: 5, start: "13:00", end: "14:00", subject: "English", teacher: "Prof. Davis", room: "E-202" }
    ],
    "Tuesday": [
        { period: 1, start: "08:00", end: "09:00", subject: "Biology", teacher: "Prof. Miller", room: "B-203" },
        { period: 2, start: "09:00", end: "10:00", subject: "History", teacher: "Prof. Wilson", room: "C-101" },
        { period: 3, start: "10:15", end: "11:15", subject: "Mathematics", teacher: "Prof. Smith", room: "A-301" },
        { period: 4, start: "11:15", end: "12:15", subject: "Physics Lab", teacher: "Prof. Johnson", room: "Lab-2" },
        { period: 5, start: "13:00", end: "14:00", subject: "Library", teacher: "", room: "Library" }
    ],
    "Wednesday": [
        { period: 1, start: "08:00", end: "09:00", subject: "Chemistry Lab", teacher: "Prof. Williams", room: "Lab-1" },
        { period: 2, start: "09:00", end: "10:00", subject: "Physical Education", teacher: "Coach Taylor", room: "Ground" },
        { period: 3, start: "10:15", end: "11:15", subject: "Computer Science", teacher: "Prof. Brown", room: "D-104" },
        { period: 4, start: "11:15", end: "12:15", subject: "Mathematics", teacher: "Prof. Smith", room: "B-201" }
    ],
    "Thursday": [
        { period: 1, start: "08:00", end: "09:00", subject: "English", teacher: "Prof. Davis", room: "E-202" },
        { period: 2, start: "09:00", end: "10:00", subject: "Physics", teacher: "Prof. Johnson", room: "C-102" },
        { period: 3, start: "10:15", end: "11:15", subject: "Project Work", teacher: "Prof. Brown", room: "D-104" },
        { period: 4, start: "11:15", end: "12:15", subject: "Chemistry", teacher: "Prof. Williams", room: "A-305" }
    ],
    "Friday": [
        { period: 1, start: "08:00", end: "09:00", subject: "Mathematics", teacher: "Prof. Smith", room: "B-201" },
        { period: 2, start: "09:00", end: "10:00", subject: "Computer Science", teacher: "Prof. Brown", room: "D-104" },
        { period: 3, start: "10:15", end: "11:15", subject: "Seminar", teacher: "Guest Speaker", room: "Auditorium" },
        { period: 4, start: "11:15", end: "12:15", subject: "Physics", teacher: "Prof. Johnson", room: "C-102" }
    ]
};

// You can modify the above data to match your actual college timetable
// Format: 
// "Day": [
//   { period: number, start: "HH:MM", end: "HH:MM", subject: "Subject Name", teacher: "Teacher Name", room: "Room No" },
//   ...
// ]