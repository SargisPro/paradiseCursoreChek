


function sortImg () {
  if (!document.querySelector('.services__list-work')) {
    return
  } else {
    const ul = document.querySelector('.services__list-work');

    ul.querySelectorAll('li').forEach(li => li.dataset.id = Math.floor(Math.random() * 1000));

    const sortedList = Array.from(ul.children).sort((a, b) => a.dataset.id - b.dataset.id);

    sortedList.forEach(li => ul.appendChild(li));
  };
};
sortImg();
