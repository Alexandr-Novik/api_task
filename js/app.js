'use strict';

document.getElementById('submit').onclick = function (event) {
    event.preventDefault(event);
    const phone = document.getElementById('phone').value;
    if (phone.length === 0) {
        document.getElementById('data').innerText = '';
        document.getElementById('errors').innerText = 'Введите не менее 1-го символа';
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: phone,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    } else if (phone.length > 0) {
        document.getElementById('data').innerText = `Данные успешно отправлены`;
        document.getElementById('errors').innerText = '';
        document.getElementById('phone').value = '';
        function timeNone() {
            document.getElementById('data').innerText = '';
        }
        setTimeout(timeNone, 3000);
    } else {
        alert('errors');
    }
}