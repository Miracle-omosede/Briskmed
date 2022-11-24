import React from 'react'
import blackgirl from '../assets/images/black-girl1.jpg';
import blackwoman from '../assets/images/black-girl2.jpg';

const Features = () => {
  return (
    <div className='flex flex-col'>
        <div className="feature-header flex flex-col items-center justify-center">
            <p className='capitalize'>features</p>
            <h1 className='text-[36px] text-center py-5'>GET QUICK MEDCARE AND SEE REVIEWS</h1>
        </div>
        <div className="flex flex-row justify-center gap-8 items-center my-11">
            <div className='image-wrapper w-60 h-96 shadow-lg rounded-lg  object-cover flex flex-col items-center justify-center p-10 bg-white'>
                <img src={blackgirl} alt="first-black" className='rounded-lg'/>
                <div className='image-caption flex flex-col items-center justify-center'>
                    <h1 className='bold pt-4 text-[15px] font-semibold'>Search availability</h1>
                    <p className='text-muted text-[12px]'>Explanations bla-bla-bla-bla</p>
                </div>
            </div>
            <div className='image-wrapper w-60 h-96 shadow-lg rounded-lg  object-cover flex flex-col items-center justify-center p-10 bg-white'>
                <img src={blackwoman} alt="second- black woman" className='rounded-lg' />
                <div className='image-caption flex flex-col items-center justify-center'>
                    <h1 className='bold pt-4 text-[15px] font-semibold'>Get Reviews/Ratings</h1>
                    <p className='text-muted text-[12px]'>Explanations bla-bla-bla-bla</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features