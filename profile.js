let favColorButton = document.querySelector('#color');
let favPlaceButton = document.querySelector('#place');
let favoriteRitualButton = document.querySelector('#ritual')

let colorAlert = (event => {
    alert('Favorite Color: Purple');
})

let placeAlert =(event => {
    alert('Favorite Place: Siesta Key, Florida');
})

let ritualAlert = (event => {
    alert('Favorite Ritual: Not quite sure')
})


favColorButton.addEventListener('click', colorAlert);
favPlaceButton.addEventListener('click', placeAlert);
favoriteRitualButton.addEventListener('click', ritualAlert);