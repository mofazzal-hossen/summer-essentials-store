import React from 'react';
import Link from 'next/link';
import { Sun, User, LogOut, Menu } from 'lucide-react';

const Navbar = ({ user }) => {
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
                        {user && <li><Link href="/profile">My Profile</Link></li>}
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
                    {user && <li><Link href="/profile" className="hover:text-orange-500">My Profile</Link></li>}
                </ul>
            </div>

            {/* Auth Buttons / Profile Avatar */}
            <div className="navbar-end gap-4">
                {user ? (
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full border-2 border-orange-500">
                                <img src={user.image || "https://i.pravatar.cc/150"} alt="User Avatar" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li className="px-4 py-2 font-semibold text-xs opacity-50 uppercase">Account</li>
                            <li><Link href="/profile"><User size={16} /> Profile</Link></li>
                            <li><button className="text-error"><LogOut size={16} /> Logout</button></li>
                        </ul>
                    </div>
                ) : (
                    <div className="flex gap-2">
                        <Link href="/login" className="btn btn-ghost btn-sm hidden md:flex uppercase">Login</Link>
                        <Link href="/register" className="btn btn-primary btn-sm uppercase shadow-lg shadow-orange-500/20">
                            Register
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;