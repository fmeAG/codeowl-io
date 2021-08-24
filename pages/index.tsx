import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import React, { useEffect } from 'react';
import { apiFindDefaultPageContent } from '../api-functions/hero-sections';
import { IHeroSection } from '../components/elements/HeroSection';
import { Logo } from '../components/elements/LogoRow';
import Services, { Service } from '../components/elements/Services';
import { PageLayout } from '../components/pages/PageLayout';
import { useSeoStore } from '../hooks/stores/seo-store';

interface Props {
  heroSection: IHeroSection;
  logoItems: Logo[];
  services: Service[];
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
      services: pageContent.services,
    },
  };
}

export default function Home({
  heroSection,
  logoItems,
  services,
}: Props): JSX.Element {
  const { setSeo } = useSeoStore();
  useEffect(() => {
    setSeo('Custom Software Reviews', 'Custom Software Review Team');
  }, []);

  return (
    <PageLayout heroSection={heroSection} logoItems={logoItems}>
      {services && <Services services={services} />}
    </PageLayout>
  );
}
