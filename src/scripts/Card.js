import{popupRemoveButtonForm} from '../utils/constants.js'


export default class Card{
  constructor({data, handleCardClick}, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._isLiked = false;
    // console.log(data);
    


  }


  _getTemplate(){
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
    //console.log(cardElement)
    return cardElement;
  }


  generateCard(){
    this._element = this._getTemplate();
    this._image = this._element.querySelector('.element__image');
    this._likeButton= this._element.querySelector('.element__heart');
    this._removeButton = this._element.querySelector('.element__remove-button');
    this._element.querySelector('.element__title').textContent = this._name;
    this._countLike = this._element.querySelector('.element__heart-count');
    console.log(this._countLike.textContent)
    this._countLike.textContent = this._likes.length;
    console.log(this._countLike.textContent)
    this._image.src = this._link;
    this._image.alt = this._name;
    this._setEventListeners();
    //console.log(this._element)
    return this._element
  }


  _likeIt(){
    this._likeButton.classList.toggle('element__heart-black')
  }
 


  _removeImage(event){
    this._element.remove();
  }
  _count(){
    this._isLiked = !this._isLiked
    
  }
  

  _enlargingImage(){
    this._handleCardClick(this._name, this._link)
  }
 
  _setEventListeners(){
    this._element.querySelector('.element__heart').addEventListener('click', () => {
      this._likeIt();
      this._count();
      
    });
    this._element.querySelector('.element__image').addEventListener('click', () =>{
      this._enlargingImage();
    });
    this._element.querySelector('.element__remove-button').addEventListener('click', () =>{
      //popupRemoveButtonForm.classList.add('popup_activated');
      this._removeImage();
    });
  }
}

