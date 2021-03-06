
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import {
  profileName,
  formTitle,
  profileButtonEdit, 
  editButtonEditEmpty, 
  newCardForn,
  popupEditAvatarIcon,
  avatarPhoto,
  data,
  avatarSelector,
  formValidEditProfile,
  CARD_OBJECT_SELECTOR,
  VIEW_CARD_IMAGE,
  POPUP_IMAGE_SELECTOR,
  POPUP_DESCRIPTION_SELECTOR,
  ARRAY_ELEMENT_PROFILE,
  POPUP_EDIT_PROFILE,
  POPUP_ADD_CARD_ELEMENT,
  ENVIROMENT_TOKEN,
  IDENTIFICATION_GROUP,
  POPUP_DELETE_SELECTOR,
  POPUP_PHOTO_EDIT_PROFILE} 
  from '../utils/constants.js';
import PopupWithImage from '../components/PopupWithImage.js';
import { createCard } from '../utils/utils.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from  '../components/PopupWithForm.js';
import Api from '../components/Api.js'
import '../pages/index.css';
import PopupWithConfirm from '../components/PopupWithConfirm.js';



//Создание оьъекта  с  информацией о пользователе
export const userInfo = new UserInfo(ARRAY_ELEMENT_PROFILE, avatarSelector);


//Создание объекта  страницы и заполнение данными
const cardListSection = new Section({
  renderer: (item) => {
    const card = createCard(item, popapImageView, popupPhotoDelete);
    const cardElement = card.generateCard();
    cardListSection.addItem(cardElement); //вызов функции генерации

  }
}, CARD_OBJECT_SELECTOR);




export const api = new Api({
  baseUrl: IDENTIFICATION_GROUP,
  headers: {
    authorization: ENVIROMENT_TOKEN,
    'Content-Type': 'application/json'
  }
});

Promise.all([api.getUserInfo(), api.getInitialCards()])
.then(([resultUserInfo, resultGetInitialCard]) =>{
  userInfo.setUserInfo(resultUserInfo.name, resultUserInfo.about, resultUserInfo.avatar, resultUserInfo._id)
  cardListSection.renderItems(resultGetInitialCard); })
.catch((err) =>{
  console.log(err);
})








const popupPhotoDelete = new PopupWithConfirm({
  handleConfirm: (cardId, card) => {
    const buttonText = popupEditProfilePhoto.submitButton.textContent;
    popupPhotoDelete.submitButton.textContent = "Удаление...";
    api.deleteCard(cardId)
      .then((result) => {
        card.remove();
        popupPhotoDelete.close(); 
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupPhotoDelete.submitButton.textContent = buttonText;
      });
  }
}, POPUP_DELETE_SELECTOR);


//Создание объекта для увеличения карточек
const popapImageView = new PopupWithImage(VIEW_CARD_IMAGE, POPUP_IMAGE_SELECTOR, POPUP_DESCRIPTION_SELECTOR);

const formEditValidator = new FormValidator(formValidEditProfile, data)
formEditValidator.enableValidation()

const formAddValidator = new FormValidator(newCardForn, data)
formAddValidator.enableValidation()


const formEditIconProfile = new FormValidator(popupEditAvatarIcon, data)
formEditIconProfile.enableValidation()




//Создание объекта для добавления карточки
const popupImageAdd = new PopupWithForm({
  validatorForm : formAddValidator,
  handleFormSubmit: (formData) => { 
    const buttonText = popupEditProfilePhoto.submitButton.textContent;
    popupImageAdd.submitButton.textContent = "Сохранение..."  
    api.postCardApi(formData)
      .then((result) =>{
        const card = createCard(result, popapImageView, popupPhotoDelete);
        const cardElement = card.generateCard();
        cardListSection.addItem(cardElement); /// Вызов функции добавления
        popupImageAdd.close();
      })
      .catch((err) =>{
        console.log('Какая то ошибка'+ err)
      })
      .finally(() =>{
        popupImageAdd.submitButton.textContent = buttonText;
      })
  }
}, POPUP_ADD_CARD_ELEMENT)

// создание объекта  редактирования фото профиля
const popupEditProfilePhoto = new PopupWithForm({
  validatorForm: formEditIconProfile,
  handleFormSubmit: (formData) => {
    const buttonText = popupEditProfilePhoto.submitButton.textContent;
    popupEditProfilePhoto.submitButton.textContent = "Сохранение..."
    api.sendUserPhoto(formData.link)
      .then((result) => {
        userInfo.setUserInfo(result.name, result.about, result.avatar, result.id)
        popupEditProfilePhoto.close()
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupProfileEdit.submitButton.textContent = buttonText;
      });
  }
}, POPUP_PHOTO_EDIT_PROFILE);


// создание объекта редактирования  профиля
const popupProfileEdit = new PopupWithForm({
  validatorForm : formEditValidator,
  handleFormSubmit: (formData) =>{
    const buttonText = popupProfileEdit.submitButton.textContent;
    popupProfileEdit.submitButton.textContent = "Сохранение..."
    api.getUserEdit(formData.name, formData.description)
      .then((result) =>{
        userInfo.setUserInfo(result.name, result.about, result.avatar, result.id)
        popupProfileEdit.close();
        
      })
      .catch((err) =>{
        console.log('Опять накосячил'+ err)
      })
      .finally(() =>{
        popupProfileEdit.submitButton.textContent = buttonText;
      })
    
  }
},POPUP_EDIT_PROFILE);

profileButtonEdit.addEventListener('click', () =>{
  popupProfileEdit.open();
  const information  = userInfo.getUserInfo();
  profileName.value = information.name;
  formTitle.value = information.description;

});

editButtonEditEmpty.addEventListener('click', () => {
  popupImageAdd.open()
});

avatarPhoto.addEventListener('click', () => {
  popupEditProfilePhoto.open()
});

popapImageView.setEventListeners();
popupProfileEdit.setEventListeners();
popupImageAdd.setEventListeners();
popupEditProfilePhoto.setEventListeners();
popupPhotoDelete.setEventListeners();


