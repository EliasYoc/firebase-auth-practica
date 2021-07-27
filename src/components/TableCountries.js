import "./TableCountries.css";
import TableRowCountry from "./TableRowCountry";
const TableCountries = ({ stateCountries }) => {
  console.log(stateCountries);

  return (
    <table className="content-table">
      <thead>
        <tr>
          <th>País</th>
          <th>Clave de País</th>
          <th>Digitos restantes</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {stateCountries.map((country) => (
          <TableRowCountry
            key={country.id}
            id={country.id}
            pais={country.pais}
            clave={country.clave}
            numero={country.numero}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TableCountries;
