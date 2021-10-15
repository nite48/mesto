
export default class Card{
  constructor({data, handleCardClick, handlePhotoDelete, handleCardLikeClick}, myId, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data._id;
    this._ownerId = data.owner._id;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._myId = myId;
    this._likesLength = this._likes.length;
    this._handlePhotoDelete = handlePhotoDelete;
    this._handleCardLikeClick = handleCardLikeClick
    this._isLiked = this._likes.some((item) => item._id === this._myId);

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
    this._cardCreateNew();
    this._element = this._getTemplate();
    this._image = this._element.querySelector('.element__image');
    this._removeButton = this._element.querySelector('.element__remove-button');
    this._likeButton = this._element.querySelector('.element__heart');
    if (this._isLiked === true) {
      // console.log('jopaKrota')
      this._likeButton.classList.toggle('element__heart-black')
    }
    this._countLike = this._element.querySelector('.element__heart-count');
    if (!this._cardCreateNew()){
      this._removeButton.remove();
    }
    this._setEventListeners();
    this._element.querySelector('.element__title').textContent = this._name;
    this._countLike.textContent = this._likesLength;
    this._image.src = this._link;
    this._image.alt = this._name;
    return this._element
  }


  _likeIt(){
    this._likeButton.classList.toggle('element__heart-black')
  }
  _cardCreateNew(){
    if (this._myId === this._ownerId) {
      return true
    }
  }
 


  _handleElementDelete(event){
    this._handlePhotoDelete(this._id, this._element)
  }
  

  _enlargingImage(){
    this._handleCardClick(this._name, this._link)
  }
 
  _setEventListeners(){
    this._element.querySelector('.element__image').addEventListener('click', () =>{
      this._enlargingImage();
    });
    if (this._cardCreateNew()){
      this._removeButton.addEventListener('click', () =>{
        this._handleElementDelete();
    });

    }
    this._likeButton.addEventListener('click', () => {
      this._handleCardLikeClick(this._id, this._isLiked, (result) =>{
        this._isLiked = !this._isLiked;    
        this._countLike.textContent = result.likes.length
        this._likeIt();
      })
      
    });
  }
}

