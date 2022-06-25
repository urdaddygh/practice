import { useFormik } from "formik";
import React,{useState} from "react";
import BackButton from "../../../components/arrowButton/BackButton";
import Input from "../../../components/input/Input";
import { ThreeDot } from "../../../components/threeDot/ThreeDot";
import s from "./Registered.module.scss";
import Button from '../../../components/button/Button' 
import { Link } from "react-router-dom"

export const UserInfo = () => {
  const formik = useFormik({
    initialValues: {
      name: "Карина",
      surname: "Белоусова",
      type: "Портер",
      phone: "+996 000 123 456",
      carNumber: "A212FG",
      color: "Голубой",
      password: "******",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const [buttonState, setButtonState] = useState(true)

  const foggle = () =>{
    setButtonState(!buttonState)
  }
 
  return (
    <>
      <div className={s.info}>
        <Link to="/main/users/registered">
          <BackButton />
        </Link>
        <p className={s.text}>Информация о пользователе</p>
        {buttonState === false ? (
          <div className={s.button_cont}>
            <Button width="600px" text="СОХРАНИТЬ" margin="0px 0" />
          </div>
        ) : (
          <ThreeDot onClick={foggle} />
        )}

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
            valueLabel="Тип машины"
            value={formik.values.type}
            onChange={formik.handleChange}
            width="600px"
            name="type"
          />
          <Input
            valueLabel="Номер телефона"
            value={formik.values.phone}
            onChange={formik.handleChange}
            width="600px"
            name="phone"
          />
          <Input
            valueLabel="Гос номер машины"
            value={formik.values.carNumber}
            onChange={formik.handleChange}
            width="600px"
            name="carNumber"
          />
          <Input
            valueLabel="Цвет"
            value={formik.values.color}
            onChange={formik.handleChange}
            width="600px"
            name="color"
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
          <label className={s.status}>
            <p>Статус</p>
            <input type="radio" className={s.input} />
          </label>
        </form>
      </div>
    </>
  );
};
