const submitForm = document.querySelector('.popup__form');
const clickButtonClose = document.querySelector('.popup__close-button');
const clickButtonEdit = document.querySelector('.profile__edit-button');

submitForm.addEventListener('submit', savePopup);
clickButtonClose.addEventListener('click', closePopup);
clickButtonEdit.addEventListener('click', editProfile);


const formName = document.querySelector('#name');
const formTitle = document.querySelector('#title');
const popupEdit = document.querySelector('.popup');
const formNameForm = document.querySelector('.profile__title');
const formDescriptionForm = document.querySelector('.profile__description');


function editProfile(event){
  event.preventDefault();
  formName.value = formNameForm.textContent;
  formTitle.value = formDescriptionForm.textContent;
  popupEdit.classList.add('popup_activated');
}


function savePopup(event){
  event.preventDefault();
  formNameForm.textContent = formName.value.trim();
  formDescriptionForm.textContent = formTitle.value.trim();
  closePopup(event);
  
}

function closePopup(event) {
  event.preventDefault();
  popupEdit.classList.remove('popup_activated');
}

