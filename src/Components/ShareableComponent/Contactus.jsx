import React from "react";

const Contactus = () => {
  return (
    <div className="my-10">
        <h1 className="text-center text-3xl font-inter font-bold mb-2">Contact with us</h1>
        <p className="w-3/5 mx-auto text-center text-sm font-thin mb-5">Have a question, feedback, or simply want to get in touch? We'd love to hear from you! Our dedicated team is here to assist you with any inquiries you may have.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
        <img
          className="w-4/5 mx-auto"
          src="https://www.chubb.com/content/dam/chubb-sites/chubb/global/images/illustrations/Find-an-Agent_Illustration_Black_Fullsize-resized-v1.png/_jcr_content/renditions/cq5dam.web.1280.1280.png"
          alt=""
        />
        <div>
          <form className="font-Raleway space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <input
                  className="text-sm border-b outline-none w-full px-3 py-1"
                  placeholder="name"
                  type="text"
                  name="name"
                  id="subject"
                />
              </div>
              <div>
              <input
                  className="text-sm border-b outline-none w-full px-3 py-1"
                  placeholder="Email Address"
                  type="email"
                  name="email"
                  id="subject"
                />
              </div>
            </div>
            <div>
              <input
                className="text-sm border-b w-full outline-none px-3 py-1"
                placeholder="Subject"
                type="text"
                name="subject"
                id="subject"
              />
            </div>
            <div>
              <textarea
                className="text-sm border-b max-h-48 min-h-16 rounded-md outline-none w-full px-3 py-1"
                placeholder="Description"
                name="description"
                id="description"
                cols="30"
                rows="5"
              ></textarea>
            </div>
            <input
              className="w-full py-2 bg-primary text-white rounded-md shadow-md"
              type="submit"
              value="Send Message"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
