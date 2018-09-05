// DOM Basic syntax 
let val ;

val = document;
val = document.head;
val = document.body;
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;



val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList;

val = document.images;
val = document.scripts;
val = document.scripts[2].getAttribute('src');


// for OR forEach loop won't work here as what we get is an object not a array it just look like array


let scripts = document.scripts;
let scriptArr = Array.from(scripts);

scriptArr.forEach(function(script) {
  console.log(script);
});

console.log(val);