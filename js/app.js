'use strict';

document.getElementById('submit').onclick = function (event) {
    event.preventDefault(event);
    const phone = document.getElementById('phone').value;
    if (phone.length === 0) {
        document.getElementById('data').innerText = '';
        document.getElementById('errors').innerText = 'Введите не менее 1-го символа';
    } else if (phone.length > 0) {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function(response) {
            if(response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        }).then(function(response) {
            console.log(response);
            document.getElementById('data').innerText = `Данные успешно отправлены`;
            document.getElementById('errors').innerText = '';
            document.getElementById('phone').value = '';
            function timeNone() {
                document.getElementById('data').innerText = '';
            }
            setTimeout(timeNone, 3000);
        }).catch(function(error){
            console.log(error);
        });
    } else {
        alert('errors');
    }
}
