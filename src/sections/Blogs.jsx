"use client";
import React, { useEffect,useState } from 'react';
import { createClient } from "contentful";
import Head from "next/head";
import { FaArrowRight } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import Link from "next/link";




// Main Blogs Page
export default async function Blogs() {
  const [blogs, setBlogs] = useState([]);

  
// Setup Contentful client
const client = createClient({
  space: "zxs06frhu7q6",
  environment: "master",
  accessToken: "SoGASghKqG7ai65oqDIBCexqOmuJe5z7TECv_KcWnsw",
});

// Fetch blogs


  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await client.getEntries({
          content_type: "mooseChalets",
        });

        const assetMap = {};
        if (response.includes?.Asset) {
          response.includes.Asset.forEach((asset) => {
            assetMap[asset.sys.id] = asset.fields.file.url;
          });
        }

        const formattedBlogs = response.items.map((item) => {
          const fields = item?.fields;
          const sys = item?.sys;

          const thumbnailId = fields.thumbnail?.sys?.id;
          const thumbnailUrl = thumbnailId
            ? "https:" + assetMap[thumbnailId]
            : null;

          return {
            id: sys?.id,
            title: fields?.blogTitle,
            summary: fields?.cardSummary,
            body: fields?.blogbody || "",
            publishDate: fields?.publishDate,
            thumbnail: thumbnailUrl,
            category: fields?.category || "Travel",
          };
        });

        setBlogs(formattedBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    }

    fetchBlogs();
  }, []);
  

  return (
    <div id="blog" className="w-full bg-sectionBackground py-16 px-6">
      <Head>
        <title>Moose Chalets Blog</title>
      </Head>

      <div className="max-w-4xl xl:max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10">
          <div>
            <div className="flex items-center mb-4">
              <div className="h-px w-8 bg-heading mr-3"></div>
              <span className="uppercase text-sm tracking-wider font-medium text-subHeading">
                BUILDING THE FUTURE
              </span>
            </div>
            <h2 className="text-3xl font-bold text-heading">
              Latest From the <span className="text-heading">Blog</span>
            </h2>
          </div>

          
        </div>

        {/* Blog Cards */}
        {blogs.length === 0 ? (
          <p className="text-paragraph">No blog posts found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((post) => (
              <div
                key={post.id}
                className="flex flex-col h-full bg-white rounded-md shadow-sm overflow-hidden"
              >
                {/* Blog Image */}
                {post.thumbnail && (
                  <div className="h-60 overflow-hidden">
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Blog Content */}
                <div className="flex flex-col mt-4 px-4 pb-6">
                  <div className="flex items-center mb-2">
                    <span className="text-xs font-medium text-heading">
                      {post.category}
                    </span>
                    <span className="mx-2 text-gray-500">•</span>
                    <span className="text-xs text-subHeading">
                      {post.publishDate}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-heading">
                    {post.title}
                  </h3>
                  <p className="text-sm mb-4 flex-grow text-paragraph">
                    {post.summary}
                  </p>

                  {/* Markdown Body Render */}
                  {post.body ? (
                    <div className="mt-4 prose prose-headings:text-heading prose-p:text-paragraph prose-img:rounded-md prose-img:my-4 max-w-none">
                      {/* <ReactMarkdown>{post.body}</ReactMarkdown> */}
                    </div>
                  ) : (
                    <p className="text-sm text-red-500">
                      No blog content available.
                    </p>
                  )}

                  <Link
                    href={`/${post.id}`}
                    className="flex items-center text-sm font-medium text-heading mt-4"
                  >
                    READ MORE
                    <FaArrowRight className="ml-2 h-4 w-4" />
                  </Link>

                  <div className="mt-4 border-t border-gray-200 pt-1"></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
