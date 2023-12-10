var idstatmen;

function a () {
    
    let Form = document.getElementById("FormBlock");
    let FormList = document.getElementById("StatList");

    let Buttons = document.getElementsByClassName("ButtonOpenForm");

    //alert(Buttons.length);
    
    for (let i = 0; i<Buttons.length; i++){
        (async function(index){           
            Buttons[index].addEventListener('click', function (e){
                e.preventDefault;
                id = 0;//openformid[index];
                let jsn = {
                    id : idarray[index]
                };
                idstatmen = idarray[index];

                //alert (JSON.stringify(jsn));
                
                fetch("/getformDate", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                      },
                    body: JSON.stringify(jsn)
                    })
                    .then (response => response.json())
                    .then (information => {
                        let Fields = document.getElementsByClassName("InputInformationField");
                        let a= 0;
                        for (let key in information) {
                            if (information[key]) {
                            Fields[a].value = information[key];
                            }
                            else {
                                Fields[a].value = "";
                            }
                            ++a;
                        }
                    });
                                   
            })

            Buttons[index].addEventListener('click', function (e){
                e.preventDefault;
                for (let i in condition) {
                    condition[i] = 0;
                }
                Form.classList.add('active');
                FormList.classList.remove('active');
            })

        }(i))}
}

var LinkStatmenButtonFunction = a;

