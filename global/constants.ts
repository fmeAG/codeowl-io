export const isDev =
  process.env.NODE_ENV === 'development' ||
  process.env.VERCEL_ENV === 'development';

export const isPreview = process.env.VERCEL_ENV === 'preview';
export const isProduction = process.env.VERCEL_ENV === 'production';

export const LegalConsent = {
  text: 'Durch Senden dieses Formulars, erklären Sie sich ausdrücklich damit einverstanden, dass die fme AG Ihre übermittelten Daten zum Zweck der Abwicklung Ihrer Anfrage verarbeiten darf. Ebenso bestätigen Sie, unsere Datenschutzgrundsätze gelesen und verstanden zu haben.',
  replace: 'Datenschutzgrundsätze',
  url: 'https://www.fme.de/dat/datenschutzbestimmung/',
};
