
import '../styles/App.css';
import ReactDOM from 'react-dom';
import render from './render';

const App = () => {
  return (
    <div id="main">
      <render/>
    </div>
    

  )
}


ReactDOM.render(<App />, document.getElementById('root'));