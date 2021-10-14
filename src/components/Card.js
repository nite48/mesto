
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
    this._handlePhotoDelete = handlePhotoDelete;
    this._handleLikeCard = handleCardLikeClick
    this._isLiked = this._likes.some((item) => item._id === this.myId);
    


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
    this._likeButton = this._element.querySelector('.element__heart');
    this._removeButton = this._element.querySelector('.element__remove-button');
    this._element.querySelector('.element__title').textContent = this._name;
    this._countLike = this._element.querySelector('.element__heart-count');
    if (this._isLiked) {
      this._likeButton.classList.add('element__heart-black');
    }
    if (!this._cardCreateNew()){
      this._removeButton.remove();
    }
    this._countLike.textContent = this._likes.length;
    this._image.src = this._link;
    this._image.alt = this._name;
    this._setEventListeners();
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
    this._likeButton.addEventListener('click', () => {
      this._handleLikeCard(this._id, this._isLiked, (result) =>{
        this._isLiked = !this._isLiked;    
        this._countLike.textContent = result.likes.length
        this._likeIt();
      })
      
    });
    this._element.querySelector('.element__image').addEventListener('click', () =>{
      this._enlargingImage();
    });
    this._removeButton.addEventListener('click', () =>{
      this._handleElementDelete();
    });
  }
}

