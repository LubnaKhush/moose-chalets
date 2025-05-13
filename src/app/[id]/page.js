
import { createClient } from 'contentful';
import React from 'react';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import '../globals.css';
import { formatDistanceToNow } from 'date-fns';
import { ChevronLeft, Calendar, Clock, Share2 } from 'lucide-react';
import Link from 'next/link';
import { headers } from 'next/headers'
import ShareButton from '@/components/ShareBlog';



// 1. Setup Contentful Client
const client = createClient({
  space: 'zxs06frhu7q6',
  environment: 'master',
  accessToken: 'SoGASghKqG7ai65oqDIBCexqOmuJe5z7TECv_KcWnsw',
});

// 2. Fetch Blog by ID
async function fetchBlogById(id) {
  try {
    


    const response = await client.getEntry(id, { include: 2 });
    const fields = response.fields;
    const thumbnailUrl = fields.thumbnail?.fields?.file?.url
      ? 'https:' + fields.thumbnail.fields.file.url
      : '';
    
    return {
      id: response.sys.id,
      title: fields.blogTitle,
      summary: fields.cardSummary,
      publishDate: fields.publishDate,
      body: fields.blogbody,
      thumbnail: thumbnailUrl,
      readTime: calculateReadTime(fields.blogbody),
    };
  } catch (error) {
    console.error('Error fetching blog:', error);
    return null;
  }
}

// Fetch related blogs (2 max, excluding current blog)
// Fetch related blogs (2 max, excluding current blog)
async function fetchRelatedBlogs(currentBlogId) {
  try {
    const response = await client.getEntries({
      // The content type needs to match your actual Contentful content type ID
      content_type: 'mooseChalets', // Replace 'blogPost' with your actual content type ID
      limit: 3, // Fetch 3 to ensure we get at least 2 after exclusion
      order: '-sys.createdAt', // Get most recent blogs
    });
    
    // Filter out the current blog
    const relatedBlogs = response.items
      .filter(blog => blog.sys.id !== currentBlogId)
      .slice(0, 2) // Limit to 2 blogs
      .map(blog => {
        const fields = blog.fields;
        const thumbnailUrl = fields.thumbnail?.fields?.file?.url
          ? 'https:' + fields.thumbnail.fields.file.url
          : '';
          
        return {
          id: blog.sys.id,
          title: fields.blogTitle,
          summary: fields.cardSummary || '',
          publishDate: fields.publishDate,
          thumbnail: thumbnailUrl,
        };
      });
      
    return relatedBlogs;
  } catch (error) {
    console.error('Error fetching related blogs:', error);
    return [];
  }
}

// Helper function to calculate read time
function calculateReadTime(content) {
  const wordsPerMinute = 200;
  const wordCount = content?.split(/\s+/)?.length || 0;
  const readTime = Math.ceil(wordCount / wordsPerMinute);
  return readTime === 0 ? 1 : readTime;
}

// 3. Main Blog Page Component
export default async function SingleBlogPage({ params }) {
  const { id } = params;
  const blog = await fetchBlogById(id);
  
  if (!blog) return notFound();
  
  // Fetch related blogs
  const relatedBlogs = await fetchRelatedBlogs(id);
  
  const formattedDate = blog.publishDate ? new Date(blog.publishDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }) : 'Publication date unavailable';

  return (
    <main className="bg-gray-50 min-h-screen pb-16 pt-8">
      {/* Hero Section with Featured Image */}
      <div 
        className="w-full h-96 relative bg-gradient-to-b from-gray-900/70 to-gray-900/90 bg-blend-multiply"
        style={{
          backgroundImage: `url(${blog.thumbnail})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-end pb-8">
          <div className="mb-6">
            <Link href="/" className="inline-flex items-center text-white hover:text-green-400 transition-colors">
              <ChevronLeft className="w-5 h-5 mr-1" />
              <span>Back to Blogs</span>
            </Link>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-4xl">
            {blog.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-5 text-gray-200">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{formattedDate}</span>
            </div>
            
            <div className="flex items-center">
              <Clock className="w-4 text-black py-16 h-4 mr-2" />
              <span>{blog.readTime} min read</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Blog Content Section */}
      <div className="max-w-4xl mx-auto px-6 relative -mt-20">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          {/* Optional secondary featured image if needed */}
          {blog.thumbnail && (
            <div className="w-full h-64 md:h-80 relative hidden">
              <Image
                src={blog.thumbnail}
                alt={blog.title}
                layout="fill"
                objectFit="cover"
                className="w-full"
                priority
              />
            </div>
          )}
          
          {/* Blog Content */}
          <div className="p-6 md:p-10">
            {/* Summary/Intro */}
            {blog.summary && (
              <div className="mb-8 italic text-lg text-gray-600 border-l-4 border-green-500 pl-4">
                {blog.summary}
              </div>
            )}
            
            {/* Social Share */}
            <div className="flex justify-end mb-8">
              <button className="flex items-center text-sm text-gray-500 hover:text-green-600 transition-colors">
      < ShareButton />
             
              </button>
            </div>
            
            {/* Main Content */}
            <div className="prose max-w-none prose-green prose-lg">
              <ReactMarkdown
                components={{
                  h1: ({ node, ...props }) => (
                    <h1 className="text-3xl font-bold mt-12 mb-6 text-gray-800" {...props} />
                  ),
                  h2: ({ node, ...props }) => (
                    <h2 className="text-2xl font-semibold mt-10 mb-5 text-gray-800" {...props} />
                  ),
                  h3: ({ node, ...props }) => (
                    <h3 className="text-xl font-medium mt-8 mb-4 text-gray-700" {...props} />
                  ),
                  p: ({ node, ...props }) => (
                    <div className="my-6 text-gray-700 leading-relaxed" {...props} />
                  ),
                  ul: ({ node, ...props }) => (
                    <ul className="my-6 list-disc pl-6 text-gray-700" {...props} />
                  ),
                  ol: ({ node, ...props }) => (
                    <ol className="my-6 list-decimal pl-6 text-gray-700" {...props} />
                  ),
                  li: ({ node, ...props }) => (
                    <li className="mb-2" {...props} />
                  ),
                  blockquote: ({ node, ...props }) => (
                    <blockquote className="border-l-4 border-green-500 pl-4 py-1 my-6 italic text-gray-600" {...props} />
                  ),
                  img: ({ node, ...props }) => (
                    <figure className="my-8">
                      <div className="relative rounded-lg overflow-hidden shadow-lg">
                        <img
                          {...props}
                          className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-102"
                          alt={props.alt || 'Blog image'}
                        />
                      </div>
                      {props.alt && <figcaption className="text-center text-sm text-gray-500 mt-2">{props.alt}</figcaption>}
                    </figure>
                  ),
                  a: ({ node, ...props }) => (
                    <a className="text-green-600 hover:text-green-800 underline" {...props} />
                  ),
                  code: ({ node, ...props }) => (
                    <code className="bg-gray-100 rounded-md px-2 py-1 text-sm font-mono" {...props} />
                  ),
                  pre: ({ node, ...props }) => (
                    <pre className="bg-gray-800 text-gray-100 rounded-lg p-4 overflow-x-auto my-6" {...props} />
                  ),
                }}
              >
                {blog.body}
              </ReactMarkdown>
            </div>
            
            {/* Author Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xl mr-4">
                  MC
                </div>
                <div>
                  <h3 className="font-bold text-lg">Moose Chalets</h3>
                  <p className="text-gray-600">Experience the beauty of Hunza with our luxury mountain chalets.</p>
                </div>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="mt-10 bg-green-50 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Ready for your mountain escape?</h3>
              <p className="text-gray-600 mb-4">Book your stay at Moose Chalets for an unforgettable experience in Hunza.</p>
              <Link href="/booking" className="inline-block bg-green-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
                Book Your Stay Now
              </Link>
            </div>
          </div>
        </div>
        
        {/* Related Articles */}
        {relatedBlogs.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">You might also enjoy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedBlogs.map(relatedBlog => (
                <Link href={`/${relatedBlog.id}`} key={relatedBlog.id} className="block group">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="h-48 relative">
                      {relatedBlog.thumbnail ? (
                        <Image
                          src={relatedBlog.thumbnail}
                          alt={relatedBlog.title}
                          layout="fill"
                          objectFit="cover"
                          className="group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-400">No image available</span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold group-hover:text-green-600 transition-colors">{relatedBlog.title}</h3>
                      <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                        {relatedBlog.summary || "Discover more about Moose Chalets and the beautiful Hunza valley..."}
                      </p>
                      <div className="mt-3 text-green-600 text-sm font-medium">Read more</div>
                    </div>
                  </div>
                </Link>
              ))}
              
              {/* Show placeholder if there's only one related blog */}
              {relatedBlogs.length === 1 && (
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 bg-green-50 flex items-center justify-center">
                    <div className="text-center px-4">
                      <h3 className="font-semibold text-gray-700">Explore Moose Chalets</h3>
                      <p className="text-gray-600 text-sm mt-2">Discover our premium accommodations and services</p>
                      <Link href="/" className="inline-block mt-3 text-green-600 text-sm font-medium">
                        Learn more
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}