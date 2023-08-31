import './setting.css';
import Sidebar from '../../components/sidebar/Sidebar';

export default function Setting() {
  return (
    <div className='setting'>
        <div className="settingWrapper">
            <div className="settingTitle">
                <span className="settingUpdateTitle">Update Your Account</span>
                <span className="settingDeleteTitle">Delete Account</span>
            </div>
            <form className="settingForm">
                <label>Profile Picture</label>
                <div className="settingPP">
                    <img src="https://images.pexels.com/photos/5232463/pexels-photo-5232463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="settingPPImg" />
                    <label htmlFor="fileInput">
                        <i className="settingPPIcon fa-regular fa-circle-user"></i>
                    </label>
                    <input type="file" id='fileInput' style={{display:'none'}}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder='Shahzaib'/>
                <label>Email</label>
                <input type="email" placeholder='shahzaibalikhan666@gmail.com'/>
                <label>Password</label>
                <input type="password" />
                <button className='settingSubmit'>Update</button>
            </form>
        </div>
        <Sidebar />
    </div>
   );
}
