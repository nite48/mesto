export default class FormValidator{
  constructor(formElement, parametersValidation){
    this._formElement = formElement;
    this._parametersValidation = parametersValidation;
  }
  // включение валидации
  enableValidation(){
    this._setEventListeners();
  }
  // Метод для определения ошибки валидации
  _showInputError(inputElement, errorMessage){
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    //console.log(errorMessage)
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._parametersValidation.errorClass);
    inputElement.classList.add(this._parametersValidation.inputErrorClass);
  }
  //скритие ошибок валидации
  _hideInputError(inputElement){
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
  
    errorElement.classList.remove(this._parametersValidation.errorClass);
    errorElement.textContent = '';

    inputElement.classList.remove(this._parametersValidation.inputErrorClass);
  }
  // метод отключения кнопки сабмита
  _resolveButton(inputList, buttonElement){
    if (inputList.every((temp) => temp.validity.valid)) {
      buttonElement.classList.remove(this._parametersValidation.inactiveButtonClass);
      buttonElement.removeAttribute('disabled');
      return;
    }

    buttonElement.classList.add(this._parametersValidation.inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  }
  _validateInputField(inputElement){
    inputElement.validity.valid ? this._hideInputError(inputElement) : this._showInputError(inputElement, inputElement.validationMessage);
  }

  _setEventListeners(){
    const submitButton = this._formElement.querySelector(this._parametersValidation.submitButtonSelector);
    const inputFields = Array.from(this._formElement.querySelectorAll(this._parametersValidation.inputSelector));
    this._resolveButton(inputFields, submitButton);
    inputFields.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._validateInputField(inputElement);
        this._resolveButton(inputFields, submitButton);
      });
    });

    this._formElement.addEventListener('reset', () => {
      submitButton.setAttribute('disabled', true);
      submitButton.classList.add(this._parametersValidation.inactiveButtonClass);
    });
    }
}


