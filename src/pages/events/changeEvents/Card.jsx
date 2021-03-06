import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import BackButton from "../../../components/arrowButton/BackButton";
import ForwardButton from "../../../components/arrowButton/ForwardButton";
import Button from "../../../components/button/Button";
import { Delete } from "../../../components/delete/Delete";
import { deleteOrder, getById } from "../../../redux/action";
import s from ".././defaultEvents/DefaultEvents.module.scss";
import ss from "./ChangeEvents.module.scss";
import { ChangeForm } from "./ChangeForm";

export const Card = ({ name, date, phone, adress, type, note_man, id, new_order }) => {
  const [card, setCard] = useState(true);

  const toggle = () => {
    setCard(!card);
  };

  const [change, setChange] = useState(true);

  const dispatch = useDispatch()

  const getId = (id) => {
    dispatch(getById(id));
  };
  const foggle = () => {
    setChange(!change);
    getId(id)
    // console.log(id)
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
        <div className={s.arrow}>
        <p className={s.new_order}>{new_order}</p>
          <div className={s.arrow_button} onClick={toggle}>
            <ForwardButton />
          </div>
          </div>
        </div>
      ) : (
        <div className={ss.box}>
        
            <BackButton onClick={toggle} />
        
          <div>
            <p className={s.text}>
            Новый заказ
            </p>
            <p className={s.text_title}>Имя заказчика: {name}</p>
            <p>Информация о заказе</p>
            <div className={s.info}>
            <p >Дата: {date}</p>
            <p >Номер заказчика: {phone}</p>
            <p >Адрес: {adress}</p>
            <p >Тип груза: {type}</p>
            </div>
            <p>Комментарий заказчика</p>
            <p className={s.note}>
              {note_man}
            </p>
          </div>
          <div className={ss.footer}>
            <span onClick={foggle} className={ss.span}>
              <Button text="ИЗМЕНИТЬ ДАННЫЕ" margin="auto auto" />
            </span>
            <span className={ss.delete}>
              <Delete id={id} take={deleteOrder}/>
            </span>
          </div>
        </div>
      )}
    </>
  );
};
