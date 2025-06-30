function TaskFormPriority ({priority, onChange}) {
  return (
    <div>
      <label htmlFor={"priority"}>
        Priorité
      </label>
      <select name="priority"
              id="priority"
              value={priority}
              onChange={onChange}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(p => (
          <option key={p} value={p}>{p}</option>
        ))}
      </select>
    </div>
  )
}

export default TaskFormPriority
