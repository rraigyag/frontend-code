import React from 'react'
import { Button, Dropdown, Menu, Space } from 'antd';

import '../resources/default-layout.css'
import { useNavigate } from 'react-router-dom';
function DefaultLayout(props) {
  const navigate=useNavigate();
  const user=JSON.parse(localStorage.getItem('domestic-expenditure-auditing'));
  const menu = (
    <Menu
      items={[
        {
      
          label: (
           <li onClick={()=>{
            localStorage.removeItem('domestic-expenditure-auditing')
            navigate('/login')
           }}>Logout</li>
           
          ),
        }
        
      ]}
    />
  );
  return (
    <div className='layout '>
        <div className='header d-flex justify-content-between align-items-center'>
          <div >
             <h1 className='logo'>  Domestic Expense Auditing</h1>
          </div>
          <div>
          <Dropdown overlay={menu} placement="bottomLeft">
        <button className='primary'>{user.name}</button>
      </Dropdown>
          </div>

        </div>
     
     <div className='content'>
      {props.children}
     </div>


    
    </div>
  )
}

export default DefaultLayout