import React, { useState } from "react";
import Input from "../../components/input/Input";
import "../../styles/Text.scss";
import { useFormik } from "formik";
import registerStyles from "../register/Registr.module.scss";
import s from "./Auth.module.scss";
import Button from "../../components/button/Button";
import "../../styles/baseStyles.scss";
import { Link, useNavigate } from "react-router-dom";
import {empty_checkbox} from "../../images";

const Auth = () => {
  const [open, setOpen] = useState(true);
  const [checkbox, setCheckbox] = useState(false)

  const toggle = () => {
    setOpen(!open);
  };
  const navigate = useNavigate()
  const checkboxToggle = () => {
    setCheckbox(!checkbox);
  };

  const [check, setCheck] = useState(false)

  const formik = useFormik({
    initialValues: {
      phone: "",
      password: "",
    },
    onSubmit: (data) => {
      {
        data.password === "qwerty" && data.phone === "+996505614949" ? (
          navigate("/main/events")
        ) : (
          setCheck(true)
        );
      }
    },
  });
  return (
    <div className={s.authh}>
      {/* <div id="dragon">
        <img className="dragon" src="https://i.gifer.com/XwYs.gif" />
      </div> */}
      <div className={s.auth}>
        <div className={s.auth_cont}>
          <form onSubmit={formik.handleSubmit} className={registerStyles.form}>
            <p className="form_title">АВТОРИЗАЦИЯ</p>
            <Input
              placeholder="+996"
              valueLabel="Номер телефона"
              value={formik.values.phone}
              onChange={formik.handleChange}
              name="phone"
              color={check==true&&"red"}
            />
            <div className={s.input_cont}>
              <Input
                placeholder="******"
                valueLabel="Пароль"
                type={open ? "password" : "text"}
                value={formik.values.password}
                onChange={formik.handleChange}
                name="password"
                color={check==true&&"red"}
              />
              {open === false ? (
                <div onClick={toggle} className={registerStyles.open_eye} />
              ) : (
                <div onClick={toggle} className={registerStyles.close_eye} />
              )}
            </div>

            {/* <div className={s.forgot_p_cont}>
              <Link to="/auth/ForgotPassword" className="grey_text">Забыли пароль?</Link>
            </div> */}

           {check===true&& <p className={s.wrong}>Неправильный пароль</p>} 

            <Button
              type="submit"
              disabled={!(formik.values.phone && formik.values.password)}
              text="ВОЙТИ"
              margin="30"
            />
            <div className={s.forgot_p_cont}>
              <Link to="/registr"><p className={s.register_text}>Зарегистрироваться</p></Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
