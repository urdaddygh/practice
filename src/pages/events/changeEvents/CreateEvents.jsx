import React from "react";
import Input from "../../../components/input/Input";
import { useFormik } from "formik";
import s from "./ChangeEvents.module.scss";
import Button from "../../../components/button/Button";
import BackButton from "../../../components/arrowButton/BackButton";

export const CreateEvents = ({ active, setActive }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
      comment: "",
      adress: "",
      type: "",
      price: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
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
          value={formik.values.number}
          onChange={formik.handleChange}
          name="number"
          width="600px"
        />
        <Input
          placeholder="Что-то..."

          valueLabel="Комментарий"
          value={formik.values.comment}
          onChange={formik.handleChange}
          width="600px"
          name="comment"
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
        {/* <Input
          placeholder="Главный судья"
          valueLabel="Информация о мероприятии - главный судья"
          value={formik.values.referee}
          onChange={formik.handleChange}
          width="600px"
          name="referee"
        />
        <Input
          placeholder="Секретарь"
          valueLabel="Информация о мероприятии- секретарь"
          value={formik.values.secretary}
          onChange={formik.handleChange}
          width="600px"
          name="secretary"
        />
        <Input
          placeholder="Примечание"
          valueLabel="Примечание"
          value={formik.values.note}
          onChange={formik.handleChange}
          width="600px"
          name="note"
        /> */}

        {/* <div className={s.age}>
          <div>
            <Input
              placeholder="с"
              width="285px"
              valueLabel="Возрастная категория"
              value={formik.values.agePre}
              onChange={formik.handleChange}
              name="agePre"
            />

            <Input
              placeholder="по"
              valueLabel=""
              width="285px"
              value={formik.values.ageAfter}
              onChange={formik.handleChange}
              name="ageAfter"
            />
            <span className={s.age_span}></span>
          </div>
        </div> */}
        <Button
          text="СОЗДАТЬ"
          disabled={
            !(
              formik.values.name &&
              formik.values.date &&
              formik.values.place &&
              formik.values.referee &&
              formik.values.secretary &&
              formik.values.ageAfter &&
              formik.values.agePre &&
              formik.values.note
            )
          }
          width="600px"
          type="submit"
        />
      </form>
    </div>
  );
};
