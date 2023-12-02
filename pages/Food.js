import { Inter } from "next/font/google";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import ItemCard from "../components/ItemCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Header />
      <div className="bg-red-200 py-20 mt-[4.6rem] flex justify-center text-4xl font-bold">
        Home
      </div>
    </div>
  );
}
