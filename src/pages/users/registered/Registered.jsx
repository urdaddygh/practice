import React, { useState } from "react";
import Input from "../../../components/input/Input";
import { Modal } from "../../../components/modal/Modal";
import { Pagination } from "../../../components/pagination/Pagination";
import s from "./Registered.module.scss";
import { UserInfo } from "./UserInfo";
import { Link } from "react-router-dom";

export const Registered = () => {
  return (
    <div className={s.table_content}>
      <div className={s.search}>
        <Input placeholder="Поиск" minWidth="100%" maxWidth="100%" />
      </div>

      <div className={s.title} style={{ fontWeight: "500" }}>
        <p className={s.first_p}>№</p>
        <p>Имя</p>
        <p>Фамилия</p>
        <p>Тип машины</p>
        <p>Гос номер машины</p>
        <p>цвет машины</p>
      </div>
      <Link to="/main/users/registered/userInfo">
        <div className={s.title}>
          <p className={s.first_p}>1</p>
          <p>Карина</p>
          <p>Белоусова</p>
          <p>Портер</p>
          <p>A212FG</p>
          <p>Голубой</p>
        </div>
      </Link>
      <Link to="/main/users/registered/userInfo">
        <div className={s.title}>
          <p className={s.first_p}>2</p>
          <p>Ислам</p>
          <p>Мамбетакунов</p>
          <p>Зил</p>
          <p>С3212Т</p>
          <p>Чёрный</p>
        </div>
      </Link>
      <Link to="/main/users/registered/userInfo">
        <div className={s.title}>
          <p className={s.first_p}>3</p>
          <p>Арарат</p>
          <p>Медоусов</p>
          <p>Портер</p>
          <p>Е21421К</p>
          <p>Красный</p>
        </div>
      </Link>
      <Link to="/main/users/registered/userInfo">
        <div className={s.title}>
          <p className={s.first_p}>4</p>
          <p>Ырыс</p>
          <p>Чынгызов</p>
          <p>Портер</p>
          <p>О2341Д</p>
          <p>Белый</p>
        </div>
      </Link>
      <Link to="/main/users/registered/userInfo">
        <div className={s.title}>
          <p className={s.first_p}>5</p>
          <p>Александр</p>
          <p>Михайлов</p>
          <p>Портер</p>
          <p>У2321Ф</p>
          <p>Синий</p>
        </div>
      </Link>
      <Link to="/main/users/registered/userInfo">
        <div className={s.title}>
          <p className={s.first_p}>6</p>
          <p>Джон</p>
          <p>Мартышов</p>
          <p>Портер</p>
          <p>Л2321Д</p>
          <p>Белый</p>
        </div>
      </Link>
      <Link to="/main/users/registered/userInfo">
        <div className={s.title}>
          <p className={s.first_p}>7</p>
          <p>Кутман</p>
          <p>Маратов</p>
          <p>Портер</p>
          <p>Д2345Т</p>
          <p>Белый</p>
        </div>
      </Link>
      
      <Pagination />
    </div>
  );
};
