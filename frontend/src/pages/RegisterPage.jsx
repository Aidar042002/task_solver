import React from "react";

function RegisterPage(){
    return(
        <div className="container-fluid w-25">
            <form>
                <h1 className="h3 mb-3 fw-normal">Регистрация</h1>

                <div className="form-floating">
                    <input type="text" className="form-control" id="username" name="username" placeholder="Username"/>
                    <label htmlFor="floatingUsername">Имя</label>
                </div>
                <div className="form-floating">
                    <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com"/>
                    <label htmlFor="floatingInput">Почта</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="password" name="password" placeholder="Password"/>
                    <label htmlFor="floatingPassword">Пароль</label>
                </div>

                <button className="btn btn-primary w-100 py-2" type="submit">Зарегистрироваться</button>
            </form>
        </div>
    );
}

export default RegisterPage;