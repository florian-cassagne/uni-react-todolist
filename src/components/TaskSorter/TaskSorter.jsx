import {useTasksContext} from "../../context/context.jsx";
import {SortType} from "../../data/SortType.js";


export default function TaskSorter() {
  const [data, setData] = useTasksContext();

  const handleSort = key => {
    setData({ ...data, sortBy: key });
  };

  return (
    <>
      <h2>
        Tri des tâches  ({data.sortBy})
      </h2>
      <div className="task-sorter">
        <button onClick={() => handleSort(SortType.DATE)}>Trier par date</button>
        <button onClick={() => handleSort(SortType.PRIORITY)}>Trier par priorité</button>
        <button onClick={() => handleSort(SortType.ALPHA)}>Trier A-Z</button>
      </div>
    </>
  );
}