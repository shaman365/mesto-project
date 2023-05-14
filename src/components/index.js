import '../pages/index.css';

import {
  buttonOpenPoupProfile,
  buttonClosePoupProfile,
  buttonAddPlace,
  buttonClosePoupPicture,
  buttonClosePoupPlace,
  formProfile,
  formPlace,
  inputProfileName,
  inputProfileDescription,
  inputPlaceName,
  inputPlaceLink,
  profileName,
  profileDescription,
  popupPlace,
  popupPicture,
  popupProfile,
  openPopup,
  closePopup
} from './modal.js'

import {
  cardContainer,
  createCard,
  initializeCards
} from './card.js'

import { enableValidation } from './validate';

import { config } from './utils';

// листенеры
buttonOpenPoupProfile.addEventListener('click', () => {
  inputProfileName.value = profileName.textContent;
  inputProfileDescription.value = profileDescription.textContent;

  const fieldList = popupProfile.querySelectorAll('.popup__input')
  Array.from(fieldList).forEach(field => {
    field.classList.remove('popup__input_error');
    field.classList.remove('form__input_type_error')
  })

  const errorElement = popupProfile.querySelectorAll('.form__input-error')

  Array.from(errorElement).forEach(errElem => {
    errElem.textContent = '';
    errElem.classList.remove('form__input-error_active')
  })

  openPopup(popupProfile);
});

buttonClosePoupProfile.addEventListener('click', () => {
  closePopup(popupProfile);
});

buttonClosePoupPlace.addEventListener('click', () => {
  closePopup(popupPlace);
});

buttonClosePoupPicture.addEventListener('click', () => {
  closePopup(popupPicture);
});

buttonAddPlace.addEventListener('click', () => {
  openPopup(popupPlace);
});

window.addEventListener('load', () => {
  initializeCards();
});

formProfile.addEventListener('submit', submitFormProfile);
formPlace.addEventListener('submit', submitFormPlace);

function submitFormProfile(evt) {
  evt.preventDefault();

  profileName.textContent = inputProfileName.value;
  profileDescription.textContent = inputProfileDescription.value;

  closePopup(popupProfile);
}

function submitFormPlace(evt) {
  evt.preventDefault();

  const card = {};
  card.name = inputPlaceName.value;
  card.link = inputPlaceLink.value;

  const buttonSubmit = evt.target.querySelector('.popup__save-button');
  buttonSubmit.classList.add('popup__save-button_disabled');
  buttonSubmit.setAttribute('disabled', true);

  cardContainer.prepend(createCard(card));
  evt.target.reset()
  closePopup(popupPlace);
}

enableValidation(config);
