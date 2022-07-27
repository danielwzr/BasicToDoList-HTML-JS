const inputToDo = document.querySelector('#inputtodo');
const btnAdd = document.querySelector('#addbtn');
const tasksElement = document.querySelector('#tasks')
const tasksArray = [];
let elementIndex = 0;

btnAdd.addEventListener('click', (e)=>{
     inputToDo.value ? addTask(inputToDo.value) : alert('insira algo');
});

const addTask = (task) => {
    tasksArray.push(task);
    const el = document.createElement("p");
    el.setAttribute('id', `task${elementIndex}`)
    el.innerHTML = 
    `- ${task} <button onclick="removeTask(event)" name="task${elementIndex}"> Remove </button> 
    </br>`;
    tasksElement.appendChild(el);
    inputToDo.value = "";
    elementIndex++;
}

function removeTask(e) {
    const el = document.getElementById(e.target.name);
    el.remove();
}

inputToDo.addEventListener('keypress', (e)=>{
    e.keyCode === 13 && (inputToDo.value ? addTask(inputToDo.value) : alert('insira algo'))
})