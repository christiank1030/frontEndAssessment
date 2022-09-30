let restaurantButton = document.querySelector("#restaurantButton") 

let restaurantArr = ['Cafe Napoli', 'Border Cafe', 'Grain']

let randomRestaurant = (event => {
    let restaurant = Math.floor(Math.random() * restaurantArr.length);
    let restaurantAnswer = ""
    restaurantAnswer = restaurantArr[restaurant]

    alert(`Eat at ${restaurantAnswer} tonight!`)
})

restaurantButton.addEventListener('click', randomRestaurant);