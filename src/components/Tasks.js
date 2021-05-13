import Button from './Button'
import IndividualTask from './IndividualTask'

const Tasks = ({tasks, onDelete, onToggle }) => {
    
    return (
        <>
        {tasks.map((task) => 
        (<IndividualTask key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>))}
        </>
    )
}

export default Tasks
