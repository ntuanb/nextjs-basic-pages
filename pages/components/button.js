import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/Layout/layout';
import Button from '../../components/Button/Button';
import utils from '../../styles/utils.module.css';
import { clsx } from 'clsx';

export default function ButtonComponentPage() {
  return (
    <Layout>
      <Head>
        <title>Button</title>
      </Head>

      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />

      <h1>Button</h1>

      <div 
        className={clsx(
          [utils.marginBottom1]
        )}>
        <Button type="success">Success</Button>
      </div>
      <div 
        className={clsx(
          [utils.marginBottom1]
        )}>
        <Button type="error">Error</Button>
      </div>
    </Layout>
  );
}