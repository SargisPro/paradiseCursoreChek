const burger = document?.querySelector('[data-burger]');
const menu = document?.querySelector('.nav__list');
const menuItems = document?.querySelectorAll('.nav__link');
const overlay = document?.querySelector('[data-menu-overlay]');


burger?.addEventListener('click', (e) => {
  burger?.classList.toggle('burger--active');
  menu?.classList.toggle('active');
});

menuItems?.forEach(el => {
  el.addEventListener('click', () => {
    burger?.setAttribute('aria-expanded', 'false');
    burger?.setAttribute('aria-label', 'Открыть меню');
    burger.classList.remove('burger--active');
    menu.classList.remove('active');
  });
});

const cross = document?.querySelector('.contacts__cross');
const contacts = document?.querySelector('.contacts');
const click = contacts?.querySelector('.contacts__click');
const contactsMenu = document?.querySelector('.contacts');


cross?.addEventListener('click', (e) => {
  contacts?.classList.toggle('hidden');
  click?.classList.toggle('contacts__width');
});

click?.addEventListener('click', (e) => {
  contacts?.classList.remove('hidden');
  click?.classList.remove('contacts__width');
});

overlay?.addEventListener('click', () => {
  burger?.setAttribute('aria-expanded', 'false');
  burger?.setAttribute('aria-label', 'Открыть меню');
  burger.classList.remove('burger--active');
  menu.classList.remove('active');
});
