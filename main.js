const bars = document.querySelector("nav>i");

const menu = document.querySelector("nav ul");

const links = menu.querySelectorAll("li a");

let isOpened = false;

bars.addEventListener('click', (e) => {
	e.stopPropagation();
	if (isOpened) {
		menu.style.display = "none";
		isOpened = !isOpened;
	} else {
		menu.style.display = "flex";
		isOpened = !isOpened;
	}
});

document.addEventListener('click', _ => {
	if (isOpened) {
		menu.style.display = "none";
		isOpened = !isOpened;
	}
});

links.forEach(link => {
	link.addEventListener('click', function() {
		links.forEach(link => link.classList.remove('active'));
		this.classList.add('active');
	});
});