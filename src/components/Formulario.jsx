import { useState, useEffect  } from 'react';
import Alert from './Alert.jsx';
import Listado from './Listado.jsx';
import Buscador from './Buscador.jsx';
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
    <h1>Lista de colaboradores</h1>
    <Buscador usuarios={usuarios} setUsuariosFiltrados={setUsuarios} />
    <div className='section'>
    <Listado usuarios={usuarios}></Listado>
      <form className="formulario" onSubmit={validarDatos}>
      <h2>Agregar colaborador</h2>
        <div className="form-group">
          <input
            type="text"
            name="id"
            className="form-control"
            placeholder='id'
            onChange={handleChange}
            value={formulario.id}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder='Nombre'
            onChange={handleChange}
            value={formulario.nombre}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="correo"
            className="form-control"
            placeholder='Correo'
            onChange={handleChange}
            value={formulario.correo}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="edad"
            className="form-control"
            placeholder='Edad'
            onChange={handleChange}
            value={formulario.edad}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="cargo"
            className="form-control"
            placeholder='Cargo'
            onChange={handleChange}
            value={formulario.cargo}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="telefono"
            className="form-control"
            placeholder='Telefono'
            onChange={handleChange}
            value={formulario.telefono}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Agregar Colaborador
        </button>
        {error === 4 ? <Alert color='bg-success' text='Registro Exitoso'></Alert> : null}
        {error === 1 ? <Alert color='bg-danger' text='Debe rellenar todos los campos'></Alert> : null}
        {error === 2 ? <Alert color='bg-danger' text='Las contraseñas no coinciden'></Alert> : null}
        {error === 3 ? <Alert color='bg-danger' text='Debe ingresar un correo válido'></Alert> : null}
      </form>
      </div>
    </>
  );
};

Formulario.propTypes = {
    listadoInicial: PropTypes.array.isRequired,
  };

export default Formulario;
