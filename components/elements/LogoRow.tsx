import Image from 'next/image';

export interface Logo {
  id: string;
  title: string;
  logo: { url: string; width: number; height: number };
}

interface Props {
  logos: Logo[];
}

export function LogoRow({ logos }: Props): JSX.Element {
  return (
    <div className="flow-root mx-4 lg:mx-0">
      <ul className="flex flex-wrap justify-between gap-4">
        {logos.map((value) => {
          return <LogoItem key={value.id} logo={value} />;
        })}
      </ul>
    </div>
  );
}

function LogoItem({ logo }: { logo: Logo }): JSX.Element {
  return (
    <li className="flex flex-grow flex-shrink-0 lg:flex-grow-0 relative w-12 h-12 lg:w-18 lg:h-18">
      <Image
        src={logo.logo.url}
        alt={logo.title}
        title={logo.title}
        layout="fill"
        width={logo.logo.width}
        height={logo.logo.height}
      />
    </li>
  );
}
