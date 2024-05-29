import React, { useState } from 'react';
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import { toast } from 'react-toastify';
import { loginApp } from '../services/UserService';


const Login = (props) => {

    const [email, settEmail] = useState("");
    const [password, settPassword] = useState("");

    const handleLogin = async () => {
        if (!email || !password) {
            toast.error("required email/password");
            return;
        }
        let res =  loginApp(email, password);
        if(res && res.token) {
            localStorage.setItem("token", res.token)
        }
    }
    return (
        <>
            <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
                <h1 title='Login'> Login</h1><br />
                <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' />
                <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' />

                <div className="d-flex justify-content-between mx-3 mb-4">
                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                    <a href="!#">Forgot password?</a>
                </div>

                <MDBBtn className="mb-4"
                    onClick={() => handleLogin()}
                >Sign in</MDBBtn>

                <div className="text-center">
                    <p>Not a member? <a href="#!">Register</a></p>
                    <p>or sign up with:</p>

                    <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
                        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                            <MDBIcon fab icon='facebook-f' size="sm" />
                        </MDBBtn>

                        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                            <MDBIcon fab icon='twitter' size="sm" />
                        </MDBBtn>

                        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                            <MDBIcon fab icon='google' size="sm" />
                        </MDBBtn>

                        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                            <MDBIcon fab icon='github' size="sm" />
                        </MDBBtn>

                    </div>
                </div>

            </MDBContainer>

        </>
    );
}

export default Login;