const open = document.getElementById('open-btn');
const close = document.getElementById('close-btn');
function openNav() {
  document.getElementById('myNav').style.width = '100%';
}
function closeNav() {
  document.getElementById('myNav').style.width = '0%';
}
open.addEventListener('click', openNav);
close.addEventListener('click', closeNav);