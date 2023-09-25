import React from "react";
import { ForoFeed } from "../../components/foroComponents/foroFeed";
import { NewPost } from "../../components/foroComponents/newPost";
import { useSelector } from "react-redux";

export const Foro = () => {

    const {activePost} = useSelector (state => state.granjApp);
  return (
    <>
      {(!!activePost) ? <NewPost /> : null}
      <ForoFeed />
    </>
  );
};
