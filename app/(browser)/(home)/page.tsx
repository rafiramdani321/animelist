import React from 'react'
import AnimeResults from './anime/anime-results';

export default async function Page() {  
  return (
    <div className='px-2 md:px-12'>
      <div>
        <AnimeResults />
      </div>
    </div>
  )
}