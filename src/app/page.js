import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import PopularProducts from "@/components/PopularProducts";
import SummerTips from "@/components/SummerTips";
import TopBrands from "@/components/TopBrands";

export default function Home() {
  return (
    <div>
      <Banner />
      <PopularProducts />
      <SummerTips />
      <TopBrands />
      <Footer />
    </div>
  );
}
