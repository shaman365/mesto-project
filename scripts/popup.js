// кнопки
let openProfileButton = document.querySelector('.profile__edit-button');
let closeProfileButton = document.querySelector('#form_profile__close-button');
let addPlaceButton = document.querySelector('.profile__add-button');
let closePlaceButton = document.querySelector('#form_place__close-button');

//формы
let profileForm = document.querySelector('#form-profile');
let placeForm = document.querySelector('#form-place');

// поля формы профиль
let inputProfileName = document.querySelector('#form_profile__field_name');
let inputProfileDescription = document.querySelector('#form_profile__field_description');
// поля формы  место
let inputPlaceName = document.querySelector('#form_place__field_name');
let inputPlaceLink = document.querySelector('#form_place__field_link');

// поля страницы
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');

// листенеры
openProfileButton.addEventListener('click', () => {
  inputProfileName.value = profileName.textContent;
  inputProfileDescription.value = profileDescription.textContent;
  openPopup(document.querySelector('#popup-profile'));
});

closeProfileButton.addEventListener('click', () => {
  inputProfileName.value = '';
  inputProfileDescription.value = '';
  closePopup(document.querySelector('#popup-profile'));
});

closePlaceButton.addEventListener('click', () => {
  closePopup(document.querySelector('#popup-place'));
});

addPlaceButton.addEventListener('click', () => {
  inputPlaceName.value = '';
  inputPlaceLink.value = '';

  openPopup(document.querySelector('#popup-place'));
});

profileForm.addEventListener('submit', formProfileSubmitHandler);
placeForm.addEventListener('submit', formPlaceSubmitHandler);

// функции
function openPopup(popup) {
  popup ? popup.classList.add('popup_opened') : console.error('openPopup. param "popup" is null');
}

function closePopup(popup) {
  popup ? popup.classList.remove('popup_opened') : console.error('closePopup. param "popup" is null');
}

function formProfileSubmitHandler(evt) {
  console.log('formSubmitHandler evt:', evt);
  evt.preventDefault();

  profileName.textContent = inputProfileName.value;
  profileDescription.textContent = inputProfileDescription.value;

  closePopup(document.querySelector('#popup-profile'));
}

function formPlaceSubmitHandler(evt) {
  console.log('formPlaceSubmitHandler evt:', evt);
  evt.preventDefault();

  const templateCard = document.querySelector('#card').content;

  const card = templateCard.querySelector('.element-grid__element').cloneNode(true);

  let cardImg = card.querySelector('.element-grid__image');
  let cardCaption = card.querySelector('.element-grid__caption')
  let likeButton = card.querySelector('.element-grid__like-button');
  let deleteButton = card.querySelector('.element-grid__delete-button');
  let cardContainer = document.querySelector('.element-grid__list');

  likeButton.addEventListener('click', (evt) => {
    console.log('likeButton evt: ', evt)
    evt.target.classList.toggle('element-grid__like-button_liked');
  });

  deleteButton.addEventListener('click', (evt) => {
    console.log('deleteButton evt: ', evt);
    console.log('deleteButton evt: ', evt.target);
    evt.target.closest('.element-grid__element').remove();
  });

  cardImg.setAttribute('src', inputPlaceLink.value);
  cardImg.setAttribute('alt', inputPlaceName.value);
  cardCaption.textContent = inputPlaceName.value;
  cardContainer.prepend(card);

  closePopup(document.querySelector('#popup-place'));
}
