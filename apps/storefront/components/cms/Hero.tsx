import { SfButton } from '@storefront-ui/react';
import type { AgnosticCmsImage, AgnosticCmsButton } from './types';
import classNames from 'classnames';
import Link from 'next/link';
import Image from 'next/image';

type HeroProps = {
  title: string;
  subtitle: string;
  description: string;
  buttonA: AgnosticCmsButton[];
  buttonB: AgnosticCmsButton[];
  image: AgnosticCmsImage[];
  backgroundImage: AgnosticCmsImage[];
  className?: string;
};

export default function Hero({
  title,
  subtitle,
  description,
  buttonA,
  image,
  backgroundImage,
  className,
}: HeroProps) {
  return (
    <div
      data-testid='hero'
      className={classNames(
        'relative min-h-[600px] w-full shrink-0',
        className
      )}
    >
      {backgroundImage && backgroundImage[0] && (
        <picture>
          <source
            srcSet={backgroundImage[0].desktop}
            media='(min-width: 768px)'
          />
          <img
            src={backgroundImage[0].mobile}
            alt={backgroundImage[0].alt}
            className='absolute w-full h-full z-[-1] md:object-cover'
          />
        </picture>
      )}
      <div className='md:flex md:flex-row-reverse md:justify-center min-h-[600px] max-w-[1536px] mx-auto'>
        {image && image[0] && (
          <div className='flex md:basis-2/4 justify-center align-center'>
            <Image
              src={image[0].desktop ?? ''}
              alt={image[0].alt ?? ''}
              className='object-contain object-left'
              crossOrigin='anonymous'
              width={300}
              height={300}
            />
          </div>
        )}
        <div className='p-4 md:p-10 md:flex md:flex-col md:justify-center md:items-start md:basis-2/4'>
          <p
            data-testid='section-subtitle'
            className='typography-text-xs md:typography-text-sm font-bold tracking-widest text-neutral-500 uppercase'
          >
            {subtitle}
          </p>
          <h1
            data-testid='section-title'
            className='typography-headline-2 md:typography-headline-1 md:leading-[67.5px] font-bold mt-2 mb-4'
          >
            {title}
          </h1>
          <p
            data-testid='section-description'
            className='typography-text-base md:typography-text-lg'
          >
            {description}
          </p>
          <div className='flex flex-col md:flex-row gap-4 mt-6'>
            {buttonA && buttonA[0] && (
              <Link href={buttonA[0].link ?? ''} passHref legacyBehavior>
                <SfButton data-testid='button-order-now' size='lg' as='a'>
                  Browse {buttonA[0].label}
                </SfButton>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
