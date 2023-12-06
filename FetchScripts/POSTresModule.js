let Button = [];
let AgreeButton = [];

for (let i = 1; i<=document.getElementsByClassName("StepControlBotton").length; i++) {
    Button[i] = document.getElementById(`RectangleStep${i}`);
}

(function () {
let AgreeButton1 = document.getElementsByClassName("AgreeFormButton");
//for (let i = 0; i<=AgreeButton1.length; i++) {
//    AgreeButton[i+1]=AgreeButton1[i];
//}

AgreeButton[0] = "";
AgreeButton[1] = AgreeButton1[0];
AgreeButton[2] = undefined;
AgreeButton[3] = AgreeButton1[2];
AgreeButton[4] = AgreeButton1[1];
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
        condition.a1 = 1;
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
    condition.a3 = 1;
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
    condition.a4 = 1;
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
        let state = 1;
        try{
        Button[index].addEventListener ('click', function(e) {
            state = 1
            for (let key in condition) {
                state*=condition[key];
            }
            {
            try{
                command[LastCommand-1]();}
            catch {
            }
            LastCommand = index;}
            
        })}
        catch{}
    
    
        try{
            AgreeButton[index].addEventListener('click', function(e) {
                state = 1
                
                
            e.prevenDefault;
            try{
            command[index-1]();}
            catch {
                ;
            }  
            for (let key in condition) {
                state*=condition[key];
            }
            if (state) 
            {
                for (let i in condition) {
                    condition[i] = 0;
                }
                LastCommand = 1;
                e.preventDefault();
                document.getElementById("FormBlock").classList.remove('active');
                document.getElementById("StatList").classList.add('active');
                for (let key in condition) {
                    condition[key] = 0;
                }
            }
        })}
        catch{
        ;}
    

    }(i));
}








