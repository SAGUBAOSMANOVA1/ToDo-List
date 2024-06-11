let tasks = [];

function renderTasks(filter = 'all') {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    if (filter === 'all' || (filter === 'complete' && task.completed) || (filter === 'incomplete' && !task.completed)) {
      const li = document.createElement('li');
      li.classList.add('task');
      li.innerHTML = `
        <span class="task-name ${task.completed ? 'completed' : ''}" onclick="toggleTask(${index})">
          <i class="far ${task.completed ? 'fa-check-circle' : 'fa-circle'}"></i>
          ${task.name}
        </span>
        <i class="fas fa-times delete-task" style="color: #ff3d3d;" onclick="removeTask(${index})"></i>
      `;
      taskList.appendChild(li);
    }
  });
}

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskName = taskInput.value.trim();
  if (taskName !== '') {
    tasks.push({ name: taskName, completed: false });
    taskInput.value = '';
    renderTasks();
  }
}

function removeTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function showAll() {
  renderTasks('all');
}

function showComplete() {
  renderTasks('complete');
}

function showIncomplete() {
  renderTasks('incomplete');
}

function deleteAll() {
  tasks = [];
  renderTasks();
}

renderTasks();
