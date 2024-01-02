const TodoItem2 = () => {
    let TodoName = 'Read Alchemist';
    let TodoData = '24/12/2022';
    return <div class = "todo-container">
    <div class="row">
    <div class="col-6">{TodoName}</div>
    <div class="col-4">{TodoData}</div>
    <div class="col-2"><button type="button" class="btn btn-danger">Delete</button></div>
  </div>
  </div>
};

export default TodoItem2;