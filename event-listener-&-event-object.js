console.log('event-listener-&-event-object');
document.querySelector('.clear-tasks').addEventListener('click', onClick);

// function onClick(e){
//   console.log('cilcked');
//   e.preventDefault(); //Why to use this ?? some element have a perticular behaviour here <a> is used it tries to re-direct so, if in href = "NOTHING" then it will not work we can put href = "#" || preventDefault() function
// }

function onClick(e){
let val;


val = e;
// event target element 
val = e.target;
val = e.target.id;
val = e.target.className;
val = e.target.classList;
e.target.innerText = 'hello';


// event type 
val = e.type;

// timestamp
val = e.timeStamp;

// get the co-ordinates relative to the window 
val =  e.clientY; // it is used for measuring distance from top of the window till the event button 
 val = e.clientX; // similar but used for horizontal axis

 // get the co-ordinates relative to the element in this case <a> 
 val = e.offsetY;
 val = e.offsetX;
console.log(val);
}