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
      revalidate: 10,
    },
  };
};

type Props = {
  blogs: Array<Blog>;
  tags: Array<Tag>;
};

export default function BlogCopy({ blogs, tags }: Props) {
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
  console.log(blogs)
  return (
    <>
      <Head>
        <title>BLOG</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* 新しいスタイル */}
      <div className="bg-base-200 py-4 w-full">
        <div className="md:mx-auto mx-2 flex flex-col md:flex-row bg-base-200 max-w-7xl">
          <div className="md:m-auto flex-col md:flex">
            {/* blog card */}
            <div className="px-3 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
              <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                {showBlogs.map((blog) => (
                  <div
                    key={blog.id}
                    className="overflow-hidden bg-white rounded shadow-sm min-w-min relative"
                  >
                    <Image
                      src={blog.image.url}
                      className="object-cover w-full h-64"
                      alt="Image"
                      width="1200"
                      height="630"
                    />
                    {/* blogcardの詳細 */}
                    <div className="p-5">
                      <p className="mb-3 text-xs font-semibold tracking-wide">
                        <span className="text-gray-600">
                          - {blog.updatedAt} -
                        </span>
                      </p>
                      <Link href={`/blog/${blog.id}`}>
                        <a className="text-2xl font-bold leading-7 duration-200">
                          {blog.title}
                        </a>
                      </Link>
                      <div className="my-3">
                        {blog.tags?.map((tag) => (
                          <button
                            key={tag.id}
                            className="btn btn-outline btn-xs inline-flex  font-semibold m-1"
                          >
                            #{tag.tag}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="absolute bottom-0 right-0">
                      <Link href={`/blog/${blog.id}`}>
                        <a className="m-4 block text-right font-black">
                          Read more
                        </a>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* 右サイドのコンテンツ */}
          <div className="">
            <div className="border-gray-900 border my-5 m-auto max-w-xs md:m-4">
              <div className="my-3 text-center">
                <Image
                  src="https://raw.githubusercontent.com/449sabu/CardanoSP/main/c.png"
                  alt="a"
                  width="150"
                  height="150"
                  className="rounded-full"
                />
              </div>
              <p className="text-center text-xl font-black">Yoshiki</p>
              <p className="text-center my-1">Pool Operator / Developer</p>
              <p className="text-center mx-6 my-7">
                2020年10月12日より、CIEL Stake
                Poolを運営。日本でのCardanoの活用を促進するため、Next.jsを使用したdApp開発を勉強し発信しています。
              </p>
            </div>
            <div className="border m-auto p-4 max-w-xs md:m-4 my-5">
              {/* search */}
              <div className="form-control my-3">
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Search…"
                    className="input input-bordered"
                  />
                  <button className="btn btn-square bg-slate-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              {/* tag */}
              <button
                className="btn bg-gray-200 text-gray-900 btn-sm m-1"
                onClick={() => selectTag('all')}
              >
                #ALL
              </button>
              {tagList.map((tag) => (
                <button
                  key={tag}
                  className="btn bg-gray-200 text-gray-900 btn-sm m-1"
                  onClick={() => selectTag(tag)}
                >
                  #{tag}
                </button>
              ))}
              {/* tag-end */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
