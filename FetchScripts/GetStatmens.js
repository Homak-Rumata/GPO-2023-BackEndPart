var idarray = [];

async function getstatmens () {

    setTimeout(() => {}, 500);

    let response = await fetch("/getstatmens", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
    
});

let openformid;

let result = await response.json();

//alert(result);

//alert (JSON.stringify(result));

let form = document.getElementById("statmens");

    while (form.lastElementChild) {
        form.removeChild(form.lastElementChild);
    }

if (result.length === 0) {
    let art = document.createElement('div')
    art.classList.add('StateBlock');
    art.append(document.createElement('hr'));
    art.append("У вас нет заявлений");
    form.append(art);
}
else {
    let art = document.createElement('div')
    let St = document.createElement('table');
    St.id = "StateTabble"
    let StetmenTable = document.createElement('tbody');

    St.appendChild(StetmenTable);

    let Head = document.createElement('tr');
    let TopTitle = [];
    let TopTitleInfo = [
        "Создано",
        "Статус",
        "Вид практики",
        ""
    ]

    
    for (let i = 0; i < TopTitleInfo.length; ++i) {
        TopTitle[i] = document.createElement('th');
        let information = document.createElement('h2');
        information.style.fontWeight = "normal";
        information.append(TopTitleInfo[i]);
        TopTitle[i].append(information);
        Head.append(TopTitle[i]);
    }

    StetmenTable.appendChild(Head);

for (let i = 0; i<result.length; i++)
    {
        let Row = document.createElement('tr');
        Row.classList.add("InfFields")
        let CellsInfo = result[i];
        idarray.push (CellsInfo.id);
        openformid = CellsInfo.id;
        let tyme = document.createElement('th');
        tyme.classList.add("InfFields")
        tyme.append(CellsInfo.tyme.replace(/-/ig, "."));
        let status = document.createElement('th');
        status.append(CellsInfo.status == 0 ? "Производственная": "Научная");
        status.classList.add("InfFields")
        let type = document.createElement('th');
        type.classList.add("InfFields")
        type.append(CellsInfo.type == 0? "Незаполненно": "Заполненно");
        Row.appendChild(tyme);
        Row.appendChild(status);
        Row.appendChild(type);
        StetmenTable.appendChild(Row);

        let Button = document.createElement('input');
        Button.value = "Показать";
        Button.type = 'button';

        let ButtonField = document.createElement('th');
        ButtonField.classList.add('InfFields');
        Button.classList.add("ButtonOpenForm");
        ButtonField.appendChild(Button);
        Row.appendChild (ButtonField);

    }


    art.appendChild(St);
    form.appendChild(art);
    LinkStatmenButtonFunction();
    //document.getElementById("statmens").appendChild(art);
        
    
    
}

/*(function () {
    let id;
    
    let Buttons = document.getElementsByClassName("ButtonOpenForm");

    alert(Buttons.length);

    setTimeout(() => {} , 1000);
    
    for (let i = 0; i<Buttons.length; i++){
        (async function(index){
            Buttons[index].addEventListener('click', function (e){
                e.preventDefault;
                id = openformid[index];
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
})()*/

}

var GetStatmen = getstatmens;


getstatmens();
