let content = document.querySelector("#div_menu_hamburger");
let sidebarBody = document.querySelector("#hamburger-sidebar-body");
let button = document.querySelector("#humburger-bottom");
let overlay = document.querySelector("#hamburger-overlay");
let activatedClass = 'hamburger-activated';

sidebarBody.innerHTML = content.innerHTML;

button.addEventListener('click', function(e){
  e.preventDefault();
  this.parentNode.classList.add(activatedClass);
});

overlay.addEventListener('click', function(e){
  e.preventDefault();
  this.parentNode.classList.remove(activatedClass);
});
