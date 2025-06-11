// Add task globally so checker and other functions can use it
function addTask(taskText, save = true) {
    const taskList = document.getElementById('task-list');
    const li = document.createElement('li');
    li.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    removeBtn.onclick = function () {
        taskList.removeChild(li);
        removeFromLocalStorage(taskText);
    };

    li.appendChild(removeBtn);
    taskList.appendChild(li);

    if (save) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }
}

// Load saved tasks from localStorage on page load
function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false));
}

// Remove a task from localStorage
function removeFromLocalStorage(taskText) {
    let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks = storedTasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(storedTasks));
}

// DOM Ready
document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');

    loadTasks(); // Load saved tasks

    // Add task on button click
    addButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }
        addTask(taskText);
        taskInput.value = '';
    });

    // Add task on pressing Enter
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim();
            if (taskText === '') {
                alert('Please enter a task.');
                return;
            }
            addTask(taskText);
            taskInput.value = '';
        }
    });
});

