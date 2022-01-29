const inputBox=document.getElementById('inputBox');
const addButton=document.getElementById('addButton');
const TodoList=document.getElementById('List');

addButton.addEventListener("click",function(){
    let list=document.createElement("li");

    list.innerText=inputBox.value;
    TodoList.appendChild(list);  
    inputBox.value="";

    list.addEventListener("click",function(){
        list.style.textDecoration="line-through";   })
        
    list.addEventListener("dblclick",function(){
        TodoList.removeChild(list);
    })
    
})