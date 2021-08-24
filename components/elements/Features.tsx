/* This example requires Tailwind CSS v2.0+ */
import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon
} from "@heroicons/react/outline";

const features = [
  { name: 'Review your Architecture', icon: CloudUploadIcon },
  { name: 'Review your Software', icon: LockClosedIcon },
  { name: 'Review your CI/CD Platform', icon: RefreshIcon },
  { name: 'Improve your workflows', icon: ShieldCheckIcon },
  { name: 'Improve your work', icon: CogIcon },
  { name: 'Strengthen your team', icon: ServerIcon },
];

export default function Features(): JSX.Element {
  return (
    <section className="relative bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-base font-semibold tracking-wider text-indigo-600 uppercase">
          Our services
        </h2>
        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          What we offer
        </p>
        <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
          Here comes some text about what we do and why you can read it here.
          Rest ist Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illa
          videamus, quae a te de amicitia dicta sunt.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <feature.icon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {feature.name}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      Ac tincidunt sapien vehicula erat auctor pellentesque
                      rhoncus. Et magna sit morbi lobortis.
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
