import { BrowserRouter, Route, Switch} from 'react-router-dom';
import LandingPage from './componentes/LandingPage/LandingPage.jsx';
import Home from './componentes/home/Home.jsx'
import CreatePokemon from './componentes/createPokemon/CreatePokemon.jsx'
import DetailPokemon from './componentes/DetailPokemon/DetailPokemon.jsx'
import './App.css';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route exact path='/pokemons' component={Home}/>
        <Route exact path='/pokemons/create' component={CreatePokemon}/>
        <Route exact path='/pokemons/:id' component={DetailPokemon}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
