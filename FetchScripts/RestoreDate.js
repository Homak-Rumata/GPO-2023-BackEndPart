function a () {
    let id;
    
    let Buttons = document.getElementsByClassName("ButtonOpenForm");

    alert(Buttons.length);
    
    for (let i = 0; i<Buttons.length; i++){
        (async function(index){
            Buttons[index].addEventListener('click', function (e){
                e.preventDefault;
                id = 0;//openformid[index];
                let jsn = {
                    id : "1"
                };

                alert (JSON.stringify(jsn));
                
                fetch("/getformDate", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                      },
                    body: JSON.stringify(jsn)
                    })
                    .then (response => response.json())
                    .then (information => {
                        FactoryNameTextField.value = information.FactoryNameTextField;
                        RegionNameTextField.value = information.RegionNameTextField;
                        DistrictNameTextField.value = information.DistrictNameTextField;
                        LocalityNameTextField.value = information.LocalityNameTextField;
                        StreetTextField.value = information.StreetTextField;
                        buildingNumberTextField.value = information.buildingNumberTextField;
                        MailPostNumberTextField.value = information.MailPostNumberTextField;
                        FactoryNameTextField.value = information.FactoryNameTextField;
                        RegionNameTextField.value = information.RegionNameTextField;
                        DistrictNameTextField.value = information.DistrictNameTextField;
                        LocalityNameTextField.value = information.LocalityNameTextField;
                        StreetTextField.value = information.StreetTextField;
                        buildingNumberTextField.value = information.buildingNumberTextField;
                        MailPostNumberTextField.value = information.MailPostNumberTextField;
                        WorkLeaderFirstNameTextField.value = information.WorkLeaderFirstNameTextField;
                        WorkLeaderSecondNameTextField.value = information.WorkLeaderSecondNameTextField;
                        WorkLeaderTreeNameTextField.value = information.WorkLeaderTreeNameTextField;
                        CafedralLeaderFirstNameTextField.value = information.CafedralLeaderFirstNameTextField;
                        CafedralLeaderSecondNameTextField.value = information.CafedralLeaderSecondNameTextField;
                        CafedralLeaderTreeNameTextField.value = information.CafedralLeaderTreeNameTextField});
                                   
            })
        }(i))}
}

setTimeout(a , 1000);
