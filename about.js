console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form submitted successfully');
}

let alertCompliment = (event => {
	alert(`You're almost as cool as this cat!`)
})


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let img = document.querySelector('img');

img.addEventListener('mouseover', alertCompliment)
