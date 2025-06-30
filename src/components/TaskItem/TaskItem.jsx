import '../../App.css'
import "./taskitem.css"
import {useTasksContext} from "../../context/context.jsx";

function TaskItem({task}) {

  const [data, setData] = useTasksContext()

  const handleTaskDone = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const updatedTask = task
    updatedTask.done = !updatedTask.done;

    setData({
      ...data,
      tasks: data.tasks.map(
        (task) => (task.id === updatedTask.id) ? updatedTask : task
      )
    });

  }

  const handleTaskDeletion = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const taskId = task.id;

    setData({
      ...data,
      tasks: data.tasks.filter(task => task.id !== taskId)
    });
  }


  const handleTaskEditing = (event) => {
    event.preventDefault();
    event.stopPropagation();

    setData({
      ...data,
      taskInEdit: task
    })
  }

  return (
    <>
        <div  className={`task
              ${task.done ? 'done' : ''}
              text-left
              ${data.taskInEdit?.id === task.id ? 'in-edit' : ''} 
              `}
              style={{backgroundColor: task.color}}
              onClick={handleTaskEditing}
        >
              <span className={'task-content task-title'}>
                {task.title}
              </span>

              <div className={'task-infos task-content text-left'}>
                <span>Priorité : <b>{task.priority || "-"}</b></span>
                <span>Date : <b>{task.date}</b></span>
              </div>

            <div className={'task-nav task-content'}>
                <button onClick={handleTaskDone}>✅</button>
                <button onClick={handleTaskEditing}>✏️</button>
                <button onClick={handleTaskDeletion}>🗑️</button>
            </div>
        </div>
    </>
  )
}

export default TaskItem
