// const tasks = [
//     {
//         id: 1,
//         text: 'Complete Halba App',
//         day: 'Nov 11th at 9:00am',
//         reminder: true,
//     },
//     {
//         id: 2,
//         text: 'Complete Halaqot App',
//         day: 'Nov 12nd at 10:00am',
//         reminder: true,
//     },
//     {
//         id: 3,
//         text: 'Complete Qomary App',
//         day: 'Nov 13th at 11:00am',
//         reminder: false,
//     },
// ]

import Task from "./Task"

const Tasks = ({tasks, onDelete, onToggle}) => {    
    return (
        <>
          {tasks.map((task) => (
            <Task
                key={task.id}
                task={task}
                onDelete={onDelete}
                onToggle={onToggle}
            />
            ))}  
        </>
    )
}

export default Tasks
