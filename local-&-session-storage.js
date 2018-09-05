console.log('local and session storage');

// set local storage item
// localStorage.setItem('name', 'sagar');
// localStorage.setItem('age', '23')

// // set session storage item
// sessionStorage.setItem('name', 'chinchorkar');

// // To remove item from local storage
// localStorage.removeItem('name');

// get from storage 
//const name = localStorage.getItem('name');
//const age = localStorage.getItem('age');

//console.log(name, age);

// To clear all the key value pair in localStorage
//localStorage.clear();




document.querySelector('form').addEventListener('submit', function(e){
  const task = document.getElementById('task').value;
  let tasks;
  if(localStorage.getItem('local-storage') === null){
  tasks = [];
  }else{
    tasks = JSON.parse(localStorage.getItem('local-storage'));
  }
  tasks.push(task);

  localStorage.setItem('local-storage', JSON.stringify(tasks));
  alert('TASK ADDED');
//   const task = document.getElementById('task').value; // ****
//   localStorage.setItem('task', task); // ****                   THIS code here will replace the previous element added.
// alert('task Added');

  e.preventDefault();
})

const localstore = JSON.parse(localStorage.getItem('local-storage'));

localstore.forEach(function(tasks){
  console.log(tasks);
})