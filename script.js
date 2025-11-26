const buttons = document.querySelectorAll('button');
const inputField = document.querySelector('input');

let task = localStorage.getItem('task') || '';
displayTask();

inputField.addEventListener('input', (e) => {  
  task = inputField.value;
  displayTask();
});
inputField.addEventListener('keypress', (e) => {
  const allowed = /[0-9+\-*/.%]/;

  if (!allowed.test(e.key)) {
    e.preventDefault(); // Stop the wrong character
  }
  if (e.key ==='Enter'){
    task =eval(task);
    displayTask();
  }
});

buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      if(task.trim()==''){
        return;
      }
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
    if (e.target.innerText.trim() === 'X') {
      task += '*';
      displayTask();
      return;
    }

    if (e.target.innerHTML === '+/-') {
      if (task.charAt(0) === '-') {
        task = task.slice(1);
      } else {
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
  inputField.value = task;
}

function store() {
  localStorage.setItem('task', task);
}
