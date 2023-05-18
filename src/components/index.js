import '../pages/index.css';

import {
  openPopup,
  closePopup
} from './modal.js'

import {
  cardContainer,
  createCard,
  initializeCards,
} from './card.js'

import {
  buttonOpenPoupProfile,
  buttonClosePoupProfile,
  buttonAddPlace,
  buttonClosePoupPicture,
  buttonClosePoupPlace,
  buttonOpenPopupAvatar,
  buttonClosePopupAvatar,
  formProfile,
  formPlace,
  formAvatar,
  inputProfileName,
  inputProfileDescription,
  inputProfileAvatar,
  inputPlaceName,
  inputPlaceLink,
  profileName,
  profileDescription,
  profileImage,
  profileInfo,
  popupPlace,
  popupPicture,
  popupProfile,
  popupAvatar,
  buttonSubmit
} from './constants'

import { enableValidation } from './validate';

import { config } from './utils';

import { postCard, getUserInfo, updateUserInfo } from './api'

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

buttonOpenPopupAvatar.addEventListener('click', () => {
  openPopup(popupAvatar);
});

buttonClosePopupAvatar.addEventListener('click', () => {
  closePopup(popupAvatar);
})

window.addEventListener('load', () => {
  initializeData();
});


formProfile.addEventListener('submit', submitFormProfile);
formPlace.addEventListener('submit', submitFormPlace);
formAvatar.addEventListener('submit', submitFormAvatar);

function submitFormProfile(evt) {
  evt.preventDefault();

  buttonSubmit.textContent = 'Сохранение...'

  const userInfo = {};
  userInfo.name = inputProfileName.value;
  userInfo.about = inputProfileDescription.value;

  updateUserInfo(userInfo)
    .then(userInfo => {
      profileName.textContent = userInfo.name;
      profileDescription.textContent = userInfo.about;
      closePopup(popupProfile);
    })
    .catch(err => {
      console.error('updateUserInfo err:', err)
    })
    .finally(_ => {
      buttonSubmit.textContent = 'Сохранить';
    })
}

function submitFormPlace(evt) {
  evt.preventDefault();

  buttonSubmit.textContent = 'Сохранение...'

  const card = {};
  card.name = inputPlaceName.value;
  card.link = inputPlaceLink.value;

  postCard(card)
    .then(card => {
      cardContainer.prepend(createCard(card));
      closePopup(popupPlace);
    })
    .catch(err => {
      console.error('postCard err:', err)
    })
    .finally(_ => {
      buttonSubmit.classList.add('popup__save-button_disabled');
      buttonSubmit.setAttribute('disabled', true);
      buttonSubmit.textContent = 'Сохранить';
      evt.target.reset()
    })
}

function submitFormAvatar(evt) {
  evt.preventDefault();

  buttonSubmit.textContent = 'Сохранение...'

  const userInfo = {};
  userInfo.avatar = inputProfileAvatar.value;

  updateUserInfo(userInfo)
    .then(userInfo => {
      profileImage.src = userInfo.avatar;
      closePopup(popupAvatar)
    })
    .catch(err => {
      console.error('updateUserInfo err:', err)
    })
    .finally(_ => {
      buttonSubmit.classList.add('popup__save-button_disabled');
      buttonSubmit.setAttribute('disabled', true);
      buttonSubmit.textContent = 'Сохранить';
      evt.target.reset()
    })
}

const initializeData = () => {
  getUserInfo()
    .then(userInfo => {
      profileName.textContent = userInfo.name;
      profileDescription.textContent = userInfo.about;
      profileImage.src = userInfo.avatar;
      profileInfo.id = userInfo._id;
      initializeCards();
    })
    .catch(err => {
      console.error('getUserInfo err:', err)
    })
}

enableValidation(config);
