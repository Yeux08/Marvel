import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { eventosFun } from "../funciones/funcion";
import { eventosFunLen } from "../funciones/funcion";
import { Paginacion } from "./Pagin";


const Events = () =>{
const [events, setEventos] = useState(null);
useEffect(()=>{
    eventosFun(setEventos)
},[]);

const [leng, setLeng] = useState(null);
  useEffect(() => {
    eventosFunLen(setLeng);
  }, []);

  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(4);

return(
<>

<div class="accordion accordion-flush " id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
        EVENTOS MARVEL
      </button>
    </h2>
    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">

      <div className="container">
        <div className="row">
          {events != null
            ? events.slice(
              (pagina - 1) * porPagina,
              (pagina - 1) * porPagina + porPagina)
              .map((Event) => (
                <div
                  key={Event.id}
                  className="col-lg-3 col-md-6 col-sm-1 mb-4"
                >
                  <div className="card">
                    <img
                      className="card-img-top img-fluid img-1"
                      src={`${Event.thumbnail.path}.${Event.thumbnail.extension}`}
                      alt="character"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{Event.title}</h5>
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

export default Events;