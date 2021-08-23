import { AppProps } from 'next/app';
import { Navbar } from '../components/elements/Navbar';
import { PageHead } from '../components/elements/PageHead';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <PageHead />
      <div className="bg-white relative overflow-hidden">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
