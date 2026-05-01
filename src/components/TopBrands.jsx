"use client";
import { motion } from "framer-motion";

const brands = [
    { name: "SunShade", logo: "🕶️" },
    { name: "CoastalWear", logo: "🏄" },
    { name: "DermaSun", logo: "🧴" },
    { name: "WaveRunner", logo: "🌊" },
];

export default function TopBrands() {
    return (
        <section className="py-20">
            <h2 className="text-center text-4xl font-bold text-gray-900 mb-10">
                Top <span className="text-orange-500">Brands</span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {brands.map((brand, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.08 }}
                        className="bg-white border border-gray-200 shadow-sm hover:shadow-lg p-6 rounded-2xl text-center transition"
                    >
                        <div className="text-5xl mb-3">{brand.logo}</div>
                        <h3 className="text-gray-900 font-bold">{brand.name}</h3>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}