export const isDev =
  process.env.NODE_ENV === 'development' ||
  process.env.VERCEL_ENV === 'development';

export const isPreview = process.env.VERCEL_ENV === 'preview';
export const isProduction = process.env.VERCEL_ENV === 'production';
