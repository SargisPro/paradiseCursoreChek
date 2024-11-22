const logo = document.querySelector('.logo');
const upArrow = document.querySelector('.up-arrow');
logo.addEventListener('click', () => window.location.reload());


window.addEventListener('scroll', () => {
  if (window.scrollY > 600) {
    upArrow.classList.add('visilibiti-visible');
  } else {
    upArrow.classList.remove('visilibiti-visible');
  };
});

upArrow.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
});
