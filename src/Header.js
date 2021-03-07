import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import Logo from './Logo.png'
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import  BusinessCenterIcon  from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationIcon from '@material-ui/icons/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
function Header() {
    const dispatch = useDispatch();
    const  logoutOfApp =  () =>{
      dispatch(logout())
      auth.signOut();
    };
function vision(){
    window.location.href = "http://127.0.0.1:5500/public/voice.html";
}
function profile(){
    window.location.href = "http://127.0.0.1:5500/public/profile.html";
}
    return (
        <div className="header">
            
            
            <div className="header_left">
                <img src={Logo} alt=""/>

                <div className="header_search">
                     <SearchIcon />
                    <input placeholder="Search" type="text"/>
                </div>
            </div>

            <div className="header_right">
                <HeaderOption Icon={HomeIcon} title='Home'/>
                <HeaderOption Icon={SupervisorAccountIcon}  onClick={vision} title='Hands free'/>
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
                <HeaderOption Icon={ChatIcon} title='Messaging'/>
                <HeaderOption Icon={NotificationIcon} onClick={profile} title='Profile'/>
                <HeaderOption avatar={true} title='Logout' onClick={logoutOfApp}/>

            </div>
                        
        </div>
    )
}

export default Header
