import { reactive } from "vue";
// @ts-ignore
import enc from "@/helpers/js.js";

interface State<T> {
  isLoading: boolean;
  hasError: boolean;
  errorMessage: string;
  data: T | null;
}

const errorCheck = (response: any) => {
  if (!response?.ok) {
    throw new Error(response?.statusText);
  }
};

export const useFetch = async <T>(
  url: string,
  request = {},
  options: Record<string, unknown> = {}
) => {
  // const endPoint = `http://stage.redvanlines.com:8081${url}`;
  const endPoint = `${import.meta.env.VITE_API_ENDPOINT}${url}`;
  const token = await enc();
  options = {
    ...options,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "AUTH-TOKEN": token,
    } as any,
    body: JSON.stringify(request),
  };

  const state = reactive<State<T>>({
    isLoading: true,
    hasError: false,
    errorMessage: "",
    data: null,
  });

  const fetchData = async () => {
    state.isLoading = true;

    try {
      const response = await fetch(endPoint, options);
      const { data = null, status, error = null } = await response.json();
      if (data && status === "success") {
        state.data = data;
      }

      if (error && status === "failed" && error.length > 0) {
        state.errorMessage = error;
        state.hasError = true;
      } else if (status === "failed") {
        state.errorMessage = "unknown error";
        state.hasError = true;
      } else if (error.length > 0) {
        state.errorMessage = (error + " ").toString().replaceAll("_", "");
        state.hasError = true;
      } else {
        errorCheck(error);
      }
    } catch (error: unknown) {
      const typedError = error as Error;
      state.hasError = true;
      state.errorMessage = typedError.message;
    } finally {
      state.isLoading = false;
    }
  };

  await fetchData();

  return {
    ...state,
  };
};
