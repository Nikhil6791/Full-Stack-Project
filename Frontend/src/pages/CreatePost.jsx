import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CreatePost = () => {
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/posts`,
        formData,
      );

      navigate("/feed");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section className="create-post-section flex flex-col  h-screen w-screen justify-center items-center">
      <h1 className="text-2xl font-bold tracking-tighter">Create Post</h1>

      <form
        onSubmit={handleSubmit}
        className="flex px-4 flex-col mt-2 gap-3 border h-70 w-90 rounded-2xl justify-center items-center"
      >
        <input
          type="file"
          name="url"
          accept="image/*"
          className="px-5 py-2 w-full rounded-md outline-none border border-gray-200"
        />
        <input
          type="text"
          name="caption"
          placeholder="Enter Caption"
          className="px-5 py-2 w-full rounded-md outline-none border border-gray-200"
          required
        />
        <button className="bg-blue-500 text-white mt-1 px-3 py-2 rounded-md cursor-pointer">
          Submit Post
        </button>
      </form>
    </section>
  );
};

export default CreatePost;
