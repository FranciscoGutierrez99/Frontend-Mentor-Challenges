const openBtnElement = document.getElementById('open-btn');

const closeBtnElement = document.getElementById('close-btn');

const sideMenu = document.getElementById('side-menu');

const backdrop =document.getElementById('backdrop');

function openSideMenu() {
  sideMenu.style.display = 'block';
  backdrop.style.display = 'block';
}

function closeSideMenu () {
  sideMenu.style.display = 'none';
  backdrop.style.display = 'none';
}



openBtnElement.addEventListener('click',openSideMenu);

closeBtnElement.addEventListener('click',closeSideMenu);