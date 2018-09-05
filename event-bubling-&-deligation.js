console.log('event-bubling-&-deligation');
//  EVENT BUBBLING 

// document.querySelector('.card-title').addEventListener('click', function(e){
//   console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function(e){
//   console.log('card-content');
// });

// document.querySelector('.card').addEventListener('click', function(e){
//   console.log('card');
// });

// EVENT DELEGATION 
// IN event delegation we declare an event to parentElement and then comes down to Child to apply them without affecting any parent Elements
const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);
document.body.addEventListener('click', deleteItem);

function deleteItem(e){
  //  So, here now where ever we click it will give us the element on which we clicked.
  // console.log(e.target);
  // if(e.target.parentElement.className === 'delete-item secondary-content'){
  //   // [className] will look for string inside the class attribute>>[class="delete-item secondary-content"]. So, we have to menstion all classes and if we add another class then that element won't be recognized...... 
  //   //  To avoid This we use ["classList"] instead of "className" 
  //   console.log('delete Item');
  // }
  if(e.target.parentElement.classList.contains('delete-item')){
    console.log('delete item');
    e.target.parentElement.parentElement.remove();
};
}

