console.log('create Element');

// create element 

const li = document.createElement('li'); // It will create '<li></li>'

// Add class 
li.className = 'collection-item';

// add id 
li.id = 'sagar';

// add attribute 
li.setAttribute('title', 'new item');


// put <a> tag in li
const a = document.createElement('a');
// add a class to 'a'
a.className = 'delete-item secondary-content';

// add a icon to 'a'
a.innerHTML = '<i class="fa fa-remove"></i>';
li.appendChild(a);
console.log(a)
// Create text node and append
const name = document.createTextNode('Chinchorkar');
li.appendChild(name);

// Append li as a child to ul 
document.querySelector('ul.collection').appendChild(li);

console.log(li)