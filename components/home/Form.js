import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  location: Yup.string().required("Location is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  pledgeStatement: Yup.string().required("Pledge statement is required"),
  category: Yup.string().required("Category is required"),
  subscribe: Yup.boolean(),
});

const PledgeForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  return (
    <Formik
      initialValues={{
        name: "",
        location: "",
        email: "",
        pledgeStatement: "",
        category: "",
        subscribe: false,
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        try {
          const response = await axios.post("/api/pledges", values);
          if (response.status === 200) {
            setIsSuccess(true);
            resetForm();
          }
        } catch (error) {
          console.log(error);
        }
      }}
    >
      <Form className="p-4 bg-[#1d6957db] mt-28 mr-20">
        {isSuccess && ( // Conditionally render success message
          <div className="bg-green-100 border-l-4 border-green-500 p-4 mb-4">
            <p className="text-green-900">
              Success! Your form has been submitted.
            </p>
          </div>
        )}
        <div className="text-center text-white font-bold">GET IN TOUCH</div>

        <div className="grid grid-cols-12 gap-4 my-4">
          <div className="col-span-6">
            <Field
              type="text"
              id="name"
              name="name"
              placeholder="Enter Name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="col-span-6">
            <div>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 my-4">
          <div className="col-span-6">
            <Field
              type="text"
              id="location"
              name="location"
              placeholder="Enter Location"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <ErrorMessage
              name="location"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="col-span-6">
            <Field
              as="select"
              id="category"
              name="category"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">Select a category</option>
              <option value="Energy Conservation">Energy Conservation</option>
              <option value="Waste Reduction">Waste Reduction</option>
              <option value="Sustainable Transportation">
                Sustainable Transportation
              </option>
              <option value="Water Conservation">Water Conservation</option>
            </Field>
            <ErrorMessage
              name="category"
              component="div"
              className="text-red-500"
            />
          </div>
        </div>

        <div>
          <Field
            as="textarea"
            id="pledgeStatement"
            name="pledgeStatement"
            placeholder="Pledge Statement"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <ErrorMessage
            name="pledgeStatement"
            component="div"
            className="text-red-500"
          />
        </div>

        <div className="text-white my-5">
          <label>
            <Field type="checkbox" name="subscribe" />
            Subscribe to updates and newsletters
          </label>
        </div>

        <div className="flex justify-center my-3">
          <button
            type="submit"
            className="bg-yellow-600 w-full text-white py-2 px-4 rounded-md hover:bg-[#1d6957db] focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default PledgeForm;
