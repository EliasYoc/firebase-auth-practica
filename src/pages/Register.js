import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import MessageAuth from "../components/MessageAuth";
import { authRegister } from "../reducers/actions/actionsAuth";
import { Context } from "../store/ContextProvider";
import { types } from "../types";
const initialFormRegister = {
  name: "",
  email: "",
  password: "",
  confirmedPassword: "",
};
const Register = () => {
  const [formRegister, setFormRegister] = useState(initialFormRegister);
  const context = useContext(Context);
  const { stateAuth, dispatchAuth } = context;

  const handleChange = (e) => {
    setFormRegister({ ...formRegister, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const inputSomeEmpty = Object.values(formRegister).includes("");
    if (inputSomeEmpty) {
      dispatchAuth({
        type: types.NOTICE_MSG_REGISTER,
        payload: { msg: "Rellena los campos", color: "#ff8b3d" },
      });
      return;
    }
    if (formRegister.password === formRegister.confirmedPassword) {
      authRegister(
        dispatchAuth,
        formRegister.email,
        formRegister.password,
        formRegister.name
      );
      setFormRegister(initialFormRegister);
    } else {
      alert("la contraseña no coincide");
    }
  };
  return (
    <div className="container-form">
      <form className="form">
        <input
          className="form__input-txt"
          onChange={handleChange}
          name="name"
          type="text"
          placeholder="nombre de usuario"
          value={formRegister.name}
          required
        />
        <input
          className="form__input-txt"
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="correo"
          value={formRegister.email}
          required
        />
        <input
          onChange={handleChange}
          className="form__input-txt"
          name="password"
          type="password"
          placeholder="contraseña"
          value={formRegister.password}
          required
        />
        <input
          className="form__input-txt"
          onChange={handleChange}
          name="confirmedPassword"
          type="password"
          placeholder="confirmar contraseña"
          value={formRegister.confirmedPassword}
          required
        />
        <button className="form__btn" onClick={handleRegister}>
          Registrarse
        </button>
        <Link className="form__link" to="/login">
          Iniciar Sesión
        </Link>
        {stateAuth.msgRegister.msg && (
          <MessageAuth
            color={stateAuth.msgRegister.color}
            msg={stateAuth.msgRegister.msg}
          />
        )}
      </form>
    </div>
  );
};

export default Register;
