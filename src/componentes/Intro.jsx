import React, { Component } from "react";

class Int extends Component {
  render() {
    return (
      <>
        <div className="card">
          <img
            src="https://estaticos.muyinteresante.es/uploads/images/gallery/5beaba975bafe86f2c2b41c4/marvel-heroes_0.jpg"
            className="card-img-top"
            alt="imagen intro Marvel"
          ></img>
          <div className="card-body">
            <h5 className="card-title">Intro</h5>
            <p className="card-text text-1">
              Marvel Studios es un estudio de cine y una subsidiaria de Walt
              Disney Studios. La compañía fue fundada como Marvel Films por
              Marvel Entertainment Group. La división estuvo encabezada
              anteriormente por Avi Arad desde el 13 de mayo de 1993, como
              Presidente y Director Ejecutivo, hasta octubre de 1998, cuando
              asumió otras funciones dentro de la empresa, como Productor
              Ejecutivo para la producción cinematográfica del estudio
            </p>
            <a href="https://developer.marvel.com/" className="a">
              <button className="boton">
                <span class="text">API MARVEL</span>
              </button>
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Int;
