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

// Fixed Contact button script
let socialLinks= document.querySelector(".FSocial");
		let shareLinks= document.querySelector(".FLinks");
		let changeIcon= document.querySelector(".bx-conversation")
		console.log(changeIcon)
		socialLinks.addEventListener("click", ()=>{
			shareLinks.classList.toggle("Active")
			changeIcon.classList.toggle('bx-conversation')
			changeIcon.classList.toggle('bxs-conversation')
		})






