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

var  li=document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent='Hello 2';
li[1].style.fontWeight='bold';
li[1].style.backgroundColor='yellow'

////Gives Error
//items.style.backgroundColor='#f4f4f4';

for(var i=0;i<li.length;i++){
    li[i].style.backgroundColor='#f4f4f4';
}








