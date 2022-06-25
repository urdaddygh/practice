import React from "react";
import { useState } from "react";
import BackButton from "../../../components/arrowButton/BackButton";
import ForwardButton from "../../../components/arrowButton/ForwardButton";
import Button from "../../../components/button/Button";
import { Delete } from "../../../components/delete/Delete";
import s from ".././defaultEvents/DefaultEvents.module.scss";
import ss from "./ChangeEvents.module.scss";
import { ChangeForm } from "./ChangeForm";

export const Card = ({ text }) => {
  const [card, setCard] = useState(true);

  const toggle = () => {
    setCard(!card);
  };

  const [change, setChange] = useState(true);

  const foggle = () => {
    setChange(!change);
  };
  return (
    <>
      {change === false ? (
        <ChangeForm onClick={foggle} />
      ) : card === true ? (
        <div className={s.box}>
          <p className={s.text}>
            Новый заказ
          </p>
          {/* <p className={s.text_date}>29.06.2022г. - 30.06.2022г.</p> */}
          <p className={s.text_title}>Имя заказчика:...</p>
          <div className={s.arrow_button} onClick={toggle}>
            <ForwardButton />
          </div>
        </div>
      ) : (
        <div className={ss.box}>
        
            <BackButton onClick={toggle} />
        
          <div>
            <p className={s.text}>
            Новый заказ
            </p>
            <p className={s.text_title}>Имя заказчика: Евгений</p>
            <p>Информация о заказе</p>
            <div className={s.info}>
            <p >Дата: 29.06.2022г</p>
            <p >Номер заказчика: +996505551144</p>
            <p >Адрес: Бишкек, 7 микр. 20 школа</p>
            <p >Тип груза: Мебель</p>
            </div>
            <p>Комментарий заказчика</p>
            <p className={s.note}>
              Пожалуйста будьте аккуратны
            </p>
          </div>
          <div className={ss.footer}>
            <span onClick={foggle} className={ss.span}>
              <Button text="ИЗМЕНИТЬ ДАННЫЕ" margin="auto auto" />
            </span>
            <span className={ss.delete}>
              <Delete />
            </span>
          </div>
        </div>
      )}
    </>
  );
};
