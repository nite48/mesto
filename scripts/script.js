const submitForm = document.querySelector('.popup__form');
const clickButtonClose = document.querySelector('.popup__close-button');
const clickButtonEdit = document.querySelector('.profile__edit-button');
const clickButtonCloseEmpty = document.querySelector('.empty__close-button');
const clickButtonEditEmpty = document.querySelector('.profile__add-button');
const submitFormEmpty = document.querySelector('.empty__form');

submitForm.addEventListener('submit', savePopup);
clickButtonClose.addEventListener('click', closePopup);
clickButtonEdit.addEventListener('click', editProfile);
clickButtonCloseEmpty.addEventListener('click', closeEmpty);
clickButtonEditEmpty.addEventListener('click', editProfileEmpty);
submitFormEmpty.addEventListener('submit', saveEmpty);


const formName = document.querySelector('#name');
const formTitle = document.querySelector('#title');
const emptyAddImage = document.querySelector('#addImage');
const popupEdit = document.querySelector('.popup');
const formNameForm = document.querySelector('.profile__title');
const formDescriptionForm = document.querySelector('.profile__description');
const popupEditEmpty = document.querySelector('.empty');
const formNameEmpty = document.querySelector('#name_empty');
const formLinkEmpty = document.querySelector('#link_empty');
const formClickImage = document.querySelector('#formImage');
const formImageInsert = formClickImage.querySelector('.form__image');
const formElementContent = formClickImage.querySelector('.form__subtitle');
const addClassClickImage = document.querySelector('.form');
const closeButtonImage = document.querySelector('.form__closing-button');



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

function closeEmpty(event) {
  event.preventDefault();
  popupEditEmpty.classList.remove('empty_activated');
}

function editProfileEmpty(event) {
  event.preventDefault();
  popupEditEmpty.classList.add('empty_activated');


}
function saveEmpty(event) {
  event.preventDefault();
  const nameEmpty= emptyAddImage.querySelector('#name_empty');
  const linkEmpty= emptyAddImage.querySelector('#link_empty');
  console.log(linkEmpty);
  createPictures({
    name: formNameEmpty.value.trim(),
    link: formLinkEmpty.value.trim()
  });
  // initialCards.unshift({'name':namePlace, 'link': imagePlace});
  // console.log(initialCards);
  nameEmpty.value = '';
  linkEmpty.value = '';
  closeEmpty(event);
  
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
    images.prepend(pictureElement);
  });
} 
createPictures(...initialCards);

function likeIt (event){
  event.preventDefault();
  const classLike = 'element__heart-black';
  if (event.target.classList.contains(classLike)) {
    event.target.classList.remove(classLike);
  }
  else {
  event.target.classList.add(classLike);
  }

}

function removeImage(event){
  event.preventDefault();
  event.target.parentElement.remove();
}

function closeImage(event) {
  event.preventDefault();
  formClickImage.classList.remove('form_opened');
}
function enlargingImage(event){
  event.preventDefault();

  const title = event.target.parentElement.querySelector('.element__title').textContent;
  formImageInsert.setAttribute('src', event.target.getAttribute('src'));
  formImageInsert.setAttribute('alt', title);
  formElementContent.textContent = title;
  closeButtonImage.addEventListener('click', closeImage);
  addClassClickImage.classList.add('form_opened');

}

