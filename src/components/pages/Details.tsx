import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { QRCode } from "react-qrcode-logo";
import { TbCopy } from "react-icons/tb";
import { MdOutlineFileDownload } from "react-icons/md";
import { AiTwotoneDelete } from "react-icons/ai";

interface datatypeItem {
    originalUrl: string,
    shortUrl: string,
    clicks: number
  }

const Details = () => {
  const { urlCode } = useParams();
  const [data, setData] = useState<datatypeItem | null>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/details/${urlCode}`);
        if (!response.ok) {
          throw new Error("Route not found");
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
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

  return (

    <>
        <div className="bg-red-300">
            <div>
                <span className="space-y-4">
                <a className="font-bold" href={data.shortUrl}>{data.shortUrl}</a>
                <p>21/05/2024</p>

                <div>
                    <span className="flex space-x-20 mb-5">
                        <TbCopy size={20} />
                        <MdOutlineFileDownload size={20} />
                        <AiTwotoneDelete size={20} />
                    </span>

                    <QRCode size={200} value={data.shortUrl}/>
                </div>
                </span>
                <span>

                </span>
            </div>
        </div>
    </>
    // <div>
    //   <h1>Details Page</h1>
    //   <p>Original URL: {data.originalUrl}</p>
    //   <p>Short URL: {data.shortUrl}</p>
    //   <p>Clicks: {data.clicks}</p>
    //   {/* Render other data as needed */}
    // </div>
  );
};

export default Details;
