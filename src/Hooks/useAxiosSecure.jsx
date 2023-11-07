import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const axiosSecure = axios.create({
  baseURL: "https://bytes-of-thoughts-server.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log("Error track in the interceptor", error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          console.log("Log out the User");
          logOut()
            .then(() => {
                navigate('/login');
            })
            .catch((error) => console.log(error));
        }
      }
    );
  }, []);

  return axiosSecure;
};

export default useAxiosSecure;