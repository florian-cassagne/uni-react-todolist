import {useTasksContext} from "../../context/context.jsx";
import {FilterType} from "../../data/FilterType.js";


export default function TaskFilter() {
  const [data, setData] = useTasksContext();

  const handleFilter = filter => {
    setData({ ...data, filterBy: filter });
  };

  return (
    <>
      <h2>
        Filtrer les tâches ({data.filterBy})
      </h2>
      <div className="task-filter">
        <button onClick={() => handleFilter(FilterType.DONE)}>Terminées</button>
        <button onClick={() => handleFilter(FilterType.PENDING)}>En cours</button>
        <button onClick={() => handleFilter(FilterType.IMPORTANT)}>Importantes (priorité &gt;= 7)</button>
        <button onClick={() => handleFilter(FilterType.ALL)}>Tout afficher</button>
      </div>
    </>
  );
}