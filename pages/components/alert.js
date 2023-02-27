import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/Layout/layout';
import Alert from '../../components/Alert/Alert';
import utils from '../../styles/utils.module.css';
import { clsx } from 'clsx';

export default function AlertComponentPage() {
  return (
    <Layout>
      <Head>
        <title>Alert</title>
      </Head>

      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />

      <h1>Alert</h1>

      <div 
        className={clsx(
          [utils.marginBottom1]
        )}>
        <Alert type="success">Success</Alert>
      </div>
      <div 
        className={clsx(
          [utils.marginBottom1]
        )}>
        <Alert type="error">Error</Alert>
      </div>
    </Layout>
  );
}