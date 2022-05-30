
import './App.css';
import CountDownTimer from './components/CountDownTimer';

function App() {
  return (
    <div className="App">
        <div className="timer">
          <CountDownTimer minutes={0} seconds={60}></CountDownTimer>
        </div>
    </div>
  );
}

export default App;
