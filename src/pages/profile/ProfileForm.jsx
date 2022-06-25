import React from 'react'
import { useFormik } from "formik";
import Input from "../../components/input/Input";

export const ProfileForm = () => {
    const formik = useFormik({
        initialValues: {
          name: "Кот",
          surname: "Леопольд",
          birthday: "20.20.1995г.",
          phone: "+996 000 123 456",
          carType: "Портер",
          password: "******",
        },
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
        },
      });
  return (
    <>
        <p>Личные данные</p>
        <form onSubmit={formik.handleSubmit}>
          <Input
            valueLabel="Имя"
            value={formik.values.name}
            onChange={formik.handleChange}
            name="name"
            width="600px"
          />
          <Input
            valueLabel="Фамилия"
            value={formik.values.surname}
            onChange={formik.handleChange}
            name="surname"
            width="600px"
          />
          <Input
            valueLabel="Дата рождения"
            value={formik.values.birthday}
            onChange={formik.handleChange}
            width="600px"
            name="birthday"
          />
          <Input
            valueLabel="Номер телефона"
            value={formik.values.phone}
            onChange={formik.handleChange}
            width="600px"
            name="phone"
          />
          <Input
            valueLabel="Марка машины"
            value={formik.values.carType}
            onChange={formik.handleChange}
            width="600px"
            name="carType"
          />
          <Input
            valueLabel="Пароль"
            value={formik.values.password}
            onChange={formik.handleChange}
            width="600px"
            type="password"
            name="password"
            margin="0 0 32px"
          />
        </form>
    </>
  )
}
