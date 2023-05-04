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
  initialCards,
  cardContainer,
  createCard
} from './card.js'


// листенеры
buttonOpenPoupProfile.addEventListener('click', () => {
  inputProfileName.value = profileName.textContent;
  inputProfileDescription.value = profileDescription.textContent;
  openPopup(popupProfile);
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
});

window.addEventListener('load', () => {
  initializeCards(initialCards);
});

formProfile.addEventListener('submit', submitFormProfileHandler);
formPlace.addEventListener('submit', submitFormPlaceHandler);

// функции
function initializeCards(cardList) {
  cardList.forEach(element => {
    cardContainer.append(createCard(element));
  });
}

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
