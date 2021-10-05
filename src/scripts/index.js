
import FormValidator from './FormValidator.js';
import Section from './Section.js';
import {
  profileName,
  formTitle,
  profileButtonEdit, 
  editButtonEditEmpty, 
  newCardForn, 
  data, 
  initialCards,  
  formValidEditProfile,
  CARD_OBJECT_SELECTOR,
  VIEW_CARD_IMAGE,
  POPUP_IMAGE_SELECTOR,
  POPUP_DESCRIPTION_SELECTOR,
  ARRAY_ELEMENT_PROFILE,
  POPUP_EDIT_PROFILE,
  POPUP_ADD_CARD_ELEMENT} 
  from '../utils/constants.js';
import PopupWithImage from './PopupWithImage.js';
import { createCard } from '../utils/utils.js';
import UserInfo from './UserInfo.js';
import PopupWithForm from  './PopupWithForm.js';

import '../pages/index.css';


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

const formEditValidator = new FormValidator(formValidEditProfile, data)
formEditValidator.enableValidation()

const formAddValidator = new FormValidator(newCardForn, data)
formAddValidator.enableValidation()

const userInfo = new UserInfo(ARRAY_ELEMENT_PROFILE);

const popupProfileEdit = new PopupWithForm({
  validatorForm : formEditValidator,
  handleFormSubmit: (formData) =>{
    userInfo.setUserInfo(formData.name, formData.description)
  }
},POPUP_EDIT_PROFILE);


//Добавление новой карточки
const popupImageAdd = new PopupWithForm({
  validatorForm : formAddValidator,
  handleFormSubmit: (formData) => {
    const card = createCard(formData, popapImageView);
    const cardElement = card.generateCard();
    cardListSection.addItem(cardElement);
  }
}, POPUP_ADD_CARD_ELEMENT)


profileButtonEdit.addEventListener('click', () =>{
  popupProfileEdit.open();
  const information  = userInfo.getUserInfo();
  profileName.value = information.name;
  formTitle.value = information.description;
});

editButtonEditEmpty.addEventListener('click', () => {
  popupImageAdd.open()
});
cardListSection.renderItems();
popapImageView.setEventListeners();
popupProfileEdit.setEventListeners();
popupImageAdd.setEventListeners();
