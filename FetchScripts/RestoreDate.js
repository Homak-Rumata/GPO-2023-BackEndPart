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

                        FirstNameTextField.value = information.FirstName,
                        SecondNameTextField.value = information.SecondName,
                        TreeNameTextField.value = information.TreeName,
                        Group.value = information.Group,
                        Direction.value = information.Direction,
                        PracticeSort.value = information.PracticeSort,
                        PracticeType.value = information.PracticeType,
                        FirstTime.value = information.FirstTime,
                        LastTime.value = information.LastTime,

                        FactoryNameTextField.value = information.FactoryNameTextField,
                        RegionNameTextField.value = information.RegionNameTextField,
                        DistrictNameTextField.value = information.DistrictNameTextField,
                        LocalityNameTextField.value = information.LocalityNameTextField,
                        StreetTextField.value = information.StreetTextField,
                        buildingNumberTextField.value = information.buildingNumberTextField,
                        MailPostNumberTextField.value = information.MailPostNumberTextField,

                        WorkLeaderFirstNameTextField.value = information.WorkLeaderFirstNameTextField,
                        WorkLeaderSecondNameTextField.value = information.WorkLeaderSecondNameTextField,
                        WorkLeaderTreeNameTextField.value = information.WorkLeaderTreeNameTextField,
                        CafedralLeaderFirstNameTextField.value = information.CafedralLeaderFirstNameTextField,
                        CafedralLeaderSecondNameTextField.value = information.CafedralLeaderSecondNameTextField,
                        CafedralLeaderTreeNameTextField.value = information.CafedralLeaderTreeNameTextField

                        /*for (let key in information) {
                            if (information[key]) {
                            Fields[a].value = information[key];
                            }
                            else {
                                Fields[a].value = "";
                            }
                            ++a;
                        }*/
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

