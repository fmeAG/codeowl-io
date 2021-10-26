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
            <div className="flex">
              <Logo />
              <img
                className="h-16 ml-8"
                src="https://media.graphcms.com/s8EJuXI5QG67hILOq58X"
              ></img>
            </div>
            <p className="text-gray-500 text-base">
              Wir bewerten die Qualität Ihrer Softwarelösung und geben
              Ratschläge und Lösungsansätze zur Verbesserung.
              <br />
              Mit ♥️ aus Braunschweig.
            </p>
          </div>
        </div>
        <div className="mt-12 xl:mt-0 pb-8">
          <div className="mb-8 sm:mb-16 mt-8 col-span-2">
            <div className="border-gray-100 border-t sm:border-none">
              <ul
                role="list"
                className="mt-4 w-full flex justify-between md:px-16 flex-col sm:flex-row space-y-3 sm:space-y-0"
              >
                {footerNavigation.company.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : '_self'}
                      className="text-base text-gray-500 hover:text-gray-900"
                      rel="noreferrer"
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
