import Post from "../../assests/images/mainImage.svg";




import React from 'react';

const BlogPostHeader = () => {
  return (
    <article className="relative">
      {/* Category Tags */}
      <div className="absolute top-4 left-4 z-10 flex gap-2">
        <span className="bg-white/30 backdrop-blur-sm text-white px-4 py-1 rounded">
          Aenean Eleifend
        </span>
        <span className="bg-white/30 backdrop-blur-sm text-white px-4 py-1 rounded">
          Aenean Eleifend
        </span>
        <span className="bg-white/30 backdrop-blur-sm text-white px-4 py-1 rounded">
          Aliquam
        </span>
      </div>

      {/* Main Image Container with Text Overlay */}
      <div className="relative w-full h-[600px] rounded-lg overflow-hidden">
      <img src={Post} alt="seo ranking" className="w-full h-full object-cover" />

        
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Text Content */}
        <div className="absolute bottom-12 left-12 right-12 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            5 EFFICIENT RULES HOW TO ORGANIZE
            <br />
            YOUR WORKING PLACE
          </h1>

          <p className="text-xl md:text-2xl mb-6">
            Relationship tips couples therapists are giving all the time
          </p>

          {/* Author and Meta Info */}
          <div className="flex items-center gap-4 text-sm">
            <span>by Joanna Wellick</span>
            <span className="w-1 h-1 bg-white rounded-full"></span>
            <span>2 minute read</span>
            <span className="w-1 h-1 bg-white rounded-full"></span>
            <span>1.2k views</span>
            <span className="w-1 h-1 bg-white rounded-full"></span>
            <span>1.2k shares</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogPostHeader;