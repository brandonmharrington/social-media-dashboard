const toggle = document.querySelector('.toggle input');
const body = document.body;

toggle.addEventListener('click', e => {
  if (e.target.checked) {
    body.classList.remove('dark');
    body.classList.add('light');
  } else {
    body.classList.remove('light');
    body.classList.add('dark');
  }
});
