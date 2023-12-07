(function() {
    let NewStatmensButton = document.getElementById("CreateStatemen");
   NewStatmensButton.addEventListener('click', function(e) {
        
    e.preventDefault;
    fetch("/NewStatmen", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
        })
    })
}())