import { MailIcon, PhoneIcon } from '@heroicons/react/solid';
import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { apiFindDefaultPageContent } from '../api-functions/hero-sections';
import { Plan } from '../components/elements/Plans';
import { PageLayout } from '../components/pages/PageLayout';
import { LegalConsent } from '../global/constants';
import { useSeoStore } from '../hooks/stores/seo-store';

type SmallPlan = Pick<Plan, 'id' | 'title'>;

interface Props {
  plans: SmallPlan[];
}

// Phone link (tel:+49531238540)
const encodedPhone = 'dGVsOis0OTUzMTIzODU0MA==';
// Mail link (mailto:info@fme.de)
const encodedMail = 'bWFpbHRvOmluZm9AZm1lLmRl';

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
  const [status, setStatus] = useState<'success' | 'error'>();
  const [formMessage, setFormMessage] = useState<string>();
  const { push } = useRouter();

  useEffect(() => {
    setPlan(plans.find((value) => value.id === query.plan));
  }, [query]);

  useEffect(() => {
    setStatus(query.status as 'success' | 'error');
    setFormMessage(query.message as string);
  });

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
                  {plan
                    ? `Sie interessieren sich für das ${plan?.title}?`
                    : 'Sie interessieren sich für ein Review?'}
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
                    <span
                      onClick={async () => {
                        await push(atob(encodedPhone));
                      }}
                      className="ml-3 cursor-pointer hover:text-red-500"
                    >
                      +49 531 2 38 54-0
                    </span>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <MailIcon
                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                    <span
                      onClick={async () => {
                        await push(atob(encodedMail));
                      }}
                      className="ml-3 cursor-pointer hover:text-red-500"
                    >
                      info@fme.de
                    </span>
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
                action="/api/form"
                method="POST"
                className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-3"
              >
                <input
                  name="plan"
                  id="plan"
                  type="hidden"
                  value={plan?.title}
                />
                <div>
                  <label htmlFor="given-name" className="sr-only">
                    Vorname
                  </label>
                  <input
                    type="text"
                    name="given-name"
                    id="given-name"
                    required
                    autoComplete="given-name"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                    placeholder="Vorname"
                  />
                </div>
                <div>
                  <label htmlFor="family-name" className="sr-only">
                    Nachname
                  </label>
                  <input
                    type="text"
                    name="family-name"
                    id="family-name"
                    required
                    autoComplete="family-name"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                    placeholder="Nachname"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="organization" className="sr-only">
                    Unternehmen
                  </label>
                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    required
                    autoComplete="organization"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                    placeholder="Unternehmen"
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
                    required
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
                    required
                    autoComplete="tel"
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                    placeholder="Telefon"
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="message" className="sr-only">
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required={!plan}
                    className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-red-500 focus:border-red-500 border border-gray-300 rounded-md"
                    placeholder="Nachricht"
                    defaultValue={''}
                  />
                </div>
                <div className="md:col-span-2">
                  {LegalConsent.text.split(LegalConsent.replace)[0]}
                  <Link href={LegalConsent.url}>
                    <a
                      className="text-blue-500 hover:text-blue-700"
                      target="_blank"
                      rel="nofollow"
                    >
                      {LegalConsent.replace}
                    </a>
                  </Link>
                  {LegalConsent.text.split(LegalConsent.replace)[1]}
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
