const btn = document.querySelector('.j-btn');

btn.addEventListener('click', () => {
  const value1 = +document.getElementById('num1').value;
  const value2 = +document.getElementById('num2').value;

  let s = document.getElementById('j-result');
  s.textContent = '';

if (!((0 < value1 && value1 > 11) || !(0 < value2 && value2 > 11))) {
  s.textContent = 'Номер страницы и лимит вне диапазона от 1 до 10';
  return;
} else if (!(0 < value1 && value1 > 11)) {
    s.textContent = 'Номер страницы вне диапозона от 1 до 10';
    return;
  } else if (!(0 < value2 && value2 > 11)) {
    s.textContent = 'Лимит вне диапозона от 1 до 10';
    return;
  }
  // Делаем запрос за данными
  fetch(`https://picsum.photos/v2/list?page=${value1}&limit=${value2}`)
    .then((response) => {
      document.getElementById('result').src = response.url;
    });

});