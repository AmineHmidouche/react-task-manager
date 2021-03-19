import Task from './Task'
const Tasks = ({tasks , onDelete , onToggle}) => { 

    

        return (
            <>
            {tasks.map((task)=>(
                // <h3>{task.text}</h3>

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
