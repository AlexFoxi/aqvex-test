const images = import.meta.glob<{ default: string }>(
  '../assets/products/*.{png,jpg,jpeg,webp,svg}',
  {
    eager: true,
  },
);

export const getAssetUrl = (name: string): string => {
  if (!name) return '/placeholder.png';

  const path = `../assets/products/${name}`;

  const asset = images[path];

  if (!asset) {
    console.warn(`Asset not found at path: ${path}`);
    return '/placeholder.png';
  }

  return asset.default;
};
