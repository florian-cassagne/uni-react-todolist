import '../../App.css'
import "./taskcreation.css"
import {useTasksContext} from "../../context/context.jsx";
import {Task} from "../../models/Task.js";
import TaskFormTitle from "./TaskFormElements/TaskFormTitle.jsx";
import TaskFormPriority from "./TaskFormElements/TaskFormPriority.jsx";
import TaskFormDate from "./TaskFormElements/TaskFormDate.jsx";
import TaskFormColor from "./TaskFormElements/TaskFormColor.jsx";


function TaskCreation() {

    const [data, setData] = useTasksContext()


    const handleTaskCreation = (event) => {
        event.preventDefault();

        const newTask = new Task({
            title: event.target.title.value,
            date: event.target.date.value,
            priority: event.target.priority.value,
            done: false,
            color: event.target.color.value
          }
        );

        setData({
          ...data,
          tasks: [...data.tasks, newTask]
        });
    }

  return (
    <>
      <div className={'task-editor'}>
        <h2>Créer une tâche</h2>

        <form onSubmit={handleTaskCreation} className={'task-editor-form'}>
          <TaskFormTitle/>
          <TaskFormDate/>
          <TaskFormPriority/>
          <TaskFormColor/>
          <button type={'submit'}>Ajouter la tâche</button>
        </form>
      </div>
    </>
  )
}

export default TaskCreation
