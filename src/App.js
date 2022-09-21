import './App.css';
import { Routes, Route} from "react-router-dom";
import Header from './Components/Shared/Header';
import Property from './Components/Properties/Property';
import Home from './Components/Home/Home';
import Footer from './Components/Shared/Footer';
import Contact from './Components/Contact';
import About from './Components/About/About';
import Service from './Components/Service/Service';
import SingleProperty from './Components/Properties/SingleProperty';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/property' element={<Property></Property>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/service' element={<Service></Service>}></Route>
        <Route path='/singleProperty' element={<SingleProperty></SingleProperty>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
    
  );
}

export default App;
