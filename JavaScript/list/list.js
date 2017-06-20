var todos = ["buy new turtle"];

var input = prompt("what would you like to do?");



while (input !== "quit") {
    if (input === "list") {
        console.log(todos);
    } else if (input === "new") {

        var newTodo = prompt("enter new todo");

        todos.push(newTodo);
    }
    input = prompt("what would you like to do?");
}
console.log("ok, you quit the app");
