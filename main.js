const modalContainerElement = document.querySelector('.modal-container');
const buttonSearchElement = document.querySelector('.search-button');
const modalCloseButtonElement = document.querySelector('.modal-close-button');

const onSearchButtonClick = () => {
  modalContainerElement.classList.remove('modal-container-close');
  buttonSearchElement.removeEventListener('click', onSearchButtonClick);
  modalCloseButtonElement.addEventListener('click', onModalCloseButtonClick);
  document.addEventListener('keydown', onEscKeyDown);
};

const onModalCloseButtonClick = () => {
  modalContainerElement.classList.add('modal-container-close');
  buttonSearchElement.addEventListener('click', onSearchButtonClick);
  modalCloseButtonElement.removeEventListener('click', onModalCloseButtonClick);
  document.removeEventListener('keydown', onEscKeyDown);
};

const isEscapeKey = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const onEscKeyDown = () => {
  if (isEscapeKey) {
    modalContainerElement.classList.add('modal-container-close');
    buttonSearchElement.addEventListener('click', onSearchButtonClick);
    modalCloseButtonElement.removeEventListener('click', onModalCloseButtonClick);
    document.removeEventListener('keydown', onEscKeyDown);
  }
};

buttonSearchElement.addEventListener('click', onSearchButtonClick);
