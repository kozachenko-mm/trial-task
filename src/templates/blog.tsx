import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { TypePost } from '../types';
import ReactMarkdown from 'react-markdown';

type BlogData = {
  graphCmsPost: TypePost;
};

const Blog = ({ data }: PageProps<BlogData>) => {
  const post = data.graphCmsPost;
  return (
    <section>
      <div
        className="pt-20 pb-40 bg-cover bg-center "
        style={{ backgroundImage: `url(${post.image.url})` }}>
        <p className="mx-auto uppercase text-white text-2xl px-3 py-1 mb-40 border border-white max-w-max font-semibold font-sans tracking-widest">
          ltljrnl
        </p>
        <h2 className=" max-w-5xl mx-auto  text-gray-100 text-6xl text-center font-semibold font-cursive italic">
          {post.title}
        </h2>
      </div>
      <div className=" relative top-44 text-gray-400 text-lg flex justify-center gap-8 ">
        <p className=" relative before:w-2 before:h-2 before:bg-gray-400 before:absolute before:content-[''] before:rounded before:top-1/2 before:-right-4 before:translate-x-1/2 before:-translate-y-1/2">
          {new Date(post.updatedAt).toLocaleString('en-US', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
          })}
        </p>
        <p>{post.createdBy.name}</p>
      </div>
      <div className="wrapper">
        <div className="cms-content">
          <ReactMarkdown>{post.body}</ReactMarkdown>
        </div>
        <div className="border-solid border border-mainGray flex uppercase text-center mt-16">
          <p className="border-r  border-mainGray grow py-3">shared:</p>
          <a
            className="border-r  border-mainGray grow py-3 hover:bg-tomato hover:text-white"
            href="#">
            twitter
          </a>
          <a
            className="border-r  border-mainGray grow py-3 hover:bg-tomato hover:text-white"
            href="#">
            facebook
          </a>
          <a className="grow py-3 hover:bg-tomato hover:text-white" href="#">
            google+
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;

export const postQuery = graphql`
  query ($slug: String!) {
    graphCmsPost(slug: { eq: $slug }) {
      title
      body
      updatedAt
      createdBy {
        name
      }
      image {
        url
      }
    }
  }
`;
