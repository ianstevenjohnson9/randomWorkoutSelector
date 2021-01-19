const today = new Date();
const hourNow = today.getHours();
const getDay = today.getDay();


const welcomeMessages = ["Hope you have a good workout!", "What are we working on today?", "Lets get this workout done, You can do this."];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const randomWelcomeMessage = Math.floor(Math.random() * welcomeMessages.length);

const welcomeGreeting = (value) => {
    
    if (value > 18) {
        greeting = "Good Evening,";
    } else if (value > 12) {
        greeting = "Good Afternoon,";
    } else if (value > 0) {
        greeting = "Good Morning,";
    } else {
        greeting = "Welcome,";
}
    return greeting;
}


let newEl = document.createElement('h2');
let newGreeting = document.createTextNode(welcomeGreeting(hourNow));
newEl.appendChild(newGreeting);
let getWelcome = document.getElementById("welcome");
getWelcome.appendChild(newEl);


let newElTwo = document.createElement('p');
let newDayName = document.createTextNode('Happy ' + days[getDay] + ', ' + welcomeMessages[randomWelcomeMessage] + '.');
newElTwo.appendChild(newDayName);
getWelcome.appendChild(newElTwo);




const monthOneWorkouts = ["Plyometric Cardio", "Pure Cardio", "Cardio Power", "Sweat Intervals", "FridayFight: Round 1", "Cardio Power and Resistance", "Tabata Power", "Tabata Strength"];
const monthTwoWorkouts = ["Max Out Cardio", "Max Out Strength", "Max Out Power", "MaxOut Sweat", "Friday Fight: Round 2", "Max Interval Circuit", "Max Interval Plyo", "Max Cardio Conditioning"];
const recoveryWorkouts = ["Cariod Recovery", "Core Cardio and Balance", "Cardio Abs", "Yoga", "Max Recovery", "Pilates"];
const gymWorkouts = ["Weights", "Swim", "Cardio", "Sauna Day", "Gym Class"];

const randomMonthOne = Math.floor(Math.random() * monthOneWorkouts.length);
const randomMonthTwo = Math.floor(Math.random() * monthTwoWorkouts.length);
const randomRecovery = Math.floor(Math.random() * recoveryWorkouts.length);
const randomGym = Math.floor(Math.random() * gymWorkouts.length);

let welcomeNav = document.getElementById('welcomeNav');
let insanity = document.getElementById('insanity');
let gym = document.getElementById('gym');
let monthOneButton = document.getElementById('monthOneButton');
let monthTwoButton = document.getElementById('monthTwoButton');
let recoveryButton = document.getElementById('recoveryButton');
let gymWorkoutButton = document.getElementById('gymWorkoutButton');
let resultSection = document.getElementById('resultSection');
let result = document.getElementById('result');
let reset = document.getElementById('resetButton');


welcomeNav.hidden = false;
insanity.hidden = false;
gym.hidden = false;
resultSection.hidden = true;
resetButton.hidden = true;

monthOneButton.onclick = function() {
    welcomeNav.hidden = true;
    insanity.hidden = true;
    gym.hidden = true;
    resultSection.hidden = false;
    resetButton.hidden = false;

    let workoutElement = document.createElement('p');
    let workoutText = document.createTextNode(monthOneWorkouts[randomMonthOne]);
    workoutElement.appendChild(workoutText);
    result.insertBefore(workoutElement, result.firstChild);
}
monthTwoButton.onclick = function() {
    welcomeNav.hidden = true;
    insanity.hidden = true;
    gym.hidden = true;
    resultSection.hidden = false;
    resetButton.hidden = false;

    let workoutElement = document.createElement('p');
    let workoutText = document.createTextNode(monthTwoWorkouts[randomMonthTwo]);
    workoutElement.appendChild(workoutText);
    result.insertBefore(workoutElement, result.firstChild);
}
recoveryButton.onclick = function() {
    welcomeNav.hidden = true;
    insanity.hidden = true;
    gym.hidden = true;
    resultSection.hidden = false;
    resetButton.hidden = false;

    let workoutElement = document.createElement('p');
    let workoutText = document.createTextNode(recoveryWorkouts[randomRecovery]);
    workoutElement.appendChild(workoutText);
    result.insertBefore(workoutElement, result.firstChild);
}
gymWorkoutButton.onclick = function() {
    welcomeNav.hidden = true;
    insanity.hidden = true;
    gym.hidden = true;
    resultSection.hidden = false;
    resetButton.hidden = false;

    let workoutElement = document.createElement('p');
    let workoutText = document.createTextNode(gymWorkouts[randomGym]);
    workoutElement.appendChild(workoutText);
    result.insertBefore(workoutElement, result.firstChild);
}


reset.onclick = function() {
    welcomeNav.hidden = false;
    insanity.hidden = false;
    gym.hidden = false;
    resultSection.hidden = true;
    resetButton.hidden = true;

    location.reload();
}
