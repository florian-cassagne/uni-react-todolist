import {useTasksContext} from "../../context/context.jsx";


export default function TaskStats() {
  const [data] = useTasksContext();

  let tasksDone = data.tasks.filter(task => task.done)

  return (
    <>
      <div>
        <p>
          Tâches réalisées : <b>{tasksDone.length}</b> / <b>{data.tasks.length}</b> -
          ({Math.round((tasksDone.length*100)/data.tasks.length)} %)
        </p>
      </div>
    </>
  );
}