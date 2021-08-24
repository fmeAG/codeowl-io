import { IHeroSection } from '../components/elements/HeroSection';
import { Logo } from '../components/elements/LogoRow';
import { Service } from '../components/elements/Services';
import { apiGraphQLClient } from '../global/graphql';

export async function apiFindDefaultPageContent(path: string): Promise<{
  heroSection: IHeroSection;
  logoCloudItems: Logo[];
  services: Service[];
}> {
  return await apiGraphQLClient.request(
    `
  query FindDefaultPageContent {
  heroSection(where: {pageLocation: "${path}"}) {
    title
    subTitle
    description
    featuredImage {
      url
    }
  }
  logoCloudItems(where: {pageLocation: "${path}"}) {
    id
    logo {
      url
      width
      height
    }
    title
  }
  services(where: {pageLocation: "/"}) {
    id
    title
    icon {
      url
    }
    description
  }
}
  `
  );
}
