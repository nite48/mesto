import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';


const profileButtonEdit = document.querySelector('.profile__edit-button');
const editButtonEditEmpty = document.querySelector('.profile__add-button');
const profileName = document.querySelector('#name');
const formTitle = document.querySelector('#title');
const emptyAddImage = document.querySelector('#addImage');
const formNameForm = document.querySelector('.profile__title');
const formDescriptionForm = document.querySelector('.profile__description');
const formNameEmpty = document.querySelector('#name_empty');
const formLinkEmpty = document.querySelector('#link_empty');
export const formClickImage = document.querySelector('#formImage');
export const formImageInsert = formClickImage.querySelector('.popup__image');
export const formElementContent = formClickImage.querySelector('.popup__subtitle');
const popupProfileEdit = document.querySelector('#popupProfile');
const newCardForn = emptyAddImage.querySelector('.popup__form');
const numberKeyboards = 27;
const nameEmpty= emptyAddImage.querySelector('#name_empty');
const linkEmpty= emptyAddImage.querySelector('#link_empty');
const buttonElement = document.querySelector('#buttonAddImage');
const elementTemplate = document.querySelector('.elements');


const data = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_invalid',
  errorClass: 'popup__error-message_active',
};


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

popupProfileEdit.addEventListener('submit', savePopup);
profileButtonEdit.addEventListener('click', editProfile);
editButtonEditEmpty.addEventListener('click', onAddImage);
newCardForn.addEventListener('submit', savePopupAdd);
popupProfileEdit.addEventListener('click', closeOnPopup);
emptyAddImage.addEventListener('click', closeOnPopup);
formClickImage.addEventListener('click', closeOnPopup);


document.querySelectorAll('.popup__close-button').forEach(close =>{
  close.addEventListener('click', closeOnPopup);
})

document.querySelectorAll('.popup__container').forEach(temp => {
  temp.addEventListener('click', closePopupOutsideClick);
});


function enableFormValidation(){
  const formList  = document.querySelectorAll(data.formSelector);
  formList.forEach(function (form){
    const formValidator = new FormValidator(form, data);
    formValidator.enableValidation();
  })
  
}
enableFormValidation();

function createCard(element){
  const card = new Card(element, '#elementsTemplate');
  const cardTemplate = card.generateCard(); 
  return cardTemplate
}

function addCard(element){
  const cardElement = createCard(element);
  elementTemplate.prepend(cardElement);
}


initialCards.forEach(function (element){
  addCard(element)
});

function closePopup(popup) {
  popup.classList.remove('popup_activated');
  document.removeEventListener("keydown", closePopupOutside);
}


function closePopupOutsideClick(event){
  event.stopPropagation();  
}


function closePopupOutside(event){
  const key = event.keyCode;
  if (key === numberKeyboards) {    
    closePopup(document.querySelector(".popup_activated"));
  };
};


function savePopup(event){
  event.preventDefault();
  formNameForm.textContent = profileName.value.trim();
  formDescriptionForm.textContent = formTitle.value.trim();
  closePopup(popupProfileEdit);
}

function savePopupAdd(event) {
  event.preventDefault();
  addCard({
    name: formNameEmpty.value.trim(),
    link: formLinkEmpty.value.trim()
  });
  nameEmpty.value = '';
  linkEmpty.value = '';
  closePopup(emptyAddImage);
}


function editProfile(event){
  event.preventDefault();
  profileName.value = formNameForm.textContent;
  formTitle.value = formDescriptionForm.textContent;
  profileName.dispatchEvent(new Event('input'));
  formTitle.dispatchEvent(new Event('input'));
  openPopup(popupProfileEdit);
}


function onAddImage(event) {
  buttonElement.classList.add('popup__submit-button_disabled');
  openPopup(emptyAddImage);
}


function closeOnPopup(event){
  closePopup(event.target.closest('.popup'));
}


export function openPopup(popup) {
  popup.classList.add('popup_activated');
  document.addEventListener("keydown", closePopupOutside);
}