// 1) REGISTER SERVICE WORKER

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => {
        console.log('Registered!', reg);
      }).catch(err => {
        console.log('Regisration failed:', err);
      })
  })
}

//Menu animaion - toggling classes 

const menuIconEl = document.querySelector('.menu-icon');
const sidenavEl = document.querySelector('.sidenav');
const sidenavCloseEl = document.querySelector('.sidenav__close-icon');

// Add and remove provided class names
function toggleClassName(el, className) {
  if (el.classList.contains(className)) {
    el.classList.remove(className);
  } else {
    el.classList.add(className);
  }
}

// Open the side nav on click
menuIconEl.addEventListener('click', function () {
  toggleClassName(sidenavEl, 'active');
});

// Close the side nav on click
sidenavCloseEl.addEventListener('click', function () {
  toggleClassName(sidenavEl, 'active');
});
