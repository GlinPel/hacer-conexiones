
const requests = document.querySelector('#request');
const conections = document.querySelector('#conections');
const editprofile = document.querySelector('#editprofile');
let numRequest = 2;
let numConections = 418;
requests.innerHTML = numRequest;
conections.innerHTML = numConections;

function deleteItem(id){
    const person = document.querySelector(`#${id}`);
    numRequest--;
    requests.innerHTML = numRequest;
    person.remove();
}

function accept(id){
    numConections++;
    conections.innerHTML = numConections;
    deleteItem(id);
}

function denied(id){
    deleteItem(id);
}

function editProfileName(){
    editprofile.innerText = 'Gleen Peltroche'
}