let Steps = document.getElementsByClassName("StepControlBotton");
//const Panels = document.getElementsByClassName("WorkDateBlocks");
let Panels = [document.getElementById("WorkPannel"), undefined, 
  document.getElementById("factory"), document.getElementById("leader"), undefined];
let Fields = document.getElementsByClassName("StepControlField"); 

Fields[0].classList.add ('active');
Panels[0].classList.add ('active');

  for (var i = 0; i < Steps.length; i++) {
    (function(index) {
      Steps[index].onclick = function() { 
        for (let a = 0; a < Fields.length; a++) {Fields[a].classList.remove('active'); 
                                                    try {Panels[a].classList.remove('active')}
                                                    catch {}
                                                }
        Fields[index].classList.add('active');
        try {
        Panels[index].classList.add('active')
        }
        catch {
          alert ("Такой страницы не существует");
        };
      }
      }(i))}