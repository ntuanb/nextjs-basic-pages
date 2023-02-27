import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/Layout/layout';
import Card from '../components/Card/Card';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      
      <section className={utilStyles.headingMd}>
        <h2 className={utilStyles.headingLg}>Design System</h2>
        <p><small>This is using pages</small></p>
        <ul>
          <li><Link href="/components/alert">Alert</Link></li>
          <li><Link href="/components/button">Button</Link></li>
          <li><Link href="/components/card">Card</Link></li>
          <li><Link href="/components/date">Date</Link></li>
        </ul>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <p><small>This is using SSG</small></p>
        <div>
          {allPostsData.map(({ id, date, title }) => (
            <Card type="pop" key={id} className={utilStyles.marginBottom1}>
              {title}
              <br />
              <small>{id}</small>
              <br />
              <small><strong>{date}</strong></small>
            </Card>
          ))}
        </div>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Articles</h2>
        <p><small>This is using dynamic routes</small></p>
        <div>
          <li><Link href="/articles/pre-rendering">Pre-Rendering</Link></li>
          <li><Link href="/articles/ssg-ssr">SSG SSR</Link></li>
        </div>
      </section>
    </Layout>
  );
}

// SSG
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

// SSR
// export async function getServerSideProps(context) {
//   return {
//     props: {
//     },
//   };
// }