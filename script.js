// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim input value
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }
        const li = document.createElement('li'); // Create list item
        li.textContent = taskText;
        li.contains = ["classList.add"]
        const removeBtn = document.createElement('button'); // Create remove button
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';
        removeBtn.onclick = function () {
            taskList.removeChild(li); // Remove task when button is clicked
        };
        li.appendChild(removeBtn); // Append remove button to task
        taskList.appendChild(li);  // Add task to the list
        taskInput.value = ''; // Clear the input field
    }
    // Add task when button is clicked
    addButton.addEventListener('click', addTask);
    // Add task when Enter key is pressed
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
