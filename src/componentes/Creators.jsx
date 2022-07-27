import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { cratorsFun } from "../funciones/funcion";
import { cratorsFunLen } from "../funciones/funcion";
import { Paginacion } from "./Pagin";


const Crators = () =>{
const [crators, setcrators] = useState(null);
useEffect(()=>{
    cratorsFun(setcrators)
},[]);

const [leng, setLeng] = useState(null);
  useEffect(() => {
    cratorsFunLen(setLeng);
  }, []);

  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(4);

return(
<>

<div class="accordion accordion-flush " id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingtree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsetree" aria-expanded="false" aria-controls="flush-collapsetree">
        CREADORES MARVEL
      </button>
    </h2>
    <div id="flush-collapsetree" class="accordion-collapse collapse" aria-labelledby="flush-headingtree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">

      <div className="container">
        <div className="row">
          {crators != null
            ? crators.slice(
              (pagina - 1) * porPagina,
              (pagina - 1) * porPagina + porPagina)
              .map((crator) => (
                <div
                  key={crator.id}
                  className="col-lg-3 col-md-6 col-sm-1 mb-4"
                >
                  <div className="card">
                    <img
                      className="card-img-top img-fluid img-1"
                      src={`${crator.thumbnail.path}.${crator.thumbnail.extension}`}
                      alt="character"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{crator.title}</h5>
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

export default Crators;