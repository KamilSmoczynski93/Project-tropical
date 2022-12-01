const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.nav__item')
const navBtnBars = document.querySelector('.burger-btn__bars')
const allSections= document.querySelectorAll('.section')
const footerYear = document.querySelector('.footer__year')

const handleNav = () => {
	nav.classList.toggle('nav--active')

    // After adding the active class, the color of the burger icon is changed from black to white
    navBtnBars.classList.remove('black-bars-color');

    // disabling the active class when we click on one of the items
	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav--active')
		})
	})

    handleNavItemsAnimation();
}

// adding styles dynamically delay time
const handleNavItemsAnimation = () => {
    let delayTime = 0;

    allNavItems.forEach(item => {
        item.classList.toggle('nav-items-animation')
        item.style.animationDelay = '.' + delayTime + 's';
        delayTime++;
    })
}

// burger icon changes color when it rides over a white field
const handleObserver = () => {
    const currentSection = window.scrollY;
    allSections.forEach(section => {
        if(section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
            navBtnBars.classList.add('black-bars-color')
        } else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
            navBtnBars.classList.remove('black-bars-color')
        }
    })
}


// change of year in footer
const handleCurrentYear = () => {
    const year = new Date().getFullYear();
footerYear.innerText = year;
}



handleCurrentYear();
navBtn.addEventListener('click', handleNav)
window.addEventListener('scroll', handleObserver)
