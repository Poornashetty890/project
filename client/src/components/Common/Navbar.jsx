import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {HiBars3BottomRight, HiOutlineShoppingBag, HiOutlineUser} from 'react-icons/hi2'
import SearchBar from './SearchBar'
import CartDrawer from '../Layout/CartDrawer'
import { IoMdClose } from 'react-icons/io'

const Navbar = () => {
    const [drawerOpen,setDrawerOpen]=useState(false)
    const [menuOpen,setMenuOpen]=useState(false)

    const toggleMenu=()=>{
        setMenuOpen(!menuOpen)
    }

    const toggleDrawer=()=>{
        setDrawerOpen(!drawerOpen)
    }
  return (
    <>
        <nav className="container mx-auto flex items-center justify-between py-4 px-6 ">
            <Link to='/' className="text-2xl font-medium">
                Sri SiddhiVinayaka Industry
            </Link>
            <div className="hidden md:flex space-x-6">
                <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase" >
                    Home
                </Link>
                <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase" >
                    About Us
                </Link>
                <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase" >
                    Products
                </Link>
                <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase" >
                    Contact Us
                </Link>
            </div>
            <div className="flex items-center space-x-4">
                <Link to="/profile" className="hover:text-black">
                    <HiOutlineUser className="h-6 w-6 text-gray-700"></HiOutlineUser>                    
                </Link>
                <button onClick={toggleDrawer} className="relative hover:text-black">
                    <HiOutlineShoppingBag className="h-6 w-6 text-gray-700"></HiOutlineShoppingBag>
                    <span className="absolute -top-1 bg-[#ea2e06] text-white text-xs rounded-full px-2 py-0.5">
                        4
                    </span>
                </button>
                <button onClick={toggleMenu} className="md:hidden">
                    <HiBars3BottomRight className="h-6 w-6 text-gray-700"></HiBars3BottomRight>
                </button>  
                <div className="overflow-hidden"><SearchBar></SearchBar></div>
                
            </div>
        </nav>

        <CartDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer}></CartDrawer>

        <div className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-[25rem] h-full bg-white shadow-lg transform
        transition-transform duration-300 flex flex-col z-50 ${menuOpen?"translate-x-0":"-translate-x-full"}`}>
            <div className="flex justify-end p-4">
                <button onClick={toggleMenu}>
                    <IoMdClose className="h-6 w-6 text-gray-600"></IoMdClose>                    
                </button>
            </div>
            <div className="p-4 ">
                <h2 className="font-semibold text-2xl mb-4">Menu</h2>
                <nav className="flex flex-col space-y-4">
                    <Link to="/" onClick={toggleMenu} className="text-gray-600 hover:text-black uppercase">home</Link>
                    <Link to="/about" onClick={toggleMenu} className="text-gray-600 hover:text-black uppercase">about us</Link>
                    <Link to="/contact" onClick={toggleMenu} className="text-gray-600 hover:text-black uppercase">contact us</Link>
                    <Link to="/product" onClick={toggleMenu} className="text-gray-600 hover:text-black uppercase">products</Link>
                </nav>
            </div>
        </div>
    </>
  )
}

export default Navbar