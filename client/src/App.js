import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Category from './components/Category/Category';
import Yelp from './components/Yelp/Yelp';
import Testimonies from './components/Testimonies/Testimonies';
import Instagram from './components/Instagram/Instagram';
import Support from './components/Support/Support';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Category />
      <Yelp />
      <Testimonies />
      <Instagram />
      <Support />
      <Footer />
    </div>
  );
}

export default App;
