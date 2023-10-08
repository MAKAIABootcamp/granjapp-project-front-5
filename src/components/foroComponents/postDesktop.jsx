import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setActivePost } from '../../store/granjApp/granjAppSlice';

export const PostDesktop = ({displayName='', photoURL=''}) => {

    const dispatch = useDispatch();
    const { activePost} = useSelector(state => state.granjApp);

    const handleOpenForm = () => {
        console.log('abrir modal');
        dispatch(setActivePost(!activePost))
      }

  return (
    <div className='buttonNewPostDesktop-container'>
        <span>{displayName}</span>
        <figure>
            <img src={photoURL} alt="" />
        </figure>
        <button onClick={handleOpenForm}>Realizar una publicacion </button>
    </div>
  )
}
