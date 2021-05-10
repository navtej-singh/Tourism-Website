var imageNY = document.querySelectorAll('.trip-image');
var backdrop= document.querySelector('.backdrop');
var model= document.querySelector('.model');

function openModel(){
    backdrop.style.display = 'block';
    model.style.display = 'block';
}
function closeModel(){
    backdrop.style.display = 'none';
    model.style.display = 'none';
}

for(i=0; i<imageNY.length; i++){
    imageNY[i].addEventListener('click', openModel);
}

backdrop.addEventListener('click',closeModel);

// form

var inputName= document.getElementById('name')
var inputMail= document.getElementById('mail')
var inputMessage= document.getElementById('msg')
var button = document.getElementById('.submit-button')
var emailCheck = /\S+@\S+\.\S+/;

function checkInput(){

    if(inputName.value.trim() !="" && inputMessage.value.trim() !="" && emailCheck.test(inputMail.value)){
        button.style.backgroundColor = '#fa923f' ;
        button.disabled= false;
    }
    else{
        button.style.backgroundColor = '#979695' ;
        button.disabled= true;
    }
}