import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FiStar, FiArrowLeft, FiShield, FiPackage, FiTruck, FiRefreshCw } from "react-icons/fi";

export default async function ProductDetailPage({ params }) {
    const { id } = await params;

    // ✅ fetch products
    const res = await fetch("https://summer-essentials-store-six.vercel.app/data.json");
    const products = await res.json();

    const product = products.find(
        (p) => p.id === Number(id)
    );

    if (!product) {
        notFound();
    }

    const discount = Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
    );

    const relatedProducts = products
        .filter((p) => p.category === product.category && p.id !== product.id)
        .slice(0, 3);

    return (
        <div className="min-h-screen pt-28 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-sand-100/40 mb-8">
                    <Link href="/" className="hover:text-sun-400">Home</Link>
                    <span>/</span>
                    <Link href="/products" className="hover:text-sun-400">Products</Link>
                    <span>/</span>
                    <span>{product.name}</span>
                </div>

                <Link href="/products" className="inline-flex items-center gap-2 glass px-4 py-2 rounded-xl mb-8">
                    <FiArrowLeft /> Back
                </Link>

                {/* Product */}
                <div className="grid lg:grid-cols-2 gap-12 mb-16">

                    {/* IMAGE */}
                    <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden glass">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* INFO */}
                    <div>

                        <h1 className="text-3xl font-black mb-4">{product.name}</h1>

                        {/* Rating */}
                        <div className="flex items-center gap-2 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <FiStar
                                    key={i}
                                    className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-500"}
                                />
                            ))}
                            <span>{product.rating}</span>
                        </div>

                        {/* Price */}
                        <div className="mb-4">
                            <span className="text-3xl font-bold text-orange-400">
                                ${product.price}
                            </span>
                            <span className="line-through ml-3 text-gray-500">
                                ${product.originalPrice}
                            </span>
                        </div>

                        <p className="text-gray-400 mb-6">
                            {product.description}
                        </p>

                        <button
                            className="w-full bg-orange-500 text-black py-3 rounded-xl font-bold"
                            disabled={product.stock === 0}
                        >
                            {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
                        </button>

                        {/* Features */}
                        {product.features && (
                            <div className="mt-6">
                                <h3 className="font-bold mb-2">Features</h3>
                                <ul className="text-sm text-gray-400 space-y-1">
                                    {product.features.map((f, i) => (
                                        <li key={i}>• {f}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                    </div>
                </div>

                {/* RELATED */}
                {/* <h2 className="text-2xl font-bold mb-6">Related Products</h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {relatedProducts.map((rp) => (
                        <div key={rp.id} className="border rounded-xl p-4">
                            <Image
                                src={rp.image}
                                alt={rp.name}
                                width={300}
                                height={200}
                                className="rounded-lg"
                            />
                            <h3 className="mt-2 font-bold">{rp.name}</h3>
                            <p className="text-orange-400">${rp.price}</p>

                            <Link
                                href={`/products/${rp.id}`}
                                className="text-sm text-blue-400"
                            >
                                View
                            </Link>
                        </div>
                    ))}
                </div> */}

            </div>
        </div>
    );
}