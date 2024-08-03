import React, { useRef, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { TbCopy } from "react-icons/tb";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

interface shortUrlType {
  shortUrl: string;
}
const QRcode = ({ shortUrl }: shortUrlType) => {
  const qrRef = useRef<HTMLDivElement>(null);
  const [showMarkGood, setShowMarkGood] = useState(false);
  const [changeQrColor, setChangeQrColor] = useState("#000000");
  const [showColor, setShowColor] = useState<boolean>(false);

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
      {shortUrl && (
        <span>
          <div className="m-auto mb-20 mt-5">
            <div className=" flex justify-center w-full m-auto">
              <div className="flex items-center space-x-5 mb-5">
                <button className="border px-5">
                  {showMarkGood && (
                    <IoCheckmarkCircleSharp
                      size={40}
                      className={showMarkGood ? "text-green-500 " : ""}
                    />
                  )}
                  {!showMarkGood && (
                    <TbCopy
                      onClick={() => handleCopy(shortUrl)}
                      size={40}
                      className="cursor-pointer"
                    />
                  )}
                </button>
                <button className="border px-5">
                  <MdOutlineFileDownload
                    onClick={handleDownload}
                    size={40}
                    className="cursor-pointer"
                  />
                </button>
                {!showColor && (
                  <button
                    onClick={() => setShowColor(true)}
                    className="border px-2 h-full font-bold"
                  >
                    Advance
                  </button>
                )}
                {showColor && (
                  <input
                    type="color"
                    onChange={(e) => setChangeQrColor(e.target.value)}
                    value={changeQrColor}
                    name="color"
                    className="h-full"
                  />
                )}
              </div>
            </div>
            <div></div>
            <div className="flex justify-center">
              <div ref={qrRef} className="border-[8px] border-blue-400">
                <QRCodeCanvas
                  fgColor={changeQrColor}
                  size={280}
                  id="qrcodeId"
                  value={shortUrl}
                />
              </div>
            </div>
          </div>
        </span>
      )}
    </>
  );
};

export default QRcode;
