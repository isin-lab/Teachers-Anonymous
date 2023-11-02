
const main = document.getElementById('main');
const footer = document.getElementById('footer');
const headerNav = document.getElementById('header_nav');
const hamburgerMenu = document.getElementById('hamburger_menu');
const popUpNav = document.getElementById('popUpNav');
const navLinks = popUpNav.querySelectorAll('a');
const mainLink = document.getElementById('main_link');

//popUp menu
hamburgerMenu.addEventListener("click", function() {
  popUpNav.classList.toggle('hide')
});

mainLink.addEventListener('click', function() {
    popUpNav.classList.add('hide');
});

navLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    popUpNav.classList.add('hide');
  });
});


//figma
const btnFigma = document.getElementById('btn_figma');
const curseFigma = document.getElementById('curse_figma');
const btnCloseFigma = document.getElementById('btn_close_figma');

btnFigma.addEventListener("click", function() {
  curseFigma.style.display = "flex";
  main.style.display = "none";
  footer.style.display = "none";
  headerNav.style.display = "none";
  hamburgerMenu.style.display = "none";
});
btnCloseFigma.addEventListener("click", function() {
  curseFigma.style.display = "none";
  main.style.display = "block";
  footer.style.display = "flex";
  if (window.innerWidth > 900) {
    headerNav.style.display = "flex";
  } else {
    hamburgerMenu.style.display = "block";
  }
});


//miro
const btnMiro = document.getElementById('btn_miro');
const curseMiro = document.getElementById('curse_miro');
const btnCloseMiro = document.getElementById('btn_close_miro');

btnMiro.addEventListener("click", function() {
  curseMiro.style.display = "flex";
  main.style.display = "none";
  footer.style.display = "none";
  headerNav.style.display = "none";
  hamburgerMenu.style.display = "none";
});
btnCloseMiro.addEventListener("click", function() {
  curseMiro.style.display = "none";
  main.style.display = "block";
  footer.style.display = "flex";
  if (window.innerWidth > 900) {
    headerNav.style.display = "flex";
  } else {
    hamburgerMenu.style.display = "block";
  }
});

//AI
const btnAI = document.getElementById('btn_AI');
const curseAI = document.getElementById('curse_AI');
const btnCloseAI = document.getElementById('btn_close_AI');

btnAI.addEventListener("click", function() {
  curseAI.style.display = "flex";
  main.style.display = "none";
  footer.style.display = "none";
  headerNav.style.display = "none";
  hamburgerMenu.style.display = "none";
});
btnCloseAI.addEventListener("click", function() {
  curseAI.style.display = "none";
  main.style.display = "block";
  footer.style.display = "flex";
  if (window.innerWidth > 900) {
    headerNav.style.display = "flex";
  } else {
    hamburgerMenu.style.display = "block";
  }
});