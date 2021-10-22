import Image from 'next/image';
import React from 'react';

interface LogoProps {
  fmeStyle?: 'light' | 'dark';
  height?: string;
}

export function Logo({
  fmeStyle = 'dark',
  height = 'h-16',
}: LogoProps): JSX.Element {
  return (
    <div className="">
      <img
        alt="logo"
        className={height}
        src={
          fmeStyle === 'dark'
            ? 'https://media.graphcms.com/3jS20SAXR2yfO6KQvJ8I'
            : 'https://media.graphcms.com/is0CbEVFTqmhiaT8SSym'
        }
      />
    </div>
  );
}
