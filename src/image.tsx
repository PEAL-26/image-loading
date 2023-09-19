import React, { SyntheticEvent, useEffect, useRef, useState } from 'react';

import { ImageDefault } from './image-default';
import { ImageLoading } from './image-loading';

import { ImageProps } from './types';

export function Image(props: ImageProps) {
  const {
    src,
    defaultImage,
    defaultImageSize,
    loadingImage,
    loadingImageSize,
    onLoad,
    onError,
    onLoadStart,
    ...rest
  } = props;

  const imageRef = useRef<HTMLImageElement>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleLoad = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    onLoad(e);
    setIsError(false);
    setIsLoading(false);
  };

  const handleError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    onError(e);
    setIsError(true);
    setIsLoading(false);
    console.error('Erro ao carregar a imagem!');
  };

  const handleLoadStart = (e?: SyntheticEvent<HTMLImageElement, Event>) => {
    setIsLoading(true);
    setIsError(false);
    onLoadStart(e);
  };

  useEffect(() => {
    const _imageRef = imageRef.current;

    if (src && typeof src === 'string' && _imageRef) {
      _imageRef.src = src;
      // _imageRef.addEventListener('load',()=> handleLoad);
      // _imageRef.addEventListener('error', handleError);
      handleLoadStart();
    }

    // return () => {
    //   _imageRef?.removeEventListener('load', handleLoad);
    //   _imageRef?.removeEventListener('error', handleError);
    // };
  }, [src]);

  if (isLoading) {
    return <ImageLoading src={loadingImage} height={loadingImageSize} width={loadingImageSize} />;
  }

  if (isError || !src) {
    return <ImageDefault src={defaultImage} height={defaultImageSize} width={defaultImageSize} />;
  }

  return <img ref={imageRef} src={src} onLoad={handleLoad} onError={handleError} {...rest} />;
}
