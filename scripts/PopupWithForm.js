import Popup from './Popup.js';

export default class PopupWithForm extends Popup{
  constructor({validatorForm, handleFromSubmit },popupSelector){
    super(popupSelector);
    this._validatorForm = validatorForm;
    this._handleFromSubmit = handleFromSubmit;
    this._popupForm= this._popup.querySelector('.popup__form');

  }
  _getInputValues(){
  const formFields = Array.name(this._validatorForm._formElement.querySelectorAll(this._validatorForm._parametersValidation.inputSelector))
  this._element = {};
  formFields.forEach((input) =>{
    this._element[list.name] = list.value;
  });
  return this._element;
  }
  setEventListeners(){
    this._popupForm.addEventListener('submit', (event) =>{
      event.preventDefault();
      this._handleFromSubmit(this._getInputValues());
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