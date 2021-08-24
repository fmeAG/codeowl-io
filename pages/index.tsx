import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import React, { useEffect } from 'react';
import { apiFindDefaultPageContent } from '../api-functions/hero-sections';
import Features from '../components/elements/Features';
import { IHeroSection } from '../components/elements/HeroSection';
import { Logo } from '../components/elements/LogoRow';
import { PageLayout } from '../components/pages/PageLayout';
import { useSeoStore } from '../hooks/stores/seo-store';

interface Props {
  heroSection: IHeroSection;
  logoItems: Logo[];
}

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<Props>> {
  const pageContent = await apiFindDefaultPageContent('/');

  console.log(
    'Got following pageContent for path "/"',
    JSON.stringify(pageContent)
  );

  return {
    props: {
      heroSection: pageContent.heroSection,
      logoItems: pageContent.logoCloudItems,
    },
  };
}

export default function Home({ heroSection, logoItems }: Props): JSX.Element {
  const { setSeo } = useSeoStore();
  useEffect(() => {
    setSeo('Custom Software Reviews', 'Custom Software Review Team');
  }, []);

  return (
    <PageLayout heroSection={heroSection} logoItems={logoItems}>
      <Features />
    </PageLayout>
  );
}
