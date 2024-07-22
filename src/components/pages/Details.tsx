import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { QRCode } from "react-qrcode-logo";
import { TbCopy } from "react-icons/tb";
import { MdOutlineFileDownload } from "react-icons/md";
import { AiTwotoneDelete } from "react-icons/ai";
import PiChart from "../PiChart";

interface datatypeItem {
  originalUrl: string;
  shortUrl: string;
  clicks: number;
  date:string
}

const Details = () => {
  const { urlCode } = useParams();
  const [data, setData] = useState<datatypeItem | null>(null);
  const [error, setError] = useState(null);

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
        console.log(result)
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

  type pieDataType ={
    name: string, 
    value: number
  }

  const pieData01: pieDataType[] = [
    { name: "Clicks", value: data.clicks},
    { name: "Total", value: 100 - data.clicks },
  ];

  return (
    <>
    <Link to='/analytics' className="border px-16 font-bold py-3 ">{'<<Back'}</Link>
      <div className=" pt-[100px] w-[100%] m-auto">
        <div className="grid md:gap-5 md:grid-cols-2 grid-flow-row grid-rows-2">
          <span className=" w-full bg-slate-300 md:h-auto h-[350px] flex justify-center">
            <div className="space-y-4">
            <a className="font-bold md:text-xl" href={data.shortUrl}>
              {data.shortUrl}
            </a>
            <p>{data.date}</p>
              <span className="flex space-x-40 pl-2 mb-5">
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
          </span>
          <span className="bg-yellow-300 ">
            {/* Include the PiChart component and pass the data */}
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
    </>
  );
};

export default Details;
