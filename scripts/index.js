
import FormValidator from './FormValidator.js';
import Section from './Section.js';
import {
  profileName,
  formTitle,
  profileButtonEdit, 
  formClickImage, 
  editButtonEditEmpty, 
  newCardForn, 
  emptyAddImage, 
  data, 
  initialCards,  
  formImageInsert, 
  formElementContent,
  FormValidEditProfile,
  CARD_OBJECT_SELECTOR,
  VIEW_CARD_IMAGE,
  POPUP_IMAGE_SELECTOR,
  POPUP_DESCRIPTION_SELECTOR,
  ARRAY_ELEMENT_PROFILE,
  POPUP_EDIT_PROFILE} 
  from '../utils/constants.js';
import PopupWithImage from './PopupWithImage.js';
import { createCard } from '../utils/utils.js';
import UserInfo from './UserInfo.js';
import PopupWithForm from  './PopupWithForm.js';

// popupProfileEdit.addEventListener('submit', savePopup);
// profileButtonEdit.addEventListener('click', editProfile);

// newCardForn.addEventListener('submit', savePopupAdd);
// popupProfileEdit.addEventListener('click', closeOnPopup);
// emptyAddImage.addEventListener('click', closeOnPopup);
// formClickImage.addEventListener('click', closeOnPopup);


// document.querySelectorAll('.popup__close-button').forEach(close =>{
//   close.addEventListener('click', closeOnPopup);
// })

// document.querySelectorAll('.popup__container').forEach(temp => {
//   temp.addEventListener('click', closePopupOutsideClick);
// });


// function enableFormValidation(){
//   const formList  = document.querySelectorAll(data.formSelector);
//   formList.forEach(function (form){
//     const formValidator = new FormValidator(form, data);
//     formValidator.enableValidation();
//   })
  
// }
// enableFormValidation();



// function addCard(element){
//   const cardElement = createCard(element);
//   elementTemplate.prepend(cardElement);
// }


// initialCards.forEach(function (element){
//   addCard(element)
// });

// function closePopup(popup) {
//   popup.classList.remove('popup_activated');
//   document.removeEventListener("keydown", closePopupOutside);
// }


// function closePopupOutsideClick(event){
//   event.stopPropagation();  
// }


// function closePopupOutside(event){
//   const key = event.keyCode;
//   if (key === numberKeyboards) {    
//     closePopup(document.querySelector(".popup_activated"));
//   };
// };


// function savePopup(event){
//   event.preventDefault();
//   formNameForm.textContent = profileName.value.trim();
//   formDescriptionForm.textContent = formTitle.value.trim();
//   closePopup(popupProfileEdit);
// }

// function savePopupAdd(event) {
//   event.preventDefault();
//   addCard({
//     name: formNameEmpty.value.trim(),
//     link: formLinkEmpty.value.trim()
//   });
//   nameEmpty.value = '';
//   linkEmpty.value = '';
//   closePopup(emptyAddImage);
// }


// function editProfile(event){
//   event.preventDefault();
//   profileName.value = formNameForm.textContent;
//   formTitle.value = formDescriptionForm.textContent;
//   profileName.dispatchEvent(new Event('input'));
//   formTitle.dispatchEvent(new Event('input'));
//   openPopup(popupProfileEdit);
// }


// function onAddImage(event) {
//   newCardForn.reset();
//   openPopup(emptyAddImage);
// }


// function closeOnPopup(event){
//   closePopup(event.target.closest('.popup'));
// }


// export function openPopup(popup) {
//   popup.classList.add('popup_activated');
//   document.addEventListener("keydown", closePopupOutside);
// }



//Создание объекта  страницы и заполнение данными
const cardListSection = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = createCard(item, popapImageView);
    const cardElement = card.generateCard();
    cardListSection.addItem(cardElement);
  }
}, CARD_OBJECT_SELECTOR);

const popapImageView = new PopupWithImage(VIEW_CARD_IMAGE, POPUP_IMAGE_SELECTOR, POPUP_DESCRIPTION_SELECTOR);

const formEditValidator = new FormValidator(FormValidEditProfile, data)
formEditValidator.enableValidation()
const userInfo = new UserInfo(ARRAY_ELEMENT_PROFILE);

const popupProfileEdit = new PopupWithForm({
  validatorForm : formEditValidator,
  handleFormSubmit: (formData) =>{
    userInfo.setUserInfo(formData.name, formData.description)
  }
},POPUP_EDIT_PROFILE);

editButtonEditEmpty.addEventListener('click', () =>{
  popupProfileEdit.open();
  const information  = userInfo.getUserInfo();
  profileName.value = information.name;
  formTitle.value = information.description;
});
cardListSection.renderItems();
popapImageView.setEventListeners();
popupProfileEdit.setEventListeners();
// Создание класа с информацие о пользователе
