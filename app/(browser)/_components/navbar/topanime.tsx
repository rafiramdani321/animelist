"use client";

import { Button } from '@/components/ui/button';
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from 'next/link';
import { Carousel, CarouselContent } from '@/components/ui/carousel';

export interface AnimeProps {
  mal_id: number;
  title: string;
  title_english: string;
  images: { 
    jpg: { 
      image_url: string,
      large_image_url: string,
      small_image_url: string, 
    },
    webp: { 
      image_url: string,
      large_image_url: string,
      small_image_url: string, 
    },
  }
};

export interface AnimeVideosProps {
    mal_id: number;
    title: string;
    episode: string;
    url: string;
    images: {
      jpg: {
        image_url: string;
      }
    }
};

const TopAnimeHeader = () => {

  const [anime, setAnime] = useState<AnimeProps | null>(null);
  const [animeVideos, setAnimeVideos] = useState<AnimeVideosProps[]>([]);

  useEffect(() => {
    getAnimeTopById();
    getAnimeVideosEpisode();
  }, [])

  const getAnimeVideosEpisode = async () => {
    try {
      const response = await axios.get("https://api.jikan.moe/v4/anime/52991/videos/episodes");
      const sliceData: AnimeVideosProps[] = response.data.data.slice(0, 4)
      setAnimeVideos(sliceData);
    } catch (error) {
      console.log(error)
    }
  }

  const getAnimeTopById = async () => {
    try {
      const response = await axios.get("https://api.jikan.moe/v4/anime/52991/full");
      setAnime(response.data.data);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className='w-full h-full relative pt-8 pb-12 px-4 md:px-10 xl:px-64 z-10'>
        <div className='flex'>
          <div className='w-[200px] md:w-[250px] xl:w-[300px] flex-shrink-0 relative'>
            <div className='shadow-xl rounded-md border shadow-background'>
              <Image
                alt="test"
                src={anime?.images.webp.large_image_url || ""}
                width={300}
                height={300}
                className='object-cover'
              />
            </div>
          </div>
          
          <div className='absolute left-[8rem] md:left-[14rem] xl:left-[25rem] mt-4 bg-secondary/50 px-3 uppercase shadow-xl shadow-background'>
            <h1 className="text-sm md:text-xl xl:text-3xl tracking-wide font-extrabold">
              {anime?.title_english}
            </h1>
          </div>

          <div className='mt-[3.5rem] md:mt-[4.5rem] xl:mt-20 ml-5'>
            <div className='flex mb-3 gap-x-2 xl:gap-x-3 text-[9px] md:text-[11px] xl:text-sm font-semibold tracking-tight'>
              <h4 className='uppercase italic text-secondary'>
                wit studio
              </h4>
              <span>-</span>
              <h4 className='uppercase text-primary italic'>
                tv show
              </h4>
              <span>-</span>
              <h4 className='text-primary-foreground'>
                24 Episodes
              </h4>
            </div>

            <h3 className='uppercase text-primary-foreground italic font-semibold text-sm md:text-base'>
              Description
            </h3>

            <div className='w-[230px] md:w-full'>
              <p className='text-primary font-normal text-xs md:text-sm xl:text-base line-clamp-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ratione ducimus doloremque voluptas nobis eligendi deserunt eum, recusandae sunt quod! Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ea, fuga ipsum nisi officia iste maiores maxime id beatae illum debitis odio atque quasi, error architecto ipsam labore aliquam sed nam in, eius repellendus dolorem. Voluptates veritatis ducimus eaque nulla!
              </p>
            </div>

            <div className='flex mt-4 gap-x-2 xl:gap-x-3'>
              <div className='border-2 self-center border-secondary/50 text-primary text-xs md:text-sm rounded-full cursor-pointer hover:bg-secondary/50 hover:border-secondary'>
                <h4 className='py-1 px-3'>action</h4>
              </div>
              <div className='border-2 self-center border-secondary/50 text-primary text-xs md:text-sm rounded-full cursor-pointer hover:bg-secondary/50 hover:border-secondary'>
                <h4 className='py-1 px-3'>drama</h4>
              </div>
              <div className='border-2 self-center border-secondary/50 text-primary text-xs md:text-sm rounded-full cursor-pointer hover:bg-secondary/50 hover:border-secondary'>
                <h4 className='py-1 px-3'>fantasy</h4>
              </div>
            </div>

            <div className='flex justify-between mt-5 md:mt-10 xl:mt-16'>
              <Button
                variant="default"
                size="default"
                className='rounded-none uppercase font-semibold text-xs md:text-base shadow-md shadow-background hover:shadow-md hover:shadow-secondary'
              >
                show detail
                <ChevronRight className='text-xl text-secondary font-extralight' />
              </Button>
              <div className='md:flex hidden items-center self-center gap-x-2 text-primary'>
                <div className='border border-primary rounded-full cursor-pointer hover:border-secondary hover:text-secondary'>
                  <ChevronLeft className='h-7 w-7 p-1' />
                </div>
                <div className='border border-primary rounded-full cursor-pointer hover:border-secondary hover:text-secondary'>
                  <ChevronRight className='h-7 w-7 p-1' />
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className='mt-8 xl:mt-12 relative group'>
          <h2 className='uppercase italic text-base md:text-lg xl:text-xl text-primary font-bold relative z-10'>
            Last Episodes
          </h2>
          <h1 className='absolute text-5xl md:text-6xl xl:text-7xl font-extrabold uppercase italic text-primary-foreground opacity-20 -top-1.5 md:-top-2.5 xl:-top-4 -left-3 md:-left-8 xl:-left-12 select-none'>
            Episodes
          </h1>

          <Carousel className='w-full overflow-hidden'>
            <CarouselContent className='flex gap-x-3 md:gap-x-5 mt-1.5 md:mt-2 xl:mt-3 p-3'>
              {animeVideos?.map(item => (
                <Link href={item.url} key={item.mal_id} className='relative group'>
                  <div className='relative w-[230px] h-[130px] shadow-lg shadow-background overflow-hidden hover:shadow-secondary hover:shadow-md'>
                    <Image
                      alt='thumbnail'
                      src={item.images.jpg.image_url}
                      width={200}
                      height={200}
                      quality={100}
                      className='object-cover w-full h-full brightness-50'
                    />
                    <div className='absolute bottom-0 w-full text-primary px-2 py-1 font-semibold text-xs tracking-tight'>
                      <h4 className='truncate'>{item.title}</h4>
                      <h4 className='truncate text-primary-foreground'>{item.episode}</h4>
                    </div>
                  </div>
                </Link>
              ))}
            </CarouselContent>
          </Carousel>

        </div>
      </div>

      <div className="absolute top-20 md:top-16 xl:top-28 left-[10rem] md:left-[15rem] xl:left-[32rem]">
        <Image
          alt="background"
          src={anime?.images.webp.large_image_url || ""}
          width={450}
          height={450}
          objectFit="cover"
          className="opacity-40 shadow-[0_0_50px_50px_#1f1f1f]"
          style={{
            WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 80%)",
            maskImage: "radial-gradient(circle, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 80%)",
          }}
        />
      </div>
    </>

  )
}

export default TopAnimeHeader