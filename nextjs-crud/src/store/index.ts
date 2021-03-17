import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import reduxThunk from "redux-thunk";
import authReducer, * as authActions from "./redux/auth";

export { authActions };

const rootReducer = combineReducers({
  authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(reduxThunk));
  return store;
}

export const store = configureStore();
