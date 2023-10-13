import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/dessert_anatomy" element={<Home />} />
          <Route path="/dessert_anatomy/menu" element={<Menu />} />
        </Routes>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
