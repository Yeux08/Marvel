import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { storiesFun } from "../funciones/funcion";
import { storiesFunLen } from "../funciones/funcion";
import { Paginacion } from "./Pagin";


const Stories = () =>{
const [stories, setstories] = useState(null);
useEffect(()=>{
    storiesFun(setstories)
},[]);

const [leng, setLeng] = useState(null);
  useEffect(() => {
    storiesFunLen(setLeng);
  }, []);

  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(4);

return(
<>

<div class="accordion accordion-flush " id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
        STORIES MARVEL
      </button>
    </h2>
    <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">

      <div className="container">
        <div className="row">
          {stories != null
            ? stories.slice(
              (pagina - 1) * porPagina,
              (pagina - 1) * porPagina + porPagina)
              .map((storie) => (
                <div
                  key={storie.id}
                  className="col-lg-3 col-md-6 col-sm-1 mb-4"
                >
                  <div className="card">
                   
                    <div className="card-body">
                      <h5 className="card-title">{storie.title}</h5>
                    </div>
                  </div>
                </div>
              ))
            : "no hay personajes"}
        </div>
      </div>
      <Paginacion pagina={pagina} setPagina={setPagina} maximo={leng / porPagina} />
      </div>
    </div>
  </div>
</div>

</>

)


}

export default Stories;