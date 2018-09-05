console.log('Traversing DOM || moving UP and DOWN');

let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

// console.log(listItem);
// console.log(list);



// get childnode 
val = list.childNodes;
// for this ^^^ we get the output as follow 

// in this the " text " element that we get is due to the line break 
// Line Break == <li>
                //  </li>
                // Here the space between the </li> and <li> is called line break  
                //   <li>

                //  </li>

// NodeList(11) [text, li.collection-item, text, li.collection-item, text, li.collection-item, text, li.collection-item, text, li.collection-item, text]
// 0 : text
// 1: li.collection-item
// 2:text
// 3 :li.collection-item
// 4:text
// 5:li.collection-item

// NodeList

// "childNode" ==== Some more info.
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;
val = list.childNodes[3].nodeType;


// 1 - Element
// 2 - Attribute (deprecated)
// 3 - text node 
// 8 - comment
// 9 - document itself 
// 10 - doctype 


// to avoid the text element we can use 'children' element node ==
val = list.children;
// HTMLCollection(5) [li.collection-item, li.collection-item, li.collection-item, li.collection-item, li.collection-item]
// 0:li.collection-item
// 1:li.collection-item
// 2:li.collection-item
// 3:li.collection-item
// 4:li.collection-item
// length :5
val = list.children[0];

// children of children
val = list.children[0].children[0];
list.children[1].children[0].id = 'test-link';

// first child
val = list.firstChild;
val = list.firstElementChild;

// Last child
val = list.lastChild; // Here Output Will be #text
val = list.lastElementChild;

// Count child elements
val = list.childElementCount;


// Get parent node
val = listItem.parentNode;
val =  listItem.parentElement; // Both parentElement and parentNode will give the same output


// parents of parents 
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling; // just like childNode listChild and firstChild it also provide a #text at Output To avoid this ------- following is used 
val = listItem.nextElementSibling;
// We can go up and down using this in a list ie;
val = listItem.nextElementSibling.nextElementSibling; 


// Just like this we can also access previous siblings 
val = listItem.previousSibling;
val = listItem.previousElementSibling; // Here we are at parent element so we are at start point because of that there is no previous sibling present 
val = listItem.nextElementSibling.previousElementSibling; // We can Do this Though 


console.log(val); 