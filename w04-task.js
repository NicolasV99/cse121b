/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Nicolas Velasquez",
    photo: "images/headshot.jpeg",
    favoriteFoods: [
        'Burger',
        'Lasagna',
        'Pizza',
        'Pandebono'
    ],
    hobbies: [
        'Reading',
        'Running',
        'Listen Music',
        'VideoGames'
    ],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push({
    place: 'Sinaloa, Mexico',
    length: '2 years'
});

myProfile.placesLived.push({
    place: 'Valle, Colombia',
    length: '22 years'
});

/* DOM Manipulation - Output */

/* Name */

document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */

document.querySelector('#potho').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */

myProfile.hobbies.forEach(hobbies =>{
    let li = document.createElement('li');
    li.textContent = hobbies;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */

myProfile.placesLived.forEach(function(place){
    let dtElement = document.createElement('dt');
    dtElement.textContent = place.place;
    document.querySelector('#places-lived').appendChild(dtElement);

    let ddElement = document.createElement('dd');
    ddElement.textContent = place.length;
    document.querySelector('#places-lived').appendChild(ddElement)
})