import React from "react";
import Wrapper from "../../components/wrapper";
import Head from "next/head";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
function Blog() {
  const blogDummies = [
    {
      id: 1,
      category: "Design",
      title: "lorem",
      desc: "How do you create compelling presentations that wow your colleagues and impress your managers?",
      author: "loremita",
      createdAt: "kapan coba yah bingung",
      src: "/static/blog/placeholder (1).png"
    },
    {
      id: 2,
      category: "Design",
      title: "lorem",
      desc: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
      author: "loremita",
      createdAt: "kapan coba yah bingung",
      src: "/static/blog/placeholder (2).png"
    },
    {
      id: 3,
      category: "Design",
      title: "lorem",
      desc: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      author: "loremita",
      createdAt: "kapan coba yah bingung",
      src: "/static/blog/placeholder (3).png"
    },
    {
      id: 4,
      category: "Design",
      title: "lorem",
      desc: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      author: "loremita",
      createdAt: "kapan coba yah bingung",
      src: "/static/blog/placeholder (4).png"
    },
    {
      id: 5,
      category: "Design",
      title: "lorem",
      desc: "Mental models are simple expressions of complex processes or relationships.",
      author: "loremita",
      createdAt: "kapan coba yah bingung",
      src: "/static/blog/placeholder (5).png"
    },
    {
      id: 6,
      category: "Design",
      title: "lorem",
      desc: "Starting a community doesn’t need to be complicated, but how do you get started?",
      author: "loremita",
      createdAt: "kapan coba yah bingung",
      src: "/static/blog/placeholder (6).png"
    },
    {
      id: 7,
      category: "Design",
      title: "lorem",
      desc: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
      author: "loremita",
      createdAt: "kapan coba yah bingung",
      src: "/static/blog/placeholder (7).png"
    },
    {
      id: 8,
      category: "Design",
      title: "lorem",
      desc: "Collaboration can make our teams stronger, and our individual designs better.",
      author: "loremita",
      createdAt: "kapan coba yah bingung",
      src: "/static/blog/placeholder (8).png"
    },
    {
      id: 9,
      category: "Design",
      title: "lorem",
      desc: "JavaScript frameworks make development easy with extensive features and functionalities.",
      author: "loremita",
      createdAt: "kapan coba yah bingung",
      src: "/static/blog/placeholder (9).png"
    },
  ];
  return (
    <>
      <Head>
        <title>Raon Studio</title>
        <link rel="icon" href="/logos/raon-logo.png" />
      </Head>
      <Wrapper>
        <section className="flex flex-col space-y-2">
          <div className="bg-[#f9f5ff] mx-auto px-2 py-1 rounded-full">
            <p className="text-[#EE7526]">OUR BLOG</p>
          </div>
          <h1 className="text-4xl font-bold text-center">
            Resources and Insights
          </h1>
          <p className="text-center text-gray-500 w-3/4 mx-auto">
            The latest insight about art, illustration, and design for your
            daily brain breakfast
          </p>
        </section>
        <section className="my-12">
          <div className="my-16 flex flex-row justify-left items-center border border-gray-500 rounded-lg mx-auto w-2/4 lg:w-1/4 p-2">
            <SearchIcon className="text-gray-500" />
            <input
              placeholder="Search"
              type="text"
              className="focus:border-none w-full"
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-8 w-3/4 mx-auto">
            {blogDummies.map((item)=> 
            <div className="p-4 shadow-2xl flex flex-col" key={item.id}>
              <div className="mx-auto p-4">
              <Image alt="" src={item.src} width={400} height={320} priority={item.id < 4 ? true : false }/>
              </div>
              <div>
                <h1 className="text-[#6941C6] px-4">{item.category}</h1>
                <div className="px-4 flex flex-row justify-between hover:bg-gray-100 hover:font-semibold transition duration-200">
                <p>{item.title} {item.id}</p>
                  <ArrowOutwardIcon/>
                </div>
                <p className="text-[#667085] px-4 text-xs">{item.desc}</p>
              </div>
            </div>
            )}
          </div>
        </section>
      </Wrapper>
    </>
  );
}

export default Blog;
