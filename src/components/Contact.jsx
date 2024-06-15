import React from 'react'
import {
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiGmail
} from "react-icons/si";
import pic from "../Image/profile.png";

export default function Contact() {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "adec74a4-0577-47fd-85ba-337e24d53315");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='text-white pb-[5%] bg-gray-600 ' id='Contact'>
      <div className='w-full  flex sm:flex-row flex-col justify-around text-black px-[5%] pt-11'>
        <div className="w-full max-w-md p-6 bg-white text-black last:rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <form className="space-y-4" onSubmit={onSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Your message"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 text-black font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </form>
          <span>{result}</span>
        </div>
        <div className='mt-5 flex justify-center flex-col items-center sm:w-[40%] h-[500px]'>
          <img src={pic} alt="Profile Picture" className="h-[300px] w-[300px] mb-3"></img>
          <p className='sm:text-2xl text-justify text-white'>Hello! I'm Naman Gupta, a passionate Front-End Developer. Let's create something amazing together. Feel free to reach out!</p>
          <div className="social-icons flex gap-10 text-5xl justify-center mt-11 text-white">
            <a href='https://github.com/NamanGupta1412'><SiGithub /></a>
            <a href='mailto:namanguptapubg@gmail.com'><SiGmail /></a>
            <a href='https://www.linkedin.com/in/naman-gupta-b7bbb6218/'><SiLinkedin /></a>
            <a href='https://www.instagram.com/naman_gupta_ng/'><SiInstagram /></a>
          </div>
        </div>
      </div>
    </div>
  )
}