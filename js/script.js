
function showPage(list, page)
{

 const itemsperpage = 9 ;
const startIndex=(page*itemsperpage)-itemsperpage;
const endIndex= page*itemsperpage;

let studentList = document.querySelector('.student-list');
studentList.innerHTML ='';
for(var i = 0; i < list.length; i++){
if(i >= startIndex && i  < endIndex){
   let student = list[i];
const studentItem =`<li class="student-item cf">
<div class="student-details">
  <img class="avatar" src=${student.picture.medium} alt="Profile Picture">
  <h3>${student.name.first} ${student.name.last}</h3>
  <span class="email">${student.email}</span>
  </div>
<div class="joined-details">
  <span class="date">${student.registered.date}</span>
</div>
</li> `;
studentList.insertAdjacentHTML('beforeend', studentItem);
}
}
}
 

function addPagination(list){
   
   
const itemsperpage = 9 ;
const numOfPages =Math.ceil(list.length / itemsperpage);
let  linkList = document.querySelector('.link-list');
linkList.innerHTML='';
for(var i = 1; i <= numOfPages; i++){
   let btn =`<li>
   <button type='button'>${i}</button>
   </li>`;
   linkList.insertAdjacentHTML('beforeend', btn);
   let firstButton= linkList.querySelector('button');
   firstButton.classList.add('active');
}


 linkList.addEventListener('click', (e) =>{
 
if(e.target.tagName === 'BUTTON'){
   const buttons = linkList.querySelectorAll('button');
   buttons.forEach(button => button.classList.remove('active'));
   e.target.classList.add('active');
   const pageNumber = parseInt(e.target.textContent);
   showPage(list, pageNumber);
}
 }); 
}
addPagination(data,1);
showPage(data,1);

