
import { useState } from 'react'
import AddTask from './AddTask'
import './App.css'
import { TasksProvider, useTasksContent } from './AppContext'
import TaskFilter from './TaskFilter'
import TaskList from './TaskList'

function App() {
  const [filterType, setFilterType] = useState('all');
  
  return (
    <>
    <div className='todo-form'>
    <h2 className='form__heading'>Simpe TodoApp</h2>
     <TasksProvider>
      <AddTask />
      <TaskFilter filterType={filterType} handleChooseTasksFilter={e => setFilterType(e.target.value)} />
      <TaskList filterType={filterType}/>
     </TasksProvider>
     </div>
    </>
  )
}

export default App
