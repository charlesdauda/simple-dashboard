'use client'

import { DollarSign, Package, ShoppingCart, Users } from "lucide-react";

const OverviewCards = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="border border-gray-300 rounded-lg p-5 bg-gradient-to-l from-blue-900 to-cyan-700  text-white">
                <div className="flex items-center justify-between">
                    <h3 className="text-white">Total Users</h3>
                    <Users className="text-white" />
                </div>
                <p className="mt-4 text-3xl font-bold">1,248</p>
            </div>

             <div className="border border-gray-300 rounded-lg p-5 bg-gradient-to-l from-blue-900 to-cyan-700  text-white">
                <div className="flex items-center justify-between">
                    <h3 className="text-white">Products</h3>
                    <Package className="text-white" />
                </div>
                <p className="mt-4 text-3xl font-bold">430</p>
            </div>

            <div className="border border-gray-300 rounded-lg p-5 bg-gradient-to-l from-blue-900 to-cyan-700 text-white">
                <div className="flex items-center justify-between">
                    <h3 className="text-white">Orders</h3>
                    <ShoppingCart className="text-white" />
                </div>
                <p className="mt-4 text-3xl font-bold">300</p>
            </div>

          <div className="border border-gray-300 rounded-lg p-5 bg-gradient-to-l from-blue-900 to-cyan-700 6text-white">
                <div className="flex items-center justify-between">
                    <h3 className="text-white">Revenue</h3>
                    <DollarSign className="text-white" />
                </div>
                <p className="mt-4 text-3xl font-bold">12,759</p>
            </div>

            <div className="col-span-3 border border-gray-300 rounded-lg p-5 bg-gradient-to-l from-blue-800 to-cyan-300 mt-3 h-25">
            </div>
                 
            <div className="border border-gray-300 rounded-lg p-5 bg-gradient-to-l from-blue-900 to-cyan-700 h-25 mt-3 ">
            </div>

            <div className="col-span-2 border border-gray-300 rounded-lg p-5 bg-gradient-to-l from-blue-900 to-cyan-700 h-35 mt-3 ">
            </div>
            
            <div className="col-span-2 border border-gray-300 rounded-lg p-5 bg-gradient-to-l from-blue-900 to-cyan-700 h-35 mt-3 ">
            </div>
        </section>
    )
}

export default OverviewCards;