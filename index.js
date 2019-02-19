//Create your todos//
var todos = ['fox', 'fix', 'face']

//It should have a function to display todos.//

function displayTodos() {
    console.log('My todos', todos);
}

//It should have a function to add todos//

function addTodo(todo) {
    todos.push(todo);
    displayTodos();
}  

//It should have a function to change todos//

function changeTodo(position, newValue) {
    todos[position] = newValue;
    displayTodos();
}

//it should have a function to dispaly todos//

function deleteTodo (position) {
    todos.splice(position, 1);
    displayTodos();
}

i=0                     //Initialization
say "hey" if i < 3      //condition
Increase i by 1         //final expression

for (var i = 0; i < 3; i++) {
    console.log('hey');
}
