import { changeToDoColor } from '../components/todo-colors';


test('changeToDoColor changes a red todo into a green todo', () => {
  let initialState = {
    todos: [{ id:1, color: "red", name: "Clean the table"}]
  };

  let finalState = changeToDoColor(initialState,1);

  expect(finalState.todos).toEqual([
    { id: 1, color: "green", name: "Clean the table" }
  ]);

});
