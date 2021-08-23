import { useEffect } from 'react';
import { PageLayout } from '../components/pages/PageLayout';
import { useSeoStore } from '../hooks/stores/seo-store';

export default function Services(): JSX.Element {
  const { setSeo } = useSeoStore();
  useEffect(() => {
    setSeo('Services', 'Our custom software review services');
  }, []);

  return <PageLayout>Services</PageLayout>;
}
