const { Console } = require('console');
const express = require('express');
const fs = require('fs');
const app = express();
const path = require ('path');

let Inf = {
    FirstNameTextField:"Максим",
    SecondNameTextField:"Татаринов",
    ThirddNameTextFiled:"Отчество",
    Group:"710-3",
    Direction:"Информационная безопасность автоматизированных систем",
    PracticeSort:"Учебная",
    PracticeType:"Учебная",
    FirstTime:"2022-01-01",
    LastTime:"2023-03-02"};
let PersonInf;
let LeaderInf;
let FactoryInf = {};


//Файл отпраки данных актуальных заявлений
let Date = [
    {
        id: 0,
        tyme: "2023-12-27",
        status: 0,
        type: 0,
    },
    {
        id: 2,
        tyme: "2023-11-27",
        status: 1,
        type: 1,
    },
    {
        id: 19,
        tyme: "2023-10-17",
        status: 2,
        type: 0,
    },
    {
        id: 70,
        tyme: "2023-10-17",
        status: 4,
        type: 23, 
    },
    {
        id: 11,
        tyme: "2023-1234-6u9",
        status:0,
        type: 0,
    }
]

function GetSessionTooken (Name, password) {
    return "user";
}

//Имя на верху формы
let StudentName = "Иванов Иван Иванович"
app.set ('viem engine', 'ejs');

const createPath = (page) => path.resolve(__dirname, 'ejs', `${page}.ejs`);
const stylePath = (page) => path.resolve(__dirname, style, `${page}.css`);

app.listen ("3001", (error) => {
    error ? console.log(error) : console.log(`listening port ${"3001"}`);

}) 




//Инициализация формы, StudentName - отображаемое имя студента
app.get ('/', (req, res) => {
    //console.log(JSON.stringify(req.body));
    res.status(200);
    //res.send(GetSessionTooken(req.body.name, req.body.password));

    res.render(createPath('block'), {StudentName} );
    res.end;
});



app.use (express.urlencoded({extended: false}));

app.use (express.static(__dirname));

app.use (express.json());


//Получение данных из формы персональной информации
app.post ('/PersonInfoForm', (req, res) => {
    console.log(JSON.stringify(req.body));
    PersonInf = req.body
    res
    .status(200)
    .json({
        date1: "SomeDate",
        date2: "SomeDate2"
    })
    res.end;
})

app.post ('/InfoForm', (req, res) => {
    console.log(JSON.stringify(req.body));
    for (key in req.body) {
        Inf[key] = req.body[key];
    }
    
    res
    .status(200)
    .json({
        date1: "SomeDate",
        date2: "SomeDate2"
    })
    res.end;
})

app.get ('/PersonInfoForm', (req, res) => {
    res
    .status(200)
    .send(PersonInf);
})

//Получение данных руководителей
app.post ('/LeaderInfoForm', (req, res) => {
    console.log(JSON.stringify(req.body));
    LeaderInf = req.body;
    res
    .status(200)
    .json({
        date1: "SomeDate",
        date2: "SomeDate2"
    })
    res.end;
})

app.get ('/LeaderInfoForm', (req, res) => {
    res
    .status(200)
    .send(LeaderInf);
})

//Получение данных из формы информации о предприятии
app.post ('/FactoryInfoForm', (req, res) => {
    console.log(JSON.stringify(req.body));
    FactoryInf = req.body;
    console.log(JSON.parse(JSON.stringify(FactoryInf)));
    res
    .status(200)
    .json({
        date1: "SomeDate",
        date2: "SomeDate2"
    })
    res.end;
})

app.get ('/FactoryInfoForm', (req, res) => {
    res
    .status(200)
    .send(FactoryInfInf);
})


//Получение информации о актуальных запросах
app.post ('/getstatmens', (req, res) => {
    console.log (JSON.stringify(req.body));
    res
    .status(200)
    .send(Date)
    .end;
})

app.post ('/setRecenze', (req, res) => {
    console.log (JSON.stringify(req.body));
    res
    .status(200)
    .send(Date)
    .end;
})

//Присвоение нового  Id
app.post ('/NewStatmen', (req, res) => {
    console.log ("New Statmen");
    res
    .status(200)
    .send({id: "New"})
    .end()
})

app.post ('/autorization', (req, res) => {
    console.log ("Авторизация");
    res
    .status(200)
    .send({token: 12345432, rule: 1});
    res.end()
})

app.post ('/getRecenze', (req, res) => {
    console.log (JSON.stringify(req.body));
    res
    .status(200)
    .send({text: "Информация для пользователя "});
    res.end()
})


//Ответ на запрос данных о заполненной форме
app.post ('/getformDate', (req, res) => {
    if (req.body.id==="New"){
        console.log ("get")
        res
    .status(200)
    .send({status: 1})
    .end;
    }else {
    res
    .status(200)
    .send(Inf)
    .end;
    console.log("set "+JSON.stringify(req.body));}
})

//Легаси(в коментариях), действие кнопки/ открытие стартовой страницы
app.post ('/block', (req, res) => {
    //console.log(req.body);
    //res.send(req.body);
    //StudentName = req.body.FirstNameTextField + " " + req.body.SecondNameTextField + " " + req.body.TreeNameTextField;
    res.render(createPath('block'), {StudentName} );
    DataJSON = JSON.stringify(req.body);
    res.end;
})

//Временный счётчик для нижней функции
let a = 0;

//Меняет рисунок прогресса, зависит от i (сейчас каждая перезарузка) увеличивает i на 1
app.get ('/getstepsimage', (req, res) => {
    let i = (a++%3)+1;
    fs.readFile(`./Picturies/Step${i}.svg`, function(error, data) {
        console.log (i);
        res.send(`${i}`);
        res.end;
    })})
