const esVendedor = (usuarioId, propiedadUsuarioId) => {
  return usuarioId === propiedadUsuarioId;
};

const formatearFecha = (fecha) => {
  const nuevaFecha = new Date(fecha).toISOString().slice(0, 10);

  const opciones = {
    wekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return new Date(nuevaFecha).toLocaleDateString('es-MX', opciones)
  
};

export { esVendedor, formatearFecha };
