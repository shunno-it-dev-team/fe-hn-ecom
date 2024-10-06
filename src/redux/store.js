import { configureStore } from "@reduxjs/toolkit";
import {
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from "react-redux";

// project import
import { successAndErrorHandler } from "./response-handler";
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiService } from "./api/services/apiService";
import { reducers } from "./reducers";

//====|| REDUX TOOLKIT - MAIN STORE ||==== //
const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
      .concat(apiService.middleware)
      .concat(successAndErrorHandler),
});

const { dispatch } = store;
const useDispatch = () => useAppDispatch();

const useSelector = useAppSelector;
setupListeners(store.dispatch);

export { store, dispatch, useSelector, useDispatch };
