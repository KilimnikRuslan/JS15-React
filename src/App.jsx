import React from 'react';
import { useForm } from 'react-hook-form';

const MyForm = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Ім'я:</label>
        <input {...register('firstName', { required: 'Це поле обов\'язкове' })} />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>

      <div>
        <label>Прізвище:</label>
        <input {...register('lastName', { required: 'Це поле обов\'язкове' })} />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>

      <div>
        <label>Місто:</label>
        <input {...register('city', { required: 'Це поле обов\'язкове' })} />
        {errors.city && <p>{errors.city.message}</p>}
      </div>

      <button type="submit">Відправити</button>
    </form>
  );
};

export default MyForm;
