import { CheckIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import React from 'react';
import { classNames } from '../../utils/classnames';
import { SectionTitle } from '../components/SectionTitle';

export interface Plan {
  id: string;
  featured: boolean;
  title: string;
  consultantCount: number;
  ptCount: number;
  bulletPoints: string[];
  description: string;
}

interface Props {
  plans: Plan[];
}

export function Plans({ plans }: Props): JSX.Element {
  return (
    <div
      id="plans"
      className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl pt-16 sm:pt-24 lg:pt-32"
    >
      <SectionTitle
        h2="Leistungspakete"
        subTitle="Review as a Package (RaaP)"
        desription={
          <>
            <span className="block">
              Alle nachfolgenden Pakete enthalten die oben genannten
              Leistungsbausteine.
            </span>
            <span className="block">
              Die Paketgrößen richten sich nach Komplexität der Use Cases und
              Software.
            </span>
            <span className="block">
              Wir entscheiden zusammen in einem Vorgespräch, welches Paket passt
              und berücksichtigen auch gerne individuelle Wünsche.
            </span>
          </>
        }
      />
      <div
        className={`mt-24 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-${Math.min(
          plans.length,
          4
        )} lg:gap-x-8 lg:gap-y-8`}
      >
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={classNames(
              'relative p-8 bg-white border rounded-2xl shadow-sm flex flex-col',
              plan.featured ? 'border-primary' : 'border-gray-200'
            )}
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">
                {plan.title}
              </h3>
              {plan.featured ? (
                <p className="absolute top-0 py-1.5 px-4 bg-gradient-to-br from-primary to-secondary rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2">
                  Am beliebtesten
                </p>
              ) : null}
              <div className="mt-4 flex justify-between text-gray-900">
                <p className="flex items-baseline">
                  <span className="text-5xl font-extrabold tracking-tight">
                    {plan.consultantCount}
                  </span>
                  <span className="ml-1 text-xl font-semibold">
                    Consultants
                  </span>
                </p>
                <p className="flex items-baseline">
                  <span className="text-5xl font-extrabold tracking-tight">
                    {plan.ptCount}
                  </span>
                  <span className="ml-1 text-xl font-semibold">PT</span>
                </p>
              </div>
              <p className="mt-6 text-gray-500">{plan.description}</p>

              {plan.bulletPoints?.length > 0 && (
                <ul role="list" className="mt-6 space-y-6">
                  {plan.bulletPoints.map((item) => (
                    <li key={item} className="flex">
                      <CheckIcon
                        className="flex-shrink-0 w-6 h-6 text-red-500"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-gray-500">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <Link href={`/contact?plan=${plan.id}`}>
              <a
                className={classNames(
                  plan.featured
                    ? 'bg-gradient-to-br from-primary to-secondary text-white hover:bg-primary-dark'
                    : 'bg-red-50 text-primary-dark hover:bg-red-100',
                  plan.bulletPoints?.length ? 'mt-8' : 'mt-4',
                  'block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium'
                )}
              >
                Anfragen
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
