console.log('mouseEvent');

const card = document.querySelector('#main');
const clear = document.querySelector('.clear-tasks');
const taskName = document.querySelector('#task-title');


// // click
// clear.addEventListener('click', mouseEvents);
// // double click 
// clear.addEventListener('dblclick', mouseEvents);

// mouse down // fires when we click  
// clear.addEventListener('mousedown' , mouseEvents);
// mouse UP // fires when we relase the mouse click from element
// clear.addEventListener('mouseup', mouseEvents);
// mouse enter 
//card.addEventListener('mouseenter',mouseEvents);
// mouse leave 
// card.addEventListener('mouseleave',mouseEvents);
// mouse over 
//card.addEventListener('mouseover',mouseEvents);
// mouse out 
//card.addEventListener('mouseout',mouseEvents);

// So, mouseenter and mouseleave will work on element on which they are declared as well as all childlements inside of it . But "mouseover" "mouseout" works only for the element on which they are declared NOT for child elements of it. 

// mousemove 
card.addEventListener('mousemove', mouseEvents); //So, any movement inside the tag on which event is declared if there is any movement of mouse it will be count.

function mouseEvents(e){
  console.log(e.type);


  taskName.textContent = `Vertical : ${e.offsetY} Horizontal: ${e.offsetX}`
  document.body.style.backgroundColor = `rgb(${e.offsetY}, ${e.offsetX}, 128)`;
}



