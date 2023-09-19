import { ElementType, HTMLProps, ReactNode, SVGProps } from 'react';

export type ImageType = ElementType<SVGProps<HTMLOrSVGElement>> | string;

export interface ImageProps extends HTMLProps<HTMLImageElement> {
  src?: string;
  defaultImage?: ImageType;
  defaultImageSize?: number;
  loadingImage?: ImageType;
  loadingImageSize?: number;
  image?: ReactNode;
}

export interface ImageDefaultProps extends SVGProps<SVGSVGElement> {
  src?: ImageType;
}

export interface ImageLoadingProps extends SVGProps<SVGSVGElement> {
  src?: ImageType;
}
