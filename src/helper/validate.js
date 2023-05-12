export const validate = (data, type) => {
    const errors = {};
  
    // email
    if (!data.email) {
      errors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email address is invalid";
    } else {
      delete errors.email;
    }
    // password
    if (!data.password) {
      errors.password = "Password is required";
    } else if (data.password.length < 6) {
      errors.password = "Password need to be 6 character or more";
    } else {
      delete errors.password;
    }
  
    if (type === "signup") {
      // name
      if (!data.name.trim()) {
        errors.name = "Username required";
      } else {
        delete errors.name;
      }
      // confirmPassword
      if (!data.confirmPassword) {
        errors.confirmPassword = "Confirm the password";
      } else if (data.confirmPassword !== data.password) {
        errors.confirmPassword = "Password do not match";
      } else {
        delete errors.confirmPassword;
      }
      // checklist
      if (data.isAccepted) {
        delete errors.isAccepted;
      } else {
        errors.isAccepted = "Accept our regulations";
      }
    }
  
    return errors;
  };