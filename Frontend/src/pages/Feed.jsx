import React, { useEffect, useState } from "react";
import axios from "axios";

const Feed = () => {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await axios.get(`${import.meta.env.VITE_API_URL}/posts`);
        setPost(posts.data.post);
        console.log(posts);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPosts();
  }, []);
  return (
    <>
      <div className="h-full w-full flex flex-col justify-center items-center">
        <h3 className="text-2xl font-bold tracking-tight">Feed</h3>

        {posts.map((post) => {
          return (
            <div
              key={post._id}
              className="post-card flex gap-2 flex-col justify-center items-center border h-80 w-90 rounded-2xl mt-2"
            >
              <div className=" text-center h-60 w-80 rounded-2xl overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={post.url}
                  alt=""
                />
              </div>
              <p className="">{post.caption}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Feed;
