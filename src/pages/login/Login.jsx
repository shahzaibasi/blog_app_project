import { Link } from 'react-router-dom';
import './login.css';

export default function Login() {
  return (
    <div className='login'>
        <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input className='loginInput' type="email" placeholder='Enter Your Email...'/>
        <label>Password</label>
        <input className='loginInput' type="password" placeholder='Enter Your Password...'/>
        <button className="loginButton">Log In</button>
      </form>
      <button className="loginRegisterButton">
        <Link to="/register" className='link'>Register</Link>
      </button>
    </div>
  );
}
