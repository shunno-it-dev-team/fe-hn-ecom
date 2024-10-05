import { isFulfilled, isRejectedWithValue } from "@reduxjs/toolkit";
import { toast } from "sonner";

// third-party

export const successAndErrorHandler = () => (next) => (action) => {
  const requestMethod = action.meta?.baseQueryMeta?.request?.method;

  // IF RESPONSE IS UNAUTHORIZE CLEAR LOCAL_STORAGE FILE-SYSTEM-TOKEN AND REDIRECT TO LOGIN PAGE
  if (isRejectedWithValue(action)) {
    let errorMessage = action.payload?.data;

    if (
      errorMessage?.statusCode === 401 &&
      !window.location.href.includes("/auth/login")
    ) {
      toast.error(errorMessage, {
        autoHideDuration: 100,
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });

      // CLEAR LOCAL_STORAGE FILE-SYSTEM-TOKEN
      localStorage.removeItem("file-system-token");

      // NAVIGATE TO LOGIN PAGE
      window.location = "/auth/login";
    }
  }

  if (isRejectedWithValue(action) && requestMethod !== "GET") {
    let errorMessage = action.payload?.data;
    if (typeof errorMessage?.message === "string") {
      errorMessage = errorMessage?.message;
    } else if (typeof errorMessage === "object") {
      errorMessage = errorMessage?.message;
    }
    toast.error(` ${errorMessage ? errorMessage : action.payload?.error}`, {
      variant: "error",
      autoHideDuration: 100,
      anchorOrigin: {
        vertical: "top",
        horizontal: "center",
      },
    });
  }

  if (isFulfilled(action) && requestMethod !== "GET") {
    const isString = typeof action.payload?.message === "string";
    if (isString) {
      toast.success(action.payload.message);
    }
  }
  return next(action);
};
