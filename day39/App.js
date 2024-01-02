import AppName from "./AppName";
import AddTodo from "./AddTodo";
import TodoItem1 from "./TodoItem1";
import TodoItem2 from "./TodoItem2";
import "./App.css";

const App = ()=> {
  return <center class= "todo-container">
    <AppName/>
    <AddTodo/>
    <TodoItem1/>
    <TodoItem2/>
  </center>
}

export default App;