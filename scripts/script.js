document.querySelector('.popup__form').addEventListener('submit', savePopup);
document.querySelector('.popup__close-button').addEventListener('click', closePopup);
document.querySelector('.profile__edit-button').addEventListener('click', editProfile);


const formName = document.querySelector('#name');
const formTitle = document.querySelector('#title');
const formEdit = document.querySelector('.popup');
const formNameForm = document.querySelector('.profile__title');
const formDescriptionForm = document.querySelector('.profile__description');


function editProfile(event){
  event.preventDefault();
  formName.value = formNameForm.textContent;
  formTitle.value = formDescriptionForm.textContent;
  formEdit.classList.add('popup_activated');
}


function savePopup(event){
  event.preventDefault();
  formNameForm.textContent = formName.value.trim();
  formDescriptionForm.textContent = formTitle.value.trim();
  formEdit.classList.remove('popup_activated');
  
}

function closePopup(event) {
  event.preventDefault();
  formEdit.classList.remove('popup_activated');
}

