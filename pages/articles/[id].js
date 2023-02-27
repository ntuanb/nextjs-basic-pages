import Head from 'next/head';
import Layout from '../../components/Layout/layout';
import Card from '../../components/Card/Card';
import Date from '../../components/Date/Date';
import { getAllPostIds, getPostData } from '../../lib/posts';

export default function Article({ postData }) {
  return (
    <Layout>
       <Head>
        <title>{postData.title}</title>
      </Head>

      <Card type="info">
        <h1>{postData.title}</h1>
        <p>
          <small>
            {postData.id}
            <br />
            <Date dateString={postData.date} />
          </small>
        </p>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </Card>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}