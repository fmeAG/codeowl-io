import { AppProps } from 'next/app';
import { PageHead } from '../components/elements/PageHead';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <PageHead />
      <div className="bg-white relative overflow-hidden">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
