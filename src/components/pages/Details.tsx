import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { QRCode } from "react-qrcode-logo";
import { TbCopy } from "react-icons/tb";
import { MdOutlineFileDownload } from "react-icons/md";
import PiChart from "../PiChart";

interface datatypeItem {
  originalUrl: string;
  shortUrl: string;
  clicks: number;
  date: string;
}

const Details = () => {
  const { urlCode } = useParams();
  const [data, setData] = useState<datatypeItem | null>(null);
  const [error, setError] = useState(null);

  console.log(urlCode);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/details/${urlCode}`
        );
        if (!response.ok) {
          throw new Error("Route not found");
        }
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [urlCode]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const pieData01 = [
    { name: "Clicks", value: data.clicks },
    { name: "Total", value: 100 - data.clicks },
  ];

  return (
    <>
      <Link to="/analytics" className="border px-16 font-bold py-3 ">
        {"<<Back"}
      </Link>
      <section>
        <main className="w-full grid gap-5 my-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-5">
          <div className="border-2 p-5 rounded-lg">
            <h3 className="text-2xl font-bold">Clicks</h3>
            <p className=" text-[#a8a7a7]">Total clicks on the URL</p>

            <div className="w-full text-center my-4">
              <p className="text-4xl font-bold">{data.clicks}</p>
            </div>
          </div>

          <div className="border-2 p-5 rounded-lg">
            <h3 className="text-2xl font-bold">New URL</h3>
            <p className=" text-[#a8a7a7]">The generated short URL</p>

            <div className="w-full text-center my-4">
              <p className="font-medium">{data.shortUrl}</p>
            </div>
          </div>

          <div className="border-2 p-5 rounded-lg">
            <h3 className="text-2xl font-bold">Date</h3>
            <p className=" text-[#a8a7a7]">When the URL was generated</p>

            <div className="w-full text-center my-4">
              <p className="text-4xl font-bold">{data.date}</p>
            </div>
          </div>
        </main>

        <section className="w-full gap-5 grid md:grid-cols-2 grid-cols-1">
          <div className="border-2 p-5 rounded-lg">
            <h3 className="text-2xl font-bold">QR Code</h3>
            <p className=" text-[#a8a7a7]">Scan to access the URL</p>

            <div className="w-full mt-10 flex justify-center">
              <div className="">
              <span className="flex justify-center space-x-36">
                <TbCopy size={20} />
                <MdOutlineFileDownload size={20} />
              </span>
              <span className="lg:block md:hidden hidden">
                <QRCode size={300} value={data.shortUrl} />
              </span>
              <span className="lg:hidden md:block hidden">
                <QRCode size={260} value={data.shortUrl} />
              </span>
              <span className="lg:hidden md:hidden block">
                <QRCode size={200} value={data.shortUrl} />
              </span>
              </div>
            </div>
          </div>
          <div className="border-2 p-5 rounded-lg">
            <h3 className="text-2xl font-bold">Pie Chart</h3>
            <p className=" text-[#a8a7a7]">Breakdown of clicks by source</p>

            <div>
              <span className="bg-yellow-300 ">
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
          </div>
        </section>
      </section>
    </>
  );
};

export default Details;
