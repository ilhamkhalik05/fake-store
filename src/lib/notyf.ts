import { Notyf } from "notyf";

type TShowNotyf = {
  type: "success" | "error";
  message: string;
};

let notyf: Notyf | null = null;

// Assign notyf when the client/browser is available
if (typeof window !== "undefined") {
  notyf = new Notyf({
    duration: 5000,
    position: { x: "right", y: "top" },
    ripple: true,
    dismissible: true,
  });
}

export function showNotification({ type, message }: TShowNotyf) {
  // Check if the notyf is available
  if (notyf) {
    if (type === "success") {
      notyf.success(message);
    } else {
      notyf.error(message);
    }
  }
}

export function showUnavailableFeatureNotification() {
  // Check if the notyf is available
  if (notyf) {
    notyf.error("Sorry, this feature is unavailable this time");
  }
}
