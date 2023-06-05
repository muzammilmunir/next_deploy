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

let timeln2 = gsap.timeline();

timeln2.to(".sideChangeImage",{
  xPercent : -281,
  yPercent : 126.6,
  scrollTrigger:{
      trigger: '.sticky',
      start: "top-=100px bottom",
      end : "bottom bottom",
      scrub : 2,
      immediateRender : false 
  },
})

.to(".sideChangeImage",{
  opacity : 0,
  scrollTrigger:{
      trigger: '.sticky',
      start: "bottom-=1px bottom",
      end : "bottom bottom",
      scrub : true,
      immediateRender : false 
  },
})

.to(".sideChangeImage2",{
  opacity : 1,
  scrollTrigger:{
      trigger: '.sticky',
      start: "bottom-=1px bottom",
      end : "bottom bottom",
      scrub : true,
      immediateRender : false 
  },
})

const inViewport = (entries, observer) => {
  entries.forEach(entry => { entry.target.classList.toggle("is-inviewport", entry.isIntersecting);
  });
  };
  const Obs = new IntersectionObserver(inViewport);
  const obsOptions = {};
  const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
  const jCard = document.querySelectorAll('.jcard');


  ELs_inViewport.forEach((EL, i) => {
  Obs.observe(EL, obsOptions);

});

