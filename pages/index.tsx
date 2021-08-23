import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import React, { useEffect } from 'react';
import { apiFindHeroSection } from '../api-functions/hero-sections';
import { IHeroSection } from '../components/elements/HeroSection';
import { PageLayout } from '../components/pages/PageLayout';
import { useSeoStore } from '../hooks/stores/seo-store';

interface Props {
  heroSection: IHeroSection;
}

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<Props>> {
  const heroSection = await apiFindHeroSection('/');

  return {
    props: {
      heroSection: heroSection,
    },
  };
}

export default function Home({ heroSection }: Props): JSX.Element {
  console.log('my herosection is', heroSection);
  const { setSeo } = useSeoStore();
  useEffect(() => {
    setSeo('Custom Software Reviews', 'Custom Software Review Team');
  }, []);

  return (
    <PageLayout heroSection={heroSection}>
      Here is the rest of the pages layout
    </PageLayout>
  );
}
