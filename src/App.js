import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss';
import AllAssets from './pages/ContentPages/AllAssets/AllAssets';
import CharactersLibrary from './pages/ContentPages/Character-library/CharactersLibrary';
import LandingPage from './pages/LandingPage/LandingPage';


function App() {
  return (
    <div className="App">
     <Routes>
       <Route path="/" element={ <LandingPage/> }/>
       <Route path="/assets" element={ <AllAssets/> }/>
       <Route path="/character-library" element={ <CharactersLibrary/> }/>
     </Routes>
    </div>
  );
}

export default App;
