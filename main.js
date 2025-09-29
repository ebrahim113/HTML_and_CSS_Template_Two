const bars = document.querySelector("nav>i");

const menu = document.querySelector("nav ul");

const links = menu.querySelectorAll("li a");

document.querySelector("footer span:first-of-type").textContent = new Date().getFullYear();

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

const sections = {
	services: {},
	portfolio: {},
	about: {},
	pricing: {},
	contact: {}
};

window.addEventListener('load', _ => {
	for (const section in sections)
		sections[section].offsetTop = document.querySelector(`.${section}`).offsetTop;
});

window.addEventListener('scroll', _ => {
	const scrollYValue = scrollY + 97;
	if (scrollYValue > sections['services'].offsetTop)
		for (const section in sections) {
			if (scrollYValue > sections[section].offsetTop)
				links.forEach(link => { 
					link.classList.remove('active');
					links.forEach(link => {
						if (link.textContent.toLowerCase() === section) link.classList.add('active');
					});
				});
		}
	else {
		links.forEach(link => link.classList.remove('active'));
		document.querySelector('nav li:first-of-type a').classList.add('active');
	}
});