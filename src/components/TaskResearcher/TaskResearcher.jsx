import {useTasksContext} from "../../context/context.jsx";
import {SortType} from "../../data/SortType.js";


export default function TaskResearcher({taskSearch, setTaskSearch}) {
  const [data, setData] = useTasksContext();

  const handleChange = e => {
    setTaskSearch(e.target.value);
  };

  return (
    <div className={'my-1'}>
      <label htmlFor={"task-research"}>Rechercher une tâche </label>
      <input type={"text"}
             name={"task-research"}
             defaultValue={''}
             onChange={handleChange}
             required/>
    </div>
  );
}