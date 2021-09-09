import { Logo } from './Logo';

const footerNavigation = {
  company: [
    { name: 'Über uns', href: 'https://www.fme.de/ueber-uns/' },
    { name: 'Blog', href: 'https://content.fme.de/blog' },
    { name: 'Karriere', href: 'https://fme-karriere.de' },
    { name: 'Partner', href: 'https://www.fme.de/ueber-uns/#s-partner' },
    { name: 'Impressum', href: 'https://www.fme.de/impressum/' },
  ],
};

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-gray-50" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-md mx-auto pt-12 px-4 sm:max-w-7xl sm:px-6 lg:pt-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-2">
            <Logo colorClass={'text-black-500'} />
            <p className="text-gray-500 text-base">
              Wir bewerten die Qualität Ihrer Softwarelösung und geben
              Ratschläge und Lösungsansätze zur Verbesserung.
              <br />
              Mit ♥️ aus Braunschweig.
            </p>
          </div>
        </div>
        <div className="mt-12 xl:mt-0 pb-8">
          <div className="mb-16 mt-8 col-span-2">
            <div>
              <ul
                role="list"
                className="mt-4 w-full flex justify-between px-16"
              >
                {footerNavigation.company.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 col-span-2">
            <p className="text-base text-gray-600 xl:text-center">
              &copy; {new Date().getUTCFullYear()} fme AG
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

//TODO: Anpassungen aus Marketing-JF
/*
  - powered by fme neben Logo
  - Brand name (entweder Rapid erklären/aufzeigen oder sonst ändern - Software Rapid review? #Ideensammlung dafür
 */
