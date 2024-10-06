import { apiService } from "../api/services/apiService";

// ============= SLICES =============
import global from "./globalSlice";

export const reducers = {
  [apiService.reducerPath]: apiService.reducer,

  // ============= SLICES =============
  global,
};
