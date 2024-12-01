import { BrowserRouter,  Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Homepage from "./pages/Homepage";
import Formpage from "./pages/Formpage"
import Animalspage from "./pages/Animalspage";
import Animaldetail from "./pages/Animaldetail";



function App() {
  

  return (
    
        <div className="bg-[#fed877]">
    
    <BrowserRouter>
        <Routes>

          <Route path="/" element={<MainLayout />}>

            <Route index element={<Homepage />} />
          <Route path="/form" element={<Formpage/>   }   />
            <Route path="/animals" element={<Animalspage/>} />
             <Route path="/animals/:id" element={<Animaldetail />} /> *
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
