import NameDraw from "../Components/NameDraw"
import { useEffect } from "react";


export default function NameDrawPage() {
    useEffect(()=>{
      document.title= "Sorteio de nomes | SorteZoom"
    })
  return (
    <div>

      <NameDraw />

    </div>
  );
}