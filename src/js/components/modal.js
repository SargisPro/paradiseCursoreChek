const modalBtn = document.querySelectorAll('.social__btn');
const closeBtn = document.querySelector('.modal__close');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal__content');

function modalBtns(btn) {
  btn.forEach(el => {
    el.addEventListener('click', () => {
      modal.classList.add('open');
    });
  });
};

function closeModal(el) {
  el.addEventListener('click', () => {
    modal.classList.remove('open');
  });
};

closeModal(closeBtn);
modalBtns(modalBtn);

window.addEventListener('click', (e) => {
  if (e.target === modal || e.target === modalContent) {
    modal.classList.remove('open');
  };
});
