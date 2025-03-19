import React from 'react'
import { IoMdClose } from 'react-icons/io'
import CartContent from '../Cart/CartContent'

const CartDrawer = ({drawerOpen,toggleDrawer}) => {
    
  return (
    <div className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[25rem] h-full bg-white shadow-lg transform
        transition-transform duration-300 flex flex-col z-50 ${drawerOpen?"translate-x-0":"translate-x-full"}`}>
            {/* Close Button */}
            <div className="flex justify-end p-4">
                <button onClick={toggleDrawer}>
                    <IoMdClose className="h-6 w-6 text-gray-600"></IoMdClose>
                </button>
            </div>

            {/* Cart Contents */}
            <div className="flex-grow p-4 overflow-y-auto">
                <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
                <CartContent></CartContent>                
            </div>

            

            {/* Checkout button */}
            <div className="p-4 bg-white sticky bottom-0">
                <button className="w-full bg-black text-white rounded-lg py-3 hover:bg-gray-700 transition">Checkout</button>
                <p className="text-sm text-gray-500 text-center mt-2 tracking-tighter">Shipping,taxes,discount calculated at checkout.</p>
            </div>
    </div>
  )
}

export default CartDrawer