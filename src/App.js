import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'


//class component
import React from 'react';


//function component
function App() {

  const [showAddTask, setShowAddTask] =useState(true)
  //state is immutable
  //function to update task -> setTasks because tasks is immutable!! so we can't do tasks.push()
  // right now default is used
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Lunch Date',
      day: 'Feb 5th at 3:30pm',
      reminder: true,
    
    },
    {
      id: 3,
      text: 'Case Study',
      day: 'Feb 5th at 4:30pm',
      reminder: true,
    }
])
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
  const toggleReminder = (id) => {
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
