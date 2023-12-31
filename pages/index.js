import { Inter } from "next/font/google";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import ItemCard from "../components/ItemCard";
import Category from "../components/Category";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Header />
      <div className="bg-red-200 py-20 mt-[4.6rem] flex justify-center items-center text-4xl font-bold flex-col">
        <div>
          <h1>Home</h1>
        </div>
        <div>
          <Category />
        </div>
      </div>
    </div>
  );
}
