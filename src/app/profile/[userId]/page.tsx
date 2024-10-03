import { getUserById } from "@/services/user";

import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Container from "@/components/container";
import Image from "next/image";
import ProfileForm from "@/components/profile-form";
import { ChangeProfilePictureButton } from "@/components/utils/ChangeProfilePictureButton";

export default async function UserProfilePage({ params }: { params: { userId: number } }) {
  const user = await getUserById(Number(params.userId));
  return (
    <>
      <Navbar />

      <Container>
        <h1 className="text-xl tracking-widest mb-6">Profile Bio</h1>

        <div className="w-full flex flex-col sm:flex-row gap-x-7 gap-y-5">
          <div className="w-full sm:w-1/3 md:w-1/4">
            <div className="flex flex-col items-center gap-4">
              <Image
                className="rounded-xl w-full h-40 sm:size-full object-contain"
                src={"https://github.com/shadcn.png"}
                alt="profile image"
                width={1000}
                height={1000}
              />

              <ChangeProfilePictureButton />
            </div>
          </div>

          <div className="w-full">
            <ProfileForm user={user!} />
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
}
