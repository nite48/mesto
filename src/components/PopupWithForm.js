import Popup from './Popup.js';

export default class PopupWithForm extends Popup{
  constructor({validatorForm, handleFormSubmit },popupSelector){
    super(popupSelector);
    this._validatorForm = validatorForm;
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popup.querySelector('.popup__form');
    this.submitButton = this._popupForm.querySelector('.popup__submit-button');
    this._formFields = this._popupForm.querySelectorAll(this._validatorForm._parametersValidation.inputSelector)

  }
  _getInputValues(){
  this._element = {};
  this._formFields.forEach((list) =>{
    this._element[list.name] = list.value;
  });
  return this._element;
  }
  setEventListeners(){
    this._popupForm.addEventListener('submit', (event) => {
      event.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
    super.setEventListeners();
  }
  close(){
    super.close();
    this._popupForm.reset();

  }
  open(){
    this._validatorForm.popupResetValidation();
    super.open();
  }
}