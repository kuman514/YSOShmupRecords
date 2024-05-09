export function getAPIURL(...paths: string[]) {
  return paths.join('/');
}
