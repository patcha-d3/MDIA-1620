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






// LESSION-4 CODE //
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