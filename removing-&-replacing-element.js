console.log('removing-&-replacing-element');

// REPLACE element 
// Create element 
const newHeading = document.createElement('h2');
 
newHeading.appendChild(document.createTextNode('sagar'));
newHeading.id = 'task-title'; // newHeading.innerHTML = 'sagar'; It can be done like This as well....


// select old tag
const oldHeading = document.getElementById('task-title');
// connecting with parent element
const parent = document.querySelector('.card-action');

parent.replaceChild(newHeading, oldHeading);

console.log(oldHeading);
console.log(newHeading);

// REMOVE element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// REMOVE list item
lis[0].remove();

// Remove Child element 
list.removeChild(lis[2]);

// Classes and ATTRIBUTES
const firstli = document.querySelector('li:first-child');
// const link = firstli.children; // if you put like this it will give you an HTML collection
const link = firstli.children[0]; //it will give you only ancer tag 

let val;



// CLASSES
val = link.className;// it will give you a class name 
val = link.classList; //its the same but you will get a class 'tockenlist' 
val =link.classList[0];
link.classList.add('test'); //adding a class to it.
link.classList.remove('test'); //its how to remove a class 
console.log(link);

// attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
val = link.hasAttribute('href');
val = link.setAttribute('test' , 'sagar ');

console.log(val);

// lis[0].innerHTML = 'HIIII'; // it will replace the previous text content
// lis[0].appendChild(document.createTextNode('SAGARAAAAAAA')); // This will add new text to an existing text content


