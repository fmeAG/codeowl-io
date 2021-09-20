import Image from 'next/image';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { classNames } from '../../utils/classnames';
import { SectionTitle } from '../components/SectionTitle';

export interface Service {
  id: string;
  title: string;
  icon: { url: string };
  description: string;
}

interface Props {
  services: Service[];
}

export default function Services({ services }: Props): JSX.Element {
  return (
    <section
      id="services"
      className="relative bg-white pt-16 sm:pt-24 lg:pt-32"
    >
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <SectionTitle
          h2="Leistungsbausteine"
          subTitle="für Software Reviews"
          desription="Um das Review Ihrer Software perfekt auf Ihre Bedürfnisse zugeschnitten
        anbieten zu können, bieten wir Ihnen folgende Bausteine zur Wahl an"
        />
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.id} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-red-500 rounded-md shadow-lg">
                        <div
                          className="h-6 w-6 relative text-white"
                          aria-hidden="true"
                        >
                          <Image src={service.icon.url} layout="fill" />
                        </div>
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="mt-5 text-base text-gray-500 text-left">
                      <ReactMarkdown
                        className="space-y-2"
                        components={{
                          ul: (props) => {
                            return (
                              <ul
                                className={classNames(
                                  props.className,
                                  'list-disc pl-5'
                                )}
                                {...props}
                              />
                            );
                          },
                          ol: (props) => {
                            return (
                              <ol
                                className={classNames(
                                  props.className,
                                  'pl-6 list-decimal'
                                )}
                                {...props}
                              />
                            );
                          },
                        }}
                      >
                        {service.description}
                      </ReactMarkdown>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
