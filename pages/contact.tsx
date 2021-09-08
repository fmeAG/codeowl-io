import { MailIcon, PhoneIcon } from '@heroicons/react/solid';
import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { apiFindDefaultPageContent } from '../api-functions/hero-sections';
import { Plan } from '../components/elements/Plans';
import { PageLayout } from '../components/pages/PageLayout';
import { useSeoStore } from '../hooks/stores/seo-store';

type SmallPlan = Pick<Plan, 'id' | 'title'>;

interface Props {
  plans: SmallPlan[];
}

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<Props>> {
  const pageContent = await apiFindDefaultPageContent('/');

  return {
    props: {
      plans: pageContent.plans.map((value) => ({
        id: value.id,
        title: value.title,
      })),
    },
  };
}

export default function Contact({ plans }: Props): JSX.Element {
  const { setSeo } = useSeoStore();
  const { query } = useRouter();
  const [plan, setPlan] = useState<SmallPlan>();

  useEffect(() => {
    setPlan(plans.find((value) => value.id === query.plan));
  }, [query]);

  useEffect(() => {
    setSeo('Contact', 'Contact the custom Software Review Team');
  }, []);

  return (
    <PageLayout>
      <div className="relative bg-white">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
          <div className="py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
            <div className="max-w-lg mx-auto">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                Kontakt
              </h2>
              <p className="mt-3 text-lg leading-6 text-gray-500">
                <span className="block">
                  Sie interessieren sich für das {plan?.title}?
                </span>
                <span className="block mt-2">
                  Dann kontaktieren Sie uns hier, gerne über das
                  Kontaktformular.
                </span>
              </p>
              <dl className="mt-8 text-base text-gray-500">
                <div>
                  <dt className="sr-only">Adresse</dt>
                  <dd>
                    <p>Wolfenbütteler Straße 33</p>
                    <p>38102 Braunschweig</p>
                  </dd>
                </div>
                <div className="mt-6">
                  <dt className="sr-only">Telefonnummer</dt>
                  <dd className="flex">
                    <PhoneIcon
                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">+49 531 2 38 54-0</span>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <MailIcon
                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">info(at)fme.de</span>
                  </dd>
                </div>
              </dl>
              <p className="mt-6 text-base text-gray-500">
                Wir stellen ein!{' '}
                <Link href="https://fme-karriere.de">
                  <a className="font-medium text-gray-700 underline">
                    Besuch unsere Karriere-Seite
                  </a>
                </Link>
                .
              </p>
            </div>
          </div>
          <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <form
                action="#"
                method="POST"
                className="grid grid-cols-1 gap-y-6"
              >
                <div>
                  <label htmlFor="full-name" className="sr-only">
                    Name
                  </label>
                  <input
                    type="text"
                    name="full-name"
                    id="full-name"
                    autoComplete="name"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Telefon
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                    placeholder="Telefon"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-red-500 focus:border-red-500 border border-gray-300 rounded-md"
                    placeholder="Nachricht"
                    defaultValue={''}
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Anfrage senden
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
