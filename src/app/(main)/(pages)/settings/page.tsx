import React from "react";
import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import SettingsClient from "./_components/SettingsClient"

const Settings = async () => {
  const authUser = await currentUser();
  if (!authUser) return null;

  const user = await db.user.findUnique({ where: { clerkId: authUser.id } });

  return (
    <div className="flex flex-col gap-4">
      <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg">
        <span>Settings</span>
      </h1>
      <div className="flex flex-col gap-10 p-6">
        <div>
          <h2 className="text-2xl font-bold">User Profile</h2>
          <p className="text-base text-white/50">
            Add or update your information
          </p>
        </div>
        <SettingsClient user={user} />
      </div>
    </div>
  );
};

export default Settings;
