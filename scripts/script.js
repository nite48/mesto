const profileButtonEdit = document.querySelector('.profile__edit-button');
const editButtonEditEmpty = document.querySelector('.profile__add-button');
const profileName = document.querySelector('#name');
const formTitle = document.querySelector('#title');
const emptyAddImage = document.querySelector('#addImage');
const formNameForm = document.querySelector('.profile__title');
const formDescriptionForm = document.querySelector('.profile__description');
const formNameEmpty = document.querySelector('#name_empty');
const formLinkEmpty = document.querySelector('#link_empty');
const formClickImage = document.querySelector('#formImage');
const formImageInsert = formClickImage.querySelector('.popup__image');
const formElementContent = formClickImage.querySelector('.popup__subtitle');
const addClassClickImage = document.querySelector('.popup');
const popupProfileEdit = document.querySelector('#popupProfile');
const newCardForn = emptyAddImage.querySelector('.popup__form');
const elementTitle = document.querySelector('.element__title');




popupProfileEdit.addEventListener('submit', savePopup);
profileButtonEdit.addEventListener('click', editProfile);
editButtonEditEmpty.addEventListener('click', onAddImage);
newCardForn.addEventListener('submit', savePopupAdd);


document.querySelectorAll('.popup__close-button').forEach(close =>{
  close.addEventListener('click', closeOnPopup);
})




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


function savePopup(event){
  event.preventDefault();
  formNameForm.textContent = profileName.value.trim();
  formDescriptionForm.textContent = formTitle.value.trim();
  closePopup(popupProfileEdit);
  
}
function savePopupAdd(event) {
  event.preventDefault();
  const nameEmpty= emptyAddImage.querySelector('#name_empty');
  const linkEmpty= emptyAddImage.querySelector('#link_empty');
  createPictures({
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
  openPopup(popupProfileEdit);
}

function openPopup(popup) {
  popup.classList.add('popup_activated');

}

function closePopup(popup) {
  popup.classList.remove('popup_activated');
}



function onAddImage(event) {
  openPopup(emptyAddImage);
}
function onOpenImage(event) {
  openPopup(formClickImage);
}

function removeImage(event){
  event.target.closest('#elementId').remove();
}


function closeOnPopup(event){
  closePopup(event.target.closest('.popup'));
}


function createElement(images, imageTemplate, templ) {
  const pictureElement = imageTemplate.querySelector('.element').cloneNode(true);
  const image = pictureElement.querySelector('.element__image');

  image.setAttribute('alt', templ.name);
  image.setAttribute('src', templ.link);



  pictureElement.querySelector('.element__title').textContent = templ.name;
  pictureElement.querySelector('.element__heart').addEventListener('click', likeIt);
  pictureElement.querySelector('.element__remove-button').addEventListener('click', removeImage);
  image.addEventListener('click', enlargingImage);
  return pictureElement
  
}

function createPictures(...args) {
  const images = document.querySelector('.elements');
  const imageTemplate = document.querySelector('#elementsTemplate').content;

  args.forEach(templ => {
    images.prepend(createElement(images, imageTemplate, templ));
  });
} 
createPictures(...initialCards);

function likeIt (event){
  const classLike = 'element__heart-black';
  if (event.target.classList.contains(classLike)) {
    event.target.classList.remove(classLike);
  }
  else {
  event.target.classList.add(classLike);
  }

}



function enlargingImage(event){
  const title = event.target.getAttribute('alt');
  formImageInsert.setAttribute('src', event.target.getAttribute('src'));
  formElementContent.textContent = title;
  onOpenImage(formClickImage);

}

