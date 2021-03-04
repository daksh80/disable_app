import React, {useEffect, useState} from 'react';
import "./Feed.css";
import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import InputOption from './InputOption';
import  CalendarViewDayIcon  from '@material-ui/icons/CalendarViewDay';
import EventNoteIcon from '@material-ui/icons/EventNote';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import Post from './Post';
import { db } from './firebase';
function Feed() {
    const [posts,setPosts]= useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) =>
            setPosts(
                snapshot.docs.map((doc) =>({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        );
    }, []);
    const sendPost = e =>{
        e.preventDefault();
    };
    return (
        <div className='feed'>
            <div className="feed__inputContainer">
               <div className="feed__input">
                   <CreateIcon />   
                   <form>
                       <input type="text"/>
                       <button onClick={sendPost} type ='submit' >Send</button>
                   </form>
                </div> 
                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title='Photo' color='#70B5F9'/>
                    <InputOption Icon={SubscriptionsIcon} title='Video' color='#E7A33E'/>
                    <InputOption Icon={EventNoteIcon} title='Event' color='#C0CBCD'/>
                    <InputOption Icon={CalendarViewDayIcon} title='Write artical' color='#7FC15E'/>
                </div>
            </div>

            {/* posts */}
            {posts.map((post)=>(
                <Post />
            ))}
            <Post name='Dakshendra Singh' description='This is a test'
            message='Wow this worked'/>
        </div>
    );
}

export default Feed;
