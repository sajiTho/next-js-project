import Image from 'next/image';
import React from 'react';

const Portfolio = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
      <h1 className='font-bold text-2xl p-4'>Travel Photos</h1>
      <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
        <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
          <Image
            src='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
            alt='/'
            layout='responsive'
            width='677'
            height='451'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://images.unsplash.com/photo-1540390769625-2fc3f8b1d50c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://images.unsplash.com/photo-1472791108553-c9405341e398?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2437&q=80'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://images.unsplash.com/photo-1469362102473-8622cfb973cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2419&q=80'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://images.pexels.com/photos/1840101/pexels-photo-1840101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://images.pexels.com/photos/450441/pexels-photo-450441.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://images.pexels.com/photos/1122626/pexels-photo-1122626.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://images.pexels.com/photos/2832033/pexels-photo-2832033.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://images.pexels.com/photos/456710/pexels-photo-456710.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://images.pexels.com/photos/772520/pexels-photo-772520.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://images.pexels.com/photos/1840101/pexels-photo-1840101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
          <Image
            src='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
            alt='/'
            layout='responsive'
            width='677'
            height='451'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://images.pexels.com/photos/1122626/pexels-photo-1122626.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://images.pexels.com/photos/2832033/pexels-photo-2832033.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
