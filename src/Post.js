// import { Avatar } from "@material-ui/core";
import React from "react";
import InputOption from "./InputOption";
import "./Post.css";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
// import { selectUser } from "./features/userSlice";
// import { useSelector } from "react-redux";

function Post({ name, message, photoUrl, timestamp }) {
// const user = useSelector(selectUser);

  return (
    <div className="post">
      <div className="post__header">
        {/* <Avatar src={photoUrl} /> */}
        <div className="post__info">
          <h2>{name}</h2>
           <p>{new Date(timestamp?.toDate()).toUTCString()}</p> 
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltIcon} title="Like" color="gray" />
        <InputOption
          Icon={CommentIcon}
          title="Comment"
          color="lightgreen"
        />
        <InputOption Icon={ShareIcon} title="Share" color="orange" />
        <InputOption Icon={SendIcon} title="Send" color="lightblue" />
      </div>
    </div>
  );
}

export default Post;