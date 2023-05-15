import { pictureImage, pictureCaption, openPopup, popupPicture, handleEscKeypress } from "./modal";
import { getInitialCards } from "./api";

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

// template, container
const templateCard = document.querySelector('.card').content;
const cardContainer = document.querySelector('.element-grid__list');

const createCard = (element) => {
  const card = templateCard.querySelector('.element-grid__element').cloneNode(true);

  const cardImg = card.querySelector('.element-grid__image');
  const cardCaption = card.querySelector('.element-grid__caption')
  const likeButton = card.querySelector('.element-grid__like-button');
  const deleteButton = card.querySelector('.element-grid__delete-button');
  const likeNumber = card.querySelector('.element-grid__like-number');

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

  console.log(JSON.stringify(element, null, 1))

  cardImg.setAttribute('src', element.link);
  cardImg.setAttribute('alt', element.name);
  cardCaption.textContent = element.name;
  likeNumber.textContent = element.likes.length;

  return card;
}


// функции
function initializeCards() {
  getInitialCards()
    .then(cardList => {
      cardList.forEach(element => {
        cardContainer.append(createCard(element));
      });
    })
}

export { cardContainer, createCard, initializeCards }
