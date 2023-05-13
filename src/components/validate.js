const showInputError = (
  formElement,
  inputElement,
  errorMessage,
  inputErrorClass,
  errorClass
) => {
  if (!inputElement) return;
  inputElement.classList.add(inputErrorClass);
  const errorElement = formElement.querySelector(`.${inputElement.id}-input-error`);
  if (!errorElement) return;
  errorElement.classList.add(errorClass);
  errorElement.textContent = errorMessage;
};

const hideInputError = (
  formElement,
  inputElement,
  inputErrorClass,
  errorClass
) => {
  if (!inputElement) return;
  const errorElement = formElement.querySelector(`.${inputElement.id}-input-error`);
  inputElement.classList.remove(inputErrorClass);
  if (!errorElement) return;
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (
  formElement,
  inputElement,
  inputErrorClass,
  errorClass
) => {

  inputElement.validity.patternMismatch ? inputElement.setCustomValidity(inputElement.dataset.errorMessage) : inputElement.setCustomValidity('');

  if (inputElement.validity.valid) {
    hideInputError(formElement, inputElement, inputErrorClass, errorClass);
  } else {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      inputErrorClass,
      errorClass
    );
  }
};

const setEventListeners = (
  formElement,
  {
    inputSelector,
    submitButtonSelector,
    inactiveButtonClass,
    inputErrorClass,
    errorClass,
  }
) => {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);

  toggleButtonState(formElement, buttonElement, inputSelector, inactiveButtonClass);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(
        formElement,
        inputElement,
        inputErrorClass,
        errorClass
      );
      toggleButtonState(formElement, buttonElement, inputSelector, inactiveButtonClass);
    });
  });
};

const enableValidation = ({ formSelector, ...rest }) => {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formElement) => { setEventListeners(formElement, rest); });
};

const hasInvalidInput = (formElement, inputSelector) => {
  return Array.from(formElement.querySelectorAll(inputSelector)).some((inputElement) => {
    return !inputElement.validity.valid
  })
}

const toggleButtonState = (formElement, buttonElement, inputSelector, inactiveButtonClass) => {

  if (hasInvalidInput(formElement, inputSelector)) {
    buttonElement.classList.add(inactiveButtonClass)
    buttonElement.setAttribute('disabled', true)
  } else {
    buttonElement.classList.remove(inactiveButtonClass)
    buttonElement.removeAttribute('disabled')
  }
}

export { enableValidation }
