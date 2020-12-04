'use strict';

document.getElementById('submit').onclick = function (event) {
  event.preventDefault(event);
  var phone = document.getElementById('phone').value;

  if (phone.length === 0) {
    document.getElementById('data').innerText = '';
    document.getElementById('errors').innerText = 'Введите не менее 1-го символа';
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: phone,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } else if (phone.length > 0) {
    var timeNone = function timeNone() {
      document.getElementById('data').innerText = '';
    };

    document.getElementById('data').innerText = "\u0414\u0430\u043D\u043D\u044B\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u044B";
    document.getElementById('errors').innerText = '';
    document.getElementById('phone').value = '';
    setTimeout(timeNone, 3000);
  } else {
    alert('errors');
  }
};