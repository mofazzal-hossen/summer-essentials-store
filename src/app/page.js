import Banner from "@/components/Banner";
import PopularProducts from "@/components/PopularProducts";
import SummerTips from "@/components/SummerTips";
import TopBrands from "@/components/TopBrands";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Banner />
      <PopularProducts />
      <SummerTips />
      <TopBrands />
    </div>
  );
}
