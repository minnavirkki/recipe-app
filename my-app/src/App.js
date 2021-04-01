import logo from './logo.svg';
import './App.css';
import Nav from "./Components/Nav";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import { BrowserRouter as Router } from 'react-router-dom';

const App =() => {
  return (
    <Router>
        <Main />
        <Nav />
        <Footer />
    </Router>
  );
}

export default App;
