import { WithForcedChildren } from '../../global/interfaces';
import Footer from '../elements/Footer';
import { HeroSection, IHeroSection } from '../elements/HeroSection';
import { Logo, LogoRow } from '../elements/LogoRow';
import { Navbar } from '../elements/Navbar';

type Props = WithForcedChildren<{
  heroSection?: IHeroSection;
  logoItems?: Logo[];
}>;

export function PageLayout({
  children,
  heroSection,
  logoItems,
}: Props): JSX.Element {
  return (
    <>
      <Navbar />
      <main className="pb-16 sm:pb-24 lg:pb-32">
        {(heroSection || logoItems) && (
          <section className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 pb-8 lg:pb-14 lg:overflow-hidden">
            <div className="mx-auto max-w-7xl lg:px-8 space-y-8">
              {heroSection && <HeroSection heroSection={heroSection} />}
              {logoItems && <LogoRow logos={logoItems} />}
            </div>
          </section>
        )}
        {children}
      </main>
      <Footer />
    </>
  );
}
