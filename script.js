const buttons = document.querySelectorAll('button');
const inputField = document.querySelector('input');

let task = localStorage.getItem('task') || '';

displayTask();
buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      task = eval(task);
      displayTask();
      return;
    }
    if (e.target.innerHTML.toUpperCase() === 'C') {
      task = '';
      displayTask();

      return;
    }
    if (e.target.innerText.trim() == '<') {
      task = task.slice(0, -1);

      displayTask();

      return;
    }
    if(e.target.innerText.trim() === 'X'){
         task += "*";
         displayTask();
         return;  
    }

    if(e.target.innerHTML=== '+/-'){
      if(task.charAt(0) === '-'){
        task = task.slice(1);
      }
      else{
        task = '-' + task;
      }
        displayTask();
         return;  
    }

    inputField.innerHTML = task;
    task += e.target.innerHTML;

    displayTask();
  });
});

function displayTask() {
  store();
  inputField.value.toString() = task;
}


function store() {
  localStorage.setItem('task', task);
}
