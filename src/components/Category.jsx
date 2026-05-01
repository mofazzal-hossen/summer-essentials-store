import { Button } from "@heroui/react";
import Link from "next/link";

const Category = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/category.json`);
    const categories = await res.json();
    console.log(categories);
    return (
        <div className="mb-10 flex flex-wrap gap-3 justify-center">
            <Link href="/products">
                <Button variant="bordered" size="sm" className="rounded-full">
                    All
                </Button>
            </Link>
            {categories.map((category) => (
                <Link
                    key={category.id}
                    href={`?category=${category.slug}`}
                >
                    <Button variant="bordered" size="sm" className="rounded-full">
                        {category.name}
                    </Button>
                </Link>
            ))}
        </div>
    );
};

export default Category;