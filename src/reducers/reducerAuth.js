import { types } from "../types";

export const initialAuth = {
  msgLogin: {},
  msgRegister: { msg: "", color: "" },
  user: {},
};
export const reducerAuth = (state, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        user: { ...action.payload },
      };
    case types.NOTICE_MSG_REGISTER:
      return {
        ...initialAuth,
        msgRegister: { ...state.msgRegister, ...action.payload },
      };
    case types.NOTICE_MSG_lOGIN:
      return {
        ...initialAuth,
        msgLogin: { ...state.msgLogin, ...action.payload },
      };
    case types.LOGOUT:
      return initialAuth;
    default:
      return state;
  }
};
