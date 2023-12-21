import Image from 'next/image';
import { SiEpicgames, SiSteam } from 'react-icons/si';

interface StoreProps {
  id: number;
  name: string;
}

interface CardGameProps {
  name: string
  releaseDate?: string;
  stores: StoreProps[]
}

export default function GameCard({ name, releaseDate, stores }: CardGameProps) {
  return (
    <div className='relative w-80 h-48 rounded cursor-pointer'>
      <div className="flex-1 relative h-full w-full">
        <Image
          src={"https://media.rawg.io/media/games/5b9/5b963d7633cd640fa2dbc4069d1c6377.jpg"}
          alt="Picture of the author"
          objectFit="cover"
          fill
          className="w-full h-full top-0 left-0 rounded"
        />
      </div>

      <div className='absolute bottom-0 w-full flex items-center justify-between bg-gradient-to-b from-transparent to-black px-4 pt-6 pb-3 rounded-b'>
        <div>
          <p className='inline text-base font-medium'>{name || 'Undefined'} </p>
          <p className='inline text-base font-medium'>({releaseDate || 'TBD'})</p>
        </div>
        <div className='flex gap-3'>
          <SiEpicgames className="text-2xl text-neutral-50" />
          <SiSteam className="text-2xl text-neutral-50" />
        </div>
      </div>
    </div>
  )
}