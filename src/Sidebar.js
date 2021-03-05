import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import "./Sidebar.css"
function Sidebar() {
    const user = useSelector(selectUser);
   const recentItem = (topic) =>(
       <div className="sidebar__recentItem">
          <span className="sidebar__hash">#</span>
          <p>{topic}</p>
       </div>
   )
    return (
        <div className="sidebar">
            <div className="sidebar__top">
             <img src="https://source.unsplash.com/tD7e9hVIRZo" alt=""/>
             <Avatar src={user.photourl} className="sidebar__avatar" >
                 {user.email[0]}
              </Avatar>
             <h2>{user.displayName}</h2>
             <h4>{user.email}</h4>
           </div>

           <div className="sidebar__stats">
               <div className="sidebar__stat">
                 <p>who viewed you</p>
                 <p className="sidebar__statNumber">
                     2,543
                 </p>
               </div>
               <div className="sidebar__stat">
                 <p>views on post</p>
                 <p className="sidebar__statNumber">
                     2,448
                 </p>
               </div>
           </div>
           <div className="sidebar__bottom">
               <p>Recent</p>
               {recentItem('reactjs')}
               {recentItem('programming')}
               {recentItem('softwareenginnering')}
               {recentItem('design')}
               {recentItem('developer')}
           </div>
        </div>  
    );
}

export default Sidebar 