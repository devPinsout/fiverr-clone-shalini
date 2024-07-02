'use client'

import React, { useState,useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HomeBanner = () => {
  const [image, setImage] = useState(1);


  // useEffect Hook for time interval
 //useEffect(()=>{
    //const interval = setInterval(()=>setImage >= 6?1:image+1
//)
 //},[image])


  return (
    <div className="h-[680px] relative bg-color">
      <div className="absolute top-0 right-0 w-[100vw] h-full transition-opacity z-8">
        <Image
          alt="hero"
          src="/bg-hero1.webp"
          layout="fill"
          objectFit="cover"
          className={`${
            image === 1 ? 'opacity-100' : 'opacity-0'
          } transition-all duration-1000`}
        />
        <Image
          alt="hero"
          src="/bg-hero2.webp"
          layout="fill"
          objectFit="cover"
          className={`${
            image === 2 ? 'opacity-100' : 'opacity-0'
          } transition-all duration-1000`}
        />
        <Image
          alt="hero"
          src="/bg-hero3.webp"
          layout="fill"
          objectFit="cover"
          className={`${
            image === 3 ? 'opacity-100' : 'opacity-0'
          } transition-all duration-1000`}
        />
        <Image
          alt="hero"
          src="/bg-hero4.webp"
          layout="fill"
          objectFit="cover"
          className={`${
            image === 4 ? 'opacity-100' : 'opacity-0'
          } transition-all duration-1000`}
        />
        <Image
          alt="hero"
          src="/bg-hero5.webp"
          layout="fill"
          objectFit="cover"
          className={`${
            image === 5 ? 'opacity-100' : 'opacity-0'
          } transition-all duration-1000`}
        />
        <Image
          alt="hero"
          src="/bg-hero6.webp"
          layout="fill"
          objectFit="cover"
          className={`${
            image === 6 ? 'opacity-100' : 'opacity-0'
          } transition-all duration-1000`}
        />
      </div>
      <div className="absolute bottom-10 left-10 z-10">
      <Link
            href="/create-user"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Create ToDo</span> 
          </Link>
      </div>
    </div>
  );
};

export default HomeBanner;
