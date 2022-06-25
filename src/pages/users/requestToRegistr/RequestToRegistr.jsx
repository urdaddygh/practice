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
          <p className={s.first_p}>2</p>
          <p>Азирет</p>
          <p>Азаматов</p>
          <p>Портер</p>
          <p>Hd21341</p>
          <p>Голубой</p>
          <p>+996509998877</p>
        </div>
      </Link>
      <Link to="/main/users/registered/userInfo">
        <div className={s.title}>
          <p className={s.first_p}>3</p>
          <p>Ислам</p>
          <p>Мамбетакунов</p>
          <p>Зил</p>
          <p>С3212Т</p>
          <p>Чёрный</p>
          <p>+996709963455</p>
        </div>
      </Link>
      <Link to="/main/users/registered/userInfo">
        <div className={s.title}>
          <p className={s.first_p}>4</p>
          <p>Арарат</p>
          <p>Медоусов</p>
          <p>Портер</p>
          <p>Е21421К</p>
          <p>Красный</p>
          <p>+996999324422</p>
        </div>
      </Link>
      <Link to="/main/users/registered/userInfo">
        <div className={s.title}>
          <p className={s.first_p}>5</p>
          <p>Ырыс</p>
          <p>Чынгызов</p>
          <p>Портер</p>
          <p>О2341Д</p>
          <p>Белый</p>
          <p>+996555234411</p>
        </div>
      </Link>
      <Link to="/main/users/registered/userInfo">
        <div className={s.title}>
          <p className={s.first_p}>6</p>
          <p>Александр</p>
          <p>Михайлов</p>
          <p>Портер</p>
          <p>У2321Ф</p>
          <p>Синий</p>
          <p>+996779234411</p>
        </div>
      </Link>
      <Link to="/main/users/registered/userInfo">
        <div className={s.title}>
          <p className={s.first_p}>7</p>
          <p>Джон</p>
          <p>Мартышов</p>
          <p>Портер</p>
          <p>Л2321Д</p>
          <p>Белый</p>
          <p>+996509332344</p>
        </div>
      </Link>
      <Link to="/main/users/registered/userInfo">
        <div className={s.title}>
          <p className={s.first_p}>8</p>
          <p>Кутман</p>
          <p>Маратов</p>
          <p>Портер</p>
          <p>Д2345Т</p>
          <p>Белый</p>
          <p>+996708645123</p>
        </div>
      </Link>
      
    </div>
  );
};
