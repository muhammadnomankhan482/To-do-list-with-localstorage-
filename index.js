
var inputs = JSON.parse(localStorage.getItem("inputs")) || [];
var updateButton = document.getElementById("update-button");
var addButton = document.getElementById("add-button");
var inputElement = document.getElementById("todo");
var editIndex 
showList();

function addTodo(){
    if(inputElement.value === ""){
        alert("Please add somethings")
    return;
    }
    inputs.push(inputElement.value);
    localStorage.setItem("inputs",JSON.stringify(inputs))
    inputElement.value = "";
    showList();
}

function showList(){
    var listItem = document.getElementById("todo-list");
    listItem.innerHTML = "";
    for(var i=0; i<inputs.length; i++){
        listItem.innerHTML +=`<li> ${inputs[i]} <button id="edit-button" onclick="editTodo(${i})">Edit </button> <button id="delete-button" onclick="deleteTodo(${i})">Delete </button></li>`
    }
}

function deleteTodo(index){
    inputs.splice(index,1);
    localStorage.setItem("inputs", JSON.stringify(inputs))
    showList();
}

function editTodo(index){
    inputElement.value = inputs[index];
    editIndex = index;
    addButton.style.display = "none";
    updateButton.style.display = "inline-block";
}

function updateTodo(){
    if(inputElement.value === ""){
        alert("Please add something!")
        return;
    }

//update todo
    inputs[editIndex] = inputElement.value;
    inputElement.value = "";

//update button
    addButton.style.display ="inline-block";
    updateButton.style.display ="none";
    localStorage.setItem("inputs", JSON.stringify(inputs))
    showList();
}
