import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/Layout/layout';
import Card from '../../components/Card/Card';
import utils from '../../styles/utils.module.css';
import { clsx } from 'clsx';

export default function CardComponentPage() {
  return (
    <Layout>
      <Head>
        <title>Card</title>
      </Head>

      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />

      <h1>Card</h1>

      <div 
        className={clsx(
          [utils.marginBottom1]
        )}>
        <Card type="info">Info</Card>
      </div>
      <div 
        className={clsx(
          [utils.marginBottom1]
        )}>
        <Card type="pop">Pop</Card>
      </div>
    </Layout>
  );
}