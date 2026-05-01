import Link from "next/link";
import { FiFacebook, FiInstagram, FiMail, FiMapPin, FiPhone, FiSun, FiTwitter } from "react-icons/fi";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200">

            {/* Top Gradient Line */}
            <div className="h-16 bg-gradient-to-r from-orange-200 via-blue-200 to-pink-200 opacity-40" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <FiSun className="text-3xl text-orange-500 animate-spin" />
                            <span className="text-2xl font-bold text-gray-800">SunCart</span>
                        </div>

                        <p className="text-gray-500 text-sm mb-6">
                            Your ultimate summer shopping destination.
                        </p>

                        <div className="flex gap-4">
                            {[FiInstagram, FiFacebook, FiTwitter].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 border rounded-xl flex items-center justify-center text-gray-500 hover:text-orange-500 hover:border-orange-400"
                                >
                                    <Icon />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="font-bold text-gray-800 mb-5">Quick Links</h3>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/products">Products</Link></li>
                            <li><Link href="/login">Login</Link></li>
                            <li><Link href="/register">Register</Link></li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="font-bold text-gray-800 mb-5">Categories</h3>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li>Sunglasses</li>
                            <li>Clothing</li>
                            <li>Skincare</li>
                            <li>Accessories</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-bold text-gray-800 mb-5">Contact</h3>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li className="flex gap-2"><FiMapPin /> Miami, USA</li>
                            <li className="flex gap-2"><FiPhone /> +1 800 SUN</li>
                            <li className="flex gap-2"><FiMail /> hello@suncart.shop</li>
                        </ul>
                    </div>

                </div>

                {/* Bottom */}
                <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between text-sm text-gray-400">
                    <p>© 2025 SunCart</p>
                    <div className="flex gap-6">
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}