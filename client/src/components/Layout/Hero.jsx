import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    
    <section className="relative">
        <img src="https://picsum.photos/1400?random=3" alt="" className="w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover"/>
        <div className="absolute inset-0 bg-black bg-opacity-5 flex items-center justify-center">
            <div className="text-center text-white p-6">
                <h1 className="text-4xl md:text-9xl tracking-tighter font-bold uppercase mb-4">welcome</h1>
                <p className="text-sm tracking-tighter md:text-lg mb-6">Explore our products with worldwide shipping</p>
                <Link to="" className="bg-white text-gray-950 px-6 py-2 text-lg rounded-lg">Shop Now</Link>
            </div>
        </div>
    </section>
    
  )
}

export default Hero