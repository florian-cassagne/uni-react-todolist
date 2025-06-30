function TaskFormTitle ({title, onChange}) {
  return (
    <div>
      <label htmlFor={"title"}>
        Nom de la tâche
      </label>
      <input type={"text"}
             name={"title"}
             defaultValue={title || ''}
             onChange={onChange}
             required/>
    </div>
  )
}

export default TaskFormTitle