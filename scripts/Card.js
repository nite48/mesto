import {openPopup, formImageInsert, formElementContent, formClickImage} from './index.js';


export class Card{
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    

  }


  _getTemplate(){
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
    return cardElement;
  }


  generateCard(){
    this._element = this._getTemplate();
    this._image = this._element.querySelector('.element__image');
    this._likeButton= this._element.querySelector('.element__heart');
    this._removeButton = this._element.querySelector('.element__remove-button');
    this._element.querySelector('.element__title').textContent = this._name;
    this._image.src = this._link;
    this._image.alt = this._name;
    this._setEventListeners();
    return this._element
  }


  _likeIt(){
    this._likeButton.classList.toggle('element__heart-black')
  }
 

  _onOpenImage(){
    openPopup(formClickImage)
  }


  _removeImage(event){
    this._element.remove();
  }


  _enlargingImage(){
    formImageInsert.src = this._link;
    formImageInsert.alt = this._name;
    formElementContent.textContent = this._name;
    this._onOpenImage();
  }
 
  _setEventListeners(){
    this._element.querySelector('.element__heart').addEventListener('click', () => {
      this._likeIt();
    });
    this._element.querySelector('.element__image').addEventListener('click', () =>{
      this._enlargingImage();
    });
    this._element.querySelector('.element__remove-button').addEventListener('click', () =>{
      this._removeImage();
    });
  }
}

