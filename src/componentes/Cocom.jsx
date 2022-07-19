import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { comicsFun } from "../funciones/funcion";
import { comicsFunLen } from "../funciones/funcion";
import { Paginacion } from "./Pagin";


const Cocomp = () =>{
const [comics, setComics] = useState(null);
useEffect(()=>{
comicsFun(setComics)
},[]);

const [leng, setLeng] = useState(null);
  useEffect(() => {
    comicsFunLen(setLeng);
  }, []);

  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(4);

return(
<>

<div class="accordion accordion-flush " id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingtwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsetwo" aria-expanded="false" aria-controls="flush-collapseOne">
        COMICS MARVEL
      </button>
    </h2>
    <div id="flush-collapsetwo" class="accordion-collapse collapse" aria-labelledby="flush-headingtwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">

      <div className="container">
        <div className="row">
          {comics != null
            ? comics.slice(
              (pagina - 1) * porPagina,
              (pagina - 1) * porPagina + porPagina)
              .map((comic) => (
                <div
                  key={comic.id}
                  className="col-lg-3 col-md-6 col-sm-1 mb-4"
                >
                  <div className="card">
                    <img
                      className="card-img-top img-fluid img-1"
                      src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                      alt="character"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{comic.title}</h5>
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

export default Cocomp;