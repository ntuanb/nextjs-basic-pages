import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/Layout/layout';
import Date from '../../components/Date/Date';
import utils from '../../styles/utils.module.css';
import { clsx } from 'clsx';

export default function DateComponentPage() {
  return (
    <Layout>
      <Head>
        <title>Date</title>
      </Head>

      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />

      <h1>Date</h1>

      <div 
        className={clsx(
          [utils.marginBottom1]
        )}>
        2120-01-01 - <Date dateString="2120-01-01"></Date>
      </div>
    </Layout>
  );
}