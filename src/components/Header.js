import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props, onAdd) => {
  return (
    <>

    <header className='header' >
    <h1>{props.titleofHeader}</h1>
    <Button color = 'green' text = 'Add task' onClick = {onAdd}/>
    
    </header>
    </>
  )
}

Header.defaultProps ={
    titleofHeader: "Task Manager",
}
  
Header.propTypes = {
    titleofHeader: PropTypes.string.isRequired
}
const headingStyle = {
    color : 'black',
    
    backgroundColor : 'lightgray',
}
export default Header