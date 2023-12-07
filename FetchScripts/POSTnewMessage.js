(function() {
    let NewStatmensButton = document.getElementById("CreateStatemen");

    fetch("/NewStatmen", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
        })
}())