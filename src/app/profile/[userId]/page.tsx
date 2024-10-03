import { getUserById } from "@/services/user";
import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Container from "@/components/container";
import Image from "next/image";
import { Button } from "@/components/@shadcn-ui/button";

export default async function UserProfilePage({ params }: { params: { userId: number } }) {
  const user = await getUserById(Number(params.userId));
  return (
    <>
      <Navbar />

      <Container>
        <h1 className="text-xl tracking-widest mb-5">Your Biodata</h1>

        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-1">
            <div className="flex flex-col items-center gap-4">
              <Image
                className="size-full rounded-xl"
                src={"https://github.com/shadcn.png"}
                alt="profile image"
                width={1000}
                height={1000}
              />

              <Button variant={"outline"} size={"sm"}>
                Change Picture
              </Button>
            </div>
          </div>
          <div className="col-span-4">
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
}
