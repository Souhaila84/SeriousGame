let nav = document.getElementById("nav");

let navPos = nav.getBoundingClientRect().top;

window.addEventListener("scroll", e => {
  let scrollPos = window.scrollY;
  if (scrollPos > navPos) {
    navbar.classList.add('sticky');
    body.classList.add('navbarOffsetMargin');
  } else {
    navbar.classList.remove('sticky');
    header.classList.remove('navbarOffsetMargin');
  }
});
