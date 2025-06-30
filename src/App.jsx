import React, { useState } from 'react'
import './App.css'
import {Task} from "./models/Task.js";
import TaskItem from "./components/TaskItem/TaskItem.jsx";
import TaskCreation from "./components/TaskCreation/TaskCreation.jsx";
import {useTasksContext} from "./context/context.jsx";
import TaskEdition from "./components/TaskCreation/TaskEdition.jsx";
import TaskSorter from "./components/TaskSorter/TaskSorter.jsx";
import {SortType} from "./data/SortType.js";
import TaskFilter from "./components/TaskFilter/TaskFilter.jsx";
import {FilterType} from "./data/FilterType.js";
import TaskStats from "./components/TaskStats/TaskStats.jsx";
import TaskResearcher from "./components/TaskResearcher/TaskResearcher.jsx";

function App() {

  const [data] = useTasksContext()

  const [taskSearch, setTaskSearch] = useState('')

  let tasksDisplay = [...data.tasks]

  if(data.filterBy === FilterType.DONE){
    tasksDisplay = tasksDisplay.filter(task => task.done)
  }
  else if(data.filterBy === FilterType.PENDING){
    tasksDisplay = tasksDisplay.filter(task => !task.done)
  }
  else if(data.filterBy === FilterType.IMPORTANT){
    tasksDisplay = tasksDisplay.filter(task => task.priority >= 7)
  }


  if(data.sortBy === SortType.PRIORITY){
    tasksDisplay.sort((a,b) => b.priority - a.priority);
  }
  else if(data.sortBy === SortType.DATE){
    tasksDisplay.sort((a,b) => new Date(a.date) - new Date(b.date));
  }
  else if(data.sortBy === SortType.ALPHA){
    tasksDisplay.sort((a,b) =>
      a.title.localeCompare(b.title, { sensitivity: 'base' })
    );
  }

  tasksDisplay = tasksDisplay.filter(task =>
    task.title.toLowerCase().includes(taskSearch.toLowerCase())
  );


  return (
    <>
      <div>
        <h1>Todo-list</h1>

        <TaskStats />

        { data.taskInEdit ?
          <TaskEdition task={data.taskInEdit}/>
        :
          <TaskCreation/>
        }

        <TaskFilter />

        <TaskSorter />

        <TaskResearcher
          taskSearch={taskSearch}
          setTaskSearch={setTaskSearch}
        />

          <div className={'tasks'}>
              {
                tasksDisplay.map((task, index) => (
                      <TaskItem key={index} task={task}/>
                  ))
              }
          </div>
      </div>
    </>
  )
}

export default App
