import React from "react";

const Paginacion = ({
  paginaAnterior,
  paginaSiguiente,
  paginaactual,
  totalpaginas,
}) => {
  return (
    <div>
      {paginaactual > 1 ? (
        <button
          type="button"
          className="btn btn-info mr-1 mb-2"
          onClick={paginaAnterior}
        >
          &laquo; Anterior
        </button>
      ) : null}

      {paginaactual < totalpaginas ? (
        <button
          type="button"
          className="btn btn-info mr-1  mb-2"
          onClick={paginaSiguiente}
        >
          Siguiente &raquo;
        </button>
      ) : null}
    </div>
  );
};

export default Paginacion;
