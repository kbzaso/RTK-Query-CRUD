import { useCreateTaskMutation } from "../api/apiSlice";

function TaskForm(){
    const [ createTask ] = useCreateTaskMutation()
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e)
        const name = e.target.elements.name.value;
        const description = e.target.elements.description.value;
        const completed = e.target.elements.completed.checked;

        createTask({
            name, description, completed
        })
    }
    return(
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name="name" />
            <input type="text" name="description" />
            <input type="checkbox" name="completed" />
            <button>Add task</button>
        </form>
    )
}

export default TaskForm;