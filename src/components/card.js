import { pictureImage, pictureCaption, openPopup, popupPicture, handleEscKeypress } from "./modal";
import { getInitialCards, deleteCard } from "./api";

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
    const cardId = evt.target.closest('.element-grid__element').id;
    console.log('deleteButton: ', evt.target.closest('.element-grid__element').id)
    deleteCard(cardId)
      .then(result => {
        evt.target.closest('.element-grid__element').remove();
      })
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
  likeNumber.textContent = element.likes.length;
  card.id = element._id;

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
