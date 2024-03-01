let task;
let taskList = [];
let list = document.getElementById('list');
let listItems = document.getElementById('#list li');
let toDeleteTask = [];
let inpBox = document.getElementById('task');

function displayTask() {

    task = document.getElementById('task').value;

    if (task.trim() !== '') {

        taskList.push(task);

        let newTask = document.createElement('li');
        newTask.textContent = task;

        list.appendChild(newTask);
        inpBox.value = '';
    }
    else {
        alert('please enter something');
    }

}

function deleteAll() {

    for (i in taskList) {

        list.removeChild(list.firstChild);
    }
    console.log(taskList);
}

function completedTask(event) {

    let clickedTask = event.target;

    if (clickedTask.tagName == 'LI') {

        clickedTask.style = "background: #00FF00; text-decoration: line-through;";
    }

    toDeleteTask.push(clickedTask);
}

function deleteCompletedTask() {

    console.log(toDeleteTask);

    for (i in toDeleteTask) {

        list.removeChild(toDeleteTask[i]);
    }

    toDeleteTask = [];
}

inpBox.addEventListener('keydown', (e) => {

    if (e.keyCode === 13) {

        displayTask();
        inpBox.value = '';
    }

});

document.addEventListener('keydown', (e) => {

    if (e.keyCode === 46) {

        deleteCompletedTask();
    }

    if ( (e.ctrlKey && e.keyCode === 46) || (e.shiftKey && e.keyCode === 46)) {

        deleteAll();
    }

});

