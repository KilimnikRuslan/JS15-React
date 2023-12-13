import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const MyForm = () => {
  const { handleSubmit, control, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Ім'я:</label>
        <Controller
          name="firstName"
          control={control}
          rules={{ required: 'Це поле обов\'язкове' }}
          render={({ field }) => <input {...field} />}
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </div>

      <div>
        <label>Прізвище:</label>
        <Controller
          name="lastName"
          control={control}
          rules={{ required: 'Це поле обов\'язкове' }}
          render={({ field }) => <input {...field} />}
        />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>

      <div>
        <label>Місто:</label>
        <Controller
          name="city"
          control={control}
          rules={{ required: 'Це поле обов\'язкове' }}
          render={({ field }) => <input {...field} />}
        />
        {errors.city && <p>{errors.city.message}</p>}
      </div>

      <button type="submit">Відправити</button>
    </form>
  );
};

export default MyForm;

