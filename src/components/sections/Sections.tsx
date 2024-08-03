import React, { useState } from "react";
import Img from "../../assets/pexels-asadphoto-457882.jpg";
import qrImg from "../../assets/qrcode.png";
import "../Styles.css";

const SectionOne = () => {
  const [changeIndex, setChangeIndex] = useState<number>(0);

  const selectItems = [
    {
      id: 1,
      h1: "Shrink Your Links and Boost Your Engagement",

      p: "Turn lengthy URLs into compact, shareable links in seconds. Enhance your digital footprint and make sharing simpler than ever. Increase your link click-through rates with easy-to-remember shor URLs. See the difference in your engagement metrics.",
    },
    {
      id: 2,
      h1: "Real-Time Click Tracking",

      p: "Stay informed with up-to-the-minute analytics. See who’s clicking your links, from where, and when, all in one place. Our platform ensures your links are safe and reliable. Trust in our robust security measures to keep your data protected.",
    },
  ];

  const selectImg = [
    {
      id: 1,
      img: `${Img}`,
    },
    {
      id: 2,
      img: `${qrImg}`,
    },
  ];

  const { img, id } = selectImg[changeIndex];

  return (
    <>
      <section className="">
        <div className="w-full py-[40px] text-center px-[2rem]">
          <div className="lg:w-[75%] md:w-[90%] w-full m-auto">
            <h1 className="text-3xl blue_gradient font-bold text-center tracking-tighter md:text-4xl lg:text-5xl">
              Transform long, complicated URLs into short, easy-to-share links
              with just one click.
            </h1>
          </div>
        </div>

        <section>
          <main className="grid md:grid-cols-2 space-x-2 mx-3 md:items-center">
            <div className="space-y-3">
              {selectItems.map((item, index) => (
                <div
                  onMouseEnter={() => setChangeIndex(index)}
                  className="border rounded-md hover:bg-sky-100 cursor-pointer transition-all ease-out delay-150 p-2"
                  key={item.id}
                >
                  <h1 className="font-bold mb-1 blue_gradient">{item.h1}</h1>
                  <p className="text-[#c4c4c4]">{item.p}</p>
                </div>
              ))}
            </div>

            <section>
              <img
                className="w-full md:mt-0 mt-5 h-[300px] object-cover delay-150"
                src={img}
                alt="img"
              />
            </section>
          </main>
        </section>
      </section>
    </>
  );
};

export default SectionOne;
