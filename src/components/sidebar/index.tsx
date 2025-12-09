"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  TooltipProvider,
} from "@/components/ui/tooltip";
import { menuOptions } from "@/lib/constant";
import { Separator } from "@/components/ui/separator";
import { Database, GitBranch, LucideMousePointerClick } from "lucide-react";
import { ModeToggle } from "../global/mode-toggle";
import MenuItem from "./menuItem";

const MenuOptions = () => {
  const pathName = usePathname();

  return (
    <nav className=" dark:bg-black overflow-y-scroll space-y-8 fixed h-full no-scrollbar overflow-x-hidden flex items-center flex-col  py-6  px-2">
      <div className="flex items-center justify-between flex-col h-full space-y-10">
        <Link
          className="flex font-bold uppercase flex-row text-[12px]  whitespace-nowrap pl-2"
          href="/"
        >
          Flow-forge
        </Link>
        <TooltipProvider>
          {menuOptions.map((menuItem) => (
            <MenuItem
              key={menuItem.name}
              menuItem={menuItem}
              pathName={pathName}
            />
          ))}
        </TooltipProvider>
        <Separator />
        <div className="flex items-center flex-col gap-9 dark:bg-[#353346]/30 py-4 px-2 rounded-full h-56 overflow-scroll border-[1px]">
          <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
            <LucideMousePointerClick className="dark:text-white" size={18} />
            <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]" />
          </div>
          <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
            <GitBranch className="text-muted-foreground" size={18} />
            <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]"></div>
          </div>
          <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
            <Database className="text-muted-foreground" size={18} />
            <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]"></div>
          </div>
          <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
            <GitBranch className="text-muted-foreground" size={18} />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col gap-8">
        <ModeToggle />
      </div>
    </nav>
  );
};

export default MenuOptions;
