import { ChevronRightIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export interface IHeroSection {
  title: string;
  pageLocation: string;
  featuredImage: { url: string };
  description: string;
  subTitle?: string;
}

type Props = {
  notification?: {
    title: string;
    href: string;
    actionTitle: string;
  };
  heroSection: IHeroSection;
};

export function HeroSection({
  notification,
  heroSection: {
    description,
    featuredImage: { url },
    subTitle,
    title,
  },
}: Props): JSX.Element {
  return (
    <div className="pt-10 bg-white sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div className="lg:py-24">
              {notification && (
                <Link href={notification.href}>
                  <a className="inline-flex items-center border-black border bg-white rounded-full text-gray-800 p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-black hover:border-red-500">
                    <span className="px-3 py-0.5 text-xs font-semibold leading-5 uppercase tracking-wide bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full">
                      {notification.title}
                    </span>
                    <span className="ml-4 text-sm">
                      {notification.actionTitle}
                    </span>
                    <ChevronRightIcon
                      className="ml-2 w-5 h-5 text-gray-500"
                      aria-hidden="true"
                    />
                  </a>
                </Link>
              )}
              <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-gray-900 sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                <span className="block">{title}</span>
                {subTitle && (
                  <span className="pb-3 block bg-clip-text text-blue-500 sm:pb-5">
                    {subTitle}
                  </span>
                )}
              </h1>
              <p className="text-base text-gray-500 sm:text-xl lg:text-lg xl:text-xl">
                {description}
              </p>
            </div>
          </div>
          <div className="mt-12 lg:m-0 relative h-96 mx-6 lg:mx-0">
            <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
              <Image src={url} layout="fill" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
