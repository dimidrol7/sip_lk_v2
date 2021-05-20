import React from 'react';
import s from '../css/Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/phonelist" activeClassName={s.activeLink}>Номера</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/personal" activeClassName={s.activeLink}>Сотрудники</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/detail" activeClassName={s.activeLink}>Детализация</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/grid" activeClassName={s.activeLink}>-------------</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/grid" activeClassName={s.activeLink}>Таблица звонков (тест)</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Управление вызовами</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/grid" activeClassName={s.activeLink}>Детализация</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/abonentlist" activeClassName={s.activeLink}>Список сотрудников</NavLink>
            </div>

        </nav>
    )
}

export default Navbar;