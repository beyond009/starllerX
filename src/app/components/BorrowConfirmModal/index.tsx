'use client';
import { Modal } from "flowbite-react";
import { Tabs } from "flowbite-react";
import { useState } from "react";
import { writeContract } from '@wagmi/core'
import { abi as sender } from '../../abi/sender.json'

interface ConfirmModalProps {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
}
export function BorrowConfirmModal({ openModal, setOpenModal }: ConfirmModalProps) {
  const [value, setValue] = useState<string>('')
  const handleBorrow = async () => {
    const hash = await writeContract({
      address: '0x9e87c722d4AeDDa7b0Cc5D2B639C3c7d4943e943',
      abi: sender,
      functionName: 'sendMessage',
      args: [12532609583862916517, '0xdf9479F11f28A6e887175df04E36E6848f27E32b', { user: '0xdf9479F11f28A6e887175df04E36E6848f27E32b', callData: [], chainId: 80001, destinationExacuteContract: '0x326C977E6efc84E512bB9C30f76E30c160eD06FB' }]
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
          title="Borrow"
        >
          <div className="space-y-6">
            <p className="leading-relaxed text-gray-500 dark:text-gray-400 text-2xl">
              Amount
            </p>
            <input type="text" className="w-full px-3 py-2 text-gray-700 border bg-transparent rounded-lg focus:outline-none focus:ring focus:border-blue-500 dark:text-white" placeholder="Enter amount" onChange={(e) => e.target.value} />
          </div>
        </Tabs.Item>
        <Tabs.Item
          active
          title="Repay"
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
      <button onClick={() => { handleBorrow(); setOpenModal(false) }} className="bg-white text-center text-black hover:bg-black hover:text-white border border-black hover:border-white w-24 font-semibold py-2 px-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110">Confirm</button>
    </Modal.Footer>
  </Modal>
}