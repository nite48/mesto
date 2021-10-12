export const profileButtonEdit = document.querySelector('.profile__edit-button');
export const editButtonEditEmpty = document.querySelector('.profile__add-button');
export const profileName = document.querySelector('#name');
export const formTitle = document.querySelector('#title');
export const emptyAddImage = document.querySelector('#addImage');
export const formNameForm = document.querySelector('.profile__title');
export const formClickImage = document.querySelector('#formImage');
export const formImageInsert = formClickImage.querySelector('.popup__image');
export const formElementContent = formClickImage.querySelector('.popup__subtitle');
export const popupProfileEdit = document.querySelector('#popupProfile');
export const newCardForn = emptyAddImage.querySelector('.popup__form');
export const numberKeyboards = 27;
export const elementTemplate = document.querySelector('.elements');
export const elementContainer = document.querySelector('#elementsTemplate');
export const popupRemoveButtonForm = document.querySelector('#popupRemoveElement');
export const popupEditAvatar = document.querySelector('#popupEditAvatar');


const arhiz = new URL('../images/arkhyz.jpg', import.meta.url);
const chelyabinsk = new URL('../images/chelyabinsk-oblast.jpg', import.meta.url);
const ivanovo = new URL('../images/ivanovo.jpg', import.meta.url);
const kamchatka = new URL('../images/kamchatka.jpg', import.meta.url);
const kholmogorsky = new URL ('../images/kholmogorsky-rayon.jpg', import.meta.url);
const baikal = new URL('../images/baikal.jpg', import.meta.url);


export const data = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_invalid',
  errorClass: 'popup__error-message_active',
};


export const initialCards = [
  {
    name: 'Архыз',
    link: arhiz
  },
  {
    name: 'Челябинская область',
    link: chelyabinsk
  },
  {
    name: 'Иваново',
    link: ivanovo
  },
  {
    name: 'Камчатка',
    link: kamchatka
  },
  {
    name: 'Холмогорский район',
    link: kholmogorsky
  },
  {
    name: 'Байкал',
    link: baikal
  }
];
export const formValidEditProfile = popupProfileEdit.querySelector('.popup__form')

export const popupEditAvatarIcon = popupEditAvatar.querySelector('.popup__form')

//аватарка
export const avatarPhoto = document.querySelector('.profile__container');

// export const editButtonAvatar = document.querySelector('.profile__edit-button')
//selectors
// Получение данных о блоке  куда вставляются изображения 
export const CARD_OBJECT_SELECTOR = '.elements';
//Получение данных об селекторе  попапа
export const POPUP_SELECTOR = '.popup';
// Получение данных  о селекторе формы увеличения изображения
export const VIEW_CARD_IMAGE = '#formImage';
// Получение данных об  селекторе изображения 
export const POPUP_IMAGE_SELECTOR = '.popup__image';
//Получение данных об селекторе описания 
export const POPUP_DESCRIPTION_SELECTOR = '.popup__subtitle';
// Получение данных об селектроре формы
export const ELEMENT_TEMPLATE_SELECTOR = '#elementsTemplate';
//Получение данных об имени и  описания профиля
export const ARRAY_ELEMENT_PROFILE = {nameProfile: '.profile__title', descriptionProfile: '.profile__description'};
export const POPUP_EDIT_PROFILE = '#popupProfile';
export const POPUP_PHOTO_EDIT_PROFILE = '#popupEditAvatar';
export const POPUP_ADD_CARD_ELEMENT = '#addImage';
export const POPUP_DELETE_SELECTOR = '#popupRemoveElement'


//Токены и пароли. Ну вообще лучше добавлять в env файлы помоему 
export const ENVIROMENT_TOKEN = 'fba87aed-c454-4c38-b5b2-fd44e9ef4862';
export const IDENTIFICATION_GROUP = 'https://mesto.nomoreparties.co/v1/cohort-28';
