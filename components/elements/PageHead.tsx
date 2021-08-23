import Head from 'next/head';
import { useEffect } from 'react';
import { useSeoStore } from '../../hooks/stores/seo-store';
import { useThemingStore } from '../../hooks/stores/theming-store';

export function PageHead(): JSX.Element {
  const { additionalHeader, description, title } = useSeoStore();
  const { browserColor } = useThemingStore();

  useEffect(() => {
    if (process.browser) {
      document.documentElement.lang = 'en';
    }
  }, []);

  return (
    <Head>
      <title>fme AG • {title}</title>
      <meta name="description" content={description} />
      {/*TODO: change theme color*/}
      <meta name="theme-color" content={browserColor} />
      {additionalHeader}
    </Head>
  );
}
