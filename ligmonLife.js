let name = "Bianca Viodor Ligmon";
let course = "Bachelor of Science in Informatiom Technology";
let yearlevel = "2nd Year";
let tlhours= "8";
let tlstudy= "2";

console.log ("\nName : "+ name + "\nCourse:"+ course+ "\Year:"+ yearlevel+ "\nTotal hours of sleep: "+ t1hours+"\nTotal hours of study:"+ t1study);

if(tlhours>=5){
    console.log("\nGreat! You studied enough today!");

}else{
    console.log("You need to study more.");
}

let subjects = ["Web Systems", "Event Diven Programming","OOP", "Networking","Database Management"];
    console.log("\nList of my Subject this sem:");

    for(let i=0; i<subjects.length; i++){
        console.log(subjects[i]);
    }
function greet(name){
    console.log("\nMy name is" + name) + ", a" + yearlevel + " from "+ course;
}
greet(name+", a"+ yearlevel +" "+course);
