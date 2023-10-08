import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { startLoadingPosts } from "../../store/granjApp/granjAppThunks";
import { PostCard } from "./postCard";
import "./postStyle.scss";
import { useEffect } from "react";

export const ForoFeed = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.granjApp);

  useEffect(() => {
    dispatch(startLoadingPosts());
  }, [dispatch]);

  return (
    <div className="feed-container">
      {posts.map((posts) => (
        <PostCard key={posts.id} {...posts} />
      ))}
    </div>
  );
};
