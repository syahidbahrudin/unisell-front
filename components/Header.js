import React from "react";
import Logo from "../public/Asset/logo.png";

const link = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "Explore",
    href: "/"
  },
  {
    label: "Gadget",
    href: "/"
  },
  {
    label: "Service",
    href: "/"
  }
];

export default function Header() {
  return (
    <header>
      <div className="max-w-[1280px]">
        <div className="fixed  inset-x-0 top-0 border-b px-52">
          <div className="flex justify-between px-5 py-3  flex-row">
            <div className="flex text-white items-center">
              <div>
                <a>
                  <img
                    src="https://static01.malaysiakini.com/img/mk-logo/mk-logo-en.svg"
                    alt=""
                    height={100}
                    width={100}
                    className="mr-5"
                  />
                </a>
              </div>
              <div>
                <nav>
                  <ul class="hidden flex-row gap-10 checked:border-b-2 md:flex">
                    {link.map((l) => (
                      <li class=" text-gray-500 font-medium hover:text-orange-500 transition">
                        <a href={l.href} class="navbar">
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="flex items-center ml-6">
                <a className="px-6 py-3 bg-blue-500 rounded-lg text-white font-semibold">
                  Sell
                </a>
              </div>
            </div>
            <div class="flex justify-center gap-5">
              <div class="relative w-[50px] h-[50px] overflow-hidden rounded-full ">
                <div class="absolute inset-0 flex items-center justify-center bg-slate-200">
                  <img
                    src="https://kini.events/wp-content/uploads/2022/07/jason.png"
                    alt=""
                    class="absolute inset-0 w-full h-full min-h-full min-w-full max-w-full max-h-full object-cover object-center "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
