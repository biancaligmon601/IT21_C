console.log("IT21C");

let student = "Bianca Ligmon";
let course = "Bachelor of Science in Information Studies";
let yearlevel = "2nd Year";

console.log("Student Name: " + student +
            "\nCourse: " + course + 
            "\nYear Level: " + yearlevel + "\n");

let hoursOfSleep = 8;
let hoursOfStudy = 2;

let totalHours = hoursOfSleep + hoursOfStudy;

console.log("Hours of Sleep: " + hoursOfSleep + " hours");
console.log("Hours of Study: " + hoursOfStudy + " hours");
console.log("Total Hours of Sleep and Study: " + totalHours + " hours");

if (hoursOfStudy > 5) {
    console.log("Great! You studied enough today.");
} else {
    console.log("You need to study more.");
}

let subjects = ["Web Systems", "Event-Driven Programming", "OOP"];
console.log("\nList of my subjects this sem:");
for (let i = 0; i < subjects.length; i++) {
    console.log(subjects[i]);
}

function studentSummary() {
    console.log("\nMy name is " + student + ", a " + yearlevel + " student from " + course + ".");
}
studentSummary();
