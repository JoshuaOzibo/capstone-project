import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { TbMathGreater } from "react-icons/tb";
import { Link } from "react-router-dom";

const Faq = () => {
  const [showAnswer, setShowAnswer] = useState<number | null>(null);

  const frequentQuest = [
    {
      id: 1,
      h1: "How does the URL shortener work?",
      p: "Our URL shortener takes your long, complex URLs and transforms them into clean, concise links that are easy to share. Simply enter your URL, and we will generate a shortened version that you can use across your online platforms.",
    },
    {
      id: 2,
      h1: "How do I get support?",
      p: " We have a dedicated support team available to assist you with any questions or issues you may have. You can reach out to us via email joshuamichaelozibo@gmail.com  We strive to respond to all inquiries within 1 business day.",
    },
    {
      id: 3,
      h1: "What are the pricing options?",
      p: " We offer a free plan that allows you to create up to 100 shortened URLs per month and more advanced features and higher usage for free.",
    },
    {
      id: 4,
      h1: "What features does the URL shortener have?",
      p: " Custom branded short links, Real-time analytics and reporting, No Scheduled link expiration, Automatic link redirects",
    },
  ];

  return (
    <div className="bg-background overflow-hidden text-white text-foreground">
      <p className="pt-5">
        <Link
          to="/"
          className="rounded-md cards_colors_box text-white md:px-16 px-14 font-bold md:py-3 py-2 mt-3 ml-4 "
        >
          {"Back"}
        </Link>
      </p>
      <div className=" mx-auto py-12 md:py-20 lg:py-24">
        <div className="mx-[1rem]">
          <div className="text-center flex justify-center m-auto  w-full mb-20 space-y-2">
            <div className="md:w-[80%] w-full">
              <h1 className="text-2xl blue_gradient text-center md:text-4xl lg:text-5xl font-bold">
                Frequently Asked Questions
              </h1>
              <p className=" mt-3 max-w-3xl blue_gradient_p mx-auto">
                Get answers to the most common questions about our URL
                shortener. If you can't find what you're looking for, feel free
                to reach out to our support team.
              </p>
            </div>
          </div>

          <section className="w-full flex justify-center">
            <main className="md:w-[80%] w-full">
              {frequentQuest.map((faq, index) => (
                <div
                  className=" cards_colors_box rounded-md md:w-full w-full m-auto"
                  key={index}
                >
                  <div className=" mb-5 rounded-md transition-all ease-out">
                    <div
                      onClick={() =>
                        setShowAnswer(showAnswer === index ? null : index)
                      }
                      className="flex cursor-pointer justify-between items-center  bg-card p-4 rounded-md  focus:outline-none focus-visible:ring-opacity-75"
                    >
                      <h1 className="text-lg font-bold">{faq.h1}</h1>
                      <div className="flex items-center">
                        {showAnswer !== index && <TbMathGreater size={18} />}
                        {showAnswer === index && <IoIosArrowDown size={20} />}
                      </div>
                    </div>

                    <div className="bg-card p-4 transition-all ease-in-out rounded-md">
                      {showAnswer === index && (
                        <p className="text-muted-foreground">{faq.p}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </main>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Faq;
