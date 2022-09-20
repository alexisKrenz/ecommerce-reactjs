import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import './components/ItemListConteiner.css';

function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer greeting="Elija de nuestros finos productos"/>
    </>
  );
}

export default App;
