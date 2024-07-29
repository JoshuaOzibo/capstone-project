import React, { useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { TbCopy } from "react-icons/tb";
import { MdOutlineFileDownload } from "react-icons/md";

const QRcode = ({ shortUrl }: string | null) => {
  const qrRef = useRef<HTMLDivElement>(null);

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

  return (
    <>
      {shortUrl && (
        <span>
          <div className="m-auto mb-20 mt-5">
            <div className="flex space-x-5 justify-center">
              <TbCopy size={40} className="cursor-pointer" />
              <MdOutlineFileDownload
                onClick={handleDownload}
                size={40}
                className="cursor-pointer"
              />
            </div>
            <div className="flex justify-center">
              <div ref={qrRef} className="border-[8px] border-blue-400">
                <QRCodeCanvas size={280} id="qrcodeId" value={shortUrl} />
              </div>
            </div>
          </div>
        </span>
      )}
    </>
  );
};

export default QRcode;
