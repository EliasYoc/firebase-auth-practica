import { useContext, useRef } from "react";
import { addCountryFirestore } from "../reducers/actions/actionCountry";
import { Context } from "../store/ContextProvider";
import "./FormAddCountry.css";
const FormAddCountry = ({
  formCountry,
  setFormCountry,
  initialFormCountry,
}) => {
  const refForm = useRef();
  const { user, dispatchCountries } = useContext(Context);
  const handleChange = (e) => {
    setFormCountry({ ...formCountry, [e.target.name]: e.target.value });
    e.target.value
      ? refForm.current[e.target.name].nextSibling.classList.add("up")
      : refForm.current[e.target.name].nextSibling.classList.remove("up");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formCountry.pais.trim() ||
      !formCountry.clave.trim() ||
      !formCountry.numero.trim()
    ) {
      alert("rellena los campos");
      return;
    }
    console.log(user);
    console.log(formCountry);
    addCountryFirestore(user.uid, { ...formCountry }, dispatchCountries);
    setFormCountry(initialFormCountry);
  };
  return (
    <form onSubmit={handleSubmit} ref={refForm} className="form-country">
      <div className="form-country__inputs">
        <div className="content-input">
          <input
            onChange={handleChange}
            name="pais"
            type="text"
            id="country"
            value={formCountry.pais}
          />
          <label htmlFor="country">País</label>
        </div>
        <div className="content-input">
          <input
            onChange={handleChange}
            name="clave"
            type="number"
            id="clave"
            value={formCountry.clave}
          />
          <label htmlFor="clave">Clave del país</label>
        </div>
        <div className="content-input">
          <input
            onChange={handleChange}
            name="numero"
            type="number"
            id="numero"
            value={formCountry.numero}
          />
          <label htmlFor="numero">Digitos</label>
        </div>
      </div>
      <button>Agregar</button>
    </form>
  );
};

export default FormAddCountry;
