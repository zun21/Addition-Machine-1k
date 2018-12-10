//GET THE TWO INPUTS FROM THE HTML FILE
const ip1 = document.getElementById("ip1");
const ip2 = document.getElementById("ip2");
const calc = document.getElementById("calc");
const rand = document.getElementById("rand");
const clr = document.getElementById("clr");
const results = document.getElementById("results");

//ADD EVENT LISTENER TO CALC BUTTON
calc.addEventListener('click', function
    () {
    //CHANGE INPUT VALUE FROM STRING TO NUMBER
    const valOne = parseInt(ip1.value);
    const valTwo = parseInt(ip2.value);
    //ADD THE VALUES TOGEHER AND INSERT TO HTML
    results.innerHTML = valOne + valTwo;
});

//CLEAR INPUTS AND DISPLAY AREA
clr.addEventListener('click', function () {
    results.innerHTML = "";
    ip1.value = "";
    ip2.value = "";
});
// CREAT A FUNCTION THAT GENERATE A RANDOM NUMBER BETWEEN 0 AND 1000

function myRandomNumber() {
    return Math.floor(Math.random() * 1000);
}
//ADD EVENT LISTENER TO RANDOM BUTTON
rand.addEventListener('click', function () {
    ip1.value = myRandomNumber();
    ip2.value = myRandomNumber();
})
console.log(myRandomNumber());
