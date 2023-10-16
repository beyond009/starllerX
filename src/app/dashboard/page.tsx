'use client'
import './index.css'
import { useState } from 'react'
import Image from 'next/image'
import { ConfirmModal } from '../components'
import { BorrowConfirmModal } from '../components/BorrowConfirmModal'
import { Polygon, Ethereum } from "@thirdweb-dev/chain-icons";
export default function Dashboard() {
  const [showModal, setShowModal] = useState(false)
  const [showBorrowModal, setShowBorrowModal] = useState(false)
  return <div className="flex flex-col items-center pt-48 px-24">
    <div className=
      "absolute h-[600px] w-[1000px] bg-gradient-conic from-sky-200 via-blue-200 blur-2xl content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 dark:from-sky-900 dark:via-[#0141ff] dark:opacity-40 before:lg:h-[360px] z-[-1]" />

    <div className='w-full flex gap-24'>
      <div className="flex flex-col p-6 items-center gap-6  bg-white/80 dark:bg-black shadow rounded w-[600px] h-[600px]">
        <div className="text-2xl">Supply</div>
        <div className="w-full rounded border border-gray-300 p-4 flex gap-4 items-center">
          <div className='relative'>
            <Image
              src="/eth.svg"
              alt="eth"
              width={40}
              height={40}
            />
            <Polygon className="w-4 h-4 absolute bottom-[-2px] right-0" />
          </div>
          <div className="text-2xl flex-1">ETH</div>
          <button className="bg-white text-center text-black hover:bg-black hover:text-white border border-black hover:border-white w-24 font-semibold py-2 px-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110" onClick={() => setShowModal(true)}>Supply</button>
        </div>
        <div className="w-full rounded border border-gray-300 p-4 flex gap-4 items-center">
          <div className='relative'>
            <Image
              src="/eth.svg"
              alt="eth"
              width={40}
              height={40}
            />
            <Ethereum className="w-4 h-4 absolute bottom-[-2px] right-0" />
          </div>
          <div className="text-2xl flex-1">ETH</div>
          <button className="bg-white text-center text-black hover:bg-black hover:text-white border border-black hover:border-white w-24 font-semibold py-2 px-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110" onClick={() => setShowModal(true)}>Supply</button>
        </div>
        <div className="w-full rounded border border-gray-300 p-4 flex gap-4 items-center">
          <div className='relative'>
            <Image
              src="/btc.svg"
              alt="btc"
              width={40}
              height={40}
            />
            <Ethereum className="w-4 h-4 absolute bottom-[-2px] right-0" />
          </div>
          <div className="text-2xl flex-1">WBTC</div>
          <button className="bg-white text-center text-black hover:bg-black hover:text-white border border-black hover:border-white w-24 font-semibold py-2 px-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110" onClick={() => setShowModal(true)}>Supply</button>
        </div>
      </div>
      <div className="flex flex-col p-6 gap-6 items-center bg-white/80 dark:bg-black shadow rounded w-[600px] h-[600px]">
        <div className="text-2xl">Borrow</div>
        <div className="w-full rounded border border-gray-300 p-4 flex gap-4 items-center">
          <div className='relative'>
            <Image
              src="/eth.svg"
              alt="eth"
              width={40}
              height={40}
            />
            <Polygon className="w-4 h-4 absolute bottom-[-2px] right-0" />
          </div>
          <div className="text-2xl flex-1">ETH</div>
          <button className="bg-white text-center text-black hover:bg-black hover:text-white border border-black hover:border-white w-24 font-semibold py-2 px-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110" onClick={() => setShowBorrowModal(true)}>Borrow</button>
        </div>
        <div className="w-full rounded border border-gray-300 p-4 flex gap-4 items-center">
          <div className='relative'>
            <Image
              src="/eth.svg"
              alt="eth"
              width={40}
              height={40}
            />
            <Ethereum className="w-4 h-4 absolute bottom-[-2px] right-0" />

          </div>
          <div className="text-2xl flex-1">ETH</div>
          <button className="bg-white text-center text-black hover:bg-black hover:text-white border border-black hover:border-white w-24 font-semibold py-2 px-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110" onClick={() => setShowBorrowModal(true)}>Borrow</button>
        </div>
        <div className="w-full rounded border border-gray-300 p-4 flex gap-4 items-center">
          <div className='relative'>
            <Image
              src="/btc.svg"
              alt="btc"
              width={40}
              height={40}
            />
            <Polygon className="w-4 h-4 absolute bottom-[-2px] right-0" />
          </div>
          <div className="text-2xl flex-1">WBTC</div>
          <button className="bg-white text-center text-black hover:bg-black hover:text-white border border-black hover:border-white w-24 font-semibold py-2 px-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110" onClick={() => setShowBorrowModal(true)}>Borrow</button>
        </div>
      </div>
    </div>
    <ConfirmModal openModal={showModal} setOpenModal={setShowModal} />
    <BorrowConfirmModal openModal={showBorrowModal} setOpenModal={setShowBorrowModal} />
  </div>
}