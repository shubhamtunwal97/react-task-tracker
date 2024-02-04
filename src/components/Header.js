import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <h1 style={headingStyle}>{props.titleofHeader}</h1>
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

    backgroundColor : 'gray',
}
export default Header