import { store } from "../store/store";
import { useDispatch } from "react-redux";
import { authenticateThunk } from "../thunks/moviesThunks/authenticateThunk";

type disp = typeof store.dispatch;

const useAuthApi = () => {
  const dispatch = useDispatch<disp>();

  const authenticate = () => {
    dispatch(authenticateThunk());
  };

  return { authenticate };
};

export default useAuthApi;
