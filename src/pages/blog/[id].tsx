import { load } from 'cheerio';
// import Cheerio from 'cheerio';
import hljs from 'highlight.js';
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import Head from 'next/head';
import Image from 'next/image';
import { client } from 'libs/client';
import type { Blog } from 'types/blog';
// https://highlightjs.org/static/demo/ CSSリスト
import 'highlight.js/styles/felipec.css';

type Props = {
  blog: Blog;
  body: string;
};

const BlogId: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  blog,
  body,
}: Props) => {
  // export default function BlogId({ blog }: Props) {
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
            dangerouslySetInnerHTML={{ __html: `${body}` }}
          />
        </div>
      </div>
    </>
  );
};

export default BlogId;

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const data = await client.get({ endpoint: 'blog' });

  const paths = data.contents.map((content: Blog) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context,
) => {
  const id = context.params?.id;
  const data = await client.get({ endpoint: 'blog', contentId: id });
  // highlight.js cheerio
  // const $ = Cheerio.load(data.body);
  const $ = load(data.body);
  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass('hljs');
  });

  return {
    props: {
      blog: data,
      body: $.html(),
    },
  };
};
