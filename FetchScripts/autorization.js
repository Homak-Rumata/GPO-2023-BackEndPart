function Autorization () {
    let date = {
        name: document.getElementById("UserName"),
        password: document.getElementById("UserPassword")
    }
    alert (date)
    fetch("/UserAutorization", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(date)
    })
        .then (response => response.json())
        .then(information => {
            alert(information);
            sessionStorage.setItem("SessionNumber", information);
             
        })
    
}

//if (sessionStorage.getItem("SessionNumber")) {
    document.getElementById("UserAgreeButton").addEventListener('click', function(e) {
        Autorization();
    })
/*} else {

}*/