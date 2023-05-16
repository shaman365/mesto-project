// кнопки
const buttonOpenPoupProfile = document.querySelector('.profile__edit-button');
const buttonClosePoupProfile = document.querySelector('.popup__profile-close-button');
const buttonAddPlace = document.querySelector('.place__add-button');
const buttonClosePoupPlace = document.querySelector('.popup__place-close-button');
const buttonClosePoupPicture = document.querySelector('.popup__picture-close-button');
const buttonOpenPopupAvatar = document.querySelector('.profile__avatar-container');
const buttonClosePopupAvatar = document.querySelector('.popup__avatar-close-button');

//формы
const formProfile = document.forms.form_profile;
const formPlace = document.forms.form_place;
const formAvatar = document.forms.form_avatar;

// поля формы профиль
const inputProfileName = document.querySelector('.popup__input_name');
const inputProfileDescription = document.querySelector('.popup__input_description');
const inputProfileAvatar = document.querySelector('.popup__input_avatar');

// поля формы место
const inputPlaceName = document.querySelector('.popup__input_place');
const inputPlaceLink = document.querySelector('.popup__input_link');

// поля профиля на странице
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const profileImage = document.querySelector('.profile__avatar');
const profileInfo = document.querySelector('.profile__info');

// элементы popup_picture
const pictureImage = document.querySelector('.popup__picture-img');
const pictureCaption = document.querySelector('.popup__picture-caption');

// модальные окна
const popupPlace = document.querySelector('.popup_place');
const popupPicture = document.querySelector('.popup_picture');
const popupProfile = document.querySelector('.popup_profile');
const popupAvatar = document.querySelector('.popup_avatar');

const getOpenedPopup = () => document.querySelector('.popup_opened');

const handleKeydownEsc = (evt) => {
  evt.key && evt.key.toLowerCase() === 'escape' ? closePopup(getOpenedPopup()) : ''
}

const handleOuterMouseClick = (evt) => {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.currentTarget)
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
  popup.removeEventListener('click', handleOuterMouseClick);
}

export {
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
  pictureImage,
  pictureCaption,
  popupPlace,
  popupPicture,
  popupProfile,
  popupAvatar,
  openPopup,
  closePopup
}
