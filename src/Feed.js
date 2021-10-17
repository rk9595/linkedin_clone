import React, {useEffect, useState} from 'react';
import './Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import Post from './Post';
import InputOption from "./InputOption";
import ImageIcon from '@mui/icons-material/Image';
import { db } from './firebase';
 import firebase from 'firebase';



function Feed() {

    const[posts, setPosts]= useState([]); //state is like a react variable to capture, setter function for changing state, initial value is empty array
    const[input, setInput]=useState('');
    // activate the code, when the Feed component loads and also re-renders the code if we don't pass in the second argument
    useEffect( ()=>{
        db.collection("posts").onSnapshot(snapshot=>(setPosts(snapshot.docs.map(doc=>(
            {
                id: doc.id, data: doc.data()
            }
        )))))

    
    }

    )

    const sendPost=e=>{
         e.preventDefault();

        db.collection('posts').add({
            name: 'Rakesh Kariya',
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
    };
  return (
    <div className="feed">
        <div className="feed_inputContainer">
            <div className="feed_input">
                <CreateIcon/>
                <form>
                    <input value={input} onChange= {(e) => setInput(e.target.value)}type="text"/>
                    <button onClick={sendPost} type='submit'> Send </button>
                    
                </form>
                
            </div>

            <div className="feed_inputOptions">
                <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9"/>
                


            </div>

            {/* everytime I have a post, render Post*/}
            {posts.map(({id, data:{name, message,timestamp}})=>
            (<Post 
                key={id}
                name={name}
                message={message}
                photoUrl={photoUrl}
                timestamp={timestamp} 
            />)

            )}
            

        </div>
      

      
      
    </div>
  )
}

export default Feed;


