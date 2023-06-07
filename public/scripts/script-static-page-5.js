gsap.registerPlugin(ScrollTrigger);

"use strict";

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (var i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));



const spaceHolder = document.querySelector(".space-holder");
const horizontal = document.querySelector(".horizontal");
spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;

function calcDynamicHeight(ref) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const objectWidth = ref.scrollWidth;
  return objectWidth - vw + vh;
}

window.addEventListener("scroll", () => {
  const sticky = document.querySelector(".sticky-horizontal");
  horizontal.style.transform = `translateX(-${sticky.offsetTop}px)`;
});

window.addEventListener("resize", () => {
  spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
});

// let timeln2 = gsap.timeline();

// timeln2.to(".text-change",{
//   color : "white",
//   scrollTrigger:{
//       trigger: '.brain-image',
//       start: "top+=500px bottom",
//       end : "bottom bottom",
//       scrub : 2,
//       immediateRender : false 
//   },
// })