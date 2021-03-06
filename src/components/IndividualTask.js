import { FaTimes } from 'react-icons/fa'


const IndividualTask = ({ task,onDelete,onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick = {() => onToggle(task.id)}>
            {/* <h3>HIIII!</h3> */}
            <h3>{task.text} <FaTimes style={{color: 'red', cursor: 'pointer' }}
            onClick = {() => onDelete(task.id)}/></h3>
            <p>{task.day}</p>


        </div>
    )
}

export default IndividualTask
