import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import axios from "axios";
import { CartContext } from "../../../helper/context";

const AuthCheck = () => {
  const { setLogin, setAccountName, setCheckLoading, setIsAdmin } =
    useContext(CartContext);

  const navigate = useNavigate();

  useEffect(() => {
    setCheckLoading(true);
    axios
      .get("http://localhost/CI/register/isLoggedIn", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then(function (response) {
        console.log("ress", response);
        if (response.data.loggedIn) {
          setLogin(true);
          setAccountName(response.data.user.first_name);
        }
        if (response.data.admin) {
          setIsAdmin(true);
        } else {
          console.log("logged in false");
          navigate("/");
        }
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => {
        setCheckLoading(false);
      });
  }, []);
};

export default AuthCheck;
