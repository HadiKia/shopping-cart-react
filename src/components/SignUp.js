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
const userIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none">
    <mask
      id="a"
      width="12"
      height="7"
      x="3"
      y="10"
      maskUnits="userSpaceOnUse"
      styles="mask-type:luminance"
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M3 10.87h11.88v5.53H3v-5.53Z"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#a)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.94 12c-3.2 0-4.82.55-4.82 1.63 0 1.1 1.62 1.65 4.82 1.65s4.81-.55 4.81-1.64c0-1.09-1.61-1.64-4.8-1.64Zm0 4.4c-1.47 0-5.94 0-5.94-2.77 0-2.47 3.4-2.76 5.94-2.76 1.47 0 5.94 0 5.94 2.77 0 2.48-3.39 2.76-5.94 2.76Z"
        clipRule="evenodd"
      />
    </g>
    <mask
      id="b"
      width="9"
      height="9"
      x="4"
      y="1"
      maskUnits="userSpaceOnUse"
      styles="mask-type:luminance"
    >
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M4.96 1.5h7.96v7.96H4.96V1.5Z"
        clipRule="evenodd"
      />
    </mask>
    <g mask="url(#b)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.94 2.57a2.91 2.91 0 0 0-.02 5.82l.02.54v-.54a2.91 2.91 0 0 0 0-5.82Zm0 6.9h-.02a3.97 3.97 0 1 1 .02 0Z"
        clipRule="evenodd"
      />
    </g>
  </svg>
);
const emailIcon = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path fill="currentColor" fillRule="evenodd" d="M8.833 10.098a2.281 2.281 0 0 1-1.42-.497L4.047 6.89a.563.563 0 0 1 .706-.876l3.361 2.71a1.158 1.158 0 0 0 1.442-.004l3.327-2.704a.562.562 0 1 1 .71.873l-3.332 2.709a2.294 2.294 0 0 1-1.43.502Z" clipRule="evenodd"/><mask id="a" width="17" height="16" x="0" y="1" maskUnits="userSpaceOnUse" styles="mask-type:luminance"><path fill="#fff" fillRule="evenodd" d="M.75 1.5h16.125v14.625H.75V1.5Z" clipRule="evenodd"/></mask><g mask="url(#a)"><path fill="currentColor" fillRule="evenodd" d="M5.13 15h7.364c.002-.002.008 0 .012 0 .856 0 1.615-.306 2.197-.887.676-.673 1.047-1.64 1.047-2.722V6.24c0-2.095-1.37-3.615-3.256-3.615H5.131c-1.887 0-3.256 1.52-3.256 3.615v5.151c0 1.082.372 2.049 1.047 2.722.582.581 1.342.887 2.197.887h.01Zm-.014 1.125c-1.157 0-2.19-.42-2.988-1.215-.89-.886-1.378-2.136-1.378-3.519V6.24c0-2.702 1.883-4.74 4.38-4.74h7.364c2.498 0 4.38 2.038 4.38 4.74v5.151c0 1.383-.488 2.633-1.377 3.519-.797.794-1.831 1.215-2.99 1.215H5.115Z" clipRule="evenodd"/></g></svg>
const passwordIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" fill="none">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M11.72 7.43a.68.68 0 0 1-.68-.68V4.81c0-1.9-1.55-3.45-3.45-3.45h-.01A3.42 3.42 0 0 0 4.13 4.8v1.96a.68.68 0 0 1-1.36 0V4.81A4.79 4.79 0 0 1 7.59 0c2.65 0 4.8 2.15 4.8 4.8v1.94c0 .38-.3.68-.67.68Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4.12 7.37a2.76 2.76 0 0 0-2.76 2.76v3.89a2.76 2.76 0 0 0 2.76 2.75h6.93a2.76 2.76 0 0 0 2.75-2.75v-3.9a2.76 2.76 0 0 0-2.75-2.75H4.12Zm6.93 10.76H4.12A4.12 4.12 0 0 1 0 14.02v-3.9a4.12 4.12 0 0 1 4.12-4.11h6.93a4.12 4.12 0 0 1 4.11 4.12v3.89a4.12 4.12 0 0 1-4.11 4.11Z"
      clipRule="evenodd"
    />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.58 13.76a.68.68 0 0 1-.68-.68v-2.01a.68.68 0 0 1 1.36 0v2c0 .38-.3.69-.68.69Z"
      clipRule="evenodd"
    />
  </svg>
);
const chevronRightIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none">
    <g fill="#fff">
      <path d="M5.33 15.63a1 1 0 0 1 .87-.99h20.13a1 1 0 0 1 .14 1.99H6.33a1 1 0 0 1-1-1Z" />
      <path d="M17.56 8.31a1 1 0 0 1 1.3-1.51l.11.1 8.07 8.03a1 1 0 0 1 .1 1.3l-.1.11-8.07 8.04a1 1 0 0 1-1.5-1.31l.1-.11 7.35-7.33-7.36-7.32Z" />
    </g>
  </svg>
);

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  useEffect(() => {
    setErrors(validate(data, "signup"));
    document.title = "Sign up";
  }, [data, touched]);

  const changeHandler = (event) => {
    if (event.target.name === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };

  const focusHandler = (event) => {
    if (event.target.name === "isAccepted") {
      setTouched({ ...touched, [event.target.name]: false });
    } else {
      setTouched({ ...touched, [event.target.name]: true });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!Object.keys(errors).length) {
      notify("You signed up successfully!", "success");
    } else {
      notify("Invalid data!", "error");
      setTouched({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
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
            <h3>Sign up</h3>
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
          {/* name */}
          <div className={styles.formField}>
            <div
              className={styles.formFieldInput}
            >
              <div
                className={
                  errors.name && touched.name
                    ? styles.inputIconUncompleted
                    : styles.inputIcon
                }
              >
                {userIcon}
              </div>
              <input
                className={styles.formInput}
                type="text"
                name="name"
                placeholder="Username"
                value={data.name}
                onChange={changeHandler}
                onFocus={focusHandler}
              />
            </div>

            {errors.name && touched.name && <span>{errors.name}</span>}
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
          {/* confirmPassword */}
          <div className={styles.formField}>
            <div
              className={styles.formFieldInput}
            >
              <div
                className={
                  errors.confirmPassword && touched.confirmPassword
                    ? styles.inputIconUncompleted
                    : styles.inputIcon
                }
              >
                {passwordIcon}
              </div>
              <input
                className={styles.formInput}
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                value={data.confirmPassword}
                onChange={changeHandler}
                onFocus={focusHandler}
              />
            </div>
            {errors.confirmPassword && touched.confirmPassword && (
              <span>{errors.confirmPassword}</span>
            )}
          </div>
           {/* checkBox */}
           <div className={styles.formField}>
           <div className={styles.checkBoxContainer}>
            <label>
              I accept terms of <span>privacy policy</span>
            </label>
            <input
              type="checkbox"
              name="isAccepted"
              value={data.isAccepted}
              onChange={changeHandler}
              onFocus={focusHandler}
            />
          </div>
          {errors.isAccepted && touched.isAccepted && (
            <span>{errors.isAccepted}</span>
          )}
        </div>
        </div>

        <div className={styles.submitButton}>
          <button type="submit">{chevronRightIcon}</button>
        </div>
        <p className={styles.formPagesLink}>
          Already a member? <Link to="/login">Log in</Link>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
