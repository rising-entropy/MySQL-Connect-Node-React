import logo from './logo.svg';
import './App.css';
import AllTasks from './components/AllTasks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container container-fluid">
          <h2 style={{margin: '20px auto'}}>Devang's Student Portal</h2>
          <h5 style={{marginBottom: '10px auto'}}>2019BTECS00058 - ADS Assignment 8</h5>
          <AllTasks/>
        </div>
      </header>
    </div>
  );
}

export default App;