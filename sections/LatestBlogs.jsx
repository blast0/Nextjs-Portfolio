import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsPenFill } from "react-icons/bs";

import { BlogsData } from "@/constants";
import AnimatedButton from "@/components/buttons/AnimatedButton";

const LatestBlogs = () => {
  return (
    <Fragment>
      <section id="blogs" className="pt-[60px] mt-[-60px]">
        <div
          className={"py-8 pt-4 shadow-zinc-300 dark:shadow-zinc-700 shadow-sm"}
        >
          <h3 className="text-3xl font-bold text-centersk pb-8 flex justify-center items-center gap-3">
            <span className="mr-3">
              <BsPenFill />
            </span>
            Blogs
          </h3>
          <div className="flex flex-wrap md:flex-cols-3 lg:flex-cols-4 justify-center gap-4 rounded-md mx-6">
            {BlogsData.slice(-4)
              .reverse()
              .map((blog) => (
                <div key={blog.name} className="flex">
                  <Link href={`/blogs/${blog.linkName}`}>
                    <div className="h-full flex flex-col grow dark:bg-gray-900 rounded-md border border-gray-400 border-solid">
                      <Image
                        alt="img not found"
                        className="rounded-t-md object-contain"
                        height={250}
                        src={blog.imageUrl}
                        width={320}
                        style={{ height: "75%" }}
                      />
                      <div
                        className="px-1 py-2 border-t border-solid border-gray-600 dark:border-white"
                        style={{
                          display: "flex",
                          height: "25%",
                          justifyContent: "space-between",
                        }}
                      >
                        <div className="blogLink text-lg">{blog.name}</div>
                        <p className="dark:text-white text-sm py-1 mr-5 text-gray-600 text-center">
                          {blog.date}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
          <div className="ml-auto flex justify-center animate-bounce mx-6 mt-8">
            <AnimatedButton />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default LatestBlogs;
