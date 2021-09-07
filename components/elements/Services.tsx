import Image from 'next/image';

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
      className="relative bg-white py-16 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-base font-semibold tracking-wider text-red-600 uppercase">
          Leistungsbausteine
        </h2>
        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          für Software Reviews
        </p>
        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
          Um das Review Ihrer Software perfekt auf Ihre Bedürfnisse
          zugeschnitten anbieten zu können, bieten wir Ihnen folgende Bausteine
          zur Wahl an
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.id} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
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
                    <p className="mt-5 text-base text-gray-500">
                      {service.description}
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
