import { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";
import { TbCopy } from "react-icons/tb";
import { MdOutlineFileDownload } from "react-icons/md";
import PiChart from "../PiChart";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import DetailsPageSkeleton from "../skeletonLoading/DetailsPageSkeleton";
import "../Styles.css";
import { CiLink } from "react-icons/ci";
import { detailsdDatatypeItem } from "../TypesExport";
import { motion } from "framer-motion";

const Details = () => {
  const { urlCode } = useParams();
  const [data, setData] = useState<detailsdDatatypeItem | null>(null);
  const [error, setError] = useState(null);
  const qrRef = useRef<HTMLDivElement>(null);
  const [showMarkGood, setShowMarkGood] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://swift-short.netlify.app/details/${urlCode}`
        );
        if (!response.ok) {
          throw new Error("Route not found");
        }
        const result = await response.json();
        setData(result);
      } catch (error: any) {
        setError(error);
      }
    };

    fetchData();
  }, [urlCode]);

  if (error) {
    return (
      <div className="text-center pt-[50vh]">
        <p className="font-bold blue_gradient text-3xl mb-5">
          Error check your url or refresh the page
        </p>
        <Link
          to="/analytics"
          className="rounded-md cards_colors_box text-white px-16 font-bold py-2 "
        >
          {"Back"}
        </Link>
      </div>
    );
  }

  if (!data) {
    return <DetailsPageSkeleton />;
  }

  const pieData01 = [
    { name: "Clicks", value: data.clicks },
    { name: "Total", value: 100 - data.clicks },
  ];

  const handleDownload = () => {
    const canvas = qrRef.current?.querySelector(
      "canvas"
    ) as HTMLCanvasElement | null;
    if (canvas) {
      const qrcodeUrl: string = canvas
        .toDataURL()
        .replace("image/png", "image/octet-stream");
      let a = document.createElement("a");
      a.href = qrcodeUrl;
      a.download = "qrcode.png";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      console.log("Canvas element not found");
    }
  };

  const handleCopy = (ShortUrl: string) => {
    setShowMarkGood(true);
    navigator.clipboard.writeText(ShortUrl).then(
      () => {
        console.log("copy successfully");
        setTimeout(() => setShowMarkGood(false), 1000);
      },
      (error) => {
        console.log("failed to copy", error);
        setShowMarkGood(false);
      }
    );
  };

  return (
    <>
      <p className="pt-5">
        <Link
          to="/analytics"
          className="rounded-md cards_colors_box text-white md:px-16 px-14 font-bold md:py-3 py-2 mt-3 ml-4 "
        >
          {"Back"}
        </Link>
      </p>
      <section className="px-5">
        <p className="text-center blue_gradient font-bold md:text-4xl text-2xl mt-4">
          User Analytics
        </p>
        <main className="w-full grid gap-5 my-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-5">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="border-2 text-white cards_colors_box p-5 rounded-lg"
          >
            <h3 className="text-2xl font-bold">Clicks</h3>
            <p className=" font-medium">Total clicks on the URL</p>

            <div className="w-full text-center my-4">
              <p className="text-4xl font-bold">{data.clicks}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="border-2 text-white cards_colors_box p-5 rounded-lg"
          >
            <h3 className="text-2xl font-bold">New URL</h3>
            <p className=" font-medium">The generated short URL</p>

            <div className="w-full text-center my-4">
              <p className="font-medium items-center flex md:space-x-1">
                <CiLink size={30} />
                <p className="md:text-md text-[12px]">{data.shortUrl}</p>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="border-2 text-white cards_colors_box p-5 rounded-lg"
          >
            <h3 className="text-2xl font-bold">Date</h3>
            <p className=" font-medium">When the URL was generated</p>

            <div className="w-full text-center my-4">
              <p className="text-4xl font-bold">{data.date}</p>
            </div>
          </motion.div>
        </main>

        <section className="w-full gap-5 grid md:grid-cols-2 grid-cols-1">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="border-2 text-white cards_colors_box p-5 rounded-lg"
          >
            <h3 className="text-2xl font-bold">QR Code</h3>
            <p className=" font-medium">Scan to access the URL</p>

            <div className="w-full  mt-10 flex justify-center">
              <div className="">
                <span className="flex mb-5 justify-center space-x-36">
                  {showMarkGood && (
                    <IoCheckmarkCircleSharp
                      size={20}
                      className={showMarkGood ? "text-white " : ""}
                    />
                  )}
                  {!showMarkGood && (
                    <TbCopy
                      className="cursor-pointer"
                      onClick={() => handleCopy(data.shortUrl)}
                      size={20}
                    />
                  )}
                  <MdOutlineFileDownload
                    className="cursor-pointer"
                    onClick={handleDownload}
                    size={25}
                  />
                </span>
                <p className="border-[8px] border-blue-400">
                  <span ref={qrRef} className="lg:block md:hidden hidden">
                    <QRCodeCanvas
                      id="canvas"
                      size={300}
                      value={data.shortUrl}
                    />
                  </span>
                  <span ref={qrRef} className="lg:hidden md:block hidden">
                    <QRCodeCanvas
                      id="canvas"
                      size={260}
                      value={data.shortUrl}
                    />
                  </span>

                  <span ref={qrRef} className="lg:hidden md:hidden block">
                    <QRCodeCanvas
                      id="canvas"
                      size={200}
                      value={data.shortUrl}
                    />
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="border-2 text-white cards_colors_box p-5 rounded-lg"
          >
            <h3 className="text-2xl font-bold">Pie Chart</h3>
            <p className="font-medium">Breakdown of clicks by source</p>

            <div>
              <span className=" ">
                <span className="hidden lg:block">
                  <PiChart size={180} data01={pieData01} />
                </span>
                <span className="hidden lg:hidden md:block">
                  <PiChart size={160} data01={pieData01} />
                </span>
                <span className="lg:hidden md:hidden block">
                  <PiChart size={115} data01={pieData01} />
                </span>
              </span>
            </div>
          </motion.div>
        </section>
      </section>
    </>
  );
};

export default Details;
