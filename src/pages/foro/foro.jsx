import { ForoFeed } from "../../components/foroComponents/foroFeed";
// import { NewPost } from "../../components/foroComponents/newPost";
import PostForm from "../../components/foroComponents/postForm";
import { useSelector } from "react-redux";
import React from 'react'
import { PostDesktop } from "../../components/foroComponents/postDesktop";

const ForoPage = () => {
  const {activePost} = useSelector (state => state.granjApp);
  return (
    <>
      <PostDesktop/>
      {(activePost) ? <PostForm /> : null}
      <ForoFeed />
    </>
  );
}

export default ForoPage;
