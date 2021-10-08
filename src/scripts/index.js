
import FormValidator from './FormValidator.js';
import Section from './Section.js';
import {
  profileName,
  formTitle,
  profileButtonEdit, 
  editButtonEditEmpty, 
  newCardForn,
  removeButtonClass, 
  data,  
  formValidEditProfile,
  CARD_OBJECT_SELECTOR,
  VIEW_CARD_IMAGE,
  POPUP_IMAGE_SELECTOR,
  POPUP_DESCRIPTION_SELECTOR,
  ARRAY_ELEMENT_PROFILE,
  POPUP_EDIT_PROFILE,
  POPUP_ADD_CARD_ELEMENT,
  ENVIROMENT_TOKEN,
  IDENTIFICATION_GROUP} 
  from '../utils/constants.js';
import PopupWithImage from './PopupWithImage.js';
import { createCard } from '../utils/utils.js';
import UserInfo from './UserInfo.js';
import PopupWithForm from  './PopupWithForm.js';
import Api from './Api.js'
import '../pages/index.css';

const api = new Api({
  baseUrl: IDENTIFICATION_GROUP,
  headers: {
    authorization: ENVIROMENT_TOKEN,
    'Content-Type': 'application/json'
  }
});
api.getInitialCards()
  .then((result) =>{
    //console.log(result)
    cardListSection.renderItems(result)
  })
  .catch((err) =>{
    console.log(err);
  })

  api.getUserInfo()
    .then((result) =>{
      userInfo.setUserInfo(result.name, result.about, result.avatar, result.id)
    })
    .catch((err) =>{
      console.log('Случилась херня '+ err)
    })

//Создание оьъекта  с  информацией о пользователе
const userInfo = new UserInfo(ARRAY_ELEMENT_PROFILE);
// console.log(userInfo)
//Создание объекта  страницы и заполнение данными
const cardListSection = new Section({
  renderer: (item) => {
    const card = createCard(item, popapImageView);
    const cardElement = card.generateCard();
    cardListSection.addItem(cardElement); //вызов функции генерации

  }
}, CARD_OBJECT_SELECTOR);

//Создание объекта для увеличения карточек
const popapImageView = new PopupWithImage(VIEW_CARD_IMAGE, POPUP_IMAGE_SELECTOR, POPUP_DESCRIPTION_SELECTOR);

const formEditValidator = new FormValidator(formValidEditProfile, data)
formEditValidator.enableValidation()

const formAddValidator = new FormValidator(newCardForn, data)
formAddValidator.enableValidation()


const popupProfileEdit = new PopupWithForm({
  validatorForm : formEditValidator,
  handleFormSubmit: (formData) =>{
    //console.log(formData)
    const sendProfileResult = api.getUserEdit(formData.name, formData.description)
    .then((result) =>{
      userInfo.setUserInfo(result.name, result.about, result.avatar)
      
    })
    .catch((err) =>{
      console.log('Опять накосячил'+ err)
    })
    
  }
},POPUP_EDIT_PROFILE);

//Создание объекта для добавления карточки
const popupImageAdd = new PopupWithForm({
  validatorForm : formAddValidator,
  handleFormSubmit: (formData) => {   
    const postApiCard = api.postCardApi(formData)
    .then((result) =>{
      const card = createCard(result, popapImageView);
      const cardElement = card.generateCard();
      cardListSection.addItem(cardElement); /// Вызов функции добавления
    })
    .catch((err) =>{
      console.log('Какая то ошибка'+ err)
    })
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
// cardListSection.renderItems();
popapImageView.setEventListeners();
popupProfileEdit.setEventListeners();
popupImageAdd.setEventListeners();



