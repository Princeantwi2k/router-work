import { BrowserRouter as Router,Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About';

import Contact from './Pages/Contact';
import ContactUs from './Pages/ContactUs';
import Footer from './Pages/Footer';
import Home from './Pages/Home';
import Nav from './Pages/Nav';
import Service from './Pages/Service';

function App() {
  return (
    <div>
      
    <Router>
   <Nav />
     <Route path="/" exact component={Home} />
     <Route path="/about" component={About} />
     <Route path="/service" component={Service} />
     <Route path="/contact" exact component={Contact} />
    <Route path="/contact/:id" component={ContactUs} />
     <Footer/>
    </Router>
    </div>
  );
}

export default App;
