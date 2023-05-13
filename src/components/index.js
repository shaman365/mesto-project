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

  openPopup(popupProfile);

  enableValidation(config);
});

buttonClosePoupProfile.addEventListener('click', () => {
  inputProfileName.value = '';
  inputProfileDescription.value = '';
  closePopup(popupProfile);
});

buttonClosePoupPlace.addEventListener('click', () => {
  closePopup(popupPlace);
});

buttonClosePoupPicture.addEventListener('click', () => {
  closePopup(popupPicture);
});

buttonAddPlace.addEventListener('click', () => {
  inputPlaceName.value = '';
  inputPlaceLink.value = '';
  openPopup(popupPlace);

  enableValidation(config);

});

window.addEventListener('load', () => {
  initializeCards();
});

formProfile.addEventListener('submit', submitFormProfileHandler);
formPlace.addEventListener('submit', submitFormPlaceHandler);

function submitFormProfileHandler(evt) {
  evt.preventDefault();

  profileName.textContent = inputProfileName.value;
  profileDescription.textContent = inputProfileDescription.value;

  closePopup(popupProfile);
}

function submitFormPlaceHandler(evt) {
  evt.preventDefault();

  const card = {};
  card.name = inputPlaceName.value;
  card.link = inputPlaceLink.value;

  cardContainer.prepend(createCard(card));
  closePopup(popupPlace);
}
