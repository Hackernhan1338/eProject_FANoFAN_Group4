import React, { useEffect, useState } from "react";
import "./Login.scss";
import { Container, Form } from "react-bootstrap";
import { Label } from "semantic-ui-react";
import validation from "./Validatiom";

function Login({ Validation }) {
  const [values, setValues] = useState({
    name: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setErrors(validation(values));
  }

  useEffect(() => {
    if (
      Object.keys(errors).length === 0 &&
      values.name !== "" &&
      values.password !== ""
    ) {
      alert("Form Submitted");
    }
  }, [errors]);

  return (
    <div className="wrap text-center">
      <Container className="all-login mt-5 mb-5">
        <div>
          <img
            className="img-login"
            src="https://i.pinimg.com/564x/7c/6d/92/7c6d92ff2126784c46e0b0b9dcd4b43b.jpg"
            alt=""
          />
        </div>
        <form onSubmit={handleSubmit} className="mt-3 ms-5 form-login">
          <div>
            <h2 className="fw-bold">USER LOGIN</h2>
          </div>
          <div className="content-login">
            <div className="content-user mt-2">
              <label className=" label-content">Username</label>
              <input
                type="text"
                placeholder="Enter Username"
                name="name"
                value={values.name}
                onChange={handleChange}
                className="login-input"
              />
              {errors.name && (
                <p style={{ color: "red", fontSize: "13px" }}>{errors.name}</p>
              )}
            </div>
            <div className="content-user mt-3">
              <label className=" label-content">Password</label>
              <input
                type="pasword"
                placeholder="Enter Password"
                name="password"
                value={values.password}
                onChange={handleChange}
                className="login-input"
              />
              {errors.password && (
                <p style={{ color: "red", fontSize: "13px" }}>
                  {errors.password}
                </p>
              )}
            </div>
            <button className="button1" type="submit">
              Login
            </button>
            <div>
              <input type="checkbox" checked="checked" /> Remember me
            </div>
          </div>

          <div className="content-login-bottom">
            <button type="button" className="cancelbtn ">
              Cancel
            </button>
            <span className="pass">Forgot Password?</span>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default Login;
