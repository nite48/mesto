addEventList();

function addEventList(){
  document.querySelector('.popup__submit-button').addEventListener('submit', savePopup);
  document.querySelector('.popup__close-button').addEventListener('click', closePopup);
  document.querySelector('.profile__edit-button').addEventListener('click', editProfile);
}

function editProfile(event){
  event.preventDefault();
  document.querySelector('#name').value = document.querySelector('.profile__title').innerText;
  document.querySelector('#title').value = document.querySelector('.profile__description').innerText;
  document.querySelector('.popup').classList.add('popup_activated');
}

function savePopup(event){
  event.preventDefault();
  let name = document.getElementById('name').value;
  let title = document.getElementById('title').value;
  setProfile(name, title);
  
}

function closePopup(event) {
  event.preventDefault();
  document.querySelector('.popup').classList.remove('popup_activated');
}

function setProfile(name, title) {
  document.querySelector('.profile__title').innerHTML = name.trim();
  document.querySelector('.profile__description').innerHTML = title.trim();
}
// function like_button(argument) {
//   // body...
// }
