
import './css/App.css'
import NavBar from './components/Navbar';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <main className="main-content">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
      </Routes>
    </main>
    </div>
  );
}

export default App

