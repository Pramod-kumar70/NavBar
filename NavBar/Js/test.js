

// . Determine Age Group Based on Input (if-else): Write a function 
// determineAgeGroup(age) that outputs the age group based on input: 
// • 0-12 years: "Child" 
// • 13-19 years: "Teenager" 
// • 20-64 years: "Adult" 
// • 65+ years: "Senior"


function DetermineAgeGroup(Age){
    if(Age>0 && Age<100)
    {
        if(Age<=12)
            console.log("Child");
        else if(Age<=19)
            console.log("Teenager");
        else if(Age<=64)
            console.log("Adult");
        else
        console.log("Senior");

    }
    else
    console.log("Invalid Age");

}
let Age = prompt("Enter your Age :-> ");
DetermineAgeGroup(Age);








// Grade Evaluation (Switch Statement): Write a function getGrade(score) that 
// returns a grade based on the following: 
// • A: 90-100 
// • B: 80-89 
// • C: 70-79 
// • D: 60-69 
// • F: Below 60 If the score is out of range (less than 0 or greater than 100), 
// return "Invalid score."



function getGrade(Score) {
    switch (true) {
        case (Score >100 || Score <0): return "Invalid Score";

        case (Score >= 90 && Score <= 100): return "A";
        case (Score >= 80 && Score < 90): return "B";
        case (Score >= 70 && Score <80): return "C";
        case (Score >= 80 && Score <70): return "D";
        case (Score >= 70 && Score <60): return "E";
        case (Score < 60 ): return "Out of Range";

            
    }
}
let Score = -101;
let Grade = getGrade(Score);
console.log(Grade);







// . Check Even or Odd (if statement): Write a function checkEvenOdd(number) that 
// returns whether the number is "Even" or "Odd."

function CheckEvenOdd(Num){
    if(Num%2==0)
        return "Even";
    else
    return "Odd";
}

let Num = 15;
let Checks = CheckEvenOdd(Num);

console.log(Num+" is "+ Checks);







// Simple Object Creation: Create a car object with properties: 
// • make: car manufacturer (e.g., "Toyota") 
// • model: car model (e.g., "Corolla") 
// • year: manufacturing year (e.g., 2020)

const Car = Object.create(Object.prototype);
Car.Make = "Toyota";
Car.Model = "Corolla"
Car.Year = "2023"

console.log(Car);

