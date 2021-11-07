import AddTask from "./AddTask"
import Tasks from "./Tasks"


const TaskManager = ({tasks, showAddTask, addTask, deleteTask, onToggle}) => {
    return (
        <>
            {showAddTask && <AddTask onAdd={addTask} />}
            {
            tasks.length > 0 ?
                <Tasks
                tasks={tasks}
                onDelete={deleteTask}
                onToggle={onToggle}
                /> 
                : 'No Tasks'
            }
        </>
    )
}

export default TaskManager
