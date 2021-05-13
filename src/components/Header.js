import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {

    return (
        <header className='header'>
            <h1 style={{color: 'red'}}>{props.title}</h1>
            <Button color='green' text={props.showAdd ? 'Close' : 'Add'} onClick=
            {props.onAdd}/>
        </header>
    )
}

//if nothing retrieved as prop
Header.defaultProps = {
    title: 'Task-Tracker',

}

Header.propTypes = {
    title: PropTypes.string,
}

//dynamic styling CSS IN JS!
// const headingStyle = {

// }

export default Header
