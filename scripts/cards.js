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
  let cardList = [];

  for (let i = 0; i < initialCards.length; i++) {

    const card = templateCard.querySelector('#cardElement').cloneNode(true);

    let cardImg = card.querySelector('.element-grid__image');
    let cardCaption = card.querySelector('.element-grid__caption')
    let likeButton = card.querySelector('.element-grid__like-button');
    let cardContainer = document.querySelector('.element-grid__list');

    console.log('likeButton: ', likeButton);

    likeButton.addEventListener('click', (evt) => {
      console.log('evt: ', evt)
      evt.target.classList.toggle('element-grid__like-button_liked');
    });

    cardImg.setAttribute('src', initialCards[i].link);
    cardImg.setAttribute('alt', initialCards[i].name);
    cardCaption.textContent = initialCards[i].name;
    cardContainer.prepend(card);
  }
}

initializeCards();
