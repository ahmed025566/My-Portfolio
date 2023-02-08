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
const projects = [{
  title: 'Tonic',
  img: 'assets/images/Snapshoot Portfolio-1.png',
  client: 'CANOPY',
  role: 'Back End Dev',
  year: '2015',
  desc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  tech: ['HTML', 'CSS', 'JavaScript'],
  button: 'See project',
  github: '#',
  live: '#',
  id: 'button1',
},
{
  title: 'Multi-Post Stories',
  img: 'assets/images/Snapshoot Portfolio-2.png',
  client: 'CANOPY',
  role: 'Front End Dev',
  year: '2015',
  desc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  tech: ['HTML', 'CSS', 'JavaScript'],
  button: 'See project',
  github: '#',
  live: '#',
  id: 'button2',
},
{
  title: 'Tonuc',
  img: 'assets/images/Snapshoot Portfolio-3.png',
  client: 'CANOPY',
  role: 'Full Stack Dev',
  year: '2015',
  desc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  tech: ['HTML', 'CSS', 'JavaScript'],
  button: 'See project',
  github: '#',
  live: '#',
  id: 'button3',
},
{
  title: 'Multi-Post Stories',
  img: 'assets/images/Snapshoot Portfolio-4.png',
  client: 'CANOPY',
  role: 'Full Stack Dev',
  year: '2015',
  desc: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  tech: ['HTML', 'CSS', 'JavaScript'],
  button: 'See project',
  github: '#',
  live: '#',
  id: 'button4',
},
];
const projectsContainer = document.getElementById('works');
for (let i = 0; i < projects.length; i += 1) {
  const project = document.createElement('div');
  project.className = 'card';
  project.innerHTML = `
  <img src="${projects[i].img}" alt="Snapshoot-portfolio"/>
<div class="info-block">
  <div class="client">
    <h2 class="project-title">${projects[i].title}</h2>
    <div class="details">
      <div class="name"><p class="project-name">${projects[i].client}</p></div>
      <div class="circle-1"></div>
      <div class="role"><p class="project-role">${projects[i].role}</p></div>
      <div class="circle-2"></div>
      <div class="year"><p class="project-year">${projects[i].year}</p></div>
    </div>
  </div>
  <p class="summary">
  ${projects[i].desc}
  </p>
  <div class="languages">
    <div class="html"><p class="project-html">${projects[i].tech[0]}</p></div>
    <div class="css"><p class="project-css">${projects[i].tech[1]}</p></div>
    <div class="js"><p class="project-js">${projects[i].tech[2]}</p></div>
  </div>
  <div class="action">
    <button class="${projects[i].id}"><span class="see">${projects[i].button}</span></button>
  </div>
</div>`;
  projectsContainer.append(project);
}
const button1 = document.querySelector('.button1');
function createPopup1() {
  const popup = document.createElement('div');
  popup.className = 'popup';
  popup.innerHTML = `<div class="cadr">
<button id="close-p" onclick="closeP1 ()"><img src="assets/images/Icon.png" alt="close"></button>
<h2 class="project-title">Tonic</h2>
<div class="details">
 <div class="name"><p class="project-name">CANBOY</p></div>
 <div class="circle-1"></div>
 <div class="role"><p class="project-role">Back End Dev</p></div>
 <div class="circle-2"></div>
 <div class="year"><p class="project-year">2015</p></div>
</div>
<img src="assets/images/Snapshoot Portfolio-1.png" alt="snapshot-portfolio">
<p class="summary">A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
<div class="languages">
    <div class="html"><p class="project-html">HTML</p></div>
    <div class="css"><p class="project-css">CSS</p></div>
    <div class="js"><p class="project-js">JavaScript</p></div>
  </div>
  <button class="see-live"><img src="assets/images/live.png" alt="go-live">See live</button>
  <button class="see-source"><img src="assets/images/github.png" alt="go-live">See Source</button>
</div>`;
  projectsContainer.append(popup);
}
button1.addEventListener('click', createPopup1);
function closeP1() {
  document.querySelector('.popup').remove();
}
const button2 = document.querySelector('.button2');
function createPopup2() {
  const popup = document.createElement('div');
  popup.className = 'popup1';
  popup.innerHTML = `<div class="cadr">
<button id="close-p" onclick="closeP2 ()"><img src="assets/images/Icon.png" alt="close"></button>
<h2 class="project-title">Multi-Post Stories</h2>
<div class="details">
 <div class="name"><p class="project-name">CANBOY</p></div>
 <div class="circle-1"></div>
 <div class="role"><p class="project-role">Front End Dev</p></div>
 <div class="circle-2"></div>
 <div class="year"><p class="project-year">2015</p></div>
</div>
<img src="assets/images/Snapshoot Portfolio-2.png" alt="snapshot-portfolio">
<p class="summary">A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
<div class="languages">
    <div class="html"><p class="project-html">HTML</p></div>
    <div class="css"><p class="project-css">CSS</p></div>
    <div class="js"><p class="project-js">JavaScript</p></div>
  </div>
  <button class="see-live"><img src="assets/images/live.png" alt="go-live">See live</button>
  <button class="see-source"><img src="assets/images/github.png" alt="go-live">See Source</button>
</div>`;
  projectsContainer.append(popup);
}
button2.addEventListener('click', createPopup2);
function closeP2() {
  document.querySelector('.popup1').remove();
}
const button3 = document.querySelector('.button3');
function createPopup3() {
  const popup = document.createElement('div');
  popup.className = 'popup2';
  popup.innerHTML = `<div class="cadr">
<button id="close-p" onclick="closeP3 ()"><img src="assets/images/Icon.png" alt="close"></button>
<h2 class="project-title">Tonuc</h2>
<div class="details">
 <div class="name"><p class="project-name">CANBOY</p></div>
 <div class="circle-1"></div>
 <div class="role"><p class="project-role">Full Stack Dev</p></div>
 <div class="circle-2"></div>
 <div class="year"><p class="project-year">2015</p></div>
</div>
<img src="assets/images/Snapshoot Portfolio-3.png" alt="snapshot-portfolio">
<p class="summary">A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
<div class="languages">
    <div class="html"><p class="project-html">HTML</p></div>
    <div class="css"><p class="project-css">CSS</p></div>
    <div class="js"><p class="project-js">JavaScript</p></div>
  </div>
  <button class="see-live"><img src="assets/images/live.png" alt="go-live">See live</button>
  <button class="see-source"><img src="assets/images/github.png" alt="go-live">See Source</button>
</div>`;
  projectsContainer.append(popup);
}
button3.addEventListener('click', createPopup3);
function closeP3() {
  document.querySelector('.popup2').remove();
}
const button4 = document.querySelector('.button4');
function createPopup4() {
  const popup = document.createElement('div');
  popup.className = 'popup3';
  popup.innerHTML = `<div class="cadr">
<button id="close-p" onclick="closeP4 ()"><img src="assets/images/Icon.png" alt="close"></button>
<h2 class="project-title">Multi-Post Stories</h2>
<div class="details">
 <div class="name"><p class="project-name">CANBOY</p></div>
 <div class="circle-1"></div>
 <div class="role"><p class="project-role">Full Stack Dev</p></div>
 <div class="circle-2"></div>
 <div class="year"><p class="project-year">2015</p></div>
</div>
<img src="assets/images/Snapshoot Portfolio-4.png" alt="snapshot-portfolio">
<p class="summary">A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
<div class="languages">
    <div class="html"><p class="project-html">HTML</p></div>
    <div class="css"><p class="project-css">CSS</p></div>
    <div class="js"><p class="project-js">JavaScript</p></div>
  </div>
  <button class="see-live"><img src="assets/images/live.png" alt="go-live">See live</button>
  <button class="see-source"><img src="assets/images/github.png" alt="go-live">See Source</button>
</div>`;
  projectsContainer.append(popup);
}
button4.addEventListener('click', createPopup4);
function closeP4() {
  document.querySelector('.popup3').remove();
}

const form = document.querySelector('form');
const email = document.getElementById('email');
const error = email.nextElementSibling;
const emailRegExp = /^[a-z-0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z-0-9-]+(?:\.[a-z-0-9-]+)*$/;
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const isValid = email.value.length === 0 || emailRegExp.test(email.value);
  if (!isValid) {
    email.className = 'invalid';
    error.textContent = 'Only lower case letters allowed';
    error.className = 'error active';
  } else {
    email.className = 'valid';
    error.textContent = '';
    error.className = 'error';
    form.submit();
  }
});
console.log(closeP4(), closeP3(), closeP2(), closeP1());