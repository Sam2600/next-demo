"use client";

import React from "react";
import { plusSign } from "../../svgs/svg";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center mb-7 border-b border-base-100 p-3 shadow-md">
      <h1 className="hover:bg-base-100 hover:cursor-pointer p-3 rounded-md text-xl font-semibold text-base-200 hover:text-white">
        Task List
      </h1>
      <Link href="/prisma-example/register" className="btn hover:text-white">
        {plusSign}
        Add
      </Link>
    </div>
  );
};
