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
          <p className={s.first_p}>1</p>
          <p>Карина</p>
          <p>Белоусова</p>
          <p>Портер</p>
          <p>A212FG</p>
          <p>Голубой</p>
        </div>
      </Link>
      
      <Pagination />
    </div>
  );
};
