import { useState } from "react";
import Img from "../../assets/Screenshot (40).png";
import qrImg from "../../assets/Screenshot (42).png";
import "../Styles.css";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

const Transform = () => {
  const [changeIndex, setChangeIndex] = useState<number>(0);

  const selectItems = [
    {
      id: 1,
      h1: "Shrink Your Links and Boost Your Engagement",

      p: "Turn lengthy URLs into compact, shareable links in seconds. Enhance your digital footprint and make sharing simpler than ever. Increase your link click-through rates with easy-to-remember shor URLs. See the difference in your engagement metrics.",
    },
    {
      id: 2,
      h1: "Real-Time Click Tracking and customizing",

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
        <div className="w-full mb-10 py-[40px] text-center px-[2rem]">
          <div className="lg:w-[75%] md:w-[90%] w-full m-auto">
            <h1 className="text-2xl blue_gradient font-bold text-center tracking-tighter md:text-4xl lg:text-5xl">
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
                  className="border cards_colors_box rounded-md hover:bg-sky-100 transition-all ease-out delay-150 p-2"
                  key={item.id}
                >
                  <div
                    onClick={() =>
                      setChangeIndex(
                        changeIndex === index ? changeIndex : index
                      )
                    }
                    className="flex items-center cursor-pointer justify-between"
                  >
                    <h1 className="font-bold text-lg text-white mb-1 blue_gradient">
                      {item.h1}
                    </h1>
                    {changeIndex === index ? (
                      <CiCircleMinus color="white" size={25} />
                    ) : (
                      <CiCirclePlus color="white" size={25} />
                    )}
                  </div>
                  {changeIndex === index && (
                    <p className="text-white w-[95%] font-medium">{item.p}</p>
                  )}
                </div>
              ))}
            </div>

            <section>
              <img
                className="w-full rounded-md md:mt-0 mt-5 h-[300px] object-cover delay-150"
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

export default Transform;
