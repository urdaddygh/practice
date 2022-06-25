import { useFormik } from "formik";
import React from "react";
import BackButton from "../../../components/arrowButton/BackButton";
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";
import s from "./ChangeEvents.module.scss";

export const ChangeForm = ({ onClick }) => {
  const formik = useFormik({
    initialValues: {
      name: "Евгений",
      number: "+996505551144",
      comment: "Пожалуйста будьте аккуратны",
      adress: "Бишкек, 7 микр. 20 школа",
      type: "Мебель",
      price: "2000 сом",
      // agePre: "С 9",
      // ageAfter: "По 15",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className={s.cont}>
 
        <BackButton onClick={onClick}/>
    
      <p style={{ fontSize: "30px", marginBottom: "40px" }}>Изменение данных о заказе</p>
      <form onSubmit={formik.handleSubmit}>
        <Input
          valueLabel="Имя"
          value={formik.values.name}
          onChange={formik.handleChange}
          name="name"
          width="600px"
        />
        <Input
          valueLabel="Номер заказчика"
          value={formik.values.number}
          onChange={formik.handleChange}
          name="number"
          width="600px"
        />
        <Input
          valueLabel="Комментарий"
          value={formik.values.comment}
          onChange={formik.handleChange}
          width="600px"
          name="comment"
        />
        <Input
          valueLabel="Адрес"
          value={formik.values.adress}
          onChange={formik.handleChange}
          width="600px"
          name="adress"
        />
        <Input
          valueLabel="Тип груза"
          value={formik.values.type}
          onChange={formik.handleChange}
          width="600px"
          name="type"
        />
        <Input
          valueLabel="Цена"
          value={formik.values.price}
          onChange={formik.handleChange}
          width="600px"
          name="price"
        />

        {/* <div className={s.age}>
          <div>
            <Input
              width="285px"
              valueLabel="Возрастная категория"
              value={formik.values.agePre}
              onChange={formik.handleChange}
              name="agePre"
            />

            <Input
              valueLabel=""
              width="285px"
              value={formik.values.ageAfter}
              onChange={formik.handleChange}
              name="ageAfter"
            />
            <span className={s.age_span}></span>
          </div>
        </div> */}
          <Button width="600px" text="СОХРАНИТЬ" type="submit"/>
      </form>
    </div>
  );
};
