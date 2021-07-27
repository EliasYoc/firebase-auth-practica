import { firebase } from "../../firebase/firebaseConfig";
import { types } from "../../types";

// con firebase auth y actualizando el state con dispatch
export const authRegister = async (dispatch, email, password, username) => {
  try {
    const { user } = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);

    dispatch({
      type: types.NOTICE_MSG_REGISTER,
      payload: { msg: "registrado", color: "	#45f248" },
    });
    console.log(username);
    await user.updateProfile({ displayName: username });
    console.log(user);
    dispatch({
      type: types.LOGIN,
      payload: { uid: user.uid, displayName: user.displayName },
    });
  } catch (err) {
    // console.log(err);
    dispatch({
      type: types.NOTICE_MSG_REGISTER,
      payload: { msg: `${err.code}: ${err.message}`, color: "crimson" },
    });
  }
};

export const authLogin = async (
  dispatch,
  email,
  password,
  setFormLogin,
  formLogin
) => {
  try {
    setFormLogin({ ...formLogin, isLoading: true });
    const user = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    console.log(user);
  } catch (err) {
    console.log(err);
    dispatch({
      type: types.NOTICE_MSG_lOGIN,
      payload: { msg: `${err.code}: ${err.message}`, color: "crimson" },
    });
    setFormLogin({ ...formLogin, isLoading: false });
  }
};

export const authLogout = async (dispatch, setIsLoading, dispatchCountries) => {
  try {
    setIsLoading(true);
    await firebase.auth().signOut();
    dispatch({ type: types.LOGOUT });
    dispatchCountries({ type: types.CLEAN_DATA });
  } catch (err) {
    console.log(err);
  }
};
