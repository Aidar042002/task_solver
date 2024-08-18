import React from "react";

function LoginPage(){
    return(
        <div className="container-fluid w-25">
            <form>
                <h1 className="h3 mb-3 fw-normal">Войдите в аккаунт</h1>

                <div className="form-floating">
                    <input type="text" className="form-control" id="username" name="username" placeholder="Username"/>
                    <label htmlFor="floatingInput">Введите логин</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="password" name="password" placeholder="Password"/>
                    <label htmlFor="floatingPassword">Введите пароль</label>
                </div>

                <button className="btn btn-primary w-100 py-2" type="submit">Войти</button>
            </form>
        </div>
    );
}

export default LoginPage;