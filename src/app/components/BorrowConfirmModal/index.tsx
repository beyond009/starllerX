'use client';
import { Modal } from "flowbite-react";
import { Tabs } from "flowbite-react";
import { useState } from "react";

interface ConfirmModalProps {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
}
export function BorrowConfirmModal({ openModal, setOpenModal }: ConfirmModalProps) {
  const [value, setValue] = useState<string>('')
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
      <button onClick={() => setOpenModal(false)} className="bg-white text-center text-black hover:bg-black hover:text-white border border-black hover:border-white w-24 font-semibold py-2 px-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110">Confirm</button>
    </Modal.Footer>
  </Modal>
}