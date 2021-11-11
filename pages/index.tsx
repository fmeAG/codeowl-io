import { GetStaticPropsResult } from 'next';
import React, { useEffect } from 'react';
import {
  apiFindDefaultPageContent,
  PageProperty,
} from '../api-functions/hero-sections';
import Contact from '../components/elements/Contact';
import { IHeroSection } from '../components/elements/HeroSection';
import { Logo } from '../components/elements/LogoRow';
import { Plan, Plans } from '../components/elements/Plans';
import Services, { Service } from '../components/elements/Services';
import { PageLayout } from '../components/pages/PageLayout';
import { useSeoStore } from '../hooks/stores/seo-store';

interface Props {
  heroSection: IHeroSection;
  logoItems: Logo[];
  services: Service[];
  plans: Plan[];
  pageProperty?: PageProperty;
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const pageContent = await apiFindDefaultPageContent('/');

  return {
    props: {
      heroSection: pageContent.heroSection,
      logoItems: pageContent.logoCloudItems,
      services: pageContent.services,
      plans: pageContent.plans,
      pageProperty: pageContent.pageProperty,
    },
  };
}

export default function Home({
  heroSection,
  logoItems,
  services,
  plans,
  pageProperty,
}: Props): JSX.Element {
  const { setSeo } = useSeoStore();
  useEffect(() => {
    setSeo(
      pageProperty?.seoTitle ?? 'Custom Software Reviews',
      pageProperty?.seoDescription ?? 'Custom Software Review Team'
    );
  }, [pageProperty]);

  return (
    <PageLayout heroSection={heroSection} logoItems={logoItems}>
      {services && <Services services={services} />}
      {plans && <Plans plans={plans} />}
      <Contact plans={plans} />
    </PageLayout>
  );
}
