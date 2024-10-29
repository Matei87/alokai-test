'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import type { AgnosticCmsComponent } from './types';

const Hero = dynamic(() => import('./Hero'));
const Banner = dynamic(() => import('./Banner'));
const ProductSlider = dynamic(() => import('./ProductSlider'));

export type ProductComponentProps = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
};

type RenderComponentProps = {
  item: AgnosticCmsComponent;
  hidden?: boolean;
  products: ProductComponentProps[];
};

const components = {
  Hero,
  Banner,
  ProductSlider,
};

function RenderComponent({ item, products }: RenderComponentProps) {
  const Component = components[item.component as keyof typeof components];
  const { ...componentProps } = item;

  if (!Component) {
    console.warn(`Component "${item.component}" not found`);
    return null;
  }

  return (
    <>
      {item.styles && (
        <Head>
          <style>{item.styles}</style>
        </Head>
      )}
      <Suspense>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        <Component
          {...(componentProps as any)}
          key={item._uid}
          className={item.uniqueClass}
        />
        <ProductSlider {...products} />
      </Suspense>
    </>
  );
}

export default RenderComponent;
