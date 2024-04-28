"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

function Header() {
  const router = useRouter();
  return (
    <div className="flex flex-row justify-between items-center">
      <Image width={120} height={90} alt="" src="./assets/logo.svg" />

      <button
        onClick={() => router.push("/auth")}
        className=" transition-all duration-500 hover:cursor-pointer hover:bg-green-800 text-sm bg-green-600 w-[70px] h-[35px] rounded-md text-white CENTER"
      >
        Sign In
      </button>
    </div>
  );
}

export default Header;
