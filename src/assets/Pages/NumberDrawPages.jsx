import NumberDraw from "../Components/NumberDraw";
import { useEffect } from "react";


export default function NumberDrawPages() {
    useEffect(()=>{
      document.title= "Sorteio de números | SorteZoom"
    })

  return (
    <div>

      <NumberDraw />

    </div>
  );
}
