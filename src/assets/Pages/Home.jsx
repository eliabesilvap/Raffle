import Nav from "../Components/Nav";
import NameDraw from "../Components/NameDraw";
import { useEffect } from "react";


const Home = () => {
    useEffect(()=>{
      document.title= "Home | SorteZoom"
    })
    return (
        <div>
          <Nav/>
          <NameDraw />


        </div>
    );
};

export default Home;