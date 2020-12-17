import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Full Name Should Be At Least 2 Characters")
    .max(50, "Full Name Should Be No More Than 50 Characters")
    .required("Full Name Is Required"),
  displayName: Yup.string()
    .min(2, "Display Name Should Be At Least 2 Characters")
    .max(50, "Display Name Should Be No More Than 2 Characters")
    .required("Display Name Is Required"),
  email: Yup.string().email("Email Is Invalid").required("Email Is Required"),
  password: Yup.string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number And One Special Case Character"
    )
    .max(128, "Password Should Be No More Than 128 Characters")
    .required("Password Is Required"),
  confirmPassword: Yup.string()
    .required("Passwords Must Match")
    .oneOf([Yup.ref("password"), null], "Passwords Must Match")
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string().required("Email Is Required"),
  password: Yup.string().required("Password Is Required")
});
