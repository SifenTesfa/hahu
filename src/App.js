import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Prices from './components/Prices';
import Aboutus from './components/Aboutus';
import Learn from './components/Learn';
import Payment from './components/Payment';
import Company from './components/Company';
import Aboutus2 from './components/Aboutus2';
import Footer from './components/Footer';
import Search from './components/Search';
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <div >
       <Navbar/>
       <Home/>
       <Services/>
       <Aboutus/>
       <Prices/>
       <Learn/>
       <Payment/>
       <Company/>
       <Aboutus2/>
       <Footer/>
       
    </div>
  );
}
function Layout() {
  return (
    <div >
      <Routes>
     <Route path='/Search' element={<Search/>}/>
     </Routes>
      
    </div>
  );
}



export default App;
