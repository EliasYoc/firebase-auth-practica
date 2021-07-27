import { useContext, useRef } from "react";
import { deleteCountryFirestore } from "../reducers/actions/actionCountry";
import { Context } from "../store/ContextProvider";
import "./TableRowCountry.css";
const TableRowCountry = ({ id, pais, clave, numero }) => {
  const refTr = useRef();
  const { user, dispatchCountries } = useContext(Context);
  const handleClick = () => {
    refTr.current.classList.add("animacion-delete");
  };
  const handleTransitionEnd = (e) => {
    // console.log(e);
    // console.log(id);
    // console.log(user);
    deleteCountryFirestore(user.uid, id, dispatchCountries);
    return;
  };
  return (
    <tr onTransitionEnd={handleTransitionEnd} ref={refTr}>
      <td>{pais}</td>
      <td>{clave}</td>
      <td>{numero}</td>
      <td>
        <button onClick={handleClick}>Borrar</button>
      </td>
    </tr>
  );
};

export default TableRowCountry;
