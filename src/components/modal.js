// кнопки
const buttonOpenPoupProfile = document.querySelector('.profile__edit-button');
const buttonClosePoupProfile = document.querySelector('.popup__profile-close-button');
const buttonAddPlace = document.querySelector('.profile__add-button');
const buttonClosePoupPlace = document.querySelector('.popup__place-close-button');
const buttonClosePoupPicture = document.querySelector('.popup__picture-close-button');

//формы
const formProfile = document.querySelector('.form_profile');
const formPlace = document.querySelector('.form_place');

// поля формы профиль
const inputProfileName = document.querySelector('.popup__input_name');
const inputProfileDescription = document.querySelector('.popup__input_description');

// поля формы  место
const inputPlaceName = document.querySelector('.popup__input_place');
const inputPlaceLink = document.querySelector('.popup__input_link');

// поля страницы
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

// элементы popup_picture
const pictureImage = document.querySelector('.popup__picture-img');
const pictureCaption = document.querySelector('.popup__picture-caption');

// модальные окна
const popupPlace = document.querySelector('.popup_place');
const popupPicture = document.querySelector('.popup_picture');
const popupProfile = document.querySelector('.popup_profile');

const getOpenedPopup = () => document.querySelector('.popup_opened');

const handleKeydownEsc = (evt) => {
  evt.key.toLowerCase() === 'escape' ? closePopup(getOpenedPopup()) : ''
}

const handleOuterMouseClick = (evt) => {
  if (evt.target === evt.currentTarget) {
    closePopup(getOpenedPopup())
  }
}

const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleKeydownEsc);
  popup.addEventListener('click', handleOuterMouseClick);
}

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleKeydownEsc);
}

export {
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
  openPopup,
  closePopup
}

