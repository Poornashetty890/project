import React from 'react'
import {FiPhoneCall} from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="border-t py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">
            <div>
                <h3 className="mb-4 text-lg text-gray-800">Newsletter</h3>
                <p className="text-gray-500 mb-4">
                    Be the first to hear about the products and exciting offers.
                </p>
                <p className="text-gray-600 text-sm mb-4 font-medium">
                    Sign up
                </p>

                <form action="" className="flex">
                    <input type="email" placeholder="Enter your email"
                    className="border-gray-300 p-3 w-full text-sm border-t border-l border-bm rounded-l-md
                    focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all" required />
                    <button type="submit" className="bg-black text-white px-6 py-3 text-sm rounded-r-md
                    hover:bg-gray-800 transition-all">Subscribe</button>
                </form>
            </div>
            <div>
                <h3 className="text-lg text-gray-800 mb-4">Shop</h3>
                <ul className="text-gray-600 space-y-2">
                <li>
                        <Link to="#" className="hover:text-gray-600 transition-colors">Cashew</Link>
                    </li>
                    <li>
                        <Link to="#" className="hover:text-gray-600 transition-colors">Coconut</Link>
                    </li>
                    <li>
                        <Link to="#" className="hover:text-gray-600 transition-colors">Dry Fruits</Link>
                    </li>
                </ul>
            </div>

            <div>
                <h3 className="text-lg text-gray-800 mb-4">Support</h3>
                <ul className="text-gray-600 space-y-2">
                <li>
                        <Link to="#" className="hover:text-gray-600 transition-colors">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="#" className="hover:text-gray-600 transition-colors">About Us</Link>
                    </li>
                    <li>
                        <Link to="#" className="hover:text-gray-600 transition-colors">FAQs</Link>
                    </li>
                </ul>
            </div>

            <div>
                <p className="text-gray-500">Call Us</p>
                <p>
                    <FiPhoneCall className="inline-block mr-2"></FiPhoneCall>
                    +91 9876543210
                </p>
            </div>
        </div>
        <div className="container mx-auto mt-12 px-4 lg:px-0 border-t pt-6 border-gray-200">
            <p className="text-gray-500 text-sm tracking-tighter text-center">© 2025, All Rights Reserved</p>
        </div>
    </footer>
  )
}

export default Footer