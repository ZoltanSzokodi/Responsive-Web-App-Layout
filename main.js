// 1) REGISTER SERVICE WORKER

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => {
        console.log('Registered! Scope is:', reg.scope);
      }).catch(err => {
        console.log('Regisration failed:', err);
      })
  })
}

// Listen for beforeinstallprompt
// let deferredPrompt;

// window.addEventListener('beforeinstallprompt', event => {
//   // Prevent Chrome 67 and earlier from automatically showing the prompt
//   event.preventDefault();
//   // Stash the event so it can be triggered later
//   deferredPrompt = event;
//   // Update UI notify the user they can add to home screen
//   btnAdd.style.display = 'block';
// })


// Show the prompt 
// btnAdd.addEventListener('click', event => {
//   deferredPrompt.prompt();
//   deferredPrompt.userChoice.then(choiceResult => {
//     if (choiceResult.outcome === 'accepted') {
//       console.log('User accepted the A2HS prompt');
//     }
//     deferredPrompt = null;
//   })
// })

// Confirming installations
window.addEventListener('appinstalled', event => {
  app.logEvent('a2hs', 'installed');
})



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
