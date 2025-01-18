const username = document.querySelector('#username');
const phone = document.querySelector('#phone');
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const mensagens = document.querySelector('#mensagens');
let count_id = 0;

function alert_mensagen(msg, color){
    mensagens.style.backgroundColor = color;
    mensagens.style.color = 'white';
    mensagens.textContent = msg;

    setTimeout(() => {
        mensagens.textContent = '';
    }, 2000);
}

function delete_contact(id){

}

function created (e){
    e.preventDefault();
    
    if(username.value === '' || phone.value === ''){
        alert_mensagen('preencha todos os campos', 'red');
    }else{
        //creating li tag
        const li = document.createElement('li');
        const button = document.createElement('button');

        //adding property to tags
        li.setAttribute('id', count_id);
        li.textContent = `${username.value} phone: ${phone.value}`;
        button.setAttribute('onclick', `delete_contact(${count_id})`);
        button.textContent = 'deletar';

        //adding tags to parent tags
        li.appendChild(button);
        ul.appendChild(li);

        count_id++;

        alert_mensagen('salvo com sucesso', 'green');
    }
}

form.addEventListener('submit', created);