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
},
];
const projectsContainer = document.getElementById('works');
for(let i = 0 ; i < projects.length; i++){
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
    <button class="see_project"><span class="see">${projects[i].button}</span></button>
  </div>
</div>`;
const button = project.querySelector('.see_project');
  button.addEventListener('click', () => {
   document.querySelector('.popup').style.display = 'flex';
  });
  projectsContainer.append(project);
}
const popupContainer = document.getElementById('works');
for(let i = 0 ; i < projects.length; i++){
  const popup = document.createElement('div');
  popup.className = 'popup';
  popup.innerHTML = `
  <img src="${projects[i].img}" alt="Snapshoot-portfolio"/>
<div class="popup-info-block">
  <div class="popup-client">
    <h2 class="popup-project-title">${projects[i].title}</h2>
    <div class="popup-details">
      <div class="popup-name"><p class="popup-project-name">${projects[i].client}</p></div>
      <div class="popup-circle-1"></div>
      <div class="popup-role"><p class="popup-project-role">${projects[i].role}</p></div>
      <div class="popup-circle-2"></div>
      <div class="popup-year"><p class="popup-project-year">${projects[i].year}</p></div>
    </div>
  </div>
  <p class="popup-summary">
  ${projects[i].desc}
  </p>
  <div class="popup-languages">
    <div class="popup-html"><p class="popup-project-html">${projects[i].tech[0]}</p></div>
    <div class="popup-css"><p class="popup-project-css">${projects[i].tech[1]}</p></div>
    <div class="popup-js"><p class="popup-project-js">${projects[i].tech[2]}</p></div>
  </div>
  <button id="go-live"><img src="assets/images/source.jpg" alt="github">Go live</button>
  <button id="source"><img src="assets/images/images.png" alt="github">See Source</button>
  <a href="javascript:void(0)" id="close-btn-n" class="closebtn-n">&times;</a>
</div>`;
const button = popup.querySelector('#close-btn-n');
  button.addEventListener('click', () => {
   document.querySelector('.popup').style.display = 'none';
  });
projectsContainer.append(popup);
}