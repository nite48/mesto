import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup{
  constructor({handleConfirm}, popupSelector) {
    super(popupSelector);  
    this._handleConfirm = handleConfirm;
    this._form = this._popup.querySelector('.popup__form');
    this.submitButton  = this._form.querySelector('.popup__submit-button');
  }
  setEventListeners() {
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
      this._handleConfirm(this.cardID, this.card);
      this.close();
    });
    super.setEventListeners();
  }
  open(cardID, card) {
    this.cardID = cardID;
    this.card = card;
    super.open();
  }
  close(){
    super.close()
  }
}