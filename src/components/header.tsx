"use client";

import { useEffect, useState } from "react";
import { Nav } from "./nav";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    setIsOpened(false);
  }, [pathname]);

  return (
    <div>
      <div className="topbar fixed left-0 right-0 top-0 z-20 hidden h-12 bg-white">
        <div className=" flex h-full w-full items-center justify-between px-5">
          <div>
            <h1 className="text-xl font-bold">Antoni Gaudi</h1>
          </div>
          <div onClick={() => setIsOpened(!isOpened)}>
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div
        className={`mobile-menu ${clsx({
          opened: isOpened,
        })} fixed right-[-200px] top-12 z-[15] h-[100vh] w-[200px] bg-white transition-all duration-300`}
      >
        <div className="menu_list float-left clear-both h-auto w-full px-[20px] pb-[0px] pt-[100px] text-right">
          <Nav />
        </div>
      </div>
    </div>
  );
}
