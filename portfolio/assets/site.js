const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');

function closeMenu() {
  nav.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
}

menu.addEventListener('click', () => {
  const expanded = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(expanded));
});

nav.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeMenu();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && nav.classList.contains('open')) {
    closeMenu();
    menu.focus();
  }
});

const demoForm = document.querySelector('[data-demo-form]');
if (demoForm) {
  const status = demoForm.querySelector('output');
  demoForm.addEventListener('input', () => {
    status.value = '';
  });
  demoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const service = new FormData(demoForm).get('service');
    status.value = 'Demo complete. Selected service: ' + service + '. No information was sent.';
    demoForm.reset();
  });
}
