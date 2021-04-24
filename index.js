let addToDoButton = document.getElementById('add');
let sno = document.getElementById('sn');
let todoContainer = document.getElementById('todo-tittle');
let todoDesc = document.getElementById('todo-desc');
let inputField = document.getElementById('title');
let inputDesc = document.getElementById('input-desc');
sno = 1;
addToDoButton.addEventListener('click', function() {
    var paragraph = document.createElement('p');
    var desc = document.createElement('p');
    var del = document.createElement('button');

    desc.innerText = inputDesc.value;
    todoDesc.appendChild(desc);
    paragraph.innerText = inputField.value;
    todoContainer.appendChild(paragraph);
    sno++;
    inputField.value = '';
    inputDesc.value = '';
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration = 'line-through';
        desc.style.textDecoration = 'line-through';
    })
    paragraph.addEventListener('dblclick',function(){
        todoContainer.removeChild(paragraph);
        todoDesc.removeChild(desc);
    })
    desc.addEventListener('dblclick',function(){
        todoContainer.removeChild(paragraph);
        todoDesc.removeChild(desc);
    })
})