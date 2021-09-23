import { MailIcon, PhoneIcon } from '@heroicons/react/solid';
import axios from 'axios';
import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  apiFindDefaultPageContent,
  PageProperty,
} from '../api-functions/hero-sections';
import { Plan } from '../components/elements/Plans';
import { PageLayout } from '../components/pages/PageLayout';
import { LegalConsent } from '../global/constants';
import { useSeoStore } from '../hooks/stores/seo-store';

type SmallPlan = Pick<Plan, 'id' | 'title'>;

interface Props {
  plans: SmallPlan[];
  pageProperty?: PageProperty;
}

// Phone link (tel:+49531238540)
const encodedPhone = 'dGVsOis0OTUzMTIzODU0MA==';
// Mail link (mailto:info@fme.de)
const encodedMail = 'bWFpbHRvOmluZm9AZm1lLmRl';

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<Props>> {
  const pageContent = await apiFindDefaultPageContent('/contact');

  return {
    props: {
      plans: pageContent.plans.map((value) => ({
        id: value.id,
        title: value.title,
      })),
      pageProperty: pageContent.pageProperty,
    },
  };
}

export default function Contact({ plans, pageProperty }: Props): JSX.Element {
  const { setSeo } = useSeoStore();
  const { query, push } = useRouter();
  const [plan, setPlan] = useState<SmallPlan>();
  const [status, setStatus] = useState<'success' | 'error'>();
  const [formMessage, setFormMessage] = useState<string>();
  const { handleSubmit, register, formState } = useForm();

  useEffect(() => {
    setPlan(plans.find((value) => value.id === query.plan));
    setStatus(query.status as 'success' | 'error');
    setFormMessage(query.message as string);
  }, [query]);

  useEffect(() => {
    setSeo(
      pageProperty?.seoTitle ?? 'Contact',
      pageProperty?.seoDescription ?? 'Contact the custom Software Review Team'
    );
  }, [pageProperty]);

  const onSubmit = (data) => {
    return axios.post('/api/form', data);
  };

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
              {formState.isSubmitSuccessful ? (
                <>
                  <h2 className="lg:mt-16 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl text-center">
                    <span className="block">
                      Vielen Dank für Ihre Nachricht.
                    </span>
                    <span className="block text-red-500">
                      Wir melden uns schnellstmöglich zurück.
                    </span>
                  </h2>
                </>
              ) : formState.isSubmitted ? (
                <>
                  <h2 className="lg:mt-16 text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl text-center">
                    <span className="block">Etwas ist schiefgegangen.</span>
                    <span className="block text-red-500">
                      Es liegt ein technisches Problem vor.
                    </span>
                  </h2>
                  <p className="text-xl font-extrabold tracking-tight text-gray-900 md:text-xl text-center">
                    Bitte senden Sie uns Ihre Nachricht direkt an die angegebene
                    Mailadresse.
                  </p>
                </>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-3"
                >
                  <input
                    {...register('plan', { value: plan?.title })}
                    type="hidden"
                  />
                  <div className="col-span-1">
                    <label htmlFor="given-name" className="sr-only">
                      Vorname
                    </label>
                    <input
                      {...register('given-name', { required: true })}
                      type="text"
                      autoComplete="given-name"
                      className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                      placeholder="Vorname"
                    />
                  </div>
                  <div className="col-span-1">
                    <label htmlFor="family-name" className="sr-only">
                      Nachname
                    </label>
                    <input
                      type="text"
                      {...register('family-name', { required: true })}
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
                      {...register('organization', { required: true })}
                      type="text"
                      autoComplete="organization"
                      className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                      placeholder="Unternehmen"
                    />
                  </div>
                  <div className="col-span-2">
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      {...register('email', { required: true })}
                      type="email"
                      autoComplete="email"
                      className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                      placeholder="Email"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="message" className="sr-only">
                      Nachricht
                    </label>
                    <textarea
                      {...register('message', { required: !plan })}
                      rows={4}
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
                      disabled={formState.isSubmitting || formState.isSubmitted}
                      type="submit"
                      className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50"
                    >
                      Anfrage senden
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
