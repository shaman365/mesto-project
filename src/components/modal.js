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
  popup.addEventListener('mousedown', handleOuterMouseClick);
}

const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleKeydownEsc);
  popup.removeEventListener('mousedown', handleOuterMouseClick);
}

export {
  openPopup,
  closePopup
}
