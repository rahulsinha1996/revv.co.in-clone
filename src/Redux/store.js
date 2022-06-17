import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { dashboardreducer } from "./Dashboard/reducer";
import { AuthReducer } from "./Auth/AuthReducer";
const rootReducer = combineReducers({
  auth: AuthReducer,
  dashboard: dashboardreducer,
});

const customThunks = (store) => (next) => (action) => {
  return typeof action === "function" ? action(store.dispatch) : next(action);
};

const composedEnhancer = compose(
  applyMiddleware(customThunks),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(rootReducer, composedEnhancer);
export { store };
