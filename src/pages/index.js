import './index.css';

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


// кнопки
const openProfileButton = document.querySelector('.profile__edit-button');
const closeProfileButton = document.querySelector('.popup__profile-close-button');
const addPlaceButton = document.querySelector('.profile__add-button');
const closePlaceButton = document.querySelector('.popup__place-close-button');
// const openPicture = document.querySelector('.element-grid__image');
const closePictureButton = document.querySelector('.popup__picture-close-button');

//формы
const profileForm = document.querySelector('.form__type_profile');
const placeForm = document.querySelector('.form__type_place');

// поля формы профиль
const inputProfileName = document.querySelector('.popup__input_name');
const inputProfileDescription = document.querySelector('.popup__input_description');

// поля формы  место
const inputPlaceName = document.querySelector('.popup__input_place');
const inputPlaceLink = document.querySelector('.popup__input_link');

// поля страницы
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

// листенеры
openProfileButton.addEventListener('click', () => {
  inputProfileName.value = profileName.textContent;
  inputProfileDescription.value = profileDescription.textContent;
  openPopup(document.querySelector('.popup__type_profile'));
});

closeProfileButton.addEventListener('click', () => {
  inputProfileName.value = '';
  inputProfileDescription.value = '';
  closePopup(document.querySelector('.popup__type_profile'));
});

closePlaceButton.addEventListener('click', () => {
  closePopup(document.querySelector('.popup__type_place'));
});

closePictureButton.addEventListener('click', () => {
  closePopup(document.querySelector('.popup__type_picture'));
});

addPlaceButton.addEventListener('click', () => {
  inputPlaceName.value = '';
  inputPlaceLink.value = '';

  openPopup(document.querySelector('.popup__type_place'));
});


window.addEventListener('load', () => {
  initializeCards(initialCards);
});

profileForm.addEventListener('submit', formProfileSubmitHandler);
placeForm.addEventListener('submit', formPlaceSubmitHandler);

// функции
function initializeCards(cardList) {

  const templateCard = document.querySelector('.card').content;
  const cardContainer = document.querySelector('.element-grid__list');

  if (cardContainer.children) {
    Array.from(cardContainer.children).forEach(element => {
      element.remove();
    });
  }

  cardList.forEach(element => {
    const card = templateCard.querySelector('.element-grid__element').cloneNode(true);

    const cardImg = card.querySelector('.element-grid__image');
    const cardCaption = card.querySelector('.element-grid__caption')
    const likeButton = card.querySelector('.element-grid__like-button');
    const deleteButton = card.querySelector('.element-grid__delete-button');

    // поля popup__type_picture
    const pictureImage = document.querySelector('.popup__picture-img');
    const pictureCaption = document.querySelector('.popup__picture-caption');

    likeButton.addEventListener('click', (evt) => {
      evt.target.classList.toggle('element-grid__like-button_liked');
    });

    deleteButton.addEventListener('click', (evt) => {
      evt.target.closest('.element-grid__element').remove();
    });

    cardImg.addEventListener('click', (evt) => {
      pictureImage.setAttribute('src', evt.target.getAttribute('src'));
      pictureImage.setAttribute('alt', evt.target.getAttribute('alt'));

      if (evt.target.nextElementSibling && evt.target.nextElementSibling.querySelector('.element-grid__caption')) {
        pictureCaption.textContent = evt.target.nextElementSibling.querySelector('.element-grid__caption').textContent;
      }

      openPopup(document.querySelector('.popup__type_picture'));
    });

    cardImg.setAttribute('src', element.link);
    cardImg.setAttribute('alt', element.name);
    cardCaption.textContent = element.name;
    cardContainer.append(card);
  });
}

function openPopup(popup) {
  popup ? popup.classList.add('popup_opened') : console.error('openPopup. param "popup" is null');
}

function closePopup(popup) {
  popup ? popup.classList.remove('popup_opened') : console.error('closePopup. param "popup" is null');
}

function formProfileSubmitHandler(evt) {
  evt.preventDefault();

  profileName.textContent = inputProfileName.value;
  profileDescription.textContent = inputProfileDescription.value;

  closePopup(document.querySelector('.popup__type_profile'));
}

function formPlaceSubmitHandler(evt) {
  evt.preventDefault();

  const card = {};
  card.name = inputPlaceName.value;
  card.link = inputPlaceLink.value;
  initialCards.unshift(card);

  initializeCards(initialCards);
  closePopup(document.querySelector('.popup__type_place'));
}
