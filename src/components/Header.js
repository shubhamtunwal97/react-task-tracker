import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
  return (
    <>

    <header className='header' >
    <h1>{props.titleofHeader}</h1>
    <Button color = 'green' text = 'Add task' onClick/>
    
    </header>
    </>
  )
}

Header.defaultProps ={
    titleofHeader: "No titel defined",
}
  
Header.propTypes = {
    titleofHeader: PropTypes.string.isRequired
}
const headingStyle = {
    color : 'black',
    
    backgroundColor : 'lightgray',
}
export default Header