import React from "react";
import { FaSun } from "react-icons/fa";
import { GiSunglasses } from "react-icons/gi";
import { MdOutlineWbSunny } from "react-icons/md";
import { GiFlipFlops } from "react-icons/gi";
import { FaHatCowboy } from "react-icons/fa";
import Link from "next/link";

const Banner = () => {
    return (
        <section className=" text-black p-12 md:p-24 flex flex-col md:flex-row items-center justify-between gap-10">

            {/* Left Side */}
            <div className="max-w-2xl">
                <div className="flex items-center space-x-2 bg-gray-800 rounded-full px-3 py-1 mb-4 w-fit border border-gray-700">
                    <span>🔥</span>
                    <p className="text-gray-400 text-sm">
                        Hot Deals - Limited Time Only
                    </p>
                </div>

                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                    Sun-Ready
                    <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                        {" "}Summer Sale
                    </span>
                </h1>

                <p className="text-4xl md:text-5xl font-extrabold mb-6">
                    50% OFF
                </p>

                <p className="text-gray-400 text-lg mb-8">
                    Discover premium summer essentials — from UV-protective eyewear
                    to reef-safe sunscreens.
                </p>

                <div className="flex flex-wrap gap-4 justify-center">
                    <Link href="/signup" className="btn-summer px-8 py-4 rounded-2xl text-base font-semibold">
                        Get Started Free
                    </Link>
                    <Link href="/products" className="glass px-8 py-4 rounded-2xl text-base font-medium text-sand-100/80 hover:text-sun-400 transition-colors">
                        Browse Products
                    </Link>
                </div>
            </div>



        </section>
    );
};

export default Banner;