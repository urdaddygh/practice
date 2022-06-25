import React from "react";
import { Link } from "react-router-dom";
import s from "./RequestToRegistr.module.scss";
import ss from '../registered/Registered.module.scss'

export const RequestToRegistr = () => {
  return (
    <div className={ss.table_content}>
      <div className={s.title} style={{ fontWeight: "500" }}>
        <p className={s.first_p}>№</p>
        <p>Имя</p>
        <p>Фамилие</p>
        <p>Тип машины</p>
        <p>Гос номер</p>
        <p>Цвет машины</p>
        <p>Номер телефона</p>
      </div>
      <Link to="/main/users/registered/userInfo">
        <div className={s.title}>
          <p className={s.first_p}>1</p>
          <p>Карина</p>
          <p>Белоусова</p>
          <p>Портер</p>
          <p>А2342JH</p>
          <p>Синий</p>
          <p>+996509332344</p>
        </div>
      </Link>
      <Link to="/main/users/registered/userInfo">
        <div className={s.title}>
          <p className={s.first_p}>1</p>
          <p>Карина</p>
          <p>Белоусова</p>
          <p>Портер</p>
          <p>А2342JH</p>
          <p>Синий</p>
          <p>+996509332344</p>
        </div>
      </Link>
      <Link to="/main/users/registered/userInfo">
        <div className={s.title}>
          <p className={s.first_p}>1</p>
          <p>Карина</p>
          <p>Белоусова</p>
          <p>Портер</p>
          <p>А2342JH</p>
          <p>Синий</p>
          <p>+996509332344</p>
        </div>
      </Link>
      <Link to="/main/users/registered/userInfo">
        <div className={s.title}>
          <p className={s.first_p}>1</p>
          <p>Карина</p>
          <p>Белоусова</p>
          <p>Портер</p>
          <p>А2342JH</p>
          <p>Синий</p>
          <p>+996509332344</p>
        </div>
      </Link>
      <Link to="/main/users/registered/userInfo">
        <div className={s.title}>
          <p className={s.first_p}>1</p>
          <p>Карина</p>
          <p>Белоусова</p>
          <p>Портер</p>
          <p>А2342JH</p>
          <p>Синий</p>
          <p>+996509332344</p>
        </div>
      </Link>
      <Link to="/main/users/registered/userInfo">
        <div className={s.title}>
          <p className={s.first_p}>1</p>
          <p>Карина</p>
          <p>Белоусова</p>
          <p>Портер</p>
          <p>А2342JH</p>
          <p>Синий</p>
          <p>+996509332344</p>
        </div>
      </Link>
      <Link to="/main/users/registered/userInfo">
        <div className={s.title}>
          <p className={s.first_p}>1</p>
          <p>Карина</p>
          <p>Белоусова</p>
          <p>Портер</p>
          <p>А2342JH</p>
          <p>Синий</p>
          <p>+996509332344</p>
        </div>
      </Link>
      <Link to="/main/users/registered/userInfo">
        <div className={s.title}>
          <p className={s.first_p}>1</p>
          <p>Карина</p>
          <p>Белоусова</p>
          <p>Портер</p>
          <p>А2342JH</p>
          <p>Синий</p>
          <p>+996509332344</p>
        </div>
      </Link>
      
    </div>
  );
};
