import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState, useEffect } from 'react'


//JSON SERVER
// helps create mock rest API with our own data

//class component
import React from 'react';


//function component
function App() {

  const [showAddTask, setShowAddTask] =useState(true)
  //state is immutable
  //function to update task -> setTasks because tasks is immutable!! so we can't do tasks.push()
  // right now default is used
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    const getTasks = async() => {
      const tsksFromServer = await fetchtasks()
      setTasks(tsksFromServer)
    }
    getTasks()
  },[])

  const fetchtasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data=await res.json()

    return data
    // console.log(data)

  }
  //add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task }
    setTasks([...tasks, newTask])
    console.log(task)
  }

  //Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle reminder
  const toggleReminder = async (id) => {
    await fetch(`http://localhost/5000/tasks/${id}`,{
      method: 'DELETE',
    })

    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }
  return (
    <div className='container'>
    <Header title='Task Tracker' onAdd={() => 
      setShowAddTask(!showAddTask)} showAdd = {showAddTask}/>  
    {showAddTask && <AddTask onAdd = {addTask}/>}
    {tasks.length > 0 ? <Tasks tasks={tasks} 
    onDelete = {deleteTask} onToggle = {toggleReminder}/> : "No tasks remaining"}
    {/* //to retrieve this prop inside component put params in Header.js !! */}
    </div>
  );
}

//class component
/* class App extends React.Component {
  render(){
    return(
      <h1>Hello</h1>
    );
  }
} */

export default App;
