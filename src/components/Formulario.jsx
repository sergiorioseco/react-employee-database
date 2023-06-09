import { useState, useEffect  } from 'react';
import Alert from './Alert.jsx';
import Listado from './Listado.jsx'
import PropTypes from 'prop-types';

const Formulario = ({listadoInicial}) => {
  const [formulario, setFormulario] = useState({
    id: '',
    nombre: '',
    correo: '',
    edad: '',
    cargo:'',
    telefono:''
  });

  const [error, setError] = useState(0);
  const [usuarios, setUsuarios] = useState(listadoInicial);

  useEffect(() => {
    console.log(usuarios);
  }, [usuarios]);

  const validarDatos = (e) => {
    e.preventDefault();

    const { id, nombre, correo, edad, cargo, telefono } = formulario;

    if (id === '' || nombre === '' || correo === '' || edad === '' || cargo === '' || telefono === '') {
      setError(1);
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(correo)) {
      setError(3);
    } else {
      setError(4);

      const usuario = {
        id,
        nombre,
        correo,
        edad,
        cargo,
        telefono
      };

      setUsuarios([...usuarios, usuario]);
      setFormulario({
        id: '',
        nombre: '',
        correo: '',
        edad: '',
        cargo:'',
        telefono:''
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  return (
    <>
      <form className="formulario" onSubmit={validarDatos}>
        <div className="form-group">
          <label>id</label>
          <input
            type="text"
            name="id"
            className="form-control"
            onChange={handleChange}
            value={formulario.id}
          />
        </div>
        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            name="nombre"
            className="form-control"
            onChange={handleChange}
            value={formulario.nombre}
          />
        </div>
        <div className="form-group">
          <label>Correo</label>
          <input
            type="email"
            name="correo"
            className="form-control"
            onChange={handleChange}
            value={formulario.correo}
          />
        </div>
        <div className="form-group">
          <label>Edad</label>
          <input
            type="text"
            name="edad"
            className="form-control"
            onChange={handleChange}
            value={formulario.edad}
          />
        </div>
        <div className="form-group">
          <label>Cargo</label>
          <input
            type="text"
            name="cargo"
            className="form-control"
            onChange={handleChange}
            value={formulario.cargo}
          />
        </div>
        <div className="form-group">
          <label>Telefono</label>
          <input
            type="text"
            name="telefono"
            className="form-control"
            onChange={handleChange}
            value={formulario.telefono}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Registrarse
        </button>
        {error === 4 ? <Alert color='bg-success' text='Registro Exitoso'></Alert> : null}
        {error === 1 ? <Alert color='bg-danger' text='Debe rellenar todos los campos'></Alert> : null}
        {error === 2 ? <Alert color='bg-danger' text='Las contraseñas no coinciden'></Alert> : null}
        {error === 3 ? <Alert color='bg-danger' text='Debe ingresar un correo válido'></Alert> : null}
      </form>
      <Listado usuarios={usuarios}></Listado>
    </>
  );
};

Formulario.propTypes = {
    listadoInicial: PropTypes.array.isRequired,
  };

export default Formulario;
