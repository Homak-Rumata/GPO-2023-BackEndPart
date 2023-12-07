//Открытие панели запроса
(function(){

let CreateForm = document.getElementById("CreateStatemen");
let BackButton = document.getElementById("WorkPlaceButton");
let Form = document.getElementById("FormBlock");
let FormList = document.getElementById("StatList");

BackButton.addEventListener('click', function(e){
    for (let i in condition) {
        condition[i] = 0;
    }
    GetStatmen();
    e.preventDefault();
    Form.classList.remove('active');
    FormList.classList.add('active');
})

CreateForm.addEventListener('click', function(e){
    e.preventDefault();
    for (let i in condition) {
        condition[i] = 0;
    }
    Form.classList.add('active');
    FormList.classList.remove('active');
})

let FormButton = document.getElementsByClassName("ButtonOpenForm");

for (let i = 0; i<FormButton.length; i++){
    (function(index){
        FormButton[index].addEventListener('click', function (e){
            e.preventDefault;
            for (let i in condition) {
                condition[i] = 0;
            }
            Form.classList.add('active');
            FormList.classList.remove('active');
        })
    }(i))}
        
        
        
        
         



}())

