const student={
    name:"Arif",
    grade:"Grade 10-A",
    courses:'0',
    assignmentsDue:15,
    attendance:95,
    averageGrade:"A"
}

const welcomeMessage=document.querySelector(".student-welcome");
welcomeMessage.textContent=`Hi,${student.name}`

const coursesEnrolled=document.querySelector(".course-value");
coursesEnrolled.textContent=`${student.courses}`;

const assignmentDue=document.querySelector(".student-assignment");
assignmentDue.textContent=`${student.assignmentsDue}`;

const studentAttendance=document.querySelector(".student-attendance");
studentAttendance.textContent=`${student.attendance}`;

const averageStudent=document.querySelector(".student-average");
averageStudent.textContent=`${student.averageGrade}`;



const sundayRoutine = [
    {
        subject: "Mathematics",
        teacher: "Mr. Rahman",
        startTime: "09:00 AM",
        endTime: "10:00 AM",
        room: "Room 201"
    },
    {
        subject: "Physics",
        teacher: "Mr. Karim",
        startTime: "10:30 AM",
        endTime: "11:30 AM",
        room: "Room 305"
    },
    {
        subject: "English",
        teacher: "Ms. Sultana",
        startTime: "12:00 PM",
        endTime: "01:00 PM",
        room: "Room 102"
    },
    {
        subject: "Computer Science",
        teacher: "Mr. Hasan",
        startTime: "02:00 PM",
        endTime: "03:00 PM",
        room: "Computer Lab"
    }
];


const mondayRoutine = [
    {
        subject: "Chemistry",
        teacher: "Mr. Hossain",
        startTime: "09:00 AM",
        endTime: "10:00 AM",
        room: "Lab 1"
    },
    {
        subject: "Mathematics",
        teacher: "Mr. Rahman",
        startTime: "10:30 AM",
        endTime: "11:30 AM",
        room: "Room 201"
    },
    {
        subject: "Bangla",
        teacher: "Ms. Akter",
        startTime: "12:00 PM",
        endTime: "01:00 PM",
        room: "Room 104"
    },
    {
        subject: "Physics",
        teacher: "Mr. Karim",
        startTime: "02:00 PM",
        endTime: "03:00 PM",
        room: "Room 305"
    }
];


const tuesdayRoutine = [
    {
        subject: "Computer Science",
        teacher: "Mr. Hasan",
        startTime: "09:00 AM",
        endTime: "10:00 AM",
        room: "Computer Lab"
    },
    {
        subject: "English",
        teacher: "Ms. Sultana",
        startTime: "10:30 AM",
        endTime: "11:30 AM",
        room: "Room 102"
    },
    {
        subject: "Chemistry",
        teacher: "Mr. Hossain",
        startTime: "12:00 PM",
        endTime: "01:00 PM",
        room: "Lab 1"
    },
    {
        subject: "Mathematics",
        teacher: "Mr. Rahman",
        startTime: "02:00 PM",
        endTime: "03:00 PM",
        room: "Room 201"
    }
];


const wednesdayRoutine = [
    {
        subject: "Physics",
        teacher: "Mr. Karim",
        startTime: "09:00 AM",
        endTime: "10:00 AM",
        room: "Room 305"
    },
    {
        subject: "Bangla",
        teacher: "Ms. Akter",
        startTime: "10:30 AM",
        endTime: "11:30 AM",
        room: "Room 104"
    },
    {
        subject: "Computer Science",
        teacher: "Mr. Hasan",
        startTime: "12:00 PM",
        endTime: "01:00 PM",
        room: "Computer Lab"
    },
    {
        subject: "English",
        teacher: "Ms. Sultana",
        startTime: "02:00 PM",
        endTime: "03:00 PM",
        room: "Room 102"
    }
];


const thursdayRoutine = [
    {
        subject: "Mathematics",
        teacher: "Mr. Rahman",
        startTime: "09:00 AM",
        endTime: "10:00 AM",
        room: "Room 201"
    },
    {
        subject: "Chemistry",
        teacher: "Mr. Hossain",
        startTime: "10:30 AM",
        endTime: "11:30 AM",
        room: "Lab 1"
    },
    {
        subject: "Physics",
        teacher: "Mr. Karim",
        startTime: "12:00 PM",
        endTime: "01:00 PM",
        room: "Room 305"
    },
    {
        subject: "Computer Science",
        teacher: "Mr. Hasan",
        startTime: "02:00 PM",
        endTime: "03:00 PM",
        room: "Computer Lab"
    }
];

const todayDate=new Date();
const months=[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`];
const days=['Sunday',`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`];
const currentDate=document.querySelector(".current-date");
currentDate.textContent=`${todayDate.getDate()} ${months[todayDate.getMonth()]} ${todayDate.getFullYear()}, ${days[todayDate.getDay()]}`
const routines=[sundayRoutine,mondayRoutine,tuesdayRoutine,wednesdayRoutine,thursdayRoutine,[],[]];
const today=todayDate.getDay();


if(today===5||today===6)
{
    document.querySelector(".classes-schedule").innerHTML="<p><b>No class Today<b></p>";
}
else{
    const todayclasses=routines[today];
const routineElements=todayclasses.map(element=>
{
    return `
        <div>
            <h1>${element.subject}</h1>
            <p>${element.teacher}</p>
            <p>${element.startTime}</p>
            <p>${element.endTime}</p>
            <p>${element.room}</p>       
        </div>
    `
});

const showRoutine=document.querySelector(".classes-schedule");
showRoutine.innerHTML=routineElements.join(" ");
}