"use client";

import { useRouter } from "next/navigation";
import { LogOut, User } from "lucide-react";
import { Button } from "../@shadcn-ui/button";
import { signOut } from "next-auth/react";
import { showNotification, showUnavailableFeatureNotification } from "@/lib/notyf";
import Link from "next/link";

export const UserMenu = () => {
  const router = useRouter();

  const handleOnLogout = () => {
    signOut({
      redirect: false,
    });
    showNotification({
      type: "error",
      message: "Oops, you signed out! We miss you already. Please sign in again to continue where you left off. 😊",
    });
    router.push("/");
  };

  return (
    <div className="flex flex-col m-1">
      <Button
        variant={"ghost"}
        size={"sm"}
        className="flex items-center gap-2.5 px-4"
        onClick={() => showUnavailableFeatureNotification()}
      >
        <User size={20} />
        Your Account
      </Button>

      <hr className="border border-gray-300 mt-4 mb-2"></hr>

      <Button
        className="flex justify-start items-center gap-2.5 px-4 hover:text-red-600"
        variant={"ghost"}
        size={"sm"}
        onClick={handleOnLogout}
      >
        <LogOut size={18} />
        Sign out
      </Button>
    </div>
  );
};
