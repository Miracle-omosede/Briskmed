import React from 'react'
import circle from '../assets/svg/Vector.svg';
import search from '../assets/svg/3d-search.svg';

const Header = () => {
  return (
    <div className="w-full flex flex-col">
        <div className='w-full mt-[-5rem] relative justify-center items-center flex flex-row'>
            <div className='search mr-[-40rem]'>
                <img src={search} alt="3d-search-img" /> 
            </div>
            <div className='search-bar'>
                <div className='grp'>
                <img src={circle} alt="circle-placeholder" />
                <input type="text" placeholder='Hospital search..' />
                </div>
            </div>
        </div>
        <div className='page-description mt-[-7rem] relative uppercase flex justify-center items-center'>
            <h1>SOMETHING DOPE AND EXPLANATORY</h1>
        </div>
    </div>
  )
}

export default Header