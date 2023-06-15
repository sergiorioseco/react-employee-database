import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


const Buscador = ({ usuarios, setUsuariosFiltrados }) => {
  const [textoBusqueda, setTextoBusqueda] = useState('');

  const buscarUsuarios = () => {
    if (textoBusqueda === '') {
      setUsuariosFiltrados(usuarios);
    } else {
      const usuariosFiltrados = usuarios.filter((usuario) =>
        Object.values(usuario).some((valor) =>
          String(valor).toLowerCase().includes(textoBusqueda.toLowerCase())
        )
      );

      setUsuariosFiltrados(usuariosFiltrados);
    }
  };

  useEffect(() => {
    buscarUsuarios();
  }, [textoBusqueda, buscarUsuarios]);

  const handleChange = (e) => {
    setTextoBusqueda(e.target.value);
  };

  return (
    <form className="buscador">
      <input
        type="text"
        placeholder="Buscar Colaboradores"
        value={textoBusqueda}
        onChange={handleChange}
      />
    </form>
  );
};

Buscador.propTypes = {
  usuarios: PropTypes.array.isRequired,
  setUsuariosFiltrados: PropTypes.func.isRequired
};

export default Buscador;
