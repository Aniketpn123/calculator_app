let task= "";
const buttons = document.querySelectorAll('button');
const inputField=document.querySelector('input');

buttons.forEach((button)=>{
   button.addEventListener('click',(e)=>{
      if(e.target.innerHTML == '='){
         task = eval(task);
         inputField.value=task;
         return;
      }

      if(e.target.innerHTML == 'DEL'){
         task= task.slice(0,-1);
         inputField.value=task;
         return;
      }

      if(e.target.innerHTML == 'AC'){
         task="";
         inputField.value=task;
         return;
      }

         if(e.target.innerHTML == 'x'){
         task += "*";
         inputField.value=task;
         return;
      }
      task += e.target.innerHTML;
      inputField.value=task
   })
})

