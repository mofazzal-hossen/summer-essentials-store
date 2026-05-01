import React from 'react';
import Link from 'next/link';
import { Sun, Menu, ShoppingCart } from 'lucide-react';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100/80 backdrop-blur-md sticky top-0 z-50 px-4 md:px-8 border-b border-white/10">
            {/* Mobile Menu & Logo */}
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <Menu className="h-5 w-5" />
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/products">Products</Link></li>
                    </ul>
                </div>
                <Link href="/" className="flex items-center gap-2 font-bold text-2xl tracking-tighter">
                    <Sun className="text-orange-500 fill-orange-500" />
                    <span>Sun<span className="text-orange-500">Cart</span></span>
                </Link>
            </div>

            {/* Desktop Links */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-medium gap-2">
                    <li><Link href="/" className="hover:text-orange-500">Home</Link></li>
                    <li><Link href="/products" className="hover:text-orange-500">Products</Link></li>
                </ul>
            </div>

            {/* End Icons */}
            <div className="navbar-end gap-2">
                <Link href="/products" className="btn btn-ghost btn-circle">
                    <ShoppingCart className="h-5 w-5" />
                </Link>
            </div>
        </div>
    );
};

export default Navbar;