import './index.css';

import {
  initialCards,
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
  pictureImage,
  pictureCaption,
  popupPlace,
  popupPicture,
  popupProfile,
  templateCard,
  cardContainer
} from '../components/constans.js'


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

function openPopup(popup) {
  popup ? popup.classList.add('popup_opened') : console.error('openPopup. param "popup" is null');
}

function closePopup(popup) {
  popup ? popup.classList.remove('popup_opened') : console.error('closePopup. param "popup" is null');
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

function createCard(element) {
  console.log('createCard element: ', element);

  const card = templateCard.querySelector('.element-grid__element').cloneNode(true);

  const cardImg = card.querySelector('.element-grid__image');
  const cardCaption = card.querySelector('.element-grid__caption')
  const likeButton = card.querySelector('.element-grid__like-button');
  const deleteButton = card.querySelector('.element-grid__delete-button');

  likeButton.addEventListener('click', (evt) => {
    evt.target.classList.toggle('element-grid__like-button_liked');
  });

  deleteButton.addEventListener('click', (evt) => {
    evt.target.closest('.element-grid__element').remove();
  });

  cardImg.addEventListener('click', (evt) => {
    pictureImage.setAttribute('src', element.link);
    pictureImage.setAttribute('alt', element.name);
    pictureCaption.textContent = element.name;

    openPopup(popupPicture);
  });

  cardImg.setAttribute('src', element.link);
  cardImg.setAttribute('alt', element.name);
  cardCaption.textContent = element.name;

  return card;
}
