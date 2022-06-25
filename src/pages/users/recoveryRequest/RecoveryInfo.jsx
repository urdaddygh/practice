import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import BackButton from "../../../components/arrowButton/BackButton";
import Button from "../../../components/button/Button";
import Input from "../../../components/input/Input";
import TextArea from "../../../components/input/TextArea";
import s from "./RecoveryRequest.module.scss";

export const RecoveryInfo = () => {
  const formik = useFormik({
    initialValues: {
      recovery: "Помогите, пожалуйста, восстановить пароль",
      number: "+99650443234",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <div className={s.info}>
        <Link to="/main/users/recoveryRequest">
          <BackButton />
        </Link>
        <p className={s.text}>Информация о пользователе</p>
        <p style={{ fontWeight: "normal" }}>Заявка № 1</p>

        <form onSubmit={formik.handleSubmit}>
          <Input
            valueLabel="Номер телефона"
            value={formik.values.number}
            onChange={formik.handleChange}
            name="number"
            width="600px"
          />
          <Input
            valueLabel="Обращение"
            value={formik.values.recovery}
            onChange={formik.handleChange}
            name="surname"
            width="600px"
            minHeight="200px"
          />
          {/* <div className={s.area_container}>
            <label className={s.label}>dsa</label>
            <textarea
              rows="10"
              cols="45"
        className={s.input}

            />
          </div> */}

          <p style={{ marginTop: "50px" }}>Принять заявку?</p>

          <Button width="210px" margin="0 30px 0 0" text="НЕТ" disabled />
          <Button width="210px" text="ДА" margin="31px 0 0" type="submit" />
        </form>
      </div>
    </>
  );
};
