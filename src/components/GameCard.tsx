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
    <div className='relative w-80 h-48 bg-cyan-800 rounded cursor-pointer'>
      <div></div>

      <div className='absolute bottom-0 w-full flex items-center justify-between bg-gradient-to-t from-neutral-900 to-transparent px-4 pt-6 pb-3 rounded-b'>
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