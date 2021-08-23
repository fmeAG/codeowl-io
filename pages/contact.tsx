import { useEffect } from 'react';
import { PageLayout } from '../components/pages/PageLayout';
import { useSeoStore } from '../hooks/stores/seo-store';

export default function Team(): JSX.Element {
  const { setSeo } = useSeoStore();
  useEffect(() => {
    setSeo('Contact', 'Contact the custom Software Review Team');
  }, []);

  return <PageLayout>Contact</PageLayout>;
}
