import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Sidebar.css"
function Sidebar() {
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
             <Avatar />
             <h2>Dakshendra Singh</h2>
             <h4>pal.dakshendra80@gmail.com</h4>
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