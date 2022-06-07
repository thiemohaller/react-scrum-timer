
import './App.css';
import CountDownTimer from './components/CountDownTimer';

function App() {
  return (
    <div className="App">
        <div className="timer">
          <CountDownTimer minutes={1} seconds={0}></CountDownTimer>
        </div>
    </div>
  );
}

export default App;
