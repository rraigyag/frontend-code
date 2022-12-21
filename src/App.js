import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'; 
import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom';
import { Button } from 'antd';
import Home from './pages/Home';
import Test from './pages/Test';
import Login from './pages/Login';
import Register from './pages/Register';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
       <Routes>
        <Route path='/' element={<ProtectedRoute> <Home/> </ProtectedRoute>}></Route>
        <Route path='/test' element={<ProtectedRoute> <Test/></ProtectedRoute>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
        
        
        
        </Routes>

      
      </BrowserRouter>

    </div>
  );
}
function ProtectedRoute(props){
  if (localStorage.getItem('domestic-expenditure-auditing')) {
        return props.children
  } else {
     return <Navigate to='/login'/>
  }
}
export default App;
