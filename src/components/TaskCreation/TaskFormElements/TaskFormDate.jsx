function TaskFormPriority ({date, onChange}) {
  return (
    <div>
      <label htmlFor={"date"}>Date </label>
      <input id="date"
             name="date"
             type="date"
             defaultValue={date || new Date().toISOString().slice(0,10)}
             onChange={onChange}
             required />
    </div>
  )
}

export default TaskFormPriority
