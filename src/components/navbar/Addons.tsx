"use client";

import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { BellRing, LogInIcon, User2 } from "lucide-react";
import { Button } from "../@shadcn-ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "../@shadcn-ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../@shadcn-ui/avatar";
import { UserMenu } from "./UserMenu";
import { NavigateToCartButton } from "../utils";
import { showUnavailableFeatureNotification } from "@/lib/notyf";
import Link from "next/link";

export const Addons = () => {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <div className="flex items-center gap-2 md:gap-2.5">
      <Button
        variant={"outline"}
        size={"icon"}
        className="rounded-full"
        onClick={() => showUnavailableFeatureNotification()}
      >
        <BellRing size={18} />
      </Button>

      {!pathname.startsWith("/cart") && <NavigateToCartButton />}

      {!session ? (
        <Link href={"/auth/signin"}>
          {/* For Mobile  */}
          <div className="block md:hidden">
            <Button
              variant={"default"}
              size={"icon"}
              className="bg-gray-800 ml-1.5 rounded-xl active:scale-95 transition-transform duration-300"
            >
              <User2 size={20} />
            </Button>
          </div>

          {/* For Desktop  */}
          <div className="hidden md:block">
            <Button className="px-6 ml-3 gap-1.5 font-semibold rounded-full active:scale-95 transition-transform duration-300">
              <span>Log In</span>
              <LogInIcon size={22} />
            </Button>
          </div>
        </Link>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer ml-2">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback />
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-8 mt-2 rounded-xl z-10">
            <UserMenu />
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
};
