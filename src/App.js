import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import PropTypes from 'prop-types'
import { useState } from 'react';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const name = "shubham"
  const age = 25
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Hangout with Team',
      day: 'Feb 6th at 10:00am',
      reminder: false,
    },
    {
      id: 3,
      text: 'Grocery Shopping',
      day: 'Feb 7th at 4:00pm',
      reminder: true,
    },
    {
      id: 4,
      text: 'Workout Session',
      day: 'Feb 8th at 6:00am',
      reminder: false,
    },
  ])

// Delete function
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id));
};


  return (
    <div className="container">
      <Header titleofHeader = "Task manager" />
      <AddTask />
      <Tasks tasks={tasks} onDelete = {deleteTask}/>
    </div>
  );
}


export default App;
