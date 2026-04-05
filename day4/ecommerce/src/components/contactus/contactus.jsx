import { Formik, Form, Field, ErrorMessage } from "formik";
import { FaPhone } from "react-icons/fa";
import * as Yup from "yup";

const ContactUs = () => {
  const validationSchema = Yup.object({
    firstname: Yup.string().required("First Name is required"),
    lastname: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phoneNumber: Yup.string()
      .matches(/^\d{10}$/, "Phone number must be 10 digits")
      .required("Phone Number is required"),
    message: Yup.string().min(10, "Message must be at least 10 characters").max(500, "Message must be at most 500 characters").required("Message is required"),
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
          phoneNumber: "",
          message: "",
        }}
        onSubmit={(values, actions) => {
          console.log(values);
          alert("Message sent successfully!");
          actions.resetForm();
        }}
        validationSchema={validationSchema}
      >
        {({ submitCount }) => (
          <Form className="max-w-md mx-auto bg-white p-6 rounded shadow">
            <div className="mb-4">
              <label htmlFor="firstname">First Name</label>
              <br />
              <Field
                id="firstname"
                className="border border-gray-300 rounded py-2 px-4"
                name="firstname"
                placeholder="First Name"
              />
              {submitCount > 0 && (
                <ErrorMessage
                  name="firstname"
                  component="div"
                  className="text-red-500"
                />
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="lastname">Last Name</label>
              <br />
              <Field
                id="lastname"
                className="border border-gray-300 rounded py-2 px-4"
                name="lastname"
                placeholder="Last Name"
              />
              {submitCount > 0 && (
                <ErrorMessage
                  name="lastname"
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
              <label htmlFor="phoneNumber">Phone Number</label>
              <br />
              <Field
                id="phoneNumber"
                className="border border-gray-300 rounded py-2 px-4"
                name="phoneNumber"
                placeholder="Phone Number"
              />
              {submitCount > 0 && (
                <ErrorMessage
                  name="phoneNumber"
                  component="div"
                  className="text-red-500"
                />
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="message">Message</label>
              <br />
              <Field
                id="message"
                name="message"
                type="textarea"
                placeholder="Message"
                className="border border-gray-300 rounded py-2 px-4"
              />
              {submitCount > 0 && (
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500"
                />
              )}
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
            >
              Send Message
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactUs;
