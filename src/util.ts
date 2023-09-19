import { ImageType } from './types';

export const verifySourceImageType = (src: ImageType) => {
  if (typeof src === 'string') return 'image';

  return 'svg';
};
