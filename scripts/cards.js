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


function initializeCards() {

  const templateCard = document.querySelector('#card').content;

  initialCards.forEach(element => {
    const card = templateCard.querySelector('.element-grid__element').cloneNode(true);

    let cardImg = card.querySelector('.element-grid__image');
    let cardCaption = card.querySelector('.element-grid__caption')
    let likeButton = card.querySelector('.element-grid__like-button');
    let deleteButton = card.querySelector('.element-grid__delete-button');
    let cardContainer = document.querySelector('.element-grid__list');

    likeButton.addEventListener('click', (evt) => {
      console.log('evt: ', evt)
      evt.target.classList.toggle('element-grid__like-button_liked');
    });

    deleteButton.addEventListener('click', (evt) => {
      console.log('deleteButton evt: ', evt);
      console.log('deleteButton evt: ', evt.target);
      evt.target.closest('.element-grid__element').remove();
    });

    cardImg.setAttribute('src', element.link);
    cardImg.setAttribute('alt', element.name);
    cardCaption.textContent = element.name;
    cardContainer.prepend(card);
  });
}

initializeCards();
