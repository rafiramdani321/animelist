import { getAnimeTop } from '@/lib/anime-service'
import React from 'react'
import AnimeCard from './anime-card';
import { Anime } from '@/types/anime-types';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const AnimeResults = async () => {
  const data: Anime[] = await getAnimeTop();

  return (
    <div>
      <div className='flex justify-between'>
        <h2 className='text-primary mb-2'>
          Top Anime
        </h2>
        <Link href={'/'}>
          more
        </Link>
      </div>
      {data.length === 0 && (
        <div>
          Not anime found.
        </div>
      )}

      <Carousel className="w-full overflow-hidden">
        <CarouselContent className="flex snap-x snap-mandatory">
          {data.map((result) => (
            <CarouselItem 
              key={result.mal_id} 
              className="basis-[calc(100%/2.3)] md:basis-[calc(100%/5.3)] lg:basis-[calc(100%/7.3)] snap-start"
            >
              <AnimeCard data={result} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default AnimeResults