import React, { Component } from 'react';

import './../css/FormLogin.css'


class FormLogin extends Component {
    render() {
        return ( 
            <div class="container px-0">
                <div class="card col-10 col-md-6 col-lg-4">
                    <div class="card-body px-0">
                        <div class="card-title text-center">
                            <p class="text-muted lead"> ورود به حساب کاربری</p>
                            <img class="card-img-top" src="./img/logo3.png">
                        </div>
                            <form action="#" class="form-login needs-validation p-2" novalidate>
                                <div class="form-fields col-10 col-lg-10">
                                    <label for="username">نام کاربری :</label>
                                    <div class="input-group">
                                        <div class="input-group-prepend">

                                        </div>
                                        <input type="text" class="form-control mb-2" id="username" placeholder="" required>
                                        </div>
                                        <div class="invalid-feedback">
                                            لطفا نام کابری را وارد کنید
                        </div>
                                    </div>
                                    <div class="form-fields col-10 col-lg-10">
                                        <label for="password">رمز عبور :</label>
                                        <div class="input-group">
                                            <div class="input-group-prepend">

                                            </div>
                                            <input type="password" class="form-control" id="password" placeholder="" required>
                        </div>
                                            <div class="invalid-feedback">
                                                لطفا رمز عبور خود را وارد کنید
                        </div>
                                        </div>

                                        <div class="col-10 col-lg-10 mt-4 form-group">
                                            <button class="btn btn-info btn-lg btn-block" id="submit" type="submit">ورود</button>
                                        </div>
                                    </form>
                                </div>
        </div>
                        </div>
            
        )
    }
}

export default FormLogin;