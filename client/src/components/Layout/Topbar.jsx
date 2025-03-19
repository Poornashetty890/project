import React from 'react'
import {TbBrandMeta} from 'react-icons/tb'
import {IoLogoInstagram} from 'react-icons/io'
import {RiTwitterXLine} from 'react-icons/ri'

export const Topbar = () => {
  return (
    <div className="bg-[#ea2e06]">
        <div className="container mx-auto flex items-center justify-between p-3">
            <div className="hidden md:flex items-center space-x-3 text-white">
                <a href='#' className="hover:text-gray-300">
                    <TbBrandMeta className="h-5 w-5"></TbBrandMeta>
                </a>
                <a href='#' className="hover:text-gray-300">
                    <IoLogoInstagram className="h-5 w-5"/>
                </a>
                <a href='#' className="hover:text-gray-300">
                    <RiTwitterXLine className="h-4 w-4"/>
                </a>
            </div>
            <div className="text-sm text-center flex-grow text-white">
                <span>We ship worldwide</span>
            </div>
            <div className="text-sm hidden md:block text-white">
                <a href="tel:+919876543210" className="hover:text-gray-300">
                    +91 9876543210
                </a>
            </div>
        </div>
    </div>
  )
}
