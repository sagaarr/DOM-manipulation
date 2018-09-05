
let val;

// val = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(val);
// console.log(val[0])
// val[0].style.color = 'red';
// val[4].style.background = '#000'
// val[5].textContent = "SAGAR CHINCHORKAR"


// GET ELEMENT BY TAG NAME

let tago = document.getElementsByTagName('li');

tago[0].style.color = '#f4f5f4';
console.log(tago);

// CONVERT HTML COLLECTION INTO ARRAY
tago = Array.from(tago);

tago.reverse();