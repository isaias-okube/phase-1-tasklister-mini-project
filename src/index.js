const tasksList = document.querySelector('#tasks');

function deleteTask(event) {
   event.preventDefault();
  const taskItem = event.target.parentElement;
  tasksList.removeChild(taskItem);
}


const createTaskForm = document.querySelector('#create-task-form');
createTaskForm.addEventListener('submit', (event) => {
  event.preventDefault();



  
  const taskDescription = document.querySelector('#new-task-description').value;

  
  const taskItem = document.createElement('li');
  taskItem.innerText = taskDescription;

  
  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'x';
  deleteButton.addEventListener('click', deleteTask);
  
  
  taskItem.appendChild(deleteButton);

  tasksList.appendChild(taskItem);
})
