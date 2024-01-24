export function getStaticImageUrl(...paths: string[]) {
  return `${import.meta.env.VITE_STATIC_IMAGE_URL}/${paths.join('/')}`;
}
