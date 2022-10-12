import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { client } from 'libs/client';
import type { Blog } from 'types/blog';

type Props = {
  blog: Blog;
};

export default function BlogId({ blog }: Props) {
  console.log(blog);
  return (
    <>
      <Head>
        <title>CIEL Epochal Blog</title>
        <meta property="og:type" content="article" />
        <meta property="og:title" content="CIEL Epochal Blog" />
        <meta property="og:description" content={`${blog.title}`} />
        <meta property="og:image" content={blog.image.url} />
        <meta name="twitter:site" content="@CIEL_Stake_Pool" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="lg:px-10 lg:py-6 mx-auto">
        <div className="max-w-6xl px-10 py-6 mx-auto">
          <Image
            className="object-cover w-full shadow-sm h-full"
            src={blog.image.url}
            alt="Sunset in the mountains"
            width="600"
            height="315"
          />
          <div className="mt-4">
            <div className="sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-blue-500">
              {blog.title}
            </div>
          </div>
          <div
            className="prose sm:prose lg:prose-lg xl:prose-xl"
            dangerouslySetInnerHTML={{ __html: `${blog.body}` }}
          />
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id;
  const idExceptArray = id instanceof Array ? id[0] : id;
  const data = await client.get({
    endpoint: 'blog',
    contentId: idExceptArray,
  });

  return {
    props: {
      blog: data,
    },
  };
};
