document.querySelector('.card-title').addEventListener('click', function(e){
  console.log('card title');
});

document.querySelector('.card-content').addEventListener('click', function(e){
  console.log('card-content');
});

document.querySelector('.card').addEventListener('click', function(e){
  console.log('card');
});


// HERE as we click on Task title all parent element will be triggered 
//  and all click event will be activate at same time