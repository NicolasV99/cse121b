/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullname = 'Nicolas Velasquez';
let currentYear = 2023;
let profilePicture = 'images/headshot.jpeg';


/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullname}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `profile image of ${fullname}`);

/* Step 5 - Array */

let favFood = ["Burger", "Pizza", "Pasta", "Lasagna"];
foodElement.innerHTML = `${favFood}`;
let colFood = ["Sancocho"];
favFood.push(colFood);
foodElement.innerHTML += `<br>${favFood}`;
favFood.shift();
foodElement.innerHTML += `<br>${favFood}`;
favFood.pop();
foodElement.innerHTML += `<br>${favFood}`;






