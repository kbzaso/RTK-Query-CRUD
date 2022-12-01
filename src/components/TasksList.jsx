import {
    useGetTasksQuery, 
    useDeleteTaskMutation,
    useUpdateTaskMutation
  } from "../api/apiSlice";
  
  const TasksList = () => {
    const { data: tasks, isLoading, isError, error } = useGetTasksQuery();
    const [ deleteTask ] = useDeleteTaskMutation()
    const [ updateTask ] = useUpdateTaskMutation()
  
    if (isLoading) return <div>Loading...</div>;
    else if (isError) return <div>Error: {error.message}</div>;
  
    return (
      <ul>
    {tasks.map(task => (
        <li key={task.id}>
            <h3>{task.name}</h3>
            <p>{task.description}</p>
            <button onClick={() => deleteTask(task.id)}>
              delete
            </button>
            <input
            checked={task.completed}
            onChange={(e) => {
                updateTask({
                  ...task,
                  completed: e.target.checked
                })
            }} type="checkbox" id={task.id} />
            <label htmlFor={task.id}>Completed</label>
        </li>
    ))}
      </ul>
    );
  };
  
  export default TasksList;