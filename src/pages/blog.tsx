//https://zenn.dev/elletech/articles/nextjs_microcms
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { client } from 'libs/client';
import type { Blog, Tag } from 'types/blog';

export const getStaticProps = async () => {
  const blog = await client.get({
    endpoint: 'blog',
  });
  const tag = await client.get({
    endpoint: 'tag',
  });
  return {
    props: {
      blogs: blog.contents,
      tags: tag.contents,
    },
  };
};

type Props = {
  blogs: Array<Blog>;
  tags: Array<Tag>;
};

export default function Test({ blogs, tags }: Props) {
  // getStaticPropsで取得したtagsからtag名のみ抜き出す
  const [showBlogs, setShowBlogs] = useState(blogs);
  const tagList = tags.map((tag) => tag.tag);
  const selectTag = (tag: string) => {
    if (tag === 'all') {
      setShowBlogs(blogs);
    } else {
      const selectBlogs = blogs.filter((blog) => {
        const haveTags = blog.tags?.map((tag) => tag.tag);
        return haveTags?.includes(tag);
      });
      setShowBlogs(selectBlogs);
    }
    console.log(showBlogs);
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Head>
        <title>BLOG</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-green-300 via-blue-500 to-purple-600">
        <h1 className="container mx-auto px-10 pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 ">
          記事一覧
        </h1>
        {/* ↓↓ タグ絞り込みリスト */}
        <div>
          <button
            className="btn btn-outline btn-error btn-sm"
            onClick={() => selectTag('all')}
          >
            #ALL
          </button>
          {tagList.map((tag) => (
            <button
              key={tag}
              className="btn btn-outline btn-error btn-sm"
              onClick={() => selectTag(tag)}
            >
              #{tag}
            </button>
          ))}
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
            {showBlogs.map((blog) => (
              <div
                key={blog.id}
                className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm"
              >
                <Image
                  src={blog.image.url}
                  className="object-cover w-full h-64"
                  alt="Image"
                  width="1200"
                  height="630"
                />
                <div className="p-5 border border-t-0">
                  <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <span className="text-gray-600">- {blog.updatedAt} -</span>
                  </p>
                  <p className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700">
                    {blog.title}
                  </p>
                  <p className="mb-2 text-gray-700">
                    Sed ut perspiciatis unde omnis iste natus error sit sed quia
                    consequuntur magni.
                  </p>
                  {blog.tags?.map((tag) => (
                    <button
                      key={tag.id}
                      className="btn btn-outline btn-xs inline-flex  font-semibold m-1"
                    >
                      #{tag.tag}
                    </button>
                  ))}
                  <Link href={`/blog/${blog.id}`}>
                    <a className="block text-right font-black duration-200">
                      Read more
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
