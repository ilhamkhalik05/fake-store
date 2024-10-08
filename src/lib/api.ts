export const API_BASE_URL = process.env.NEXT_PUBLIC_APIBASEURL;

export function handleApiError(action: string, statusText: string) {
  throw new Error(`Failed to ${action}: ${statusText}`);
}
