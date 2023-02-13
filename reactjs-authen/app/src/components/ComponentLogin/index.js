import React from "react";
import { Helmet } from 'react-helmet'
import { useState } from "react";

import { checkUserName, CheckPassword } from '../../validate'
import useLogin from "../../hooks/useLogin";

export default function ComponentLogin() {
    const { login } = useLogin()
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [validateUserName, setValidateUserName] = useState(true)
    const [validatePassword, setValidatePassword] = useState(true)
    return (
        <div>
            <Helmet>
                <title>Đăng nhập</title>
            </Helmet>
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Đăng nhập</h3>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Enter email"
                                onChange={(e) => {
                                    setUserName(e.target.value); setValidateUserName(checkUserName(e.target.value));
                                    if (e.target.value === '') {
                                        setValidateUserName(true);
                                    }
                                }}
                            />
                            {/* <p style={{ display: validateUserName === false ? 'block' : 'none', color: 'red' }}>Yêu cầu nhập đúng định dạng</p> */}
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter password"
                                onChange={(e) => {
                                    setPassword(e.target.value); setValidatePassword(CheckPassword(e.target.value));
                                    if (e.target.value === '') {
                                        setValidatePassword(true);
                                    }
                                }}
                            />
                            <p style={{ display: validatePassword === false ? 'block' : 'none', color: 'red' }}>Độ dài mật khẩu phải lớn hơn 6</p>
                        </div>
                        <div className="d-grid gap-2 mt-3" >
                            <button type="submit" className="btn btn-primary"
                                onClick={() => {
                                    if (validatePassword === false || validateUserName === false) {
                                        alert('Vui lòng nhập đúng định dạng')
                                    } else if (password === '' || userName === '') {
                                        alert('Vui lòng không được để trống')
                                    } else {
                                        login({ userName: userName, password: password })
                                    }
                                }}>
                                Đăng nhập
                            </button>
                        </div>
                        <p className="forgot-password text-right mt-2 ">
                            Bạn chưa có tài khoản
                            <button type="button" className="btn btn-link"
                                onClick={() => { window.location.href = '/signup' }}>Đăng ký</button>
                        </p>
                    </div>
                </form>
            </div >

        </div >
    )
}