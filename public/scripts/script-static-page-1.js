
let index = 0;
  
let delay = 5000;

let $tabs = $('.divOfList > .list');

let $contents = $('.divOfContent');

let interval = setInterval(rotate, delay);
$('.item-1').addClass('active');
$('.list .list-items').each(function (i) {
  $(this).click(function () {
    index = i;
    switchElement();
  });
});
function rotate() {
  index++;
  if (index >= $tabs.children('.list-items').length) {
    index = 0;
  }
  switchElement();
}
//switch tabs
function switchElement() {
  clearInterval(interval);
  $tabs.children('.list-items').removeClass('active');
  $('.divOfContent .auto-sections').fadeOut(300);
  let $tab = $tabs.children('.list-items').eq(index);
  $tab.addClass('active');
  $contents.children('.auto-sections').eq(index).delay(300).fadeIn(300);
  interval = setInterval(rotate, delay);
}

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
