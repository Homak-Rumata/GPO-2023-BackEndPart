let Button = [];
let AgreeButton = [];

for (let i = 1; i<=document.getElementsByClassName("StepControlBotton").length; i++) {
    Button[i] = document.getElementById(`RectangleStep${i}`);
}

(function () {
let AgreeButton1 = document.getElementsByClassName("AgreeFormButton");
for (let i = 0; i<=AgreeButton1.length; i++) {
    AgreeButton[i+1]=AgreeButton1[i];
}
AgreeButton[0] = "";
AgreeButton[4] = AgreeButton[3];
AgreeButton[3] = AgreeButton[2];
AgreeButton[2] = undefined;
AgreeButton[5] = undefined;
})()



const command = [ 
function () {
    let date = {
        FirstName: FirstNameTextField.value,
        SecondName: SecondNameTextField.value,
        ThirddName: TreeNameTextField.value,
        Group: Group.value,
        Direction: Direction.value,
        PracticeSort: PracticeSort.value,
        PracticeType: PracticeType.value,
        FirstTime: FirstTime.value,
        LastTime: LastTime.value};
    fetch("/PersonInfoForm", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(date)
    })
},

undefined, 

function () {
    let date = {
        FactoryNameTextField: FactoryNameTextField.value,
        RegionNameTextField: RegionNameTextField.value,
        DistrictNameTextField: DistrictNameTextField.value,
        LocalityNameTextField: LocalityNameTextField.value,
        StreetTextField: StreetTextField.value,
        buildingNumberTextField: buildingNumberTextField.value,
        MailPostNumberTextField: MailPostNumberTextField.value,
    };
    fetch("/FactoryInfoForm", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(date)
    })
},

function () {
    let date = {
        WorkLeaderFirstNameTextField: WorkLeaderFirstNameTextField.value,
        WorkLeaderSecondNameTextField: WorkLeaderSecondNameTextField.value,
        WorkLeaderTreeNameTextField: WorkLeaderTreeNameTextField.value,
        CafedralLeaderFirstNameTextField: CafedralLeaderFirstNameTextField.value,
        CafedralLeaderSecondNameTextField: CafedralLeaderSecondNameTextField.value,
        CafedralLeaderTreeNameTextField: CafedralLeaderTreeNameTextField.value 
    };
    fetch("/LeaderInfoForm", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(date)
    })
},

undefined
];

let LastCommand = 1;

for (let i = 1; i<6; ++i){
    (function(index) {
        try{
        Button[index].addEventListener ('click', function(e) {
            try{command[LastCommand-1]();}
            catch {
            }
            LastCommand = index;
        })}
        catch{}
    
    
        try{
            AgreeButton[index].addEventListener('click', function(e) {
            
            e.prevenDefault;
            try{
            command[index-1]();}
            catch {
                ;
            }
        })}
        catch{
        ;}
    

    }(i));
}








