import PropTypes from 'prop-types';

const Listado = ({ usuarios }) => {
  return (
    <div>
      <table className="table table-striped">
        <thead>
            <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Correo</th>
                <th scope="col">Edad</th>
                <th scope="col">Cargo</th>
                <th scope="col">Teléfono</th>
            </tr>
        </thead>
        <tbody>
        {usuarios.map((usuario) => (
                    <tr key={usuario.id}>
                      <td>{usuario.nombre}</td>
                      <td>{usuario.correo}</td>
                      <td>{usuario.edad}</td>
                      <td>{usuario.cargo}</td>
                      <td>{usuario.telefono}</td>
                    </tr>
        ))}
        </tbody>
        </table>
    </div>
  );
};

Listado.propTypes = {
    usuarios: PropTypes.array.isRequired,
  };


export default Listado;