const username = document.querySelector('#username');
const phone = document.querySelector('#phone');
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const mensagens = document.querySelector('#mensagens');

function alert_mensagen(msg, color){
    mensagens.textContent = msg;
    mensagens.style.backgroundColor = color;

    setTimeout(() => {
        mensagens.textContent = '';
    }, 2000);
}

function created (e){
    e.preventDefault();
    
    if(username.value === '' || phone.value === ''){
        alert_mensagen('preencha todos os campos', 'red');
    }
}

form.addEventListener('submit', created);