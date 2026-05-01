"use client";
import React from 'react';
import Link from 'next/link';
import { Sun, Menu, ShoppingCart } from 'lucide-react';
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";

const Navbar = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const handleSignOut = async () => {
        await authClient.signOut();
    };

    return (
        <div className="navbar bg-white/80 backdrop-blur-md sticky top-0 z-50 px-4 md:px-8 border-b border-gray-100">
            {/* Mobile Menu & Logo */}
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <Menu className="h-5 w-5" />
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/products">Products</Link></li>
                        <li><Link href="/profile">My Profile</Link></li>
                    </ul>
                </div>
                <Link href="/" className="flex items-center gap-2 font-bold text-2xl tracking-tighter">
                    <Sun className="text-orange-500 fill-orange-500" />
                    <span className="text-gray-800">Sun<span className="text-orange-500">Cart</span></span>
                </Link>
            </div>

            {/* Desktop Links */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-medium gap-2">
                    <li><Link href="/" className="hover:text-orange-500 text-gray-600">Home</Link></li>
                    <li><Link href="/products" className="hover:text-orange-500 text-gray-600">Products</Link></li>
                    <li><Link href="/profile" className="hover:text-orange-500 text-gray-600">My Profile</Link></li>
                </ul>
            </div>

            {/* End Icons & Auth */}
            <div className="navbar-end gap-4">
                <Link href="/products" className="btn btn-ghost btn-circle">
                    <ShoppingCart className="h-5 w-5 text-gray-600" />
                </Link>

                <div className="flex items-center gap-4">
                    {/* যদি user না থাকে */}
                    {!user && (
                        <ul className="flex items-center text-sm gap-6">
                            <li>
                                <Link
                                    href="/signup"
                                    className="text-gray-600 font-medium hover:text-orange-500 transition"
                                >
                                    SignUp
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/signIn"
                                    className="text-gray-600 font-medium hover:text-orange-500 transition"
                                >
                                    SignIn
                                </Link>
                            </li>
                        </ul>
                    )}

                    {/* যদি user থাকে */}
                    {user && (
                        <div className="flex items-center gap-3">
                            <Avatar
                                src={user?.image || ""}
                                name={user?.name?.charAt(0) || "U"}
                                className="border-2 border-orange-500 p-0.5"
                            />

                            <Button
                                onClick={handleSignOut}
                                size="sm"
                                className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl"
                            >
                                SignOut
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;