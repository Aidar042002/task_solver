import React from 'react';

export default function Navbar(){

    return(
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="container-fluid">

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/home">Главная</a>
                                </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/login">Вход</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/register">Регистрация</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}