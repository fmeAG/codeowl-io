import { WithForcedChildren } from '../../global/interfaces';
import { useSeoStore } from '../../hooks/stores/seo-store';
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
  const { title } = useSeoStore();

  return (
    <>
      <Navbar />
      <main>
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
