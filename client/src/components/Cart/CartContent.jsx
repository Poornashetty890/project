import React from 'react'
import { RiDeleteBin3Line } from 'react-icons/ri'

const CartContent = () => {
    const cartProducts=[{
        productId:1,
        name:"Cashew",
        kgs:"5 kg",
        // color:"Red",
        quantity: 1,
        price:15,
        image:"https://picsum.photos/200?random=1"
    },
    {
        productId:2,
        name:"Coconut",
        kgs:"10 kg",
        // color:"Blue",
        quantity: 1,
        price:25,
        image:"https://picsum.photos/200?random=2"
    }]
  return (
    <div>
        {cartProducts.map((product,index)=>(
            <div key={index} className="flex items-start justify-between py-4 border-b">
                <div className="flex items-start">
                    <img src={product.image} alt={product.name} className="w-20 h-24 object-cover rounded mr-4" />
                    <div>
                        <h3>{product.name}</h3>
                        <p className="text-sm text-gray-500">
                            Kg: {product.kgs}
                        </p>
                        <div className="flex items-center mt-2">
                            <button className="border rounded px-2 py-px text-xl font-medium">-</button>
                                <span className="mx-4">{product.quantity}</span>
                            <button className="border rounded px-2 py-px text-xl font-medium">+</button>
                        </div>
                    </div>
                </div>
                <div>
                    <p>₹{product.price}</p>
                    <button><RiDeleteBin3Line className="h-6 w-6 text-red-600 mt-4"></RiDeleteBin3Line></button>
                </div>
            </div>
        ))}
    </div>
  )
}

export default CartContent