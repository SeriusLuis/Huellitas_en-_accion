
import {Routes , Route, Navigate,  } from "react-router-dom"
import {Navbar} from "../Component/Navbar"
import Productos from "../Page/Productos";
import Servicios from "../Page/Servicios";
import Video from "../Page/Video";
  

 function  AppRoute  ()  {
  return(
    <>
    <Navbar/>
    <Routes>
        <Route>
           <Route path="Video" element={<Video />} />
          <Route path="Servicios" element={<Servicios />} />
          <Route path="Productos" element={<Productos />} />
          <Route path="/" element={<Navigate to="/Video" />} />
      
        </Route>
      </Routes>
    </>
  ); 
}

 export default AppRoute;

