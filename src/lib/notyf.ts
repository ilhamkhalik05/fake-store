import { Notyf } from "notyf";
import { TShowNotyf } from "./type";

let notyf: Notyf | null = null;

if (typeof window !== "undefined") {
  notyf = new Notyf({
    duration: 5000,
    position: { x: "right", y: "top" },
    ripple: true,
    dismissible: true,
  });
}

export function showNotification({ type, message }: TShowNotyf) {
  if (notyf) {
    if (type === "success") {
      notyf.success(message);
    } else {
      notyf.error(message);
    }
  }
}

export function showUnavailableFeatureNotification() {
  if (notyf) {
    notyf.error("Sorry, this feature is unavailable this time");
  }
}
