import { AppProps } from 'next/app';
import GoogleTagManager from '../components/components/GoogleTagManager';
import { PageHead } from '../components/elements/PageHead';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <PageHead />
      <div className="bg-white relative overflow-hidden">
        <GoogleTagManager>
          <Component {...pageProps} />
        </GoogleTagManager>
      </div>
    </>
  );
}

export default MyApp;
