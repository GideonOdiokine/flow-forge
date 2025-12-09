/* eslint-disable react/display-name */
"use client";

import React from "react";
import { Tooltip, TooltipTrigger, TooltipContent } from "../ui/tooltip";
import Link from "next/link";
import clsx from "clsx";

const MenuItem = React.memo(
  ({ menuItem, pathName }: { menuItem: any; pathName: string }) => {
    const isActive = pathName === menuItem.href;
    const linkClass = clsx(
      "group h-8 w-8 flex items-center justify-center scale-[1.5] rounded-lg p-[3px] cursor-pointer",
      { "dark:bg-[#2F006B] bg-[#EEE0FF]": isActive }
    );

    return (
      <ul className="mb-4">
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <li>
              <Link href={menuItem.href} className={linkClass}>
                <menuItem.Component selected={isActive} />
              </Link>
            </li>
          </TooltipTrigger>
          <TooltipContent side="right" className="bg-black/10 backdrop-blur-xl">
            <p>{menuItem.name}</p>
          </TooltipContent>
        </Tooltip>
      </ul>
    );
  }
);

export default MenuItem;
