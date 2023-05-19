
// let index = 0;
  
// let delay = 5000;

// let $tabs = $('.divOfList .list');

// let $contents = $('.divOfContent');

// let interval = setInterval(rotate, delay);
// $('.item-1').addClass('active');
// $('.list > .list-item').each(function (i) {
//   $(this).click(function () {
//     index = i;
//     switchElement();
//   });
// });
// function rotate() {
//   index++;
//   if (index >= $tabs.children('.list-item').length) {
//     index = 0;
//   }
//   switchElement();
// }
// //switch tabs
// function switchElement() {
//   clearInterval(interval);
//   $tabs.children('.list-item').removeClass('active');
//   $('.divOfContent .section').fadeOut(300);
//   let $tab = $tabs.children('.list-item').eq(index);
//   $tab.addClass('active');
//   $contents.children('.section').eq(index).delay(300).fadeIn(300);
//   interval = setInterval(rotate, delay);
// }

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
