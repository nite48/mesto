function showInputError (formElement, inputElement, errorMessage, data) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    console.log(errorMessage)
    errorElement.textContent = errorMessage;
    

    errorElement.classList.add(data.errorClass);

    inputElement.classList.add(data.inputErrorClass);
}

function hideInputError(formElement, inputElement, data) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    
    errorElement.classList.remove(data.errorClass);
    errorElement.textContent = '';

    inputElement.classList.remove(data.inputErrorClass);
}

function resolveButton(inputList, buttonElement, data) {
    const array = inputList[0].value;
    if (inputList.every((temp) => temp.validity.valid)) {
        buttonElement.classList.remove(data.inactiveButtonClass);
        buttonElement.removeAttribute('disabled');
        return;
    }

    buttonElement.classList.add(data.inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
}

function validateInputField(formElement, inputElement, data) {
    inputElement.validity.valid ? hideInputError(formElement, inputElement, data) : showInputError(formElement, inputElement, inputElement.validationMessage, data);
    
}

function setEventListeners(formElement, data) {
    const submitButton = formElement.querySelector(data.submitButtonSelector);
    const inputFields = Array.from(formElement.querySelectorAll(data.inputSelector));
    resolveButton(inputFields, submitButton, data);
    inputFields.forEach(inputElement => {
        inputElement.addEventListener('input', () => {
            validateInputField(formElement, inputElement, data);
            resolveButton(inputFields, submitButton, data);
        });
    });

    formElement.addEventListener('reset', () => {
        resolveButton(inputFields, submitButton, data);
    });
}

function enableValidate(data) {
    document.querySelectorAll(data.formSelector).forEach(formElement => {
        setEventListeners(formElement, data);
    });
}

enableValidate({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__submit-button_disabled',
    inputErrorClass: 'popup__input_invalid',
    errorClass: 'popup__error-message_active',
});