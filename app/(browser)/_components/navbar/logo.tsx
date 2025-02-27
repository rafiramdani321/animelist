import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className="relative flex items-center w-fit">
      <div className="">
        <Image
          alt="logo"
          src={"/images/icon.png"}
          height={40}
          width={40}
          className="object-cover"
        />
      </div>

      {/* Teks di atas gambar */}
      <h1 className="text-3xl font-extrabold italic text-white drop-shadow-md">
        Anime<span className="text-secondary">List</span>
      </h1>
    </div>
  )
}

export default Logo