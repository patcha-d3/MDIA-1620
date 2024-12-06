
function Horse(name, nickname, age, favoriteSnack, isInside) {
    const tempObj = {};

    tempObj.name = name;
    tempObj.nickname = nickname;
    tempObj.age = age;
    tempObj.favoriteSnack = favoriteSnack;
    tempObj.isInside = isInside;
    tempObj.MONTHLY_RENT = 125;
    tempObj.intro = function() {
        console.log(
            `My horse is called ${this.name} and they are ${this.age} years old`);
    };

}



const strawberry = new Horse("Strawberry", "Shortcake", 3, "carrot", true);
const beans = new Horse("Beans", "Beanie", 5, "beans", false);
const charlie = new Horse("Charlie", "Chuck", 13, "raspberries", true);
console.log(strawberry);
console.log(beans);
console.log(charlie);
console.log(typeof charlie);