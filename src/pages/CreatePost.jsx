import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import preview from "../assets/preview.png";
import FormField from "../components/FormField";
import Loader from "../components/Loader";
import getRandomPrompt from "../utils";

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.prompt && form.photo) {
      setLoading(true);
      try {
        const response = await fetch("https://localhost:8080/api/v1/post", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        });
        await response.json();
        navigate("/");
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    } else {
      alert('Please enter a prompt and generate an image')
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        const response = await fetch("http://localhost:8080/api/v1/dalle", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: form.prompt }),
        });
        const data = await response.json();
        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
      } catch (error) {
        alert(error);
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert("Please enter a propmt");
    }
  };

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };
  return (
    <section className="mt-10">
      <div>
        <h2 className="text-2xl font-extrabold ">Create page</h2>
        <p className="font-medium mt-2 text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          nulla, voluptatum voluptates at neque qui nihil minima perferendis
          animi molestiae architecto dolorem in sequi aperiam sapiente commodi
          voluptatem earum ratione.
        </p>
      </div>
      <form className="mt-10" onSubmit={handleSubmit}>
        <div>
          <FormField
            LabelName="Name"
            type="text"
            name="name"
            placeholder="John Doe"
            value={form.name}
            handleChange={handleChange}
          />
          <FormField
            LabelName="Prompt"
            type="text"
            name="prompt"
            placeholder="John Doe"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
          <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 h-64 flex justify-center items-center">
            {form.photo ? (
              <img
                className="h-full w-full object-contain"
                src={form.photo}
                alt={form.prompt}
              />
            ) : (
              <img
                className="h-9/12 w-9/12 object-contain opacity-40"
                src={preview}
                alt="preview"
              />
            )}

            {generatingImg && (
              <div className="absolute inset-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                <Loader />
              </div>
            )}
          </div>
        </div>

        <div className="mt-5 flex gap-5">
          <button
            className="text-white bg-green-700 font-medium rounded-md text-sm px-2 py-2 w-full  sm:w-auto text-center"
            type="button"
            onClick={generateImage}
          >
            {generateImage ? "Generating....." : "Generate Image "}
          </button>
        </div>

        <div className="mt-7">
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, voluptatibus, rerum architecto perspiciatis ducimus
            totam delectus aspernatur nam cupiditate tempora qui quaerat quasi
            sed. Reprehenderit sed veniam blanditiis natus sint.
          </p>
          <button
            className="text-white bg-[#6469ff] w-full sm:w-auto my-3 px-2 py-2 rounded-lg font-medium text-sm text-center "
            type="submit"
          >
            {loading ? "Sharing...." : "Share with the community"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
