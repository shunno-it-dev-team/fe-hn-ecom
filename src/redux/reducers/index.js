// ============= SLICES =============
import { apiService } from "../api/apiService";
import global from "./globalSlice";

export const reducers = {
  [apiService.reducerPath]: apiService.reducer,

  // ============= SLICES =============
  global,
};
