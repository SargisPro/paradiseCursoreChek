const tabs = document.querySelectorAll('.tabs__header-item');
const tabContent = document.querySelectorAll('.tabs__content-item');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const tabId = tab.dataset.tab;
    selectTab(tabId);
  });
});

function selectTab(tabId) {
  tabs.forEach(tab => {
    tab.classList.remove('active');
  });

  tabContent.forEach(content => {
    content.classList.remove('active');
  });

  const selectedTab = document.querySelector(`[data-tab="${tabId}"]`);
  selectedTab.classList.add('active');

  const selectedContent = document.querySelector(`[data-tab="${tabId}"].tabs__content-item`);
  selectedContent.classList.add('active');
};
