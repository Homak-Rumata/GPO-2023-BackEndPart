    StartPageButton.addEventListener('click', function(e){
    e.preventDefault();
    StartBlock.classList.add('active');
    MessageBlock.classList.remove('active');
    WorkBlock.classList.remove('active');
    //alert ("1 блок")
});
    

    MessageButton.addEventListener('click', function(e){
    e.preventDefault();
    StartBlock.classList.remove('active');
    MessageBlock.classList.add('active');
    WorkBlock.classList.remove('active');
    //alert ("2 блок")
});
    

    WorkPlaceButton.addEventListener('click', function(e){
    e.preventDefault();
    StartBlock.classList.remove('active');
    MessageBlock.classList.remove('active');
    WorkBlock.classList.add('active');
    //alert ("3 блок")
});

var req = new XMLHttpRequest;
    