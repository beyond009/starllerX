'use client';
import { Modal } from "flowbite-react";
import { Tabs } from "flowbite-react";
import { useState } from "react";
import { writeContract } from '@wagmi/core'
import { abi as simpleBorrowABI } from '../../abi/simpleBorrow.json'

interface ConfirmModalProps {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
}
export function ConfirmModal({ openModal, setOpenModal }: ConfirmModalProps) {
  const [supplyValue, setSupplyValue] = useState<string>('')
  const handleSupply = async () => {
    const hash = await writeContract({
      address: '0xbc4932dec4ff14b21fd6a188bd989c5238015b6b',
      abi: simpleBorrowABI,
      functionName: 'supply',
      args: ['0x29f2D40B0605204364af54EC677bD022dA425d03', Number(supplyValue) * 1e18]
    })
  }
  return <Modal show={openModal} onClose={() => setOpenModal(false)}>
    <Modal.Body>
      <Tabs.Group
        aria-label="Default tabs"
        style="underline"
      >
        <Tabs.Item
          active
          title="Deposit"
        >
          <div className="space-y-6">
            <p className="leading-relaxed text-gray-500 dark:text-gray-400 text-2xl">
              Amount
            </p>
            <input type="text" className="w-full px-3 py-2 text-gray-700 border bg-transparent rounded-lg focus:outline-none focus:ring focus:border-blue-500 dark:text-white" placeholder="Enter amount" onChange={(e) => setSupplyValue(e.target.value)} />
          </div>
        </Tabs.Item>
        <Tabs.Item
          active
          title="Withdraw"
        >
          <div className="space-y-6">
            <p className="leading-relaxed text-gray-500 dark:text-gray-400 text-2xl">
              Amount
            </p>
            <input type="text" className="w-full px-3 py-2 text-gray-700 border bg-transparent rounded-lg focus:outline-none focus:ring focus:border-blue-500 dark:text-white" placeholder="Enter amount" />
          </div>
        </Tabs.Item>
      </Tabs.Group>
    </Modal.Body>
    <Modal.Footer className="flex justify-center">
      <button onClick={() => {
        handleSupply()
        setOpenModal(false)
      }} className="bg-white text-center text-black hover:bg-black hover:text-white border border-black hover:border-white w-24 font-semibold py-2 px-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110">Confirm</button>
    </Modal.Footer>
  </Modal>
}