document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById("todo-input");
    const addTaskButton = document.getElementById("add-task-btn");
    const todoList = document.getElementById("todo-list");

    // storage in the Array
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach((task) => renderTask(task));

    addTaskButton.addEventListener('click', () => {
        const taskText = todoInput.value.trim()
        if (taskText === "") return;
        const newTask = {
            id: Date.now(),
            text: taskText,
            completed: false,
        }
        tasks.push(newTask)
        saveTasks();
        todoInput.value = "";

        // Render the new task immediately
        renderTask(newTask);
    })

    // render task function 
    function renderTask(task) {
        const li = document.createElement('li');
        li.setAttribute('data-id', task.id);
        if (task.completed) li.classList.add('completed');
        li.innerHTML = `
        <div class="flex items-center justify-between p-2">
            <span>${task.text}</span>
            <div class ="bg-red-500 p-1 rounded">
            <button class = "text-white">Delete</button>
            </div>
        </div>
            `;
        li.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') return;
            task.completed = !task.completed;
            li.classList.toggle('completed');
            saveTasks();
        });

        li.querySelector('button').addEventListener('click', (e) => {
            e.stopPropagation();  // prevent toggle from firing
            tasks = tasks.filter(t => t.id !== task.id);
            li.remove();
            saveTasks();
        }); // query selector can pass elements, class

        todoList.appendChild(li);
    }

    // save task to local storage
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));

    }
    // load task from local storage
})
