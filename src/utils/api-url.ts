/**
 * @todo
 * Remove hardcoded api url
 */
export function getAPIURL(...paths: string[]) {
  return `https://read-only-api-endpoints-kuman514.vercel.app/yso-shmup-records${paths.join(
    '/'
  )}`;
}
