import React from "react";
import ProductCard from "@/components/ProductCard";
import Category from "@/components/Category";

export default async function ProductsPage({ searchParams }) {
    const { category } = await searchParams;
    const res = await fetch("https://summer-essentials-store-six.vercel.app/data.json");
    const products = await res.json();

    const filteredProducts = category
        ? products.filter((product) => product.category?.toLowerCase() === category.toLowerCase())
        : products;


    return (
        <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-14 animate__animated animate__fadeInUp">
                <span className="px-4 py-1.5 glass text-sun-400 text-xs font-bold uppercase tracking-widest rounded-full">
                    🛍️ All Essentials
                </span>
                <h2 className="font-display text-4xl sm:text-5xl font-black text-sand-100 mt-4 mb-4">
                    Our <span className="gradient-text">Collection</span>
                </h2>
                <p className="text-sand-100/50 max-w-xl mx-auto">
                    Browse our full range of summer essentials, from UV protection to coastal wear.
                </p>
            </div>

            <Category />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}