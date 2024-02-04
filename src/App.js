import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import PropTypes from 'prop-types'

function App() {
  const name = "shubham"
  const age = 25

  return (
    <div className="container">
      <Header titleofHeader = "Task manager" />
    </div>
  );
}


export default App;
