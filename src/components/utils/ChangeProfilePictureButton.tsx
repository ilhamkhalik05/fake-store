"use client";

import { LucidePencil } from "lucide-react";
import { Button } from "../@shadcn-ui/button";
import { showUnavailableFeatureNotification } from "@/lib/notyf";

export function ChangeProfilePictureButton() {
  return (
    <Button
      variant={"outline"}
      size={"sm"}
      className="flex items-center gap-2 text-muted-foreground"
      onClick={() => showUnavailableFeatureNotification()}
    >
      <LucidePencil size={16} />
      Change Avatar
    </Button>
  );
}
