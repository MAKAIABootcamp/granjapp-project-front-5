import { ForoFeed } from "../../components/foroComponents/foroFeed";
import { NewPost } from "../../components/foroComponents/newPost";
import { useSelector } from "react-redux";
import React from 'react'

const ForoPage = () => {
  const {activePost} = useSelector (state => state.granjApp);
  return (
    <>
      {(!!activePost) ? <NewPost /> : null}
      <ForoFeed />
    </>
  );
}

export default ForoPage;
