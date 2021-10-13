import Popup from './Popup.js';

export default class PopupWithForm extends Popup{
  constructor({validatorForm, handleFormSubmit },popupSelector){
    super(popupSelector);
    this._validatorForm = validatorForm;
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm= this._popup.querySelector('.popup__form');
    this.submitButton = this._popupForm.querySelector('.popup__submit-button');

  }
  _getInputValues(){
  const formFields = Array.from(this._validatorForm._formElement.querySelectorAll(this._validatorForm._parametersValidation.inputSelector))
  this._element = {};
  formFields.forEach((list) =>{
    this._element[list.name] = list.value;
  });
  return this._element;
  }
  setEventListeners(){
    this._popupForm.addEventListener('submit', (event) => {
      event.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this._popupForm.reset();
      this.close();
    });
    super.setEventListeners();
  }
  close(){
    super.close();
  }
  open(){
    this._popupForm.reset();
    this._validatorForm.popupResetValidation();
    super.open();
  }
}