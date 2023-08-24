//Examine the document object//

//console.dir(document);

// console.log(document.domain)
// console.log(document.URL);
// console.log(document.title);
// //document.title=123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // console.log(document.all[10]).textContent='Hello';
// // document.all[10].textContent='Hello';

// console.log(document.forms);



// \\GET ELEMENTBYID
// console.log(document.getElementById('header-title'));

//\\GETELEMENTBYCLASSNAME\\

// var items=document.getElementsByClassName('list-group-item');
// console.log(items);
// items[1].textContent='Hello 2';
// items[1].style.fontWeight='bold';
// items[1].style.backgroundColor='yellow'

// ////Gives Error
// //items.style.backgroundColor='#f4f4f4';

// for(var i=0;i<items.length;i++){
//     items[i].style.backgroundColor='#f4f4f4';
// }

//GETELEMENTBYTAGNAME

// var  li=document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent='Hello 2';
// li[1].style.fontWeight='bold';
// li[1].style.backgroundColor='yellow'

// ////Gives Error
// //items.style.backgroundColor='#f4f4f4';

// for(var i=0;i<li.length;i++){
//     li[i].style.backgroundColor='#f4f4f4';
// }

//QUERYSELECTOR

// var header=document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #ccc';

// var input=document.querySelector('input');
// input.value='Hello World';
// var submit=document.querySelector('input[type="submit"]');
// submit.value="send";

// var lastItem=document.querySelector('.list-group-item:last-child');
// lastItem.style.color='blue';

// var secondItem=document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor='green';
// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.display = 'none';

// // querySelectorAll
// var titles=document.querySelectorAll('.title');
// titles[0].textContent='Hello';

// var odd=document.querySelectorAll('li:nth-child(odd)');
// var even=document.querySelectorAll('li:nth-child(even)');

// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor='green';
// }


//TRAVERSING THE DOM

var itemList=document.querySelector('#items');
//PARENTNODE

console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor='#f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode);


//PARENTELEMENT

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);


// // childNodes

// console.log(itemList.children);
// console.log(itemList.children[1]);          
// itemList.children[1].style.backgroundColor='yellow';

//FirstChild

// console.log(itemList.firstChild);\
// //FirstElementChild

// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='Hello 1';


//LastChild

console.log(itemList.lastChild);
//LastElementChild

console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='Hello 4';


// //nextSibling
// console.log((itemList.nextSibling));
// //nextElementSibling
// console.log(itemList.nextElementSibling);


//previousSibling
console.log((itemList.previousSibling));
//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='green';


//creat Element
//creat a Div
var newDiv=document.createElement('div');
//add class
newDiv.className='hello';

//add id
newDiv.id='hello1';
//add attribute
newDiv.setAttribute('title','hello Div');

//create a text Node
var newDivText=document.createTextNode('Hello world');

//add text to Div
newDiv.appendChild(newDivText);

var container=document.querySelector('header  .container');

var h1=document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize='30px';


container.insertBefore(newDiv,h1);

// Find the element containing "Item 1"
var itemElement = document.querySelector("li");
if (itemElement) {
    // Create a new text node with "Hello world"
    var helloTextNode = document.createTextNode("Hello world ");
    
    // Insert the new text node before the existing text node of the element
    itemElement.insertBefore(helloTextNode, itemElement.firstChild);
}


















