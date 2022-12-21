import { Form, message } from 'antd'
import Input from 'antd/lib/input/Input'
import React,{useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../resources/authentication.css'
import axios from 'axios'
import Spinner from '../components/Spinner'

function Login() {
    const [loading,setLoading]=useState(false);

    const navigate=useNavigate();
    const onFinish=async(values)=>{
        try {
            setLoading(true);
            const response= await axios.post('https://om-expenses.onrender.com/api/users/login',values)
           localStorage.setItem('domestic-expenditure-auditing',JSON.stringify({...response.data,password:''}))
          setLoading(false);
           message.success('login successful')
           navigate("/")
        } catch (error) {
            setLoading(false);
            message.error('login failed')
        }
    };
    useEffect(()=>{
      if(localStorage.getItem('domestic-expenditure-auditing')){
        navigate('/');
      }
    },[]);
    return (
        <div className='register'>
            {loading && <Spinner/>}
            <div className='row justify-content-center align-items-center w-100 h-100'>

                
                <div className='col-md-4'>
                    <Form layout='vertical' onFinish={onFinish}>
                       <h1>DOMESTIC EXPENSE AUDITING / Login</h1>
                       <hr/>
                        <Form.Item label='Name' name='name'>

                            <Input />
                        </Form.Item>


                        <Form.Item label='Email' name='email'>

                            <Input />
                        </Form.Item>


                        <Form.Item label='Password' name='password'>

                            <Input type='password'/>
                        </Form.Item>

                        <div className="d-flex justify-content-between align-items-center">
                            <Link to='/register'>NOT REGISTERED YET!!! , click here to REGISTER </Link>
                            <button className='primary' type='submit'>Login</button>
                        </div>
                    </Form>

                </div>
                <div className='col-md-5'>
                    <div className='lottie'>
                    <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_ocib98vu.json" background="transparent" speed="1" loop autoplay>

                    </lottie-player>
                    </div>
                </div>
            
            </div>
        </div>
    )
}

export default Login