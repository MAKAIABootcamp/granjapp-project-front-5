import React from 'react'
import searchIcon from '../../../../assets/icons/icon _search.svg'
import './searchBar.scss'

export const SearchBar = () => {
  return (
    <>
    <div className='searchBar-container'>
        <input type="text" placeholder='Busca un producto o tienda aquí...' />
        <button>
            <img src={searchIcon} alt="" />
        </button>
    </div>
    
    </>
  )
}
