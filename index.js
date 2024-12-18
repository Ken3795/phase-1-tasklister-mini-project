document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("create-task-form");
    const taskList = document.getElementById("tasks");
  
    // Handle form submission
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission behavior
  
      // Get the task description from the input field
      const taskDescription = document.getElementById("new-task-description").value;
  
      // Create a new list item to display the task
      const taskItem = document.createElement("li");
      taskItem.textContent = taskDescription;
  
      // Add a delete button to the task
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        taskList.removeChild(taskItem); // Remove the task from the list
      });
  
      // Append the delete button to the task item
      taskItem.appendChild(deleteButton);
  
      // Add the task item to the task list
      taskList.appendChild(taskItem);
  
      // Clear the input field after submission
      form.reset();
    });
  });
  