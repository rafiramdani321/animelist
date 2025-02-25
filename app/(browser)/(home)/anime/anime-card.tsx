import { Anime } from '@/types/anime-types';
import Image from 'next/image';
import React from 'react'

interface AnimeProps {
  data: Anime;
}

const AnimeCard = ({ data }: AnimeProps) => {
  return (
    <div
      key={data.mal_id}
      className="border border-transparent overflow-hidden shadow-md rounded-sm"
    >
      <div className="relative rounded-sm w-full aspect-[3/4]">
        <Image
          alt={data.title}
          src={data.images.webp.large_image_url}
          layout="fill"
          objectFit="cover"
          className=''
        />
      </div>
      <h1 className="text-sm mt-2 text-primary truncate">
        {data.title}
      </h1>
    </div>
  )
}

export default AnimeCard