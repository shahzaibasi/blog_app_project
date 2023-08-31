// import Setting from '../../pages/settings/Setting';
import Setting from '../../pages/settings/Setting';
import './topbar.css';
import { Link } from 'react-router-dom';

export default function Topbar() {
  const user = true;
  return (
    <div className='top'>
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to='/' className='link'>HOME</Link>
          </li>
          <li className="topListItem">
            <Link className='link' to="/about">ABOUT</Link>
          </li>
          <li className="topListItem">
            <Link className='link'>CONTACT</Link>
          </li>
          <li className="topListItem">
            <Link to="/write" className='link'>WRITE</Link>
          </li>
          <li className="topListItem">
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (
            <img src="https://images.pexels.com/photos/17589788/pexels-photo-17589788/free-photo-of-man-with-camera.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className='topImg' onClick={() => <Setting /> }/>
          ) : (
            <ul className='topList'>
              <li className="topListItem">
                <Link to="/login" className='link'>LOGIN</Link>
              </li>
              <li className="topListItem">
                <Link to="/register" className='link'>REGISTER</Link>
              </li>
            </ul>
          )
        }
        {/* <img src="https://images.pexels.com/photos/17589788/pexels-photo-17589788/free-photo-of-man-with-camera.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className='topImg' /> */}
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
