import shortid from 'shortid';

export function changeToDoColor(state, id) {
  const todos = state.todos.map((todo) => {
    if (todo.id === id) {
      if(todo.color == "red"){
        todo.color = "green";
      } else {
        todo.color = "red";
      }
    }
    return todo;
  });
  return { todos };
}
