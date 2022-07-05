import React from "react";
import Input from "../../../components/input/Input";
import { useFormik } from "formik";
import s from "./ChangeEvents.module.scss";
import Button from "../../../components/button/Button";
import BackButton from "../../../components/arrowButton/BackButton";
import { useDispatch } from "react-redux";
import { addOrder } from "../../../redux/action";

export const CreateEvents = ({ active, setActive }) => {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      id:"",
      name: "",
      date:"",
      phone: "",
      note_man: "",
      adress: "",
      type: "",
      price: "",
      new_order:"Только что создали!"
    },
    onSubmit: (values) => {
      dispatch(addOrder(values))
      setActive(false)
      // alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className={active ? s.cont : s.unactive}>
      <BackButton onClick={() => setActive(false)} />

      <p style={{ fontSize: "30px", marginBottom: "40px" }}>Создание заказа</p>
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
          placeholder="+996"

          valueLabel="Номер заказчика"
          value={formik.values.phone}
          onChange={formik.handleChange}
          name="phone"
          width="600px"
        />
        <Input
          placeholder="Что-то..."

          valueLabel="Комментарий"
          value={formik.values.note_man}
          onChange={formik.handleChange}
          width="600px"
          name="note_man"
        />
        <Input
          placeholder="Введите адрес"

          valueLabel="Адрес"
          value={formik.values.adress}
          onChange={formik.handleChange}
          width="600px"
          name="adress"
        />
        <Input
          placeholder="Введите тип груза"

          valueLabel="Тип груза"
          value={formik.values.type}
          onChange={formik.handleChange}
          width="600px"
          name="type"
        />
        <Input
          placeholder="Укажите цену"

          valueLabel="Цена"
          value={formik.values.price}
          onChange={formik.handleChange}
          width="600px"
          name="price"
        />
        <Input
          placeholder="Введите Id"

          valueLabel="ID"
          value={formik.values.id}
          onChange={formik.handleChange}
          width="600px"
          name="id"
        />
        <Input
          placeholder="Введите дату"

          valueLabel="Дата"
          value={formik.values.date}
          onChange={formik.handleChange}
          width="600px"
          name="date"
        />
        <Button
          text="СОЗДАТЬ"
          disabled={
            !(
              formik.values.name &&
              formik.values.date &&
              formik.values.price &&
              formik.values.phone &&
              formik.values.type &&
              formik.values.id &&
              formik.values.date &&
              formik.values.note_man
            )
          }
          width="600px"
          type="submit"
        />
      </form>
    </div>
  );
};
