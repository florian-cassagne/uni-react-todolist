import '../../App.css'
import "./taskcreation.css"
import {useTasksContext} from "../../context/context.jsx";
import TaskFormTitle from "./TaskFormElements/TaskFormTitle.jsx";
import TaskFormPriority from "./TaskFormElements/TaskFormPriority.jsx";
import TaskFormDate from "./TaskFormElements/TaskFormDate.jsx";
import TaskFormColor from "./TaskFormElements/TaskFormColor.jsx";
import {useEffect, useState} from "react";

function TaskEdition({task}) {

  const [data, setData] = useTasksContext()

  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [priority, setPriority] = useState(5)
  const [color, setColor] = useState('#101010')


  useEffect(() => {
    setTitle(task.title)
    setDate(task.date)
    setPriority(task.priority)
    setColor(task.color)
  }, [task])

  const handleTaskEdition = e => {
    e.preventDefault()
    const updated = {
      ...task,
      title,
      date,
      priority: Number(priority),
      color,
    }
    setData({
      ...data,
      taskInEdit: null,
      tasks: data.tasks.map(t =>
        t.id === updated.id ? updated : t
      )
    })
  }

  return (
    <>
        <div className={'task-edition'}>
            <h2>Éditer une tâche</h2>

            <form onSubmit={handleTaskEdition}
                  className={'task-editor-form'}
                  key={task.id}>
              <TaskFormTitle
                title={title}
                onChange={e => setTitle(e.target.value)}
              />
              <TaskFormDate
                date={date}
                onChange={e => setDate(e.target.value)}
              />
              <TaskFormPriority
                priority={priority}
                onChange={e => setPriority(e.target.value)}
              />
              <TaskFormColor
                color={color}
                onChange={e => setColor(e.target.value)}
              />
              <button type={'submit'}>Éditer la tâche</button>
            </form>
        </div>
    </>
  )
}

export default TaskEdition
