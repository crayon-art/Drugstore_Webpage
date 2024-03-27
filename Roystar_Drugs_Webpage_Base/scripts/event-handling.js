window.addEventListener('DOMContentLoaded', () => {
  console.log('event-handling.js script was successfully loaded');
  const cogIcon = document.querySelector('.fas.fa-cog');
  cogIcon.addEventListener('click', event => {
    console.log('Gear clicked');
    event.stopPropagation();
    document.querySelector('.pref').classList.remove('pref--hidden');
  });

  window.addEventListener('click', () => {
    console.log('HTML document clicked');
    document.querySelector('.pref').classList.add('pref--hidden');
  });

  const menuIcon = document.querySelector('.fa.fa-bars');
  menuIcon.addEventListener('click', event => {
    console.log('Menu clicked');
    event.stopPropagation();
    document.querySelector('.menu').classList.remove('menu--hidden');
  });

  window.addEventListener('click', () => {
    console.log('HTML document clicked');
    document.querySelector('.menu').classList.add('menu--hidden');
  });

  const searchIcon = document.querySelector('.fa.fa-search');
  searchIcon.addEventListener('click', () => {
    console.log('Search clicked');
    const modal = document.querySelector('.search-modal');
    modal.classList.toggle('search-modal--hidden');
  });
});
