const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');
const spans = document.querySelectorAll('#hero h1 span');
const h1s = document.querySelectorAll('#hero h1');

function restartAnimation() {
  // Reset red band (already working)
  spans.forEach((span, index) => {
    span.classList.remove('reveal-animate');
    void span.offsetWidth;
    setTimeout(() => {
      span.classList.add('reveal-animate');
    }, index * 500);
  });

  // Reset text animation
  h1s.forEach((h1, index) => {
    h1.classList.remove('reveal-text', 'reveal-text-name');
    void h1.offsetWidth;
    setTimeout(() => {
      if (index === h1s.length - 1) {
        h1.classList.add('reveal-text-name');
      } else {
        h1.classList.add('reveal-text');
      }
    }, index * 500);
  });
}

restartAnimation(); // First run
setInterval(restartAnimation, 10000); // Repeat every 5 seconds


hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

