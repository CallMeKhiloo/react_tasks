import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import AuthContext from "../../context/Auth/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router";

const Register = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Register</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          username: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(values) => {
          loginUser(values);
          navigate("/");
        }}
        validationSchema={validationSchema}
      >
        {({ submitCount }) => (
          <Form className="max-w-md mx-auto bg-white p-6 rounded shadow">
            <div className="mb-4">
              <label htmlFor="name">Name</label>
              <br />
              <Field
                id="name"
                className="border border-gray-300 rounded py-2 px-4"
                name="name"
                placeholder="Name"
              />
              {submitCount > 0 && (
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500"
                />
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="email">Email</label>
              <br />
              <Field
                id="email"
                className="border border-gray-300 rounded py-2 px-4"
                name="email"
                type="email"
                placeholder="Email"
              />
              {submitCount > 0 && (
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="username">Username</label>
              <br />
              <Field
                id="username"
                className="border border-gray-300 rounded py-2 px-4"
                name="username"
                placeholder="Username"
              />
              {submitCount > 0 && (
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-red-500"
                />
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="password">Password</label>
              <br />
              <Field
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                className="border border-gray-300 rounded py-2 px-4"
              />
              {submitCount > 0 && (
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500"
                />
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <br />
              <Field
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                className="border border-gray-300 rounded py-2 px-4"
              />
              {submitCount > 0 && (
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-500"
                />
              )}
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
            >
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
