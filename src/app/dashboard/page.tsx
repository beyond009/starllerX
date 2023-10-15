import './index.css'
import Image from 'next/image'
export default function Dashboard() {
  return <div className="flex flex-col items-center pt-48 px-24">
    <div className=
      "absolute h-[600px] w-[1000px] bg-gradient-conic from-sky-200 via-blue-200 blur-2xl content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 dark:from-sky-900 dark:via-[#0141ff] dark:opacity-40 before:lg:h-[360px] z-[-1]" />

    <div className='w-full flex gap-24'>
      <div className="flex flex-col p-6 items-center gap-6  bg-white/80 dark:bg-black shadow rounded w-[600px] h-[600px]">
        <div className="text-2xl">Supply</div>
        <div className="w-full rounded border border-gray-300 p-4 flex gap-4 items-center z-[999]">
          <Image
            src="/eth.svg"
            alt="eth"
            width={40}
            height={40}
          />
          <div className="text-2xl flex-1">ETH</div>
          <button className="bg-white text-center text-black hover:bg-black hover:text-white border border-black hover:border-white w-24 font-semibold py-2 px-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110">Supply</button>
        </div>
      </div>
      <div className="flex flex-col p-6 gap-6 items-center bg-white/80 dark:bg-black shadow rounded w-[600px] h-[600px]">
        <div className="text-2xl">Borrow</div>
        <div className="w-full rounded border border-gray-300 p-4 flex gap-4 items-center z-[999]">
          <Image
            src="/eth.svg"
            alt="eth"
            width={40}
            height={40}
          />
          <div className="text-2xl flex-1">ETH</div>
          <button className="bg-white text-center text-black hover:bg-black hover:text-white border border-black hover:border-white w-24 font-semibold py-2 px-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110">Borrow</button>
        </div>
      </div>

    </div>
  </div>
}