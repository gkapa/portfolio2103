const SET_AUTH = "auth/SET_AUTH" as const;
const SET_UNAUTH = "auth/SET_UNAUTH" as const;
const SET_USER = "auth/SET_USER" as const;

export const setAuth = (data) => ({
  type: SET_AUTH,
  payload: data,
});
export const setUnauth = () => ({
  type: SET_UNAUTH,
});
export const setUser = (data) => ({
  type: SET_USER,
  payload: data,
});

type Action = ReturnType<typeof setAuth | typeof setUnauth | typeof setUser>;

interface State {
  isAuthenticated: boolean;
  user: object;
}

const initialUser = {
  username: "",
  email: "",
};

const initialState: State = {
  isAuthenticated: false,
  user: {
    ...initialUser,
  },
};

export default function fun(state = initialState, action: Action) {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        isAuthenticated: true,
        user: {
          ...action.payload,
        },
      };
    case SET_UNAUTH:
      return {
        ...state,
        isAuthenticated: false,
        user: {
          ...initialUser,
        },
      };
    case SET_USER:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    default:
      return state;
  }
}
