const btn = document.getElementById('myBtn');
btn.addEventListener('click', () => {
  alert('Кнопка работает — молодец!');
});

const form = document.getElementById('contactForm');
const result = document.getElementById('result');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const message = document.getElementById('message').value.trim();
  if (!name || !message) {
    result.textContent = 'Пожалуйста, заполните оба поля.';
    result.style.color = 'red';
    return;
  }
  result.textContent = `Спасибо, ${name}! Ваше сообщение принято.`;
  result.style.color = 'green';
  form.reset();
});
