import { HiSearch, HiUser } from 'react-icons/hi'

export default function FloatBar() {
  return (
    <div className="fixed inset-x-0 mx-auto w-min top-10 z-10 flex items-center">
      <div id="search-bar" className='flex relative shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-full'>
        <input
          className='rounded-full border-2 border-neutral-800 h-12 bg-neutral-900 px-4 bg-opacity-90 focus:outline-none focus:border-cyan-700'
          placeholder='Search...'
        />
        <button className='bg-transparent absolute right-2 self-center p-2'>
          <HiSearch className=" text-2xl" />
        </button>
      </div>

      <button
        id="user-icon"
        className='flex bg-neutral-800 p-3 rounded-full ml-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer border-transparent border-2 hover:border-cyan-900 transition-colors'
        onClick={() => console.log('user Menu')}
      >
        <HiUser className="text-2xl" />
      </button>
    </div>
  )
}