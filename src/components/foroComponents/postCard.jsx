import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { likesAction } from "../../store/granjApp/granjAppThunks";
import likeIcon from "../../assets/icons/like.svg";
import comments from "../../assets/icons/comments.svg";
import send from "../../assets/icons/share.svg";

export const PostCard = ({
  displayName = "",
  image = "",
  id,
  caption = "",
  photoURL = "",
  likes,
  creationDate,
}) => {
  const dispatch = useDispatch();

  const { uid } = useSelector((store) => store.auth);

  const handleLikes = () => {
    console.log("Me gusta");
    dispatch(likesAction(id, uid));
  };
  return (
    <div key={id} className="home-feed-item">
      <div className="user-info">
        <img
          src={photoURL}
          alt={`Avatar ${displayName}`}
          className="user-avatar"
        />
        <span className="username">{displayName}</span>
        <span>{creationDate}</span>
      </div>
      <img src={image} alt={`Post ${id}`} className="post-image" />
      <div className="post-actions">
        <div className="actions-left">
          <img
            src={likeIcon}
            alt=""
            className="action-icon"
            onClick={handleLikes}
          />
          <img src={comments} alt="" className="action-icon" />
          <img src={send} alt="" className="action-icon" />
        </div>
      </div>

      <div className="post-details">
        <span className="likes-count">{likes} likes</span>
        <p className="post-caption">{caption}</p>
        <span className="view-comments">View all comments</span>
      </div>
    </div>
  );
};
