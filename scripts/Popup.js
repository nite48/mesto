import {numberKeyboards} from '../utils/constants.js'
export default class Popup{
  constructor(popupSelector){
    this._popup = document.querySelector(popupSelector);
    this._popupCloseButton = this._popup.querySelector('.popup__close-button');

  }
  open(){
    this._popup.classList.add('popup_activated');
    document.addEventListener("keydown", this._handleEscClose);
  }

  _closePopupOutside = (event) =>{
    if (event.target === event.currentTarget) {
      this.close()
    }
  }

  close = () => {
    this._popup.classList.remove('popup_activated');
    document.removeEventListener("keydown", this._handleEscClose);
  }
  
  _handleEscClose = (event) =>{
    const key = event.keyCode;
      if (key === numberKeyboards) {    
        this.close();
      };
  }
  
  setEventListeners(){
    this._popup.addEventListener('click', this._closePopupOutside);
    this._popupCloseButton.addEventListener('click', this.close);
  }
}