
import { Footer, Navbar, Hero } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";



const App = () => (
  <div className="bg-image bg-center overflow-hidden">

          <BrowserRouter>
       
                 <Hero />

              <Routes>
                
                  <Route path="/About" element={<About/>} />
                  
                </Routes>
                
            
            <Footer />
          
          
        
      </BrowserRouter>

  
        
        
        
      </div>
   
);

export default App;
