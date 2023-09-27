import React from "react";
import likes from '../../assets/icons/like.svg'
import comments from '../../assets/icons/comments.svg'
import send from '../../assets/icons/share.svg'

export const PostCard = ({userName= '', image= '', id, caption= '', avatar= ''}) => {
  return (
    <div key={id} className="home-feed-item">
      <div className="user-info">
        <img
          src={avatar}
          alt={`Avatar ${userName}`}
          className="user-avatar"
        />
        <span className="username">{userName}</span>
      </div>
      <img src={image} alt={`Post ${id}`} className="post-image" />
      <div className="post-actions">
        <div className="actions-left">
          <img src={likes} alt="" className="action-icon" />
          <img src={comments} alt="" className="action-icon" />
          <img src={send} alt="" className="action-icon" />
        </div>
      </div>

      <div className="post-details">
        <span className="likes-count">0 likes</span>
        <p className="post-caption">{caption}</p>
        <span className="view-comments">View all comments</span>
      </div>
    </div>
  );
};
