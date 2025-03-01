import React from 'react'
import AnimeResults from './anime/anime-results';

export default async function Page() {  
  return (
    <div className='px-4 md:px-10 xl:px-64 mt-[40rem] md:mt-[45rem] xl:mt-[50rem] mb-20'>
      <div>
        <AnimeResults />
      </div>
    </div>
  )
}