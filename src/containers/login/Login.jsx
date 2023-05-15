import React, { useEffect, useState } from "react";
import authService from "../../_services/authService";
import { updateAuthStoreStateLogin } from "../../features/authentication/updateAuthState";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../login/Login.scss";

function Login() {
  const initialFormValues = {
    email: "mandia@email.com",
    password: "12345678",
  };

  // hooks
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState(initialFormValues);
  const [loginError, setLoginError] = useState(null);
  const authState = useSelector((state) => state.auth);

  const isAdmin = authState.userInfo.role == "admin";

  useEffect(() => {
    if (authState.userToken) {
      isAdmin ? navigate("/admin") : navigate("/admin");
    }
  }, [authState.userToken]);

  // handlers
  const handleSubmit = (e) => {
    e.preventDefault();

    const credentials = {
      email: formValues.email,
      password: formValues.password,
    };

    login(credentials);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value, // key: value
    });
  };

  const login = async (credentials) => {
    try {
      const response = await authService.login(credentials);
      console.log(response);
      const token = response.token;
      setLoginError(null);
      updateAuthStoreStateLogin(token);
    } catch (error) {
      console.log(error);

      setLoginError(error.response.data.message);
    }
  };

  return (
    <div className="Login">
      <div className="Form">
        <h1>Login</h1>
        {/* <pre style={{ textAlign: "left", width: "250px", margin: "auto" }}>
          {JSON.stringify(formValues, null, 2)}
        </pre> */}
        <form noValidate onSubmit={handleSubmit}>
          <label htmlFor="">Email</label> <br />
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />{" "}
          <br />
          <label htmlFor="">Password</label> <br />
          <input
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
          />{" "}
          <br />
          <br />
          <button className="LoginButton">Send</button>
        </form>

        <br />
        {loginError && <p style={{ color: "red" }}>{loginError}</p>}
      </div>
    </div>
  );
}

export default Login;
