export function getAPIURL(...paths: string[]) {
  return `${import.meta.env.VITE_API_URL}/${paths.join('/')}`;
}
