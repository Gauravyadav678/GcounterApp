
import './App.css';
import StopWatch from './components/stopWatch';
import TypingWithG from './components/typing';
import CounterApp from './counter';


function App() {
  return (
    <div className="App">
      <>
      <h1>This is the counter App</h1>
      {/* <CounterApp/>
      <TypingWithG/> */}
      <StopWatch/>
      </>
    </div>
  );
}

export default App;
