import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import MessageAuth from "../components/MessageAuth";
import { authLogin } from "../reducers/actions/actionsAuth";
import { Context } from "../store/ContextProvider";
import { types } from "../types";
import "./Login.css";
export const initialFormLogin = {
  email: "",
  password: "",
  isLoading: false,
};
const Login = () => {
  const [formLogin, setFormLogin] = useState(initialFormLogin);
  const { stateAuth, dispatchAuth } = useContext(Context);
  console.log(stateAuth);

  const handleChange = (e) => {
    setFormLogin({ ...formLogin, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formLogin.email && !formLogin.password) {
      dispatchAuth({
        type: types.NOTICE_MSG_lOGIN,
        payload: { msg: "Rellena los campos faltantes", color: "#ff8b3d" },
      });
      return;
    }

    authLogin(
      dispatchAuth,
      formLogin.email,
      formLogin.password,
      setFormLogin,
      formLogin
    );
  };

  return (
    <div className="container-form">
      <div className="content-img">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/practica-yoc.appspot.com/o/AnimatedEmojies-256px-23.gif?alt=media&token=15779ee2-1ea7-4a10-a36c-c0ff78ce1502"
          alt="mono no está viendo"
        />
      </div>
      <form className="form" onSubmit={handleSubmit}>
        {formLogin.isLoading && <Loader />}
        <input
          className="form__input-txt"
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="correo"
          value={formLogin.email}
        />
        <input
          className="form__input-txt"
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="contraseña"
          value={formLogin.password}
        />
        <button className="form__btn">Iniciar Sesion</button>
        <Link className="form__link" to="/register">
          Registrarse
        </Link>
        {stateAuth.msgLogin.msg && (
          <MessageAuth
            msg={stateAuth.msgLogin.msg}
            color={stateAuth.msgLogin.color}
          />
        )}
      </form>
    </div>
  );
};

export default Login;
