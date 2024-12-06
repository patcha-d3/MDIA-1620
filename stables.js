//------------------------- Bonus -------------------------//
                                                                                                                                        
                                               /////        Welcome to Horse Haus!                                                                                          
                                             //////                                                                                            
                                              ////                                                                                           
                                                ///                                                                                         
                                              //                                                           
                                            //                                                             
                                             //                                                            
                                           ////                                                             
                                           ////                           //\\\\\\\\\\\\\\\\\\\                                 
//                                    /////////////////////\\          //  \\\\\\\\\\\\\\\\\\\\\\\\                                                                                       
//                                   //    ////         //  \\        //       \\\\\\\\\\\\\\\\\\\\\\\\             
                                    //                 //    \\      //             \\\\\\\\\\\\\\\\\\\\\\\\\
                                   //                 //      \\    //                  \\\\\\\\\\\\\\\\\\\\\\\\\\\
                                  //                 //        \\   //                          \\\\\\\\\\\\\\\\\\\\\\\\
//                    🎄           /////////////////////  \\\\  \\  //                             \\\\\\\\\\\\\\\\\\\\\\\
               ////////////\\\\\\\\ //          //        \\\\  \   //     ///////////                  \\\\\\\\\\\\\\\\\\\                                                                                                 
                                    //          //        \\\\  \   //     ///////////                  \\\\\\\\\\\\\\\\\\\    
//        🌸                        //          //        \\\\  \   //     ///////////                  \\\\\\\\\\\\\\\\\\\
                                                                    ///    ///////////                  \\\\\\\\\\\\\\\\\\\ 
                                                                      //   ///////////                  \\\\\\\\\\\\\\\\\\\
                                                                        // ///////////                  \\\\\\\\\\\\\\\\\\\             
//                                                                                                      \\\\\\\\\\\\\\\\\\      🌸
//       &   &                                                                    
//     ;&&  &&                          
//     & & O  &&                        
//    & &  &  & &                       
//    & &  &&     &                                     🍁
//    &&    &            &              🌸
//          &              &    &&&&      
//          &&     &       &    &&&&&    
//          &&     &&     &&    &&  &&    
//           &&& &&&&&&    &&& &&&& &&&    
//            &&+           &&& X&&&  &&                                        🌸
//            &&&&           &&&&&&  &&  
//             & &           &  &;      
//             & &          &&  &       
//             & &         &&  &        🍁
//                                                                         &  &                                             
//                                                                        X&&&  &&&                                        
//                                                                        &&      &&&$                          🍁             
//                                                                       &      O   &&&&                                   
//                                                                          &    ;  & &&&                                  
//                                                                      &    &&&&+  &   &&                                 
//    🍁                                                                & & &    &                                          
//                                                                      &&;     &&&         &      &&&.                    
//                                                                               && &                ;        &&           
//                                                                               &&&                    &      &&&         
//                                🌸                                             &&&&       &            &      &&&&        🌸
//                                                                              &&&X       &&          &&      &&&&        
//                                                                               &&&  &&   &&&&     &&&&&     &&&&&        
//                                                                                x&&&  &&&&&&&&&&&    &&&&   &&&&&        
//                                                                                 &&&&  &              &&&&  &&&&&&       
//                                                                                  &&&& &                &&&& $&&& &                       🍁
//                                                                                   &&& &                 &&&&& &&&X      
//                                                                                   &&  &                 && && &&&       
//                                                                                   && &&                 &  && & &       
//                                                                                    &  &                &&  &&&          
//                🍁                                                                  &  &               &&   &&           
//                                                                                  .&  &+              &&   &&            
//                                                                                     &&                                  
                                                                                                                             
                                                                                                                             

//------------------------- Seting up shop -------------------------//

let horses = [];
let visitorMessage = "Welcome to Horse Haus! Please enjoy and make yourself at home here.";
const LATE_MONTHLY_FEE = 10;
let availStalls = 15;
console.log(visitorMessage);


//------------------------- First day -------------------------//

const Horse = function (name, nickname, favTreat, age, monthlyRent, isInside, favMovie, danceStyle) {
    this.name = name;
    this.nickname = nickname;
    this.favTreat = favTreat;
    this.age = age;
    this.monthlyRent = monthlyRent;
    this.isInside = isInside;
    this.favMovie = favMovie;
    this.danceStyle = danceStyle;

    this.introduce = function() {
        return `This cutie horse name is ${this.name}, they bring their ${this.favTreat} with them today and show their move in ${this.danceStyle} dance!`; }

    this.happyTime = function() {
        return `This little ${this.name} loves chewing ${this.favTreat} while watching ${this.favMovie}`;  }
}

const horse1 = new Horse("Bambi", "Bam", "corndog", 3, 30, true, "The Interstellar", "Swing");
const horse2 = new Horse("Bamboo", "Boo", "fried rice", 4, 32, false, "La La Land", "Tap");
const horse3 = new Horse("Bardock", "Bard", "noodle", 5, 36, true, "Toy Story 3", "Popping");

horses.push( horse1, horse2, horse3);

const horse4 = {
    name: "Banffy",
    nickname: "Baf",
    favTreat: "orange juice",
    age: 6,
    monthlyRent: 38,
    isInside: false,
    favMovie: "The Shutter",
    danceStyle: "Hiphopping",

        introduce: function() {
         return `This cutie horse name is ${this.name}, they bring their ${this.favTreat} with them today and show their move in ${this.danceStyle} dance!`; }
}
        this.happyTime = function() {
            return `This little ${this.name} loves chewing ${this.favTreat} while watching ${this.favMovie}`;  }

horses.push(horse4);


console.log(horses);

horse1.isHungry = true;
horse2.isHungry = true;
horse3.isHungry = false;
horse4.isHungry = false;

//------------------------- Stable roster -------------------------//

    // Horse {
    //   name: 'Bambi',
    //   nickname: 'Bam',
    //   favTreat: 'corndog',
    //   age: 3,
    //   monthlyRent: 30,
    //   isInside: true,
    //   favMovie: 'The Interstellar',
    //   danceStyle: 'Swing',
    //   introduce: [Function (anonymous)]
    // },
    // Horse {
    //   name: 'Bamboo',
    //   nickname: 'Boo',
    //   favTreat: 'fried rice',
    //   age: 4,
    //   monthlyRent: 32,
    //   isInside: false,
    //   favMovie: 'La La Land',
    //   danceStyle: 'Tap',
    //   introduce: [Function (anonymous)]
    // },
    // Horse {
    //   name: 'Bardock',
    //   nickname: 'Bard',
    //   favTreat: 'noodle',
    //   age: 5,
    //   monthlyRent: 36,
    //   isInside: true,
    //   favMovie: 'Toy Story 3',
    //   danceStyle: 'Popping',
    //   introduce: [Function (anonymous)]
    // },
    // {
    //   name: 'Banffy',
    //   nickname: 'Baf',
    //   favTreat: 'orange juice',
    //   age: 6,
    //   monthlyRent: 38,
    //   isInside: false,
    //   favMovie: 'The Shutter',
    //   danceStyle: 'Hiphopping',
    //   introduce: [Function: introduce]
    // }

//---------------------- Growing business ----------------------//

availStalls -= horses.length;

if (availStalls < 2) {
    console.log("We need to build more stalls"); }
else {
    console.log(`There are ${availStalls} stall(s) available right now in our Horse Haus`);
}


function calculateLateMonthlyFee(horse) {
     return horse.monthlyRent + LATE_MONTHLY_FEE;
}
    horses.forEach(horse => {
        console.log(`${horse.name} will get to pay $${calculateLateMonthlyFee(horse)}`);

    })

const hausTreat = ['Sriracha', 'noodle', 'corndog'];

for (let i = 0; i < hausTreat.length ; i++) {
    for (let j = 0; j < horses.length; j++) {
        if (horses[j].favTreat === hausTreat[i]) {
            console.log(`${horses[j].name} just tried ${hausTreat[i]} for the first time, they love it`); 
            break;
        } else {
        console.log(`${horses[j].name} does not like ${hausTreat[i]}.`);
        }
    }
}


function gethorseNickname(horseName) {
    for (let i = 0; i < horses.length; i++) {
        if (horses[i].name === horseName) {
            return horses[i].nickname;
        }
    }
}

const nickName = gethorseNickname('Bambi');
    if (nickName) {
        console.log(`The nickname of Bambi is ${nickName}.`);
    }

//------------------------- Day to day operations -------------------------//

function checkFavMovie(horseName, movie) {
    for (let i = 0; i < horses.length; i++) {
        if (horses[i].name === horseName) {
            if (horses[i].favMovie === movie) {
                return `${horses[i].name} enjoys watching ${movie}!`;
            } else {
                return `${horses[i].name} hates to watch ${movie}`;
            }
        }
    }
}

checkFavMovie(horses);

function moveHorsesOutside(getsDark) {
    horses.forEach(horses => {
        if (horses.isInside) {
                horses.isInside = true;
                console.log(`${horses.name} has been moved outside.`);
           } else {
            console.log(`${horses.name} is already outside.`);}
});
               
        if (getsDark) {
            horses.forEach(horses => {
        console.log(`Hey ${horses.name}, it's getting dark and cold outside! Perfect time for comfy bed.`)});
            }
}

moveHorsesOutside(false);
moveHorsesOutside(true);

function feedHorses(horses) {
    horses.forEach(horse => {
        if (horse.isInside === false) {
            console.log(`${horse.name} is outside, get inside to have dinner!`); // Move horse inside if they're outside
        } else {
            console.log(`${horse.name} is happily eating their favorite ${horse.favTreat}.`);
        }
    });
}

feedHorses(horses);



