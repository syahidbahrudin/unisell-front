import { Inter } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ItemCard from "../components/ItemCard";
import Category from "../components/Category";

const inter = Inter({ subsets: ["latin"] });

export default function AddItem() {
  return (
    <div>
      <Header />
      <div className=" py-20 mt-[4.6rem] flex justify-start px-52">
        <form action="/action_page.php">
          <div className="flex flex-row gap-10">
            <div className="flex flex-col gap-10 flex-1">
              <div className="flex flex-col gap-5">
                <h1>Title</h1>
                <input
                  type="name"
                  className="border rounded-lg p-4"
                  placeholder="Title"
                ></input>
              </div>
              <div className="flex flex-row gap-20">
                <div className="flex flex-col gap-5">
                  <h1>Price</h1>
                  <input
                    type="text"
                    className="border rounded-lg p-4"
                    placeholder="Title"
                  ></input>
                </div>
                <div className="flex flex-col gap-5">
                  <h1>Category</h1>
                  <input
                    type="text"
                    className="border rounded-lg p-4"
                    placeholder="Title"
                  ></input>
                </div>
                <div className="flex flex-col gap-5">
                  <h1>Condition</h1>
                  <input
                    type="text"
                    className="border rounded-lg p-4"
                    placeholder="Title"
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-5">
                  <h1>Description</h1>
                  <input
                    type="text"
                    className="border rounded-lg  w-full h-[300px] text-start"
                  ></input>
                </div>
              </div>
            </div>
            <div className="bg-black min-w-full flex flex-1"></div>
          </div>
        </form>
      </div>
    </div>
  );
}
