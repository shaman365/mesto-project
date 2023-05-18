import { openPopup } from './modal';
import { getInitialCards, deleteCard, setLike, removeLike } from './api';
import { pictureImage, pictureCaption, popupPicture, profileInfo } from './constants'

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

  if (element.likes.length && element.likes.some(el => el._id === profileInfo.id)) {
    likeButton.classList.add('element-grid__like-button_liked');
  }

  likeButton.addEventListener('click', (evt) => {
    const cardId = evt.target.closest('.element-grid__element').id

    if (evt.target.classList.contains('element-grid__like-button_liked')) {
      removeLike(cardId)
        .then(result => {
          evt.target.classList.toggle('element-grid__like-button_liked');
          likeNumber.textContent = result.likes.length;
        })
        .catch(err => {
          console.error('removeLike err:', err)
        })
    } else {
      setLike(cardId)
        .then(result => {
          evt.target.classList.toggle('element-grid__like-button_liked');
          likeNumber.textContent = result.likes.length;
        })
        .catch(err => {
          console.error('setLike err:', err)
        })
    }

  });

  if (element.owner._id === profileInfo.id) {
    deleteButton.addEventListener('click', (evt) => {
      const cardId = evt.target.closest('.element-grid__element').id;
      deleteCard(cardId)
        .then(result => {
          evt.target.closest('.element-grid__element').remove();
        })
        .catch(err => {
          console.error('deleteCard err:', err)
        })
    });
  } else {
    deleteButton.style.display = 'none'
  }

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
      })
    })
    .catch(err => {
      console.error('getInitialCards err:', err)
    })
}

export { cardContainer, createCard, initializeCards }
