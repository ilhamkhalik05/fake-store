"use client";

import { showUnavailableFeatureNotification } from "@/lib/notyf";
import { Button } from "../@shadcn-ui/button";

export function BuyNowButton() {
  return (
    <Button variant={"default"} onClick={() => showUnavailableFeatureNotification()}>
      Buy Now
    </Button>
  );
}
