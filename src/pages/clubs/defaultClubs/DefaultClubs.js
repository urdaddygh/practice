import React from 'react';
import s from "../../users/registered/Registered.module.scss";
import Input from "../../../components/input/Input";
import {Link} from "react-router-dom";
import {Pagination} from "../../../components/pagination/Pagination";

const DefaultClubs = () => {
    return (
        <div>
            <div className={s.table_content}>
                <div className={s.search}>
                    <Input placeholder="Поиск" minWidth="100%" maxWidth="100%" />
                </div>
                <div className={s.title} style={{ fontWeight: "500" }}>
                    <p className={s.first_p}>№</p>
                    <p>Имя заказчика</p>
                    <p>Имя водителя</p>
                    <p>Адрес заказа</p>
                    <p>Цена заказа</p>
                    <p>Тип груза</p>
                    <p>Тип Авто</p>
                </div>
                <Link to="/main/clubs/clubDetails">
                    <div className={s.title}>
                        <p className={s.first_p}>1</p>
                        <p>Евгений</p>
                        <p>Карина</p>
                        <p>Бишкек, 7 микр. 20 школа</p>
                        <p>2000 сом</p>
                        <p>мебель</p>
                        <p>Портер</p>
                    </div>
                </Link>
                <Pagination/>
            </div>
        </div>
    );
};

export default DefaultClubs;
