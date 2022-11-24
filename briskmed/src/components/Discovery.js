import React from 'react';
import Hospital1 from '../assets/images/hospital1.jpg';
import Hospital2 from '../assets/images/hospital2.jpg';
import Hospital3 from '../assets/images/hospital3.jpg';

const Discovery = () => {
  return (
    <div className='flex flex-col'>
        <div className='discovery-header w-full h-40 py-11 flex items-center justify-center'>
            <h1 className='text-[36px] font-[900] h-[42px] w-[519px] text-center'>HEALTHCARE AROUND ME</h1>
        </div>
        <div className='result-section h-[545px] w-full'>
        <div className="flex flex-row justify-center gap-11 items-center my-11">
            <div className='image-wrapper w-80 h-96 shadow-lg rounded-lg  object-cover flex flex-col items-center justify-center py-8 px-10 bg-white'>
                <img src={Hospital1} alt="first-black" className='rounded-lg'/>
                <div className='image-caption flex flex-col items-center justify-center'>
                    <h1 className='bold pt-4 text-[20px] font-bold'>Availible Hospitals</h1>
                    <p className='text-muted text-[17px]'>Specialtes</p>
                </div>
            </div>
            <div className='image-wrapper w-80 h-96 shadow-lg rounded-lg  object-cover flex flex-col items-center justify-center py-8 px-10 bg-white'>
                <img src={Hospital2} alt="first-black" className='rounded-lg'/>
                <div className='image-caption flex flex-col items-center justify-center'>
                    <h1 className='bold pt-4 text-[20px] font-bold'>Availible Hospitals</h1>
                    <p className='text-muted text-[17px]'>Specialtes</p>
                </div>
            </div>
            <div className='image-wrapper w-80 h-96 shadow-lg rounded-lg  object-cover flex flex-col items-center justify-center py-8 px-10 bg-white'>
                <img src={Hospital3} alt="first-black" className='rounded-lg'/>
                <div className='image-caption flex flex-col items-center justify-center'>
                    <h1 className='bold pt-4 text-[20px] font-bold'>Availible Hospitals</h1>
                    <p className='text-muted text-[17px]'>Specialtes</p>
                </div>
            </div>
 
        </div>
        </div>
    </div>
  )
}

export default Discovery