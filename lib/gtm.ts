export const GTM_ID = process.env.GOOGLE_TAG_MANAGER_ID;

declare global {
    interface Window {
        dataLayer:any;
    }
}

export const pageview = (url) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  });
};
