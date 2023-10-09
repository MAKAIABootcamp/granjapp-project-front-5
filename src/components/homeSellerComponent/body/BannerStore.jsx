
import React from 'react'

const BannerStore = ({ store }) => {
  return (
    <div className='flex-col items-center justify-center mx-auto my-8'>
      <h1 className='text-center text-xl'>{store.title}</h1>
      <img src={store.logo} className='object-cover p-3 flex mx-auto w-full lg:w-[40%] sm:w-[80%] md:w-[60%] h-auto aspect-auto rounded-lg' />
      <p className='flex sm:px-2 sm:m-2 p-5 mx-auto justify-center' >{store.description}</p>
    </div>
  )
}

export default BannerStore
