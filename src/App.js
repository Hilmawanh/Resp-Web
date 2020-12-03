import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Info from './Components/InfoSection/Info'
import { BrowserRouter } from 'react-router-dom'
import Jumbotron from './Components/Jumbotron/Jumbotron'
import Hero from './Components/Hero/Hero'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Hero />
        <Info />
        <Jumbotron />
      </BrowserRouter>
    </div>
  );
}

export default App;
