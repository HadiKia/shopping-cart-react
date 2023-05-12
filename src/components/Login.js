import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

// Functions
import { validate } from "../helper/validate";
import { notify } from "../helper/toast";

// Style
import styles from "./styles/Form.module.css";

// Icons
const chevronIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
    <path
      fill="currentColor"
      d="M20 12.27c0 .38-.28.7-.65.75H4.25a.75.75 0 0 1-.1-1.49h15.1c.41 0 .75.33.75.74Z"
    />
    <path
      fill="currentColor"
      d="M10.83 17.77a.75.75 0 0 1-.98 1.13l-.08-.07-6.05-6.02a.75.75 0 0 1-.07-.98l.07-.09 6.05-6.02a.75.75 0 0 1 1.13.98l-.07.08-5.52 5.5 5.52 5.49Z"
    />
  </svg>
);
const emailIcon = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path fill="currentColor" fillRule="evenodd" d="M8.83 10.1c-.5 0-1-.17-1.42-.5L4.05 6.9a.56.56 0 0 1 .7-.88l3.36 2.71c.43.34 1.02.34 1.45 0l3.32-2.7a.56.56 0 1 1 .71.87l-3.33 2.7c-.42.34-.92.5-1.43.5Z" clipRule="evenodd"/><mask id="a" width="17" height="16" x="0" y="1" maskUnits="userSpaceOnUse" styles="mask-type:luminance"><path fill="#fff" fillRule="evenodd" d="M.75 1.5h16.12v14.63H.75V1.5Z" clipRule="evenodd"/></mask><g mask="url(#a)"><path fill="currentColor" fillRule="evenodd" d="M5.13 15h7.38c.85 0 1.61-.3 2.2-.89a3.79 3.79 0 0 0 1.04-2.72V6.24c0-2.1-1.37-3.62-3.26-3.62H5.13c-1.89 0-3.26 1.53-3.26 3.62v5.15c0 1.08.38 2.05 1.05 2.72.58.58 1.34.89 2.2.89Zm-.01 1.13c-1.16 0-2.2-.42-3-1.22a4.9 4.9 0 0 1-1.37-3.52V6.24c0-2.7 1.88-4.74 4.38-4.74h7.36c2.5 0 4.38 2.04 4.38 4.74v5.15a4.9 4.9 0 0 1-1.37 3.52c-.8.8-1.83 1.21-3 1.21H5.11Z" clipRule="evenodd"/></g></svg>
const passwordIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" fill="none"><path fill="currentColor" fillRule="evenodd" d="M11.72 7.43a.68.68 0 0 1-.68-.68V4.81c0-1.9-1.55-3.45-3.45-3.45h-.01A3.42 3.42 0 0 0 4.13 4.8v1.96a.68.68 0 0 1-1.36 0V4.81A4.79 4.79 0 0 1 7.59 0c2.65 0 4.8 2.15 4.8 4.8v1.94c0 .38-.3.68-.67.68Z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M4.12 7.37a2.76 2.76 0 0 0-2.76 2.76v3.89a2.76 2.76 0 0 0 2.76 2.75h6.93a2.76 2.76 0 0 0 2.75-2.75v-3.9a2.76 2.76 0 0 0-2.75-2.75H4.12Zm6.93 10.76H4.12A4.12 4.12 0 0 1 0 14.02v-3.9a4.12 4.12 0 0 1 4.12-4.11h6.93a4.12 4.12 0 0 1 4.11 4.12v3.89a4.12 4.12 0 0 1-4.11 4.11Z" clipRule="evenodd"/><path fill="currentColor" fillRule="evenodd" d="M7.58 13.76a.68.68 0 0 1-.68-.68v-2.01a.68.68 0 0 1 1.36 0v2c0 .38-.3.69-.68.69Z" clipRule="evenodd"/></svg>
const chevronRightIcon = <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none"><g fill="#fff"><path d="M5.33 15.63a1 1 0 0 1 .87-.99h20.13a1 1 0 0 1 .14 1.99H6.33a1 1 0 0 1-1-1Z"/><path d="M17.56 8.31a1 1 0 0 1 1.3-1.51l.11.1 8.07 8.03a1 1 0 0 1 .1 1.3l-.1.11-8.07 8.04a1 1 0 0 1-1.5-1.31l.1-.11 7.35-7.33-7.36-7.32Z"/></g></svg>

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data, "login"));
  }, [data, touched]);

  const changeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const focusHandler = (event) => {
    setTouched({ ...touched, [event.target.name]: true });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!Object.keys(errors).length) {
      notify("You Logged in successfully!", "success");
    } else {
      notify("Invalid data!", "error");
      setTouched({
        email: true,
        password: true,
      });
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler} className={styles.formContainer}>
        <div className={styles.header}>
          <div>
            <Link to="/products">{chevronIcon}</Link>
          </div>
          <div>
            <h3>Log in</h3>
          </div>
        </div>

        <div className={styles.inputBox}>
           {/* email */}
           <div className={styles.formField}>
            <div
              className={styles.formFieldInput}
            >
              <div
                className={
                  errors.email && touched.email
                    ? styles.inputIconUncompleted
                    : styles.inputIcon
                }
              >
                {emailIcon}
              </div>
              <input
                className={styles.formInput}
                type="text"
                name="email"
                placeholder="Email address"
                value={data.email}
                onChange={changeHandler}
                onFocus={focusHandler}
              />
            </div>

            {errors.email && touched.email && <span>{errors.email}</span>}
          </div>
           {/* password */}
           <div className={styles.formField}>
            <div
              className={styles.formFieldInput}
            >
              <div
                className={
                  errors.password && touched.password
                    ? styles.inputIconUncompleted
                    : styles.inputIcon
                }
              >
                {passwordIcon}
              </div>
              <input
                className={styles.formInput}
                type="password"
                name="password"
                placeholder="Password"
                value={data.password}
                onChange={changeHandler}
                onFocus={focusHandler}
              />
            </div>
            {errors.password && touched.password && (
              <span>{errors.password}</span>
            )}
          </div>
        </div>
        
        <div className={styles.submitButton}><button type="submit">{chevronRightIcon}</button></div>
        <p className={styles.formPagesLink}>New member?  <Link to="/signup">Sign Up</Link></p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
