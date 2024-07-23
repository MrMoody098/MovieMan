import './App.css';
import MoviesList from './components/MoviesList';
import NavBar from './components/NavBar.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
      </header>
      <main>
        <MoviesList />
      </main>
    </div>
  );
}

export default App;
