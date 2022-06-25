import React from "react";
import BackButton from "../../../components/arrowButton/BackButton";
import { NavLink } from "react-router-dom";
import s from "../registered/Registered.module.scss";
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";
import { useFormik } from "formik";

export const CreateUser = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      type: "",
      phone: "",
      carNumber: "",
      color: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className={s.info}>
      <NavLink to="/main/users/registered">
        <BackButton />
      </NavLink>
      <p style={{ fontSize: "22px", marginBottom: "30px", marginTop: "50px" }}>
        Создание пользователя
      </p>
      <form onSubmit={formik.handleSubmit}>
        <Input
          placeholder="Введите имя"
          valueLabel="Имя"
          value={formik.values.name}
          onChange={formik.handleChange}
          name="name"
          width="600px"
        />
        <Input
          placeholder="Введите Фамилию"
          valueLabel="Фамилия"
          value={formik.values.surname}
          onChange={formik.handleChange}
          name="surname"
          width="600px"
        />
        <Input
          placeholder="Введите тип машины"
          valueLabel="Тип машины"
          value={formik.values.type}
          onChange={formik.handleChange}
          width="600px"
          name="type"
        />
        <Input
          placeholder="+996"
          valueLabel="Номер телефона"
          value={formik.values.phone}
          onChange={formik.handleChange}
          width="600px"
          name="phone"
        />
        <Input
          placeholder="Введите гос номер машины"
          valueLabel="Гос номер машины"
          value={formik.values.carNumber}
          onChange={formik.handleChange}
          width="600px"
          name="carNumber"
        />
        <Input
          placeholder="Голубой"
          valueLabel="Цвет"
          value={formik.values.color}
          onChange={formik.handleChange}
          width="600px"
          name="color"
        />
        <Input
          placeholder="Введите пароль"
          valueLabel="Пароль"
          value={formik.values.password}
          onChange={formik.handleChange}
          width="600px"
          type="password"
          name="password"
          margin="0 0 32px"
        />
        <label className={s.status}>
          <p>Статус</p>
          <input type="radio" className={s.input} />
        </label>
        <Button
          width="600px"
          text="СОЗДАТЬ"
          disabled={
            !(
              formik.values.name &&
              formik.values.surname &&
              formik.values.position &&
              formik.values.phone &&
              formik.values.email &&
              formik.values.city &&
              formik.values.club &&
              formik.values.password
            )
          }
          margin="82px 0 0"
        />
      </form>
    </div>
  );
};
