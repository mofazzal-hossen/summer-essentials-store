"use client";
import { motion } from "framer-motion";

const tips = [
    { icon: "☀️", title: "Sun Protection", tip: "Use SPF 30+ sunscreen" },
    { icon: "💧", title: "Stay Hydrated", tip: "Drink enough water daily" },
    { icon: "🧴", title: "Skin Care", tip: "Use aloe & light moisturizer" },
    { icon: "🌴", title: "Stay Cool", tip: "Avoid sun 10AM–4PM" },
];

export default function SummerTips() {
    return (
        <section className="py-20">
            <h2 className="text-center text-4xl font-bold text-gray-900 mb-10">
                Summer Care <span className="text-orange-500">Tips</span>
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
                {tips.map((item, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white border border-gray-200 shadow-sm hover:shadow-lg p-6 rounded-2xl text-center transition"
                    >
                        <div className="text-4xl mb-3">{item.icon}</div>
                        <h3 className="text-gray-900 font-bold">{item.title}</h3>
                        <p className="text-gray-500 text-sm mt-2">{item.tip}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}