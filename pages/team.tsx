import { useEffect } from 'react';
import { PageLayout } from '../components/pages/PageLayout';
import { useSeoStore } from '../hooks/stores/seo-store';

export default function Team(): JSX.Element {
  const { setSeo } = useSeoStore();
  useEffect(() => {
    setSeo('Team', 'Custom Software Review Team');
  }, []);

  return <PageLayout>Team</PageLayout>;
}
