function showModal() {
  if(!document.querySelectorAll('.img-modal-show')) {
    return;
  } else {
    const modal = document.getElementById('modal');
    const images = document.querySelectorAll('.img-modal-show');
    const content = document.querySelector('.modal-content');

    images.forEach(image => {
      image.addEventListener('click', () => {
        const modalImg = modal.querySelector('.modal-img');
        modalImg.alt = image.alt;
        modalImg.src = image.src;
        modal.style.display = 'block';
      });
    });
      window.addEventListener('click', event => {
        if (event.target === modal || event.target === content) {
          modal.style.display = 'none';
        }
      });
    };
};
showModal()
