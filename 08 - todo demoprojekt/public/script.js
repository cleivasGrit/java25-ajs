fetch('/api/todos')
    .then(response => response.json())
    .then(todos => {
        console.log(todos);
        const todoListEl = document.getElementById('todo-list');
        todos.forEach(todo => {
            const li = document.createElement('li');
            li.innerText = todo.task;
            if(todo.done) li.style.textDecoration = "line-through";
            todoListEl.appendChild(li);
        });
    });