const popupForm = document.querySelector('.popup__form');
const profileButtonEdit = document.querySelector('.profile__edit-button');
const editButtonEditEmpty = document.querySelector('.profile__add-button');
const formName = document.querySelector('#name');
const formTitle = document.querySelector('#title');
const emptyAddImage = document.querySelector('#addImage');
const formNameForm = document.querySelector('.profile__title');
const formDescriptionForm = document.querySelector('.profile__description');
const formNameEmpty = document.querySelector('#name_empty');
const formLinkEmpty = document.querySelector('#link_empty');
const formClickImage = document.querySelector('#formImage');
const formImageInsert = formClickImage.querySelector('.form__image');
const formElementContent = formClickImage.querySelector('.form__subtitle');
const addClassClickImage = document.querySelector('.form');
const closeButtonImage = document.querySelector('.form__closing-button');
const popupProfileEdit = document.querySelector('#popupProfile');
const formSubmit = emptyAddImage.querySelector('.popup__form');
const elementTitle = document.querySelector('.element__title');



popupForm.addEventListener('submit', savePopup);
profileButtonEdit.addEventListener('click', editProfile);
editButtonEditEmpty.addEventListener('click', onAddImage);
formSubmit.addEventListener('submit', savePopupAdd);


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

function editProfile(event){
  event.preventDefault();
  formName.value = formNameForm.textContent;
  formTitle.value = formDescriptionForm.textContent;
  openPopup(popupProfileEdit);
}

function openPopup(popup) {
  popup.classList.add('popup_activated');

}

function closePopup(popup) {
  popup.classList.remove('popup_activated');
}

function savePopup(event){
  event.preventDefault();
  formNameForm.textContent = formName.value.trim();
  formDescriptionForm.textContent = formTitle.value.trim();
  closePopup(popupProfileEdit);
  
}

function onAddImage(event) {
  event.preventDefault();
  openPopup(emptyAddImage);
}



function closeOnPopup(event){
  event.preventDefault();
  closePopup(event.target.parentElement);
}

function closeImage(event) {
  event.preventDefault();
  formClickImage.classList.remove('form_opened');
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

function imagePrepend(pictureElement, images){
  images.prepend(pictureElement);
}

function createPictures(...args) {
  const images = document.querySelector('.elements');
  const imageTemplate = document.querySelector('#elementsTemplate').content;

  args.forEach(templ => {
    const pictureElement = imageTemplate.querySelector('.element').cloneNode(true);
    const image = pictureElement.querySelector('.element__image');

    image.setAttribute('alt', templ.name);
    image.setAttribute('src', templ.link);



    pictureElement.querySelector('.element__title').textContent = templ.name;
    pictureElement.querySelector('.element__heart').addEventListener('click', likeIt);
    pictureElement.querySelector('.element__remove-button').addEventListener('click', removeImage);
    image.addEventListener('click', enlargingImage);
    imagePrepend(pictureElement, images);
    
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

function removeImage(event){
  const elementRemoveButton = document.querySelector('.element__remove-button');
  elementRemoveButton.closest('#elementId').remove();
}


function enlargingImage(event){
  const title = event.target.getAttribute('alt');
  formImageInsert.setAttribute('src', event.target.getAttribute('src'));
  formElementContent.textContent = title;
  closeButtonImage.addEventListener('click', closeImage);
  addClassClickImage.classList.add('form_opened');

}

