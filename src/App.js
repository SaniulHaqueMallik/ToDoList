import './App.css';
import {useState} from "react"
import {Task} from './Task'

function App() {
  const [todoList,setTodoList] = useState([]);
  const [newTask, setNewTask]= useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value)}; //we are using event to grab the value of the input

  const addTask = () => {
    // // the next list will make an arrey for todolist and add newtask to todolist
    // const newTodoList = [...todoList, newTask];
    // setTodoList(newTodoList);

    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length -1].id +1 ,
      taskName: newTask,
      completed: false,
    };
    setTodoList([...todoList, task]);
  };
  // like ---if 

  // const deleteTask = (taskName) => {
  //   const newTodoList = todoList.filter((task) => {
      // if(task === taskName){
      //   return false;
      // }{
      //   return true;
      // }
      const deleteTask = (id) => {
        const newTodoList = todoList.filter((task) => {
      return task.id !== id;
    });
    setTodoList(newTodoList); 

  };
  
  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if(task.id === id) {
          return { ...task, completed: true};
        }else{
          return task;
        }
      })
    )

  }

    return (
    <div className="App">
      <div className='addTask'>
        <input onChange={handleChange}/>
        <button onClick={addTask}> Add Task</button>
      </div>
      <div className='list'>
       {todoList.map((task) => {
           return <Task taskName={task.taskName} id={task.id} deleteTask={deleteTask} completed={task.completed} completeTask={completeTask}/>;
       })}
      </div>
      
    </div>
  );
}

export default App;
