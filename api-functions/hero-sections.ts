import { IHeroSection } from '../components/elements/HeroSection';
import { apiGraphQLClient } from '../global/graphql';

export async function apiFindHeroSection(path: string): Promise<IHeroSection> {
  return await apiGraphQLClient
    .request<{
      heroSection: IHeroSection;
    }>(
      `
  query FindHeroSectionForPage {
  heroSection(where: {pageLocation: "${path}"}) {
    title subTitle
    description
    featuredImage {
      url
    }
  }
}
  `
    )
    .then((value) => value.heroSection);
}
