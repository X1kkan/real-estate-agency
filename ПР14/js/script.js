
function validateLogin(){
    const login = document.getElementById('login').value.trim();
    const password = document.getElementById('password').value.trim();
    const error = document.getElementById('error');

    if(login.length < 3){
        error.textContent = 'Минимум 3 символа';
        return false;
    }

    if(password.length < 6){
        error.textContent = 'Минимум 6 символов';
        return false;
    }

    alert('Вход выполнен');
    return false;
}

function createAd(){
    const title = document.getElementById('title').value;
    const price = document.getElementById('price').value;
    const type = document.getElementById('type').value;

    if(title === '' || price === ''){
        alert('Заполните поля');
        return;
    }

    localStorage.setItem('title', title);
    localStorage.setItem('price', price);
    localStorage.setItem('type', type);

    window.location.href = 'created-ad.html';
}
