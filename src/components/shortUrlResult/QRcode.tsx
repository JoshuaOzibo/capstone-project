import React from "react";
import { QRCode } from "react-qrcode-logo";
import { TbCopy } from "react-icons/tb";
import { MdOutlineFileDownload } from "react-icons/md";

const QRcode = ({shortUrl}: string) => {


  //   const downloadQRCode = () => {

  //     // const canvas = qrRef.current.querySelector('canvas');
  //     // const pngUrl = canvas
  //     //   .toDataURL('image/png')
  //     //   .replace('image/png', 'image/octet-stream');
  //     // let downloadLink = document.createElement('a');
  //     // downloadLink.href = pngUrl;
  //     // downloadLink.download = 'qrcode.png';
  //     // document.body.appendChild(downloadLink);
  //     // downloadLink.click();
  //     // document.body.removeChild(downloadLink);

  //     // console.log("object")
  //   };

  return (
    <>
      {shortUrl && (
        <span>
            <div className="m-auto mb-20 mt-5">
            <div className="flex space-x-5 justify-center">
            <TbCopy size={40} className="cursor-pointer" />
            <MdOutlineFileDownload size={40} className="cursor-pointer" />
            </div>
            <div className="flex justify-center">
            
            <div className="border-[8px] border-blue-400">
              
              <QRCode size={280}  value={shortUrl} />
  
              {/* <p className="cursor-pointer" onClick={downloadQRCode}>Download Qr code</p> */}
            </div>
          </div>
            </div>
        </span>
      )}
    </>
  );
};

export default QRcode;
