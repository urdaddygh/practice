import React, {useState} from 'react';
import Input from "../../../components/input/Input";
import s from "./DefaultClubs.module.scss"
import BackButton from "../../../components/arrowButton/BackButton";
import OptionButton from "../../../components/optionButton/OptionButton";
import {useNavigate} from "react-router";
import Options from "../../../components/options/Options";
import DeleteModal from "../../../components/modals/DeleteModal";

const ClubDetails = () => {

    const [openOption, setOpenOption] = useState(false);
    const handleOpenOption = () => {setOpenOption(!openOption)}

    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const handleOpenDeleteModal = () => {setOpenDeleteModal(true)}
    const handleCloseDeleteModal = () => {setOpenDeleteModal(false)}

    const navigate = useNavigate()
    return (
        <>
            <div className={s.form_cont}>
                <BackButton onClick={() => navigate("/main/clubs")}/>
                <OptionButton onClick={handleOpenOption} top="30px" right="30px"/>
                {openOption && <Options link="/main/clubs/editClub" handleOpenDeleteModal={handleOpenDeleteModal}/>}
                <p className="container_title">Информация о клубе</p>
                <Input valueLabel="Имя заказчика" width="100%" value="Евгений"/>
                <Input valueLabel="Адрес" width="100%" value="Бишкек, 7 микр. 20 школа"/>
                <Input valueLabel="Имя водителя" width="100%" value="Карина"/>
                <Input valueLabel="Цена заказа" width="100%" value="2000 сом"/>
                <Input valueLabel="Тип груза" width="100%" value="Мебель"/>
                <Input valueLabel="Тип Авто" width="100%" value="Портер"/>
                {/* <div className="flex">
                    <Input valueLabel="Возраст спортсменов" width="285px" value="С 8 лет"/>
                    <div className={s.inp_plus_cont}>
                        <Input width="285px" value="По 19 лет"/>
                    </div>
                </div>
                <div className="flex">
                    <Input valueLabel="Возрастная категория" width="285px" value="с 9"/>
                    <div className={s.inp_plus_cont}>
                        <Input width="285px" value="По 15"/>
                        <p className={s.plus}>+</p>
                    </div>
                </div> */}
            </div>
            { openDeleteModal && <DeleteModal text="Вы уверены, что хотите удалить данный клуб?" open={openDeleteModal} handleClose={handleCloseDeleteModal}/> }
        </>

    );
};

export default ClubDetails;
