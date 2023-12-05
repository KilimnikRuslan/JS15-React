import React from 'react';
import { useFormik } from 'formik';

const MyForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      city: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate: (values) => {
      const errors = {};
      if (!values.firstName) {
        errors.firstName = 'Обов\'язкове поле для заповнення';
      }
      if (!values.lastName) {
        errors.lastName = 'Обов\'язкове поле для заповнення';
      }
      if (!values.city) {
        errors.city = 'Обов\'язкове поле для заповнення';
      }
      return errors;
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="firstName">Ім'я:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName && (
          <div>{formik.errors.firstName}</div>
        )}
      </div>

      <div>
        <label htmlFor="lastName">Прізвище:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName && (
          <div>{formik.errors.lastName}</div>
        )}
      </div>

      <div>
        <label htmlFor="city">Місто:</label>
        <input
          type="text"
          id="city"
          name="city"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.city}
        />
        {formik.touched.city && formik.errors.city && (
          <div>{formik.errors.city}</div>
        )}
      </div>

      <button type="submit">Відправити</button>
    </form>
  );
};

export default MyForm;

