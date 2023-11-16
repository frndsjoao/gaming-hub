import { HiSearch } from 'react-icons/hi'

export default function FloatBar() {
  return (
    <div className="fixed inset-x-0 mx-auto w-min mt-10 bg-zinc-50 ">
      <div>
        <input className='border-2 rounded border-gray-500 w-' />
      </div>
      <HiSearch className="text-2xl text-red-600" />
    </div>
  )
}