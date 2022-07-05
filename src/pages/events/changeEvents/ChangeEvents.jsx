import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ForwardButton from "../../../components/arrowButton/ForwardButton";
import Button from "../../../components/button/Button";
import s from ".././defaultEvents/DefaultEvents.module.scss";
import { Card } from "./Card";
import ss from "./ChangeEvents.module.scss";
import { CreateEvents } from "./CreateEvents";

export const ChangeEvents = () => {

  const order = useSelector(state=>state.order.order)
  console.log(order)
  const [active, setActive] = useState(false)

  return (
    <div className={s.cont}>
      <div className={ss.button}>
        <NavLink to="" className={s.link}>
          Все заказы
        </NavLink>

        <Button margin="0 0" text="СОЗДАТЬ" onClick={() => setActive(true)} />
      </div>

      <div className={s.content}>
        <CreateEvents active={active} setActive={setActive} />
        {order.map((el, index) => (
          <Card
            key={index}
            name={el.name}
            date={el.date}
            phone={el.phone}
            adress={el.adress}
            type={el.type}
            note_man={el.note_man}
            id={el.id}
          />
        ))}
      </div>
    </div>
  );
};
