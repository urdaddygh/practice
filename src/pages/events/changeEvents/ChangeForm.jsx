import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BackButton from "../../../components/arrowButton/BackButton";
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";
import { changeOrder } from "../../../redux/action";
import s from "./ChangeEvents.module.scss";

export const ChangeForm = ({ onClick }) => {
  const dispatch = useDispatch()
  const oneOrder = useSelector(state=>state.order.oneOrder[0])
  const formik = useFormik({
    initialValues: {
      name: oneOrder.name,
      number: oneOrder.phone,
      comment: oneOrder.note_man,
      adress: oneOrder.adress,
      type: oneOrder.type,
      price: oneOrder.price,
    },
    onSubmit: (values) => {
      // dispatch(changeOrder(values))
      // console.log(values)
      alert(JSON.stringify(values, null, 2));
    },
  });
  // console.log(oneOrder)
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
