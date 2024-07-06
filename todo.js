const form=document.querySelector("form");
const todoInput=document.querySelector("input");
const ul=document.querySelector("ul");
const text = "   trtterrr    trrterr   ";
console.log(text.trim());
function submitHandler(event){
       event.preventDefault();
       const todo=todoInput.value.trim();
       if(!todo){
              return false;
       }
       const li=document.createElement("li");
       const span=document.createElement("span");
       span.innerText=todo;
       const deleteButton=document.createElement("button");
       deleteButton.innerText="Delete";
       deleteButton.classList.add("delete");
       deleteButton.addEventListener("click",function(){
              ul.removeChild(li);
       })
       li.append(deleteButton);
       li.append(span);
       ul.prepend(li);
       todoInput.value="";
       
}
form.addEventListener("submit", submitHandler);