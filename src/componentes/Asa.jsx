import React, { useEffect } from "react";
import { useState } from "react";
import { personajesFun } from "../funciones/funcion";
import { Paginacion } from "./Pagin";
import { personajesFunlen } from "../funciones/funcion";

const As = () => {
  const [personajes, setPersonaje] = useState(null);
  useEffect(() => {
    personajesFun(setPersonaje);
  }, []);

  const [leng, setLeng] = useState(null);
  useEffect(() => {
    personajesFunlen(setLeng);
  }, []);

  const [pagina, setPagina] = useState(1);
  const [porPagina, setPorPagina] = useState(4);

  return (
    <>
      <div class="accordion accordion-flush " id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              PERSONAJES MARVEL
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <div className="container">
                <div className="row">
                  {personajes != null
                    ? personajes
                        .slice(
                          (pagina - 1) * porPagina,
                          (pagina - 1) * porPagina + porPagina
                        )
                        .map((personaje) => (
                          <div
                            key={personaje.id}
                            className="col-lg-3 col-md-6 col-sm-1 mb-4"
                          >
                            <div className="card">
                              <img
                                className="card-img-top img-fluid img-1"
                                src={`${personaje.thumbnail.path}.${personaje.thumbnail.extension}`}
                                alt="character"
                              />
                              <div className="card-body body-1">
                                <h5 className="card-title">{personaje.name}</h5>
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
  );
};

export default As;
