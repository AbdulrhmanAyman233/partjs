
// function validateform() {
//     var username = document.getElementById("username").value;
//     var Email = document.getElementById("email").value;
//     var err =document.getElementById("error");
//     var phone= document.getElementById("phone").value;
//     var text ="";

//     if(username.length < 5){
//         text = "plrase enter vaild username";
//         err.innerHTML =text;

//     } 
//     else if(Email.indexof("@") == -1 && Email.length<10){

//         text = "plrase enter vaild email";
//         err.innerHTML =text;
//     }
//     else if(isNaN(phone) || phone.length != 11){
//         text = "plrase enter vaild phone number";
//         err.innerHTML = text;
//         return false;

//     }else{
//         alert("Done ?");
//         return true;
//     }

// }

//-----------------------------

//task1
// function average(numbers) {

//     if(numbers.length < 10){
//         return "plrase enter at least 10 numbers";
//     }
//     let sum = numbers.reduce((total,num)=> total+num ,0);
//     let average = sum / numbers.length;
//     return average;
// }
// let numberarray = [12,34,13,13,313,443,664,64,987,5];
// console.log(average(numberarray));

//--------------------------
//task2
// function calcarea(base , height){
//         let area = 0.5 *base * height;
//         return area;
// }
// console.log(calcarea(33,465));

//-------------------------------------
//task3
// function age(years){

//     let leapyears = Math.floor(years / 4);
//     let ageday = (years*365) + leapyears;
//     return ageday;
// }
// console.log( "the age by days is :" + age(22));

//---------------------------------------
//task4
// function sum(x ,y){
//     let total = x+y;
//     return total;
// }
// console.log(sum(10,11));

//------------------------------
//task5
// function showfirst(person){
//     if(person.length < 10){
//         return "please enter at least 10 names";
//     }else if ( person.length === 0){
//         return "there is no names in the array";
//     }
//     return person[0];
// }
// let array = ["sd","da" ,"hamo" ,"rr","ee","ff","qq","aa","zz" ,"xx"];
// console.log(showfirst(array));
//-------------------------------

//task6
// function showname(){

//     let name ="abdu";
//     document.getElementById("myname").innerHTML = name;
// }
//------------------------

//task7
// function isSumMoreThan350(num1, num2, num3, num4) {
//     // Calculate the sum of the four numbers
//     let sum = num1 + num2 + num3 + num4;

//     // Return true if the sum is more than 350, otherwise return false
//     return sum > 350;
// }
// console.log("is more than 350 " + isSumMoreThan350(100,3,50,50));
//-------------------------------

// //task8
// function calcpoints(wins, draws) {
//     let points = (wins * 3) + (draws * 1);
//     return points;
// }
// function calculateSeasonPoints(team1, team2, team3, team4) {

//     let team1Points = calcpoints(team1.wins, team1.draws);
//     let team2Points = calcpoints(team2.wins, team2.draws);
//     let team3Points = calcpoints(team3.wins, team3.draws);
//     let team4Points = calcpoints(team4.wins, team4.draws);

//     return {
//         team1: team1Points,
//         team2: team2Points,
//         team3: team3Points,
//         team4: team4Points
//     };
// }

// // Example usage:
// let team1 = { wins: 15, draws: 10, losses: 15 };
// let team2 = { wins: 12, draws: 15, losses: 13 };
// let team3 = { wins: 20, draws: 10, losses: 10 };
// let team4 = { wins: 8, draws: 12, losses: 20 };

// let points = calculateSeasonPoints(team1, team2, team3, team4);
// console.log("Points at the end of the season:", points);
//-------------------------------

//task9
// function isValid(value) {
//     // Check if the value is a number
//     if (typeof value === 'number') {
//         return value > 0; // Valid if greater than zero
//     }

//     // Check if the value is a string
//     if (typeof value === 'string') {
//         return value.trim() !== ''; // Valid if not an empty string
//     }

//     // Check if the value is a boolean
//     if (typeof value === 'boolean') {
//         return true; // All booleans are considered valid
//     }

//     // For other types, you can return false or add additional validation rules
//     return false;
// }

// function isInvalid(value) {
//     return !isValid(value); // Return the opposite of isValid
// }

// console.log(isInvalid(5)); 
// console.log(isInvalid(0)); 
// console.log(isInvalid('Hello')); 
// console.log(isInvalid('')); 
// console.log(isInvalid(true)); 
// console.log(isInvalid([])); 

//-------------------------------
// function to check time for christhmas
// function timeForMilkAndCookies(date) {
// 	return date.getMonth()===11 && date.getDate()===24;
// }
// console.log(timeForMilkAndCookies(new Date(2024, 11, 24)));
//-------------------------------------
// function showtime() {
//     var date = new Date();
//     var hours = date.getHours();
//     var minutes = date.getMinutes();
//     var seconds = date.getSeconds();
//     var ampm = hours >= 12 ? 'PM' : 'AM';
//     seconds = (seconds < 10) ? "0" + seconds : seconds;
//     minutes = (minutes < 10) ? "0" + minutes : minutes;
//     hours = (hours < 10) ? "0" + hours : hours;
//     if(hours > 12) {
//         hours = hours - 12;
//     }
//     var time = hours + ':' + minutes + ':' + seconds + ':'+ ampm;
//     setTimeout(showtime, 1000);
//     var time = document.getElementById("myclock").innerHTML = time;

// }
// showtime();
//----------------------

// stopwatch task
// window.onload = function () {
//     let seconds = 0;
//     let minutes = 0;
//     let hours = 0;
//     let interval;

//     const timeDisplay = document.getElementById('time');
//     const startButton = document.getElementById('start');
//     const stopButton = document.getElementById('stop');
//     const resetButton = document.getElementById('reset');

//     function updateTimeDisplay() {
//         let formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
//         let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
//         let formattedHours = hours < 10 ? `0${hours}` : hours;

//         timeDisplay.innerHTML = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
//     }

//     function startStopwatch() {
//         interval = setInterval(() => {
//             seconds++;
//             if (seconds === 60) {
//                 seconds = 0;
//                 minutes++;
//             }
//             if (minutes === 60) {
//                 minutes = 0;
//                 hours++;
//             }
//             updateTimeDisplay();
//         }, 1000);
//     }

//     function stopStopwatch() {
//         clearInterval(interval);
//     }

//     function resetStopwatch() {
//         clearInterval(interval);
//         seconds = 0;
//         minutes = 0;
//         hours = 0;
//         updateTimeDisplay();
//     }

//     startButton.addEventListener('click', startStopwatch);
//     stopButton.addEventListener('click', stopStopwatch);
//     resetButton.addEventListener('click', resetStopwatch);

//     updateTimeDisplay();
// }
//--------------

//  task calculator
// function appendToDisplay(value) {
//     document.getElementById('display').value += value;
// }


// function clearDisplay() {
//     document.getElementById('display').value = '';
// }

// function deleteLast() {
//     let display = document.getElementById('display');
//     display.value = display.value.slice(0, -1);
// }

// function calculate() {
//     try {
//         let result = eval(document.getElementById('display').value);
//         document.getElementById('display').value = result;
//     } catch (error) {
//         document.getElementById('display').value = 'Error';
//     }
// }
//----------------------

//task open navigation
// Select the toggle button and the navigation menu
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

// Add a click event listener to toggle the navigation menu
navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open'); // Toggle the class 'nav-open'
});


