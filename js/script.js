const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

//function to add to do
const addTodo = ()=>{
    const inputText = inputBox.value.trim();
    if(inputText.length <=0){
        alert("You must write something in your to do");
        return false;
    }
    //creating p tag
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML = inputText;
    li.appendChild(p);

    //creating delete btn
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("btn","deleteBtn");
    li.appendChild(deleteBtn);

    //creating edit btn
    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList.add("btn","editBtn");
    li.appendChild(editBtn);

    todoList.appendChild(li);
    inputBox.value = "";


    saveLocalTodos(inputText);
}
//function to update to do
const updateTodo = (e)=>{
    //console.log(e.target.innerHTML);
    if(e.target.innerHTML === "Delete"){
        //console.log(e.target.parentElement);
        todoList.removeChild(e.target.parentElement);
        deleteLocalTodos(e.target.parentElement);
    }
}

const saveLocalTodos = (todo)=>{
    let todos = [];
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos = JSON.parse(localStorage.getItem("todos"));
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));
    //console.log(todos);
}

const getLocalTodos = () =>{
    let todos = [];
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
        todos.forEach(todo =>{
            //creating p tag
            const li = document.createElement("li");
            const p = document.createElement("p");
            p.innerHTML = todo;
            li.appendChild(p);

            //creating delete btn
            const deleteBtn = document.createElement("button");
            deleteBtn.innerText = "Delete";
            deleteBtn.classList.add("btn","deleteBtn");
            li.appendChild(deleteBtn);

    todoList.appendChild(li);
    inputBox.value = "";
        });
    }
}

const deleteLocalTodos = ()=>{
    let todos = [];
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    let todoText = todo.children[0].innerHTML;
    //console.log(todoText);
    let todoIndex = todos.indexOf(todoText);
    todos.splice(todoIndex,1);
    localStorage.setItem("todos",JSON.stringify(todos));
    //Array functions : slice / splice
    console.log(todoIndex);
}
document.addEventListener('DOMContentLoaded',getLocalTodos);
addBtn.addEventListener('click',addTodo);
todoList.addEventListener('click',updateTodo);

