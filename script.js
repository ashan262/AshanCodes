const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY >0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('active');
};

const sr = ScrollReveal ({
	distance: '25px',
	duration: 2500,
	reset: true
})

sr.reveal('.home-text',{delay:190, origin:'bottom'})

sr.reveal('.about,.services,.portfolio,.contact',{delay:200, origin:'bottom'})

// function for contact form submision

var form = document.getElementById("my-form");
		
		async function handleSubmit(event) {
		  event.preventDefault();
		  var status = document.getElementById("my-form-status");
		  var data = new FormData(event.target);
		  fetch(event.target.action, {
			method: form.method,
			body: data,
			headers: {
				'Accept': 'application/json'
			}
		  }).then(response => {
			if (response.ok) {
			  status.innerHTML = "Thanks for your submission!";
			  form.reset()
			} else {
			  response.json().then(data => {
				if (Object.hasOwn(data, 'errors')) {
				  status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
				} else {
				  status.innerHTML = "Oops! There was a problem submitting your form"
				}
			  })
			}
		  }).catch(error => {
			status.innerHTML = "Oops! There was a problem submitting your form"
		  });
		}
		form.addEventListener("submit", handleSubmit)




