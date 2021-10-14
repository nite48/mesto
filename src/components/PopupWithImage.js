
import Popup from './Popup.js'

export default class PopupWithImage extends Popup{
  constructor(formPopup, formPhoto, formCaption){
    super(formPopup)
    this._formPhoto =  this._popup.querySelector(formPhoto);
    this._formCaption =  this._popup.querySelector(formCaption);
 
  }
  open(name, link){
    this._formCaption.textContent = name;
    this._formPhoto.src = link;
    this._formPhoto.alt = name;
    super.open();
  }
}