// кнопки формы
let openProfileButton = document.querySelector('.profile__edit-button');
let closeProfileButton = document.querySelector('.popup__close-button');
let profileForm = document.querySelector('#form_profile');

// поля формы
let inputProfileName = document.querySelector('#form_profile__field_name');
let inputProfileDescription = document.querySelector('#form_profile__field_description');

// поля страницы
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');

// листенеры
openProfileButton.addEventListener('click', function () {
  inputProfileName.value = profileName.textContent;
  inputProfileDescription.value = profileDescription.textContent;
  openPopup(document.querySelector('.popup'));
});

closeProfileButton.addEventListener('click', function () {
  inputProfileName.value = '';
  inputProfileDescription.value = '';
  closePopup(document.querySelector('.popup'));
});

profileForm.addEventListener('submit', formSubmitHandler);

// функции
function openPopup(popup) {
  popup ? popup.classList.add('popup_opened') : console.error('openPopup. param "popup" is null');
}

function closePopup(popup) {
  popup ? popup.classList.remove('popup_opened') : console.error('closePopup. param "popup" is null');
}

function formSubmitHandler(evt) {
  evt.preventDefault();

  profileName.textContent = inputProfileName.value;
  profileDescription.textContent = inputProfileDescription.value;

  closePopup(document.querySelector('.popup'));
}
