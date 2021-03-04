import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Sidebar.css"
function Sidebar() {
    return (
        <div className="sidebar">
           <img src="" alt=""/>
           <Avatar />
           <h2>Dakshendra Singh</h2>
           <h4>pal.dakshendra80@gmail.com</h4>
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
           </div>
        </div>  
    );
}

export default Sidebar 