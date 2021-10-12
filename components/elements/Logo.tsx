import Image from 'next/image';
import React from 'react';

interface LogoProps {
  fmeStyle?: 'light' | 'dark';
}

export function Logo({ fmeStyle = 'dark' }: LogoProps): JSX.Element {
  return (
    <div className={'flex flex-col w-40'}>
      <Image
        alt="logo"
        src={
          fmeStyle === 'dark'
            ? 'https://media.graphcms.com/3jS20SAXR2yfO6KQvJ8I'
            : 'https://media.graphcms.com/is0CbEVFTqmhiaT8SSym'
        }
        layout="fill"
      />
    </div>
  );
}
