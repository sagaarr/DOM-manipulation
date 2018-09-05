console.log('keyboard-&-input-Events');

const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const output = document.getElementById('task-title');


// TO clear INPUT
taskInput.value = '';


// Submit event
// taskInput.addEventListener('submit', common);
// keydown
// taskInput.addEventListener('keydown', common);
// keydown
// taskInput.addEventListener('keyup', common);
// keypress
// taskInput.addEventListener('keypress', common);
// focus 
//taskInput.addEventListener('focus', common);
// blur
//taskInput.addEventListener('blur', common);
// cut
//taskInput.addEventListener('cut', common); //Does the job as name tells 
// Paste
// taskInput.addEventListener('paste', common); // Does the job as name tells 
// input
taskInput.addEventListener('input', common); //You Do copy,paste,type at input tag its an "input event"






function common(a){
    console.log(`target Event :${a.type}`);
    // output.innerText = a.target.value;
    // console.log(a.target.value);
  // a.preventDefault();
}