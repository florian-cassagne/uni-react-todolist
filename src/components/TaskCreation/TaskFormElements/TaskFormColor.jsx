function TaskFormColor ({color, onChange}) {
  return (
    <div>
      <label htmlFor={"color"}>Couleur </label>
      <input
        type="color"
        id="color"
        name="color"
        onChange={onChange}
        defaultValue={color || "#400000"}
      />
    </div>
  )
}

export default TaskFormColor