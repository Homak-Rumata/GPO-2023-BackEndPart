(function(){
setTimeout (() => {}, 1000);
let FormButton = document.getElementsByClassName("ButtonOpenForm");
let CreateForm = document.getElementById("CreateStatemen");
let BackButton = document.getElementById("WorkPlaceButton");
let Form = document.getElementById("FormBlock");
let FormList = document.getElementById("StatList");

BackButton.addEventListener('click', function(e){
    e.preventDefault();
    Form.classList.remove('active');
    FormList.classList.add('active');
})

CreateForm.addEventListener('click', function(e){
    e.preventDefault();
    Form.classList.add('active');
    FormList.classList.remove('active');
})

for (let i = 0; i<FormButton.length; i++){
    (function(index){
        FormButton[index].addEventListener('click', function (e){
            e.preventDefault;
            Form.classList.add('active');
            FormList.classList.remove('active');
        })
    }(i))}



}())

