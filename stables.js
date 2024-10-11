// String - data type is a sequence of characters, quotation marks needed //
let horseName = "Bambie";
console.log(horseName);

// Number - is a numerical data, type-no quotations needed //
let horseAge = 555;
console.log(horseAge);

// Boolean - logical data type, can only be true or false, prefix is "is", "can", "has" //
let isHorseInside = true;
console.log(isHorseInside);
let horseIsNotInside = true;
console.log(horseIsNotInside);






// LESSON-4 CODE //
console.log(typeof 6677)
console.log(typeof true)
const STABLE_MONTHLY_FEE = 1000;
console.log(STABLE_MONTHLY_FEE);
const lowercasevariable = 199;
console.log(lowercasevariable);
console.log(STABLE_MONTHLY_FEE*lowercasevariable*2);
console.log((40+20)/6);
console.log("Hi" + " there"); // computer doesn't know how to leave a space, you need to put in the sting
console.log("Hi3" + 3 );    // type coercion // it's gonna be string
console.log(false+true+"NaN");  
console.log("The stable monthly fee is...  " + STABLE_MONTHLY_FEE);

console.log(`My horse's name is "${horseName}" and costs ${STABLE_MONTHLY_FEE} to board him`); // if you use backtick
console.log("My horse's name is " + horseName + " and he is " + horseAge + " years old now.");



// LESSON-4 Lab //
let horseNickname = "Jackson"
console.log(`My horse's name is ${horseNickname}`)
const STABLE_MONTHLY = 800;
console.log(`His 3 months stay will cost ${(STABLE_MONTHLY * 3) * 0.1} dollars`);


// LESSON-5 At home //

let visitingHorseName = " Bobie"

if (horseNickname === "Jackson" && visitingHorseName === " Bobie" && isHorseInside)  { // the code in here will run if the condition is 'true', and won't run when 'false'
    console.log(`${horseNickname} has a visitor and needs to come outside to see ${visitingHorseName}`);
}

else if (horseNickname === "Jackson" && visitingHorseName === " Bobie" && !isHorseInside) {
    console.log(horseName + " is outside with " + visitingHorseName);
}

else {
    console.log(horseNickname + " needs to figure what is going on");
}



