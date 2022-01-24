import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';




function App() {
  return (
    <div>
      <header>
      <NavBar />
      <ItemListContainer />
      </header>
    </div>
  );
}

export default App;
